export function createKmeetOperations(client) {
    return {
        post1KmeetRooms: (request) => client.requestOperation("post_1_kmeet_rooms", request),
        get1KmeetRoomsRoomIdSettings: (request) => client.requestOperation("get_1_kmeet_rooms_room_id_settings", request),
    };
}
//# sourceMappingURL=kmeet.js.map