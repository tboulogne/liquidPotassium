export function createSwissbackupOperations(client) {
    return {
        get1SwissBackups: (request) => client.requestOperation("get_1_swiss_backups", request),
        get1SwissBackupsSwissBackupId: (request) => client.requestOperation("get_1_swiss_backups_swiss_backup_id", request),
        put1SwissBackupsSwissBackupId: (request) => client.requestOperation("put_1_swiss_backups_swiss_backup_id", request),
        get1SwissBackupsSwissBackupIdAcronisInformations: (request) => client.requestOperation("get_1_swiss_backups_swiss_backup_id_acronis_informations", request),
        post1SwissBackupsSwissBackupIdAdmin: (request) => client.requestOperation("post_1_swiss_backups_swiss_backup_id_admin", request),
        put1SwissBackupsSwissBackupIdAdmin: (request) => client.requestOperation("put_1_swiss_backups_swiss_backup_id_admin", request),
        post1SwissBackupsSwissBackupIdAdminRequestPassword: (request) => client.requestOperation("post_1_swiss_backups_swiss_backup_id_admin_request_password", request),
        get1SwissBackupsSwissBackupIdSlots: (request) => client.requestOperation("get_1_swiss_backups_swiss_backup_id_slots", request),
        post1SwissBackupsSwissBackupIdSlots: (request) => client.requestOperation("post_1_swiss_backups_swiss_backup_id_slots", request),
        delete1SwissBackupsSwissBackupIdSlotsSlotId: (request) => client.requestOperation("delete_1_swiss_backups_swiss_backup_id_slots_slot_id", request),
        get1SwissBackupsSwissBackupIdSlotsSlotId: (request) => client.requestOperation("get_1_swiss_backups_swiss_backup_id_slots_slot_id", request),
        put1SwissBackupsSwissBackupIdSlotsSlotId: (request) => client.requestOperation("put_1_swiss_backups_swiss_backup_id_slots_slot_id", request),
        post1SwissBackupsSwissBackupIdSlotsSlotIdDisable: (request) => client.requestOperation("post_1_swiss_backups_swiss_backup_id_slots_slot_id_disable", request),
        post1SwissBackupsSwissBackupIdSlotsSlotIdEnable: (request) => client.requestOperation("post_1_swiss_backups_swiss_backup_id_slots_slot_id_enable", request),
        get1SwissBackupsSwissBackupIdSlotsSlotIdRclone: (request) => client.requestOperation("get_1_swiss_backups_swiss_backup_id_slots_slot_id_rclone", request),
        post1SwissBackupsSwissBackupIdSlotsSlotIdRequestPassword: (request) => client.requestOperation("post_1_swiss_backups_swiss_backup_id_slots_slot_id_request_password", request),
        get1SwissBackupsCalculate: (request) => client.requestOperation("get_1_swiss_backups_calculate", request),
        get1SwissBackupsPricing: (request) => client.requestOperation("get_1_swiss_backups_pricing", request),
    };
}
//# sourceMappingURL=swissBackup.js.map