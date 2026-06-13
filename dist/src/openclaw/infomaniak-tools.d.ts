import { Type } from "typebox";
import type { AnyAgentTool } from "openclaw/plugin-sdk/plugin-entry";
import { type OperationRequirement, type OperationDescription } from "../index.js";
export interface InfomaniakOpenClawPluginConfig {
    token?: string;
    tokenEnvName: string;
    baseUrl?: string;
    mailApplicationBaseUrl?: string;
    allowedDomains: readonly string[];
    allowedOperations: readonly string[];
    deniedOperations: readonly string[];
    blockMutating: boolean;
}
export interface InfomaniakOpenClawToolsOptions {
    config?: Record<string, unknown> | InfomaniakOpenClawPluginConfig;
    fetch?: typeof fetch;
}
export interface OperationSummary {
    operationId: string;
    functionName: string;
    domain: string;
    method: string;
    path: string;
    summary: string;
    mutating: boolean;
    deprecated: boolean;
    docs: {
        url: string;
        categoryPath: readonly string[];
        beta: boolean;
    } | null;
}
export type OperationDescriptionWithRequirements = OperationDescription & {
    requirements: OperationRequirement;
};
export declare const InfomaniakPluginConfigJsonSchema: {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly token: {
            readonly type: "string";
            readonly description: "Infomaniak API bearer token.";
        };
        readonly tokenEnvName: {
            readonly type: "string";
            readonly default: "INFOMANIAK_TOKEN";
            readonly description: "Environment variable name used for the Infomaniak API bearer token when token is not configured directly.";
        };
        readonly baseUrl: {
            readonly type: "string";
            readonly description: "Infomaniak API base URL. Defaults to https://api.infomaniak.com.";
        };
        readonly mailApplicationBaseUrl: {
            readonly type: "string";
            readonly description: "Infomaniak Mail application API base URL. Defaults to https://mail.infomaniak.com.";
        };
        readonly allowedDomains: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly description: "Optional domain allowlist such as kdrive, mail, or kchat.";
        };
        readonly allowedOperations: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly description: "Optional normalized operation ID allowlist.";
        };
        readonly deniedOperations: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly description: "Optional normalized operation ID denylist.";
        };
        readonly blockMutating: {
            readonly type: "boolean";
            readonly default: true;
            readonly description: "When true, mutating operations are blocked even if requested explicitly.";
        };
    };
};
export declare const infomaniakDomainsToolSchema: Type.TObject<{}>;
export declare const infomaniakSearchToolSchema: Type.TObject<{
    query: Type.TOptional<Type.TString>;
    domain: Type.TOptional<Type.TString>;
    method: Type.TOptional<Type.TString>;
    mutating: Type.TOptional<Type.TBoolean>;
    limit: Type.TOptional<Type.TInteger>;
}>;
export declare const infomaniakDescribeToolSchema: Type.TObject<{
    operation_id: Type.TString;
}>;
export declare const infomaniakDiscoverToolSchema: Type.TObject<{
    domain: Type.TOptional<Type.TString>;
    kind: Type.TOptional<Type.TString>;
    operation_id: Type.TOptional<Type.TString>;
    parents: Type.TOptional<Type.TRecord<"^.*$", Type.TUnion<[Type.TString, Type.TNumber]>>>;
    limit: Type.TOptional<Type.TInteger>;
}>;
export declare const infomaniakCallToolSchema: Type.TObject<{
    operation_id: Type.TString;
    path: Type.TOptional<Type.TRecord<"^.*$", Type.TUnknown>>;
    query: Type.TOptional<Type.TRecord<"^.*$", Type.TUnknown>>;
    headers: Type.TOptional<Type.TRecord<"^.*$", Type.TUnknown>>;
    body: Type.TOptional<Type.TUnknown>;
    confirm_mutating: Type.TOptional<Type.TBoolean>;
}>;
export declare const infomaniakMailApplicationToolSchema: Type.TObject<{
    action: Type.TUnion<[Type.TLiteral<"listUserMailboxes">, Type.TLiteral<"listFolders">, Type.TLiteral<"listThreads">, Type.TLiteral<"getMessage">, Type.TLiteral<"getMailboxQuota">, Type.TLiteral<"createDraft">, Type.TLiteral<"updateDraft">, Type.TLiteral<"getDraft">, Type.TLiteral<"deleteDraft">, Type.TLiteral<"scheduleDraft">, Type.TLiteral<"deleteSchedule">, Type.TLiteral<"cancelSend">, Type.TLiteral<"moveMessages">, Type.TLiteral<"currentMyKSuite">]>;
    mailbox_uuid: Type.TOptional<Type.TString>;
    folder_id: Type.TOptional<Type.TString>;
    message_resource: Type.TOptional<Type.TString>;
    mailbox: Type.TOptional<Type.TString>;
    product_id: Type.TOptional<Type.TInteger>;
    draft_uuid: Type.TOptional<Type.TString>;
    draft_resource: Type.TOptional<Type.TString>;
    schedule_action: Type.TOptional<Type.TString>;
    cancel_send_resource: Type.TOptional<Type.TString>;
    schedule_date: Type.TOptional<Type.TString>;
    offset: Type.TOptional<Type.TInteger>;
    thread_mode: Type.TOptional<Type.TString>;
    filter: Type.TOptional<Type.TString>;
    with: Type.TOptional<Type.TString>;
    preferred_format: Type.TOptional<Type.TString>;
    unit: Type.TOptional<Type.TString>;
    payload: Type.TOptional<Type.TUnknown>;
    headers: Type.TOptional<Type.TRecord<"^.*$", Type.TUnknown>>;
    confirm_mutating: Type.TOptional<Type.TBoolean>;
}>;
export declare const infomaniakWorkflowListToolSchema: Type.TObject<{
    domain: Type.TOptional<Type.TString>;
    mutating: Type.TOptional<Type.TBoolean>;
}>;
export declare const infomaniakWorkflowDescribeToolSchema: Type.TObject<{
    domain: Type.TString;
    action: Type.TString;
}>;
export declare const infomaniakWorkflowRunToolSchema: Type.TObject<{
    domain: Type.TString;
    action: Type.TString;
    input: Type.TOptional<Type.TRecord<"^.*$", Type.TUnknown>>;
    confirm_mutating: Type.TOptional<Type.TBoolean>;
}>;
export declare function createInfomaniakOpenClawTools(options?: InfomaniakOpenClawToolsOptions): AnyAgentTool[];
export declare function resolveInfomaniakPluginConfig(config: Record<string, unknown> | InfomaniakOpenClawPluginConfig | undefined): InfomaniakOpenClawPluginConfig;
