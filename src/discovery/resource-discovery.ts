import { InfomaniakError } from "../client/errors.js";
import type { OperationRequest } from "../client/generated-operation-client.js";
import { getOperation } from "../catalog/operation-catalog.js";
import type { OperationMetadata, OperationParameterMetadata } from "../generated/catalog/types.js";

export type ResourceKind = (typeof resourceKinds)[number]["kind"];

export interface ResourceKindMetadata {
  kind: string;
  domain: string;
  label: string;
  description: string;
  discoverable: boolean;
}

export interface ResourceDescriptor {
  id: string | number;
  label: string;
  domain: string;
  kind: string;
  sourceOperationId: string;
  raw: unknown;
  parents: Record<string, string | number>;
}

export interface ResourceDiscoveryRecipe {
  kind: string;
  domain: string;
  operationId: string;
  description: string;
  idFields: readonly string[];
  labelFields: readonly string[];
  request?: OperationRequest;
  parentRequirements: readonly string[];
  parentLocation: "path" | "query";
}

export interface OperationRequirement {
  operationId: string;
  domain: string;
  parameters: readonly OperationParameterRequirement[];
  suggestions: readonly DiscoverySuggestion[];
}

export interface OperationParameterRequirement {
  name: string;
  in: OperationParameterMetadata["in"];
  required: boolean;
  description: string;
  schemaType: string | null;
  resourceKind: string | null;
  example: unknown;
}

export interface DiscoverySuggestion {
  code: "recipe_available" | "no_public_discovery" | "requires_parent" | "no_recipe";
  domain: string;
  kind?: string;
  operationId?: string;
  parameterNames?: readonly string[];
  message: string;
}

export interface ResourceDiscoveryOptions {
  domain?: string;
  kind?: string;
  operationId?: string;
  parents?: Record<string, string | number>;
  limit?: number;
  signal?: AbortSignal;
}

export interface ResourceDiscoveryResult {
  resources: readonly ResourceDescriptor[];
  suggestions: readonly DiscoverySuggestion[];
  recipe: ResourceDiscoveryRecipe | null;
}

export interface ResourceDiscovery {
  discover(options?: ResourceDiscoveryOptions): Promise<ResourceDiscoveryResult>;
}

export interface ResourceDiscoveryClient {
  requestOperation(operationId: string, request?: OperationRequest): Promise<unknown>;
}

interface ParameterKindRule {
  domain?: string;
  names: readonly string[];
  kind: string;
}

export const resourceKinds = [
  {
    kind: "account",
    domain: "account",
    label: "Account",
    description: "Infomaniak account available to the current token.",
    discoverable: true,
  },
  {
    kind: "kdriveDrive",
    domain: "kdrive",
    label: "kDrive Drive",
    description: "kDrive drive available to the current token.",
    discoverable: true,
  },
  {
    kind: "mailAccess",
    domain: "mail",
    label: "Mail Access",
    description: "Mail service and mailbox access visible to the current user.",
    discoverable: true,
  },
  {
    kind: "newsletterDomain",
    domain: "newsletter",
    label: "Newsletter Domain",
    description: "Integer Newsletter Domain identifier used by newsletter operations.",
    discoverable: false,
  },
  {
    kind: "newsletterCampaign",
    domain: "newsletter",
    label: "Newsletter Campaign",
    description: "Newsletter campaign under a known Newsletter Domain id.",
    discoverable: true,
  },
  {
    kind: "kchatTeam",
    domain: "kchat",
    label: "kChat Team",
    description: "kChat team available through the Mattermost-compatible API.",
    discoverable: true,
  },
  {
    kind: "kmeetRoom",
    domain: "kmeet",
    label: "kMeet Room",
    description: "kMeet room identifier. The public spec exposes room mutation/show endpoints but no tested room list endpoint.",
    discoverable: false,
  },
  {
    kind: "publicCloud",
    domain: "publicCloud",
    label: "Public Cloud",
    description: "Public Cloud product available to the current token.",
    discoverable: true,
  },
  {
    kind: "domainName",
    domain: "domains",
    label: "Domain Name",
    description: "Domain name managed by the account.",
    discoverable: true,
  },
  {
    kind: "aiProduct",
    domain: "ai",
    label: "AI Product",
    description: "Infomaniak AI product available to the current token.",
    discoverable: true,
  },
  {
    kind: "vodChannel",
    domain: "vod",
    label: "VOD Channel",
    description: "VOD channel available to the current token.",
    discoverable: true,
  },
  {
    kind: "videoChannel",
    domain: "video",
    label: "Video Channel",
    description: "Streaming video channel available to the current token.",
    discoverable: true,
  },
  {
    kind: "radioProduct",
    domain: "radio",
    label: "Radio Product",
    description: "Radio product available to the current token.",
    discoverable: true,
  },
  {
    kind: "swissBackup",
    domain: "swissBackup",
    label: "Swiss Backup",
    description: "Swiss Backup product available to the current token.",
    discoverable: true,
  },
  {
    kind: "shortUrl",
    domain: "urlShortener",
    label: "Short URL",
    description: "Short URL resource available to the current token.",
    discoverable: true,
  },
  {
    kind: "eticketDate",
    domain: "etickets",
    label: "eTicket Date",
    description: "eTicket date resource exposed by the public eTicket API.",
    discoverable: true,
  },
  {
    kind: "profileEmail",
    domain: "profile",
    label: "Profile Email",
    description: "Email address attached to the current profile.",
    discoverable: true,
  },
  {
    kind: "coreProduct",
    domain: "core",
    label: "Core Product",
    description: "Shared Infomaniak product reference from the core API.",
    discoverable: true,
  },
] as const satisfies readonly ResourceKindMetadata[];

