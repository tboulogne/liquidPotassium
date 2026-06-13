import type { GeneratedOperationClient, OperationRequest } from "../client/generated-operation-client.js";
import type { MailApplicationClient } from "../client/mail-application.js";
import type { ResourceDiscovery } from "../discovery/resource-discovery.js";

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

export interface DomainActionDefinition extends DomainActionMetadata {
  run(client: DomainWorkflowRuntimeClient, input: Record<string, unknown>, signal: AbortSignal | undefined): Promise<unknown>;
}

export interface OperationActionOptions {
  domain: string;
  action: string;
  operationId: string;
  summary: string;
  description: string;
  input?: readonly DomainActionInputField[];
  buildRequest?: (input: Record<string, unknown>, signal: AbortSignal | undefined) => OperationRequest;
}
