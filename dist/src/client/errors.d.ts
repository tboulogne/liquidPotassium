export interface OperationErrorDetails {
    operationId?: string | undefined;
    method: string;
    path: string;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    responseSummary: string;
}
export declare class InfomaniakError extends Error {
    constructor(message: string);
}
export declare class InfomaniakOperationError extends InfomaniakError {
    readonly operationId: string | undefined;
    readonly method: string;
    readonly path: string;
    readonly status: number;
    readonly statusText: string;
    readonly headers: Record<string, string>;
    readonly responseSummary: string;
    constructor(details: OperationErrorDetails);
}