const discoveryRecipes = [
  recipe("account", "account", "Core/ResourcesListAccounts", "List accounts for the current token.", ["id", "account_id"], ["name", "display_name", "email"]),
  recipeWithQueryParents(
    "kdriveDrive",
    "kdrive",
    "kDriveAccessiblesDrivesV2",
    "List accessible kDrive drives once an account id is known.",
    ["id", "drive_id"],
    ["name", "drive_name"],
    ["account_id"],
  ),
  recipe("mailAccess", "mail", "Mail/ServicesListOfAccessesForTheCurrentUser", "List mail accesses for the current user.", ["mail_hosting_id", "service_mail", "id"], ["email", "mailbox", "mailbox_name", "name"]),
  recipeWithParents(
    "newsletterCampaign",
    "newsletter",
    "NewsletterListCampaigns",
    "List campaigns once a Newsletter Domain id is known.",
    ["id", "campaign"],
    ["name", "subject", "title"],
    ["domain"],
  ),
  recipe("kchatTeam", "kchat", "GetAllTeams", "List kChat teams.", ["id", "team_id"], ["display_name", "name"]),
  recipeWithQueryParents(
    "publicCloud",
    "publicCloud",
    "Public/CloudListAllPublicClouds",
    "List public clouds once an account id is known.",
    ["id", "public_cloud_id"],
    ["name", "display_name"],
    ["account_id"],
  ),
  recipe("domainName", "domains", "Domain/&/ZoneListDomainsV2", "List managed domain names.", ["domain", "name", "id"], ["domain", "name"]),
  recipe("aiProduct", "ai", "AI/ToolsListAllYourLLMAPI", "List AI products.", ["id", "product_id"], ["name", "display_name"]),
  recipe("vodChannel", "vod", "get_1_vod_channel", "List VOD channels.", ["id", "channel"], ["name", "title"]),
  recipe("videoChannel", "video", "Streaming/videoListChannels", "List video streaming channels.", ["id", "channel"], ["name", "title"]),
  recipeWithQueryParents("radioProduct", "radio", "get_1_radios", "List radio products once an account id is known.", ["id", "radio_product_id"], ["name", "title"], [
    "account_id",
  ]),
  recipeWithQueryParents(
    "swissBackup",
    "swissBackup",
    "get_1_swiss_backups",
    "List Swiss Backup products once an account id is known.",
    ["id", "swiss_backup_id"],
    ["name", "display_name"],
    ["account_id"],
  ),
  recipe("shortUrl", "urlShortener", "get_2_url_shortener", "List short URLs.", ["id", "short_url_id"], ["url", "short_url", "name"]),
  recipe("eticketDate", "etickets", "EticketsListDatesV2", "List eTicket dates.", ["id", "date_id"], ["name", "title", "date"]),
  recipe("profileEmail", "profile", "Core/ResourcesListEmailsV2", "List current profile email addresses.", ["id", "email_id"], ["email", "address"]),
  recipe("coreProduct", "core", "get_1_products", "List shared product references.", ["id", "product_id"], ["name", "service_name"]),
] as const satisfies readonly ResourceDiscoveryRecipe[];

