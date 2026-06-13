import { getOperation } from "../catalog/operation-catalog.js";
import { InfomaniakError } from "../client/errors.js";
import type { OperationRequest } from "../client/generated-operation-client.js";
import type {
  GetMailMessageOptions,
  ListMailThreadsOptions,
  MailApplicationRequestOptions,
  MailIncludedResourcesOptions,
} from "../client/mail-application.js";
import { listResourceDiscoveryRecipes, listResourceKinds, type ResourceDiscoveryOptions } from "../discovery/resource-discovery.js";
import type { DomainActionDefinition, DomainActionInputField, OperationActionOptions } from "./domain-action-types.js";

export function operationAction(options: OperationActionOptions): DomainActionDefinition {
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

export function customAction(options: Omit<DomainActionDefinition, "id">): DomainActionDefinition {
  return {
    ...options,
    id: `${options.domain}/${options.action}`,
  };
}

export function field(name: string, type: string, required: boolean, description: string): DomainActionInputField {
  return { name, type, required, description };
}

export function withSignal(request: Omit<OperationRequest, "signal">, signal: AbortSignal | undefined): OperationRequest {
  return signal ? { ...request, signal } : request;
}

export function mailRequestOptions(signal: AbortSignal | undefined): MailApplicationRequestOptions {
  return signal ? { signal } : {};
}

export function mailIncludedOptions(signal: AbortSignal | undefined, includedResources: string | undefined): MailIncludedResourcesOptions {
  const options: MailIncludedResourcesOptions = mailRequestOptions(signal);
  if (includedResources !== undefined) {
    options.includedResources = includedResources;
  }
  return options;
}

export function mailThreadOptions(input: Record<string, unknown>, signal: AbortSignal | undefined): ListMailThreadsOptions {
  const options: ListMailThreadsOptions = mailRequestOptions(signal);
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

export function mailMessageOptions(input: Record<string, unknown>, signal: AbortSignal | undefined): GetMailMessageOptions {
  const options: GetMailMessageOptions = mailRequestOptions(signal);
  const preferredFormat = optionalString(input, "preferred_format");
  if (preferredFormat !== undefined) {
    options.preferredFormat = preferredFormat;
  }
  return options;
}

export function discoveryOptions(kind: string, input: Record<string, unknown>, signal: AbortSignal | undefined): ResourceDiscoveryOptions {
  const options: ResourceDiscoveryOptions = { kind };
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

export function discoveryActions(): readonly DomainActionDefinition[] {
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

export function optionalQuery(values: Record<string, unknown>): Record<string, unknown> {
  const query: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined && value !== null) {
      query[key] = value;
    }
  }
  return query;
}

export function requiredString(input: Record<string, unknown>, key: string): string {
  const value = optionalString(input, key);
  if (!value) {
    throw new InfomaniakError(`${key} is required.`);
  }
  return value;
}

export function optionalString(input: Record<string, unknown>, key: string): string | undefined {
  const value = input[key];
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

export function requiredInteger(input: Record<string, unknown>, key: string): number {
  const value = integerParam(input[key]);
  if (value === undefined) {
    throw new InfomaniakError(`${key} must be an integer.`);
  }
  return value;
}

export function integerParam(value: unknown): number | undefined {
  return typeof value === "number" && Number.isInteger(value) ? value : undefined;
}

export function booleanParam(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

export function requiredRecord(input: Record<string, unknown>, key: string): Record<string, unknown> {
  const value = input[key];
  if (!isRecord(value)) {
    throw new InfomaniakError(`${key} must be an object.`);
  }
  return value;
}

export function optionalRecord(input: Record<string, unknown>, key: string): Record<string, unknown> | undefined {
  const value = input[key];
  return isRecord(value) ? value : undefined;
}

export function requiredValue(input: Record<string, unknown>, key: string): unknown {
  if (!(key in input) || input[key] === undefined || input[key] === null) {
    throw new InfomaniakError(`${key} is required.`);
  }
  return input[key];
}

function stringNumberRecord(value: unknown): Record<string, string | number> | undefined {
  if (value === undefined) {
    return undefined;
  }
  if (!isRecord(value)) {
    throw new InfomaniakError("parents must be an object.");
  }
  const entries = Object.entries(value).filter((entry): entry is [string, string | number] => typeof entry[1] === "string" || typeof entry[1] === "number");
  return Object.fromEntries(entries);
}

export function responseItems(response: unknown): readonly unknown[] {
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

export function recordString(value: unknown, key: string): string | undefined {
  return isRecord(value) && typeof value[key] === "string" ? value[key] : undefined;
}

export function upperFirst(value: string): string {
  return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
