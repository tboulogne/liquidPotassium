import type { GeneratedOperationClient, OperationRequest } from "../../client/generated-operation-client.js";
export declare function createKmeetOperations(client: GeneratedOperationClient): {
    readonly post1KmeetRooms: (request?: OperationRequest) => Promise<unknown>;
    readonly get1KmeetRoomsRoomIdSettings: (request?: OperationRequest) => Promise<unknown>;
};
