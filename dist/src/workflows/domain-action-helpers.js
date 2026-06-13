import { readFile, stat } from "node:fs/promises";
import { basename, isAbsolute } from "node:path";
import { getOperation } from "../catalog/operation-catalog.js";
import { InfomaniakError } from "../client/errors.js";
import { listResourceDiscoveryRecipes, listResourceKinds } from "../discovery/resource-discovery.js";
export function operationAction(options) {
    const operation = getOperation(options.operationId);
    return customAction({
        domain: options.domain,
        action: options.action,
        operationIds: [options.operationId],
        summary: options.summary,
        description: options.description,
        input: options.input ?? [],
        mutating: operation.mutating,
        run: (client, input, signal) => client.requestOperation(options.operationId, options.buildRequest?.(input, signal) ?? withSignal({}, signal)),
    });
}
export function customAction(options) {
    return {
        ...options,
        id: `${options.domain}/${options.action}`,
    };
}
export function field(name, type, required, description) {
    return { name, type, required, description };
}
export function withSignal(request, signal) {
    return signal ? { ...request, signal } : request;
}
export function mailRequestOptions(signal) {
    return signal ? { signal } : {};
}
export function mailIncludedOptions(signal, includedResources) {
    const options = mailRequestOptions(signal);
    if (includedResources !== undefined) {
        options.includedResources = includedResources;
    }
    return options;
}
export function mailThreadOptions(input, signal) {
    const options = mailRequestOptions(signal);
    const filter = optionalString(input, "filter");
    const threadMode = optionalString(input, "thread_mode");
    const offset = integerParam(input.offset);
    if (filter !== undefined) {
        options.filter = filter;
    }
    if (threadMode !== undefined) {
        options.threadMode = threadMode;
    }
    if (offset !== undefined) {
        options.offset = offset;
    }
    return options;
}
export function mailMessageOptions(input, signal) {
    const options = mailRequestOptions(signal);
    const preferredFormat = optionalString(input, "preferred_format");
    if (preferredFormat !== undefined) {
        options.preferredFormat = preferredFormat;
    }
    return options;
}
export function discoveryOptions(kind, input, signal) {
    const options = { kind };
    const parents = stringNumberRecord(input.parents);
    const limit = integerParam(input.limit);
    if (parents !== undefined) {
        options.parents = parents;
    }
    if (limit !== undefined) {
        options.limit = limit;
    }
    if (signal) {
        options.signal = signal;
    }
    return options;
}
export function discoveryActions() {
    return listResourceKinds().map((kind) => {
        const recipe = listResourceDiscoveryRecipes({ kind: kind.kind })[0];
        return customAction({
            domain: kind.domain,
            action: `discover${upperFirst(kind.kind)}`,
            operationIds: recipe ? [recipe.operationId] : [],
            summary: `Discover ${kind.label} resources.`,
            description: kind.discoverable
                ? `Use reviewed read-only discovery for ${kind.description}`
                : `Return the reviewed no-public-discovery explanation for ${kind.description}`,
            input: [
                field("parents", "object", false, "Known parent resource values required by some discovery recipes."),
                field("limit", "number", false, "Maximum resources to return."),
            ],
            mutating: false,
            run: (client, input, signal) => client.discovery.discover(discoveryOptions(kind.kind, input, signal)),
        });
    });
}
export function optionalQuery(values) {
    const query = {};
    for (const [key, value] of Object.entries(values)) {
        if (value !== undefined && value !== null) {
            query[key] = value;
        }
    }
    return query;
}
export function requiredString(input, key) {
    const value = optionalString(input, key);
    if (!value) {
        throw new InfomaniakError(`${key} is required.`);
    }
    return value;
}
export function optionalString(input, key) {
    const value = input[key];
    return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}
export function requiredInteger(input, key) {
    const value = integerParam(input[key]);
    if (value === undefined) {
        throw new InfomaniakError(`${key} must be an integer.`);
    }
    return value;
}
export function integerParam(value) {
    return typeof value === "number" && Number.isInteger(value) ? value : undefined;
}
export function booleanParam(value) {
    return typeof value === "boolean" ? value : undefined;
}
export function requiredRecord(input, key) {
    const value = input[key];
    if (!isRecord(value)) {
        throw new InfomaniakError(`${key} must be an object.`);
    }
    return value;
}
export function optionalRecord(input, key) {
    const value = input[key];
    return isRecord(value) ? value : undefined;
}
export async function buildUploadFileRequest(input) {
    const upload = await readUploadBody(input);
    return {
        path: { drive_id: requiredInteger(input, "drive_id") },
        query: optionalQuery({
            total_size: upload.totalSize,
            file_name: upload.fileName,
            directory_id: integerParam(input.directory_id),
            directory_path: optionalString(input, "directory_path"),
            conflict: optionalString(input, "conflict"),
        }),
        body: upload.body,
    };
}
async function readUploadBody(input) {
    if ("body" in input && input.body !== undefined && input.body !== null) {
        return {
            body: input.body,
            totalSize: requiredInteger(input, "total_size"),
            fileName: optionalString(input, "file_name"),
        };
    }
    const filePath = optionalString(input, "file_path");
    if (!filePath) {
        throw new InfomaniakError("body or file_path is required.");
    }
    if (!isAbsolute(filePath)) {
        throw new InfomaniakError("file_path must be absolute.");
    }
    const fileStats = await stat(filePath);
    if (!fileStats.isFile()) {
        throw new InfomaniakError("file_path must point to a regular file.");
    }
    const expectedSize = integerParam(input.total_size);
    if (expectedSize !== undefined && expectedSize !== fileStats.size) {
        throw new InfomaniakError("total_size must match file_path byte size.");
    }
    return {
        body: await readFile(filePath),
        totalSize: fileStats.size,
        fileName: optionalString(input, "file_name") ?? basename(filePath),
    };
}
function stringNumberRecord(value) {
    if (value === undefined) {
        return undefined;
    }
    if (!isRecord(value)) {
        throw new InfomaniakError("parents must be an object.");
    }
    const entries = Object.entries(value).filter((entry) => typeof entry[1] === "string" || typeof entry[1] === "number");
    return Object.fromEntries(entries);
}
export function responseItems(response) {
    if (Array.isArray(response)) {
        return response;
    }
    if (isRecord(response) && Array.isArray(response.data)) {
        return response.data;
    }
    if (isRecord(response) && isRecord(response.data)) {
        for (const key of ["items", "results", "resources"]) {
            if (Array.isArray(response.data[key])) {
                return response.data[key];
            }
        }
    }
    return [];
}
export function recordString(value, key) {
    return isRecord(value) && typeof value[key] === "string" ? value[key] : undefined;
}
export function upperFirst(value) {
    return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
}
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
//# sourceMappingURL=domain-action-helpers.js.map