export function createCoreOperations(client) {
    return {
        coreResourceslistavailableactions: (request) => client.requestOperation("Core/ResourcesListAvailableActions", request),
        get1ActionsActionId: (request) => client.requestOperation("get_1_actions_action_id", request),
        coreResourcesgetapplicationlist: (request) => client.requestOperation("Core/ResourcesGetApplicationList", request),
        coreResourcesgetapplication: (request) => client.requestOperation("Core/ResourcesGetApplication", request),
        get1AppInformationApplicationsVersionTypes: (request) => client.requestOperation("get_1_app_information_applications_version_types", request),
        coreResourcesgetsupportedstorelist: (request) => client.requestOperation("Core/ResourcesGetSupportedStoreList", request),
        coreResourcesgetsupportedstorelistGet1AppInformationVersionsAppstore: (request) => client.requestOperation("Core_ResourcesGetSupportedStoreList_get_1_app_information_versions_appStore", request),
        coreResourcesgetapplicationwithassociatedversionsdetails: (request) => client.requestOperation("Core/ResourcesGetApplicationWithAssociatedVersionsDetails", request),
        coreResourceslisttasks: (request) => client.requestOperation("Core/ResourcesListTasks", request),
        coreResourcesdisplayatask: (request) => client.requestOperation("Core/ResourcesDisplayATask", request),
        coreResourceslistcountries: (request) => client.requestOperation("Core/ResourcesListCountries", request),
        coreResourcesdisplayacountry: (request) => client.requestOperation("Core/ResourcesDisplayACountry", request),
        coreResourceslistlanguages: (request) => client.requestOperation("Core/ResourcesListLanguages", request),
        coreResourcesdisplayalanguage: (request) => client.requestOperation("Core/ResourcesDisplayALanguage", request),
        get1MyKsuiteMyKSuiteId: (request) => client.requestOperation("get_1_my_ksuite_my_k_suite_id", request),
        coreResourcescancelunsubscribe: (request) => client.requestOperation("Core/ResourcesCancelUnsubscribe", request),
        coreResourcescurrentmyksuite: (request) => client.requestOperation("Core/ResourcesCurrentMyKSuite", request),
        get1Products: (request) => client.requestOperation("get_1_products", request),
        coreResourceslisttimezones: (request) => client.requestOperation("Core/ResourcesListTimezones", request),
        coreResourcesdisplayatimezone: (request) => client.requestOperation("Core/ResourcesDisplayATimezone", request),
        get2Events: (request) => client.requestOperation("get_2_events", request),
        coreResourcesdisplayaneventv2: (request) => client.requestOperation("Core/ResourcesDisplayAnEventV2", request),
        coreResourceslistpubliccloudstatusv2: (request) => client.requestOperation("Core/ResourcesListPublicCloudStatusV2", request),
    };
}
//# sourceMappingURL=core.js.map