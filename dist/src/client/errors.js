export class InfomaniakError extends Error {
    constructor(message) {
        super(message);
        this.name = "InfomaniakError";
    }
}
export class InfomaniakOperationError extends InfomaniakError {
    operationId;
    method;
    path;
    status;
    statusText;
    headers;
    responseSummary;
    constructor(details) {
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
//# sourceMappingURL=errors.js.map