import type { OperationRequest } from "../client/generated-operation-client.js";
import type { OperationParameterMetadata } from "../generated/catalog/types.js";
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
export declare const resourceKinds: readonly [{
    readonly kind: "account";
    readonly domain: "account";
    readonly label: "Account";
    readonly description: "Infomaniak account available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "kdriveDrive";
    readonly domain: "kdrive";
    readonly label: "kDrive Drive";
    readonly description: "kDrive drive available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "mailAccess";
    readonly domain: "mail";
    readonly label: "Mail Access";
    readonly description: "Mail service and mailbox access visible to the current user.";
    readonly discoverable: true;
}, {
    readonly kind: "newsletterDomain";
    readonly domain: "newsletter";
    readonly label: "Newsletter Domain";
    readonly description: "Integer Newsletter Domain identifier used by newsletter operations.";
    readonly discoverable: false;
}, {
    readonly kind: "newsletterCampaign";
    readonly domain: "newsletter";
    readonly label: "Newsletter Campaign";
    readonly description: "Newsletter campaign under a known Newsletter Domain id.";
    readonly discoverable: true;
}, {
    readonly kind: "kchatTeam";
    readonly domain: "kchat";
    readonly label: "kChat Team";
    readonly description: "kChat team available through the Mattermost-compatible API.";
    readonly discoverable: true;
}, {
    readonly kind: "kmeetRoom";
    readonly domain: "kmeet";
    readonly label: "kMeet Room";
    readonly description: "kMeet room identifier. The public spec exposes room mutation/show endpoints but no tested room list endpoint.";
    readonly discoverable: false;
}, {
    readonly kind: "publicCloud";
    readonly domain: "publicCloud";
    readonly label: "Public Cloud";
    readonly description: "Public Cloud product available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "domainName";
    readonly domain: "domains";
    readonly label: "Domain Name";
    readonly description: "Domain name managed by the account.";
    readonly discoverable: true;
}, {
    readonly kind: "aiProduct";
    readonly domain: "ai";
    readonly label: "AI Product";
    readonly description: "Infomaniak AI product available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "vodChannel";
    readonly domain: "vod";
    readonly label: "VOD Channel";
    readonly description: "VOD channel available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "videoChannel";
    readonly domain: "video";
    readonly label: "Video Channel";
    readonly description: "Streaming video channel available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "radioProduct";
    readonly domain: "radio";
    readonly label: "Radio Product";
    readonly description: "Radio product available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "swissBackup";
    readonly domain: "swissBackup";
    readonly label: "Swiss Backup";
    readonly description: "Swiss Backup product available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "shortUrl";
    readonly domain: "urlShortener";
    readonly label: "Short URL";
    readonly description: "Short URL resource available to the current token.";
    readonly discoverable: true;
}, {
    readonly kind: "eticketDate";
    readonly domain: "etickets";
    readonly label: "eTicket Date";
    readonly description: "eTicket date resource exposed by the public eTicket API.";
    readonly discoverable: true;
}, {
    readonly kind: "profileEmail";
    readonly domain: "profile";
    readonly label: "Profile Email";
    readonly description: "Email address attached to the current profile.";
    readonly discoverable: true;
}, {
    readonly kind: "coreProduct";
    readonly domain: "core";
    readonly label: "Core Product";
    readonly description: "Shared Infomaniak product reference from the core API.";
    readonly discoverable: true;
}];
export declare function listResourceKinds(options?: {
    domain?: string;
    discoverable?: boolean;
}): readonly ResourceKindMetadata[];
export declare function describeResourceKind(kind: string): ResourceKindMetadata;
export declare function listResourceDiscoveryRecipes(options?: {
    domain?: string;
    kind?: string;
}): readonly ResourceDiscoveryRecipe[];
export declare function describeOperationRequirements(operationId: string): OperationRequirement;
export declare function createResourceDiscovery(client: ResourceDiscoveryClient): ResourceDiscovery;
export declare function discoverResources(client: ResourceDiscoveryClient, options?: ResourceDiscoveryOptions): Promise<ResourceDiscoveryResult>;
