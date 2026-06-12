export interface OperationErrorDetails {
  operationId?: string | undefined;
  method: string;
  path: string;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  responseSummary: string;
}

export class InfomaniakError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InfomaniakError";
  }
}

export class InfomaniakOperationError extends InfomaniakError {
  readonly operationId: string | undefined;
  readonly method: string;
  readonly path: string;
  readonly status: number;
  readonly statusText: string;
  readonly headers: Record<string, string>;
  readonly responseSummary: string;

  constructor(details: OperationErrorDetails) {
    super(`${details.method} ${details.path} failed with ${details.status} ${details.statusText}`.trim());
    this.name = "InfomaniakOperationError";
    this.operationId = details.operationId;
    this.method = details.method;
    this.path = details.path;
    this.status = details.status;
    this.statusText = details.statusText;
    this.headers = details.headers;
    this.responseSummary = details.responseSummary;
  }
}