const noPublicDiscoveryMessages = new Map<string, string>([
  [
    "newsletterDomain",
    "Newsletter operations use an integer Newsletter Domain id. The public spec/docs expose show and child endpoints, but no reviewed endpoint that lists Newsletter Domain ids for the current token.",
  ],
  [
    "kmeetRoom",
    "The public kMeet spec exposes room creation and room settings endpoints, but no reviewed read-only endpoint that lists existing room ids.",
  ],
]);

const parameterKindRules: readonly ParameterKindRule[] = [
  { names: ["account", "account_id"], kind: "account" },
  { names: ["drive_id"], kind: "kdriveDrive" },
  { names: ["mail_hosting_id", "service_mail"], kind: "mailAccess" },
  { names: ["mailbox_name", "mailbox"], kind: "mailAccess" },
  { domain: "newsletter", names: ["domain"], kind: "newsletterDomain" },
  { domain: "newsletter", names: ["campaign"], kind: "newsletterCampaign" },
  { names: ["team_id"], kind: "kchatTeam" },
  { names: ["room_id"], kind: "kmeetRoom" },
  { names: ["public_cloud_id"], kind: "publicCloud" },
  { names: ["domain"], kind: "domainName" },
  { domain: "ai", names: ["product_id"], kind: "aiProduct" },
  { domain: "vod", names: ["channel"], kind: "vodChannel" },
  { domain: "video", names: ["channel"], kind: "videoChannel" },
  { names: ["radio_product_id"], kind: "radioProduct" },
  { names: ["swiss_backup_id"], kind: "swissBackup" },
  { names: ["short_url_id"], kind: "shortUrl" },
  { names: ["date_id"], kind: "eticketDate" },
  { names: ["email_id"], kind: "profileEmail" },
];

const recipeByKind = new Map<string, ResourceDiscoveryRecipe>(discoveryRecipes.map((candidate) => [candidate.kind, candidate]));
const kindByName = new Map<string, ResourceKindMetadata>(resourceKinds.map((kind) => [kind.kind, kind]));

export function listResourceKinds(options: { domain?: string; discoverable?: boolean } = {}): readonly ResourceKindMetadata[] {
  return resourceKinds.filter(
    (kind) =>
      (options.domain === undefined || kind.domain === options.domain) &&
      (options.discoverable === undefined || kind.discoverable === options.discoverable),
  );
}

export function describeResourceKind(kind: string): ResourceKindMetadata {
  const resourceKind = kindByName.get(kind);
  if (!resourceKind) {
    throw new InfomaniakError(`Unknown Infomaniak resource kind: ${kind}`);
  }
  return resourceKind;
}

export function listResourceDiscoveryRecipes(options: { domain?: string; kind?: string } = {}): readonly ResourceDiscoveryRecipe[] {
  return discoveryRecipes.filter(
    (candidate) =>
      (options.domain === undefined || candidate.domain === options.domain) &&
      (options.kind === undefined || candidate.kind === options.kind),
  );
}

export function describeOperationRequirements(operationId: string): OperationRequirement {
  const operation = getOperation(operationId);
  const parameters = [...operation.pathParameters, ...operation.queryParameters, ...operation.headerParameters, ...operation.cookieParameters].map((parameter) =>
    describeParameterRequirement(operation, parameter),
  );
  return {
    operationId: operation.operationId,
    domain: operation.domain,
    parameters,
    suggestions: buildRequirementSuggestions(operation, parameters),
  };
}

export function createResourceDiscovery(client: ResourceDiscoveryClient): ResourceDiscovery {
  return {
    discover: (options = {}) => discoverResources(client, options),
  };
}

