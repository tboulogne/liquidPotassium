import type { GeneratedOperationClient, OperationRequest } from "../../client/generated-operation-client.js";
export declare function createEticketsOperations(client: GeneratedOperationClient): {
    readonly eticketslistaddressesv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketslistcustomeremaillogsv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketslistdatesv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketslistdatescustompropertiesv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketsgetreservationv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketsgetreservationv2Get2EticketsReservationReservationUuid: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketslistsurveyv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketslistsurveypassanswersv2: (request?: OperationRequest) => Promise<unknown>;
    readonly patch2EticketsSurveysAnswersPasses: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketslistsurveyticketanswersv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketspatchsurveyticketanswersv2: (request?: OperationRequest) => Promise<unknown>;
    readonly eticketseditticketv2: (request?: OperationRequest) => Promise<unknown>;
};
