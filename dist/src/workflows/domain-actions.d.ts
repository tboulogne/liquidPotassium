import type { DomainActionExecutionResult, DomainActionListOptions, DomainActionMetadata, DomainActionRequest, DomainWorkflowClient, DomainWorkflowRuntimeClient } from "./domain-action-types.js";
export type { DomainActionExecutionResult, DomainActionInputField, DomainActionListOptions, DomainActionMetadata, DomainActionRequest, DomainWorkflowClient, DomainWorkflowRuntimeClient, } from "./domain-action-types.js";
export declare function listDomainActions(options?: DomainActionListOptions): readonly DomainActionMetadata[];
export declare function describeDomainAction(domain: string, action: string): DomainActionMetadata;
export declare function runDomainAction(client: DomainWorkflowRuntimeClient, request: DomainActionRequest): Promise<DomainActionExecutionResult>;
export declare function createDomainWorkflowClient(client: DomainWorkflowRuntimeClient): DomainWorkflowClient;