export async function discoverResources(
  client: ResourceDiscoveryClient,
  options: ResourceDiscoveryOptions = {},
): Promise<ResourceDiscoveryResult> {
  const recipeCandidate = selectRecipe(options);
  if (!recipeCandidate) {
    return {
      resources: [],
      suggestions: discoverySuggestionsForOptions(options),
      recipe: null,
    };
  }
  const missingParents = recipeCandidate.parentRequirements.filter((parent) => options.parents?.[parent] === undefined);
  if (missingParents.length > 0) {
    return {
      resources: [],
      suggestions: [
        {
          code: "requires_parent",
          domain: recipeCandidate.domain,
          kind: recipeCandidate.kind,
          operationId: recipeCandidate.operationId,
          parameterNames: missingParents,
          message: `Discovery for ${recipeCandidate.kind} requires parent values: ${missingParents.join(", ")}.`,
        },
      ],
      recipe: recipeCandidate,
    };
  }
  const request = buildDiscoveryRequest(recipeCandidate, options);
  const response = await client.requestOperation(recipeCandidate.operationId, request);
  return {
    resources: responseItems(response)
      .map((item) => toResourceDescriptor(item, recipeCandidate, options.parents ?? {}))
      .filter((item): item is ResourceDescriptor => item !== null)
      .slice(0, options.limit ?? 25),
    suggestions: [
      {
        code: "recipe_available",
        domain: recipeCandidate.domain,
        kind: recipeCandidate.kind,
        operationId: recipeCandidate.operationId,
        message: recipeCandidate.description,
      },
    ],
    recipe: recipeCandidate,
  };
}

function recipe(
  kind: string,
  domain: string,
  operationId: string,
  description: string,
  idFields: readonly string[],
  labelFields: readonly string[],
): ResourceDiscoveryRecipe {
  return { kind, domain, operationId, description, idFields, labelFields, parentRequirements: [], parentLocation: "path" };
}

function recipeWithParents(
  kind: string,
  domain: string,
  operationId: string,
  description: string,
  idFields: readonly string[],
  labelFields: readonly string[],
  parentRequirements: readonly string[],
): ResourceDiscoveryRecipe {
  return { kind, domain, operationId, description, idFields, labelFields, request: { path: {} }, parentRequirements, parentLocation: "path" };
}

function recipeWithQueryParents(
  kind: string,
  domain: string,
  operationId: string,
  description: string,
  idFields: readonly string[],
  labelFields: readonly string[],
  parentRequirements: readonly string[],
): ResourceDiscoveryRecipe {
  return { kind, domain, operationId, description, idFields, labelFields, parentRequirements, parentLocation: "query" };
}

function describeParameterRequirement(operation: OperationMetadata, parameter: OperationParameterMetadata): OperationParameterRequirement {
  const docsParameter = operation.docs?.parameters.find((candidate) => candidate.name === parameter.name && candidate.in === parameter.in);
  return {
    name: parameter.name,
    in: parameter.in,
    required: parameter.required,
    description: docsParameter?.description ?? "",
    schemaType: docsParameter?.schemaType ?? null,
    resourceKind: inferResourceKind(operation.domain, parameter.name),
    example: docsParameter?.examples[0] ?? null,
  };
}

function buildRequirementSuggestions(
  operation: OperationMetadata,
  parameters: readonly OperationParameterRequirement[],
): readonly DiscoverySuggestion[] {
  const kinds = new Map<string, OperationParameterRequirement[]>();
  for (const parameter of parameters) {
    if (parameter.required && parameter.resourceKind) {
      kinds.set(parameter.resourceKind, [...(kinds.get(parameter.resourceKind) ?? []), parameter]);
    }
  }
  return [...kinds.entries()].map(([kind, groupedParameters]) => suggestionForKind(operation.domain, kind, groupedParameters.map((parameter) => parameter.name)));
}

function suggestionForKind(domain: string, kind: string, parameterNames: readonly string[]): DiscoverySuggestion {
  const recipeCandidate = recipeByKind.get(kind);
  if (recipeCandidate) {
    return {
      code: "recipe_available",
      domain,
      kind,
      operationId: recipeCandidate.operationId,
      parameterNames,
      message: `Use ${recipeCandidate.operationId} to discover ${kind} values for ${parameterNames.join(", ")}.`,
    };
  }
  return {
    code: "no_public_discovery",
    domain,
    kind,
    parameterNames,
    message: noPublicDiscoveryMessages.get(kind)!,
  };
}

