export interface OperationRequest {
  path?: Record<string, unknown>;
  query?: Record<string, unknown>;
  headers?: Record<string, unknown>;
  cookies?: Record<string, unknown>;
  body?: unknown;
  signal?: AbortSignal;
}

export interface GeneratedOperationClient {
  requestOperation(operationId: string, request?: OperationRequest): Promise<unknown>;
}

