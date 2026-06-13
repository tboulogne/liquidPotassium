import { getOperation, listDomains } from "../catalog/operation-catalog.js";
import { InfomaniakError } from "../client/errors.js";
import type { GeneratedOperationClient, OperationRequest } from "../client/generated-operation-client.js";
import type {
  GetMailMessageOptions,
  ListMailThreadsOptions,
  MailApplicationClient,
  MailApplicationRequestOptions,
  MailDraftPayload,
  MailIncludedResourcesOptions,
  MailMoveMessagesPayload,
} from "../client/mail-application.js";
import type { ResourceDiscovery, ResourceDiscoveryOptions } from "../discovery/resource-discovery.js";
import { listResourceDiscoveryRecipes, listResourceKinds } from "../discovery/resource-discovery.js";

export interface DomainActionInputField {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface DomainActionMetadata {
  id: string;
  domain: string;
  action: string;
  summary: string;
  description: string;
  mutating: boolean;
  operationIds: readonly string[];
  input: readonly DomainActionInputField[];
}

export interface DomainActionRequest {
  domain: string;
  action: string;
  input?: Record<string, unknown>;
  signal?: AbortSignal;
}

export interface DomainActionExecutionResult {
  action: DomainActionMetadata;
  result: unknown;
}

export interface DomainActionListOptions {
  domain?: string;
  mutating?: boolean;
}

export interface DomainWorkflowClient {
  listActions(options?: DomainActionListOptions): readonly DomainActionMetadata[];
  describeAction(domain: string, action: string): DomainActionMetadata;
  run(request: DomainActionRequest): Promise<DomainActionExecutionResult>;
}

export interface DomainWorkflowRuntimeClient extends GeneratedOperationClient {
  discovery: ResourceDiscovery;
  mail: {
    application: MailApplicationClient;
  };
}

interface DomainActionDefinition extends DomainActionMetadata {
  run(client: DomainWorkflowRuntimeClient, input: Record<string, unknown>, signal: AbortSignal | undefined): Promise<unknown>;
}

interface OperationActionOptions {
  domain: string;
  action: string;
  operationId: string;
  summary: string;
  description: string;
  input?: readonly DomainActionInputField[];
  buildRequest?: (input: Record<string, unknown>, signal: AbortSignal | undefined) => OperationRequest;
}

const rootFileId = 1;

const staticActions: readonly DomainActionDefinition[] = [
  operationAction({
    domain: "account",
    action: "listAccounts",
    operationId: "Core/ResourcesListAccounts",
    summary: "List accounts visible to the current token.",
    description: "Read Infomaniak accounts that can be used as parents for product-specific discovery.",
  }),
  operationAction({
    domain: "core",
    action: "listProducts",
    operationId: "get_1_products",
    summary: "List shared Infomaniak product references.",
    description: "Read product references from the shared core API.",
  }),
  operationAction({
    domain: "kdrive",
    action: "listAccessibleDrives",
    operationId: "kDriveAccessiblesDrivesV2",
    summary: "List kDrive drives available to the current token.",
    description: "Read accessible kDrive drives before navigating files or uploading content.",
    input: [
      field("account_id", "number", true, "Infomaniak account identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) => ({
      ...withSignal({
        query: optionalQuery({ account_id: requiredInteger(input, "account_id"), with: optionalString(input, "with") }),
      }, signal),
    }),
  }),
  operationAction({
    domain: "kdrive",
    action: "getUserPreferences",
    operationId: "kDriveGetUsersPreferenceV2",
    summary: "Read the current user's kDrive preferences.",
    description: "Read user-level kDrive preferences such as the default drive when the API returns it.",
  }),
  operationAction({
    domain: "kdrive",
    action: "getDrive",
    operationId: "kDriveGetDriveInformationV2",
    summary: "Read kDrive drive information.",
    description: "Verify one kDrive drive identifier and read its metadata.",
    input: [field("drive_id", "number", true, "Drive identifier.")],
    buildRequest: (input, signal) => withSignal({ path: { drive_id: requiredInteger(input, "drive_id") } }, signal),
  }),
  operationAction({
    domain: "kdrive",
    action: "getFile",
    operationId: "kDriveGetFileDirectoryV3",
    summary: "Read one kDrive file or directory.",
    description: "Verify one file or directory identifier inside a drive.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", true, "File or directory identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: requiredInteger(input, "file_id") },
          query: optionalQuery({ with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kdrive",
    action: "listDirectory",
    operationId: "kDriveGetFilesInDirectoryV3",
    summary: "List files in a kDrive directory.",
    description: "Read children of a kDrive directory. Use file_id 1 for the root listing.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", false, "Directory identifier. Defaults to root file id 1."),
      field("limit", "number", false, "Maximum number of children requested from the API."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: integerParam(input.file_id) ?? rootFileId },
          query: optionalQuery({ limit: integerParam(input.limit), with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kdrive",
    action: "resolveChildByName",
    operationId: "kDriveGetSubFiledirectoryByFilenameV3",
    summary: "Resolve a kDrive child by name.",
    description: "Find one direct child file or directory by name under a known parent directory.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", false, "Parent directory identifier. Defaults to root file id 1."),
      field("name", "string", true, "Child file or directory name."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: integerParam(input.file_id) ?? rootFileId },
          query: optionalQuery({ name: requiredString(input, "name"), with: optionalString(input, "with") }),
        },
        signal,
      ),
  }),
  customAction({
    domain: "kdrive",
    action: "findPrivateFolder",
    operationIds: ["kDriveGetFilesInDirectoryV3"],
    summary: "Find the top-level Private folder in a kDrive.",
    description: "List the root directory and return the first top-level child named Private.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    mutating: false,
    run: async (client, input, signal) => {
      const response = await client.requestOperation("kDriveGetFilesInDirectoryV3", {
        ...withSignal(
          {
            path: { drive_id: requiredInteger(input, "drive_id"), file_id: rootFileId },
            query: optionalQuery({ with: optionalString(input, "with") }),
          },
          signal,
        ),
      });
      const folder = responseItems(response).find((item) => recordString(item, "name") === "Private");
      if (!folder) {
        throw new InfomaniakError("Could not find a top-level kDrive folder named Private.");
      }
      return folder;
    },
  }),
  operationAction({
    domain: "kdrive",
    action: "createDirectory",
    operationId: "kDriveCreateDirectoryV3",
    summary: "Create a kDrive directory.",
    description: "Create a directory under an existing parent directory.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", true, "Parent directory identifier."),
      field("body", "object", true, "Create-directory request body accepted by the Infomaniak API."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: requiredInteger(input, "file_id") },
          query: optionalQuery({ with: optionalString(input, "with") }),
          body: requiredRecord(input, "body"),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kdrive",
    action: "createDefaultFile",
    operationId: "kDriveCreateDefaultFileV3",
    summary: "Create a default kDrive document file.",
    description: "Create an empty supported document file under an existing parent directory.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("file_id", "number", true, "Parent directory identifier."),
      field("body", "object", true, "Create-file request body accepted by the Infomaniak API."),
      field("with", "string", false, "Optional related resources to include."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id"), file_id: requiredInteger(input, "file_id") },
          query: optionalQuery({ with: optionalString(input, "with") }),
          body: requiredRecord(input, "body"),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kdrive",
    action: "uploadFile",
    operationId: "kDriveUploadV3",
    summary: "Upload file bytes to kDrive.",
    description: "Upload direct file content to a kDrive destination using the documented v3 upload route.",
    input: [
      field("drive_id", "number", true, "Drive identifier."),
      field("body", "binary", true, "File bytes as a BodyInit-compatible value."),
      field("total_size", "number", true, "Total uploaded byte size."),
      field("file_name", "string", false, "Remote file name."),
      field("directory_id", "number", false, "Destination directory identifier."),
      field("directory_path", "string", false, "Destination directory path."),
      field("conflict", "string", false, "Conflict handling mode accepted by the API."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { drive_id: requiredInteger(input, "drive_id") },
          query: optionalQuery({
            total_size: requiredInteger(input, "total_size"),
            file_name: optionalString(input, "file_name"),
            directory_id: integerParam(input.directory_id),
            directory_path: optionalString(input, "directory_path"),
            conflict: optionalString(input, "conflict"),
          }),
          body: requiredValue(input, "body"),
        },
        signal,
      ),
  }),
  customAction({
    domain: "mail",
    action: "listUserMailboxes",
    operationIds: ["MailApplication/ListUserMailboxes"],
    summary: "List mailboxes available to the current user.",
    description: "Read mailbox-consumption mailboxes from the reviewed Mail application API surface.",
    input: [field("with", "string", false, "Included Mail application resources.")],
    mutating: false,
    run: (client, input, signal) => client.mail.application.listUserMailboxes(mailIncludedOptions(signal, optionalString(input, "with"))),
  }),
  customAction({
    domain: "mail",
    action: "listFolders",
    operationIds: ["MailApplication/ListFolders"],
    summary: "List folders for one mailbox.",
    description: "Read folders for a Mail application mailbox UUID.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("with", "string", false, "Included Mail application resources."),
    ],
    mutating: false,
    run: (client, input, signal) => client.mail.application.listFolders(requiredString(input, "mailbox_uuid"), mailIncludedOptions(signal, optionalString(input, "with"))),
  }),
  customAction({
    domain: "mail",
    action: "listThreads",
    operationIds: ["MailApplication/ListThreads"],
    summary: "List mailbox threads or messages.",
    description: "Read thread/message listings for one Mail application mailbox folder.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("folder_id", "string", true, "Mail folder identifier."),
      field("filter", "string", false, "Optional Mail application filter such as unseen."),
      field("thread_mode", "string", false, "Thread mode, usually on or off."),
      field("offset", "number", false, "Result offset."),
    ],
    mutating: false,
    run: (client, input, signal) =>
      client.mail.application.listThreads(requiredString(input, "mailbox_uuid"), requiredString(input, "folder_id"), mailThreadOptions(input, signal)),
  }),
  customAction({
    domain: "mail",
    action: "getMessage",
    operationIds: ["MailApplication/GetMessage"],
    summary: "Read one mailbox message.",
    description: "Read a message resource returned by the Mail application thread list.",
    input: [
      field("message_resource", "string", true, "Message resource path or same-origin Mail application URL."),
      field("preferred_format", "string", false, "Preferred message format, usually text or html."),
    ],
    mutating: false,
    run: (client, input, signal) => client.mail.application.getMessage(requiredString(input, "message_resource"), mailMessageOptions(input, signal)),
  }),
  customAction({
    domain: "mail",
    action: "createDraft",
    operationIds: ["MailApplication/CreateDraft"],
    summary: "Create a Mail application draft.",
    description: "Create a draft in one mailbox through the reviewed Mail application API surface.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("payload", "object", true, "Draft payload."),
    ],
    mutating: true,
    run: (client, input, signal) =>
      client.mail.application.createDraft(requiredString(input, "mailbox_uuid"), requiredRecord(input, "payload") as MailDraftPayload, mailRequestOptions(signal)),
  }),
  customAction({
    domain: "mail",
    action: "moveMessages",
    operationIds: ["MailApplication/MoveMessages"],
    summary: "Move Mail application messages.",
    description: "Move mailbox messages between folders through the reviewed Mail application API surface.",
    input: [
      field("mailbox_uuid", "string", true, "Mail application mailbox UUID."),
      field("payload", "object", true, "Message move payload."),
    ],
    mutating: true,
    run: (client, input, signal) =>
      client.mail.application.moveMessages(
        requiredString(input, "mailbox_uuid"),
        requiredRecord(input, "payload") as unknown as MailMoveMessagesPayload,
        mailRequestOptions(signal),
      ),
  }),
  operationAction({
    domain: "kchat",
    action: "listTeams",
    operationId: "GetAllTeams",
    summary: "List kChat teams.",
    description: "Read kChat teams available to the current token.",
  }),
  operationAction({
    domain: "kchat",
    action: "getTeamByName",
    operationId: "GetTeamByName",
    summary: "Resolve a kChat team by name.",
    description: "Read one kChat team from its team name.",
    input: [field("name", "string", true, "Team name.")],
    buildRequest: (input, signal) => withSignal({ path: { name: requiredString(input, "name") } }, signal),
  }),
  operationAction({
    domain: "kchat",
    action: "getChannelByNameForTeamName",
    operationId: "GetChannelByNameForTeamName",
    summary: "Resolve a kChat channel by team and channel name.",
    description: "Read one kChat channel from team name and channel name.",
    input: [
      field("team_name", "string", true, "Team name."),
      field("channel_name", "string", true, "Channel name."),
      field("include_deleted", "boolean", false, "Whether deleted channels should be considered."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { team_name: requiredString(input, "team_name"), channel_name: requiredString(input, "channel_name") },
          query: optionalQuery({ include_deleted: booleanParam(input.include_deleted) }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "kchat",
    action: "createPost",
    operationId: "CreatePost",
    summary: "Create a kChat post.",
    description: "Post a root message or thread reply in a kChat channel.",
    input: [
      field("channel_id", "string", true, "kChat channel identifier."),
      field("message", "string", true, "Message content."),
      field("root_id", "string", false, "Optional root post identifier for thread replies."),
      field("set_online", "boolean", false, "Whether to set the user online while posting."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          query: optionalQuery({ set_online: booleanParam(input.set_online) }),
          body: optionalQuery({
            channel_id: requiredString(input, "channel_id"),
            message: requiredString(input, "message"),
            root_id: optionalString(input, "root_id"),
          }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "urlShortener",
    action: "listLinks",
    operationId: "get_2_url_shortener",
    summary: "List short URLs.",
    description: "Read short URLs owned by the current token using the v2 route.",
  }),
  operationAction({
    domain: "urlShortener",
    action: "getQuota",
    operationId: "get_2_url_shortener_quota",
    summary: "Read short URL quota.",
    description: "Read URL shortener quota information using the v2 route.",
  }),
  operationAction({
    domain: "urlShortener",
    action: "createLink",
    operationId: "post_2_url_shortener",
    summary: "Create a short URL.",
    description: "Create a short URL and return the API response. Compose public URLs as https://chk.me/{code}.",
    input: [
      field("url", "string", true, "Destination URL."),
      field("expiration_date", "number", false, "Optional expiration timestamp in seconds."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          body: optionalQuery({
            url: requiredString(input, "url"),
            expiration_date: integerParam(input.expiration_date),
          }),
        },
        signal,
      ),
  }),
  operationAction({
    domain: "urlShortener",
    action: "updateExpiration",
    operationId: "put_1_url_shortener_short_url_code",
    summary: "Update short URL expiration.",
    description: "Update the expiration timestamp of an existing short URL code.",
    input: [
      field("short_url_code", "string", true, "Short URL code."),
      field("expiration_date", "number", true, "Expiration timestamp in seconds."),
    ],
    buildRequest: (input, signal) =>
      withSignal(
        {
          path: { short_url_code: requiredString(input, "short_url_code") },
          body: { expiration_date: requiredInteger(input, "expiration_date") },
        },
        signal,
      ),
  }),
];

const domainActions = Object.freeze([...staticActions, ...discoveryActions()].sort((left, right) => left.id.localeCompare(right.id)));
const actionById = new Map(domainActions.map((action) => [action.id, action]));
const actionDomains = new Set(listDomains().map((domain) => domain.domain));

export function listDomainActions(options: DomainActionListOptions = {}): readonly DomainActionMetadata[] {
  return domainActions
    .filter((action) => options.domain === undefined || action.domain === options.domain)
    .filter((action) => options.mutating === undefined || action.mutating === options.mutating)
    .map(toMetadata);
}

export function describeDomainAction(domain: string, action: string): DomainActionMetadata {
  return toMetadata(getAction(domain, action));
}

export async function runDomainAction(client: DomainWorkflowRuntimeClient, request: DomainActionRequest): Promise<DomainActionExecutionResult> {
  const action = getAction(request.domain, request.action);
  return {
    action: toMetadata(action),
    result: await action.run(client, request.input ?? {}, request.signal),
  };
}

export function createDomainWorkflowClient(client: DomainWorkflowRuntimeClient): DomainWorkflowClient {
  return {
    listActions: listDomainActions,
    describeAction: describeDomainAction,
    run: (request) => runDomainAction(client, request),
  };
}

function discoveryActions(): readonly DomainActionDefinition[] {
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

function operationAction(options: OperationActionOptions): DomainActionDefinition {
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

function customAction(options: Omit<DomainActionDefinition, "id">): DomainActionDefinition {
  return {
    ...options,
    id: `${options.domain}/${options.action}`,
  };
}

function getAction(domain: string, action: string): DomainActionDefinition {
  if (!actionDomains.has(domain)) {
    throw new InfomaniakError(`Unknown Infomaniak workflow domain: ${domain}`);
  }
  const definition = actionById.get(`${domain}/${action}`);
  if (!definition) {
    throw new InfomaniakError(`Unknown Infomaniak workflow action: ${domain}/${action}`);
  }
  return definition;
}

function toMetadata(action: DomainActionDefinition): DomainActionMetadata {
  return {
    id: action.id,
    domain: action.domain,
    action: action.action,
    summary: action.summary,
    description: action.description,
    mutating: action.mutating,
    operationIds: action.operationIds,
    input: action.input,
  };
}

function field(name: string, type: string, required: boolean, description: string): DomainActionInputField {
  return { name, type, required, description };
}

function withSignal(request: Omit<OperationRequest, "signal">, signal: AbortSignal | undefined): OperationRequest {
  return signal ? { ...request, signal } : request;
}

function mailRequestOptions(signal: AbortSignal | undefined): MailApplicationRequestOptions {
  return signal ? { signal } : {};
}

function mailIncludedOptions(signal: AbortSignal | undefined, includedResources: string | undefined): MailIncludedResourcesOptions {
  const options: MailIncludedResourcesOptions = mailRequestOptions(signal);
  if (includedResources !== undefined) {
    options.includedResources = includedResources;
  }
  return options;
}

function mailThreadOptions(input: Record<string, unknown>, signal: AbortSignal | undefined): ListMailThreadsOptions {
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

function mailMessageOptions(input: Record<string, unknown>, signal: AbortSignal | undefined): GetMailMessageOptions {
  const options: GetMailMessageOptions = mailRequestOptions(signal);
  const preferredFormat = optionalString(input, "preferred_format");
  if (preferredFormat !== undefined) {
    options.preferredFormat = preferredFormat;
  }
  return options;
}

function discoveryOptions(kind: string, input: Record<string, unknown>, signal: AbortSignal | undefined): ResourceDiscoveryOptions {
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

function optionalQuery(values: Record<string, unknown>): Record<string, unknown> {
  const query: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined && value !== null) {
      query[key] = value;
    }
  }
  return query;
}

function requiredString(input: Record<string, unknown>, key: string): string {
  const value = optionalString(input, key);
  if (!value) {
    throw new InfomaniakError(`${key} is required.`);
  }
  return value;
}

function optionalString(input: Record<string, unknown>, key: string): string | undefined {
  const value = input[key];
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

function requiredInteger(input: Record<string, unknown>, key: string): number {
  const value = integerParam(input[key]);
  if (value === undefined) {
    throw new InfomaniakError(`${key} must be an integer.`);
  }
  return value;
}

function integerParam(value: unknown): number | undefined {
  return typeof value === "number" && Number.isInteger(value) ? value : undefined;
}

function booleanParam(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function requiredRecord(input: Record<string, unknown>, key: string): Record<string, unknown> {
  const value = input[key];
  if (!isRecord(value)) {
    throw new InfomaniakError(`${key} must be an object.`);
  }
  return value;
}

function requiredValue(input: Record<string, unknown>, key: string): unknown {
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

function responseItems(response: unknown): readonly unknown[] {
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

function recordString(value: unknown, key: string): string | undefined {
  return isRecord(value) && typeof value[key] === "string" ? value[key] : undefined;
}

function upperFirst(value: string): string {
  return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