function inferResourceKind(domain: string, parameterName: string): string | null {
  const rule = parameterKindRules.find((candidate) => candidate.names.includes(parameterName) && (candidate.domain === undefined || candidate.domain === domain));
  return rule?.kind ?? null;
}

function selectRecipe(options: ResourceDiscoveryOptions): ResourceDiscoveryRecipe | undefined {
  if (options.kind) {
    return recipeByKind.get(options.kind);
  }
  if (options.operationId) {
    const requirements = describeOperationRequirements(options.operationId);
    const suggestedRecipe = requirements.suggestions.find((suggestion) => suggestion.code === "recipe_available" && suggestion.kind);
    return suggestedRecipe?.kind ? recipeByKind.get(suggestedRecipe.kind) : undefined;
  }
  if (options.domain) {
    return (
      discoveryRecipes.find((candidate) => candidate.domain === options.domain && candidate.parentRequirements.length === 0) ??
      discoveryRecipes.find((candidate) => candidate.domain === options.domain)
    );
  }
  return undefined;
}

function discoverySuggestionsForOptions(options: ResourceDiscoveryOptions): readonly DiscoverySuggestion[] {
  if (options.kind) {
    const kind = kindByName.get(options.kind);
    return [
      {
        code: kind?.discoverable === false ? "no_public_discovery" : "no_recipe",
        domain: kind?.domain ?? options.domain ?? "unknown",
        kind: options.kind,
        message: noPublicDiscoveryMessages.get(options.kind) ?? `No reviewed public discovery recipe is available for ${options.kind}.`,
      },
    ];
  }
  if (options.operationId) {
    return describeOperationRequirements(options.operationId).suggestions;
  }
  if (options.domain) {
    const unavailableKind = resourceKinds.find((kind) => kind.domain === options.domain && !kind.discoverable);
    if (unavailableKind) {
      return [
        {
          code: "no_public_discovery",
          domain: unavailableKind.domain,
          kind: unavailableKind.kind,
          message: noPublicDiscoveryMessages.get(unavailableKind.kind)!,
        },
      ];
    }
    return [
      {
        code: "no_recipe",
        domain: options.domain,
        message: `No reviewed root discovery recipe is available for domain ${options.domain}.`,
      },
    ];
  }
  return [];
}

function buildDiscoveryRequest(recipeCandidate: ResourceDiscoveryRecipe, options: ResourceDiscoveryOptions): OperationRequest {
  const parentValues = Object.fromEntries(recipeCandidate.parentRequirements.map((parent) => [parent, options.parents?.[parent]]).filter((entry) => entry[1] !== undefined));
  const request: OperationRequest = {
    ...recipeCandidate.request,
  };
  const path = recipeCandidate.parentLocation === "path" ? { ...(recipeCandidate.request?.path ?? {}), ...parentValues } : recipeCandidate.request?.path;
  const query = recipeCandidate.parentLocation === "query" ? { ...(recipeCandidate.request?.query ?? {}), ...parentValues } : recipeCandidate.request?.query;
  if (path) {
    request.path = path;
  }
  if (query) {
    request.query = query;
  }
  if (options.signal) {
    request.signal = options.signal;
  }
  return request;
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
  if (isRecord(response) && response.data !== undefined) {
    return [response.data];
  }
  return response === undefined || response === null ? [] : [response];
}

function toResourceDescriptor(
  item: unknown,
  recipeCandidate: ResourceDiscoveryRecipe,
  parents: Record<string, string | number>,
): ResourceDescriptor | null {
  if (!isRecord(item)) {
    return null;
  }
  const id = firstFieldValue(item, recipeCandidate.idFields);
  if (typeof id !== "string" && typeof id !== "number") {
    return null;
  }
  const label = firstFieldValue(item, recipeCandidate.labelFields);
  return {
    id,
    label: typeof label === "string" || typeof label === "number" ? String(label) : String(id),
    domain: recipeCandidate.domain,
    kind: recipeCandidate.kind,
    sourceOperationId: recipeCandidate.operationId,
    raw: item,
    parents,
  };
}

function firstFieldValue(record: Record<string, unknown>, fields: readonly string[]): unknown {
  for (const field of fields) {
    const value = record[field];
    if (value !== undefined && value !== null && value !== "") {
      return value;
    }
  }
  return undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
