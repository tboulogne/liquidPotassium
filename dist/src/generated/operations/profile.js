export function createProfileOperations(client) {
    return {
        coreResourceslistuserinformationv2: (request) => client.requestOperation("Core/ResourcesListUserInformationV2", request),
        coreResourcesupdateprofileinformationv2: (request) => client.requestOperation("Core/ResourcesUpdateProfileInformationV2", request),
        coreResourceslistauthenticatorpasskeysv2: (request) => client.requestOperation("Core/ResourcesListAuthenticatorPasskeysV2", request),
        coreResourcesdeleteanauthenticatorpasskeyv2: (request) => client.requestOperation("Core/ResourcesDeleteAnAuthenticatorPasskeyV2", request),
        coreResourceslistapplicationspasswordsv2: (request) => client.requestOperation("Core/ResourcesListApplicationsPasswordsV2", request),
        coreResourcesaddanapplicationpasswordv2: (request) => client.requestOperation("Core/ResourcesAddAnApplicationPasswordV2", request),
        coreResourcesdisplayanapplicationpasswordv2: (request) => client.requestOperation("Core/ResourcesDisplayAnApplicationPasswordV2", request),
        coreResourcesdeleteprofilesavatarv2: (request) => client.requestOperation("Core/ResourcesDeleteProfilesAvatarV2", request),
        coreResourcesaddupdateprofilesavatarv2: (request) => client.requestOperation("Core/ResourcesAddUpdateProfilesAvatarV2", request),
        coreResourceslistemailsv2: (request) => client.requestOperation("Core/ResourcesListEmailsV2", request),
        coreResourcesdeleteanemailv2: (request) => client.requestOperation("Core/ResourcesDeleteAnEmailV2", request),
        coreResourcesdisplayanemailv2: (request) => client.requestOperation("Core/ResourcesDisplayAnEmailV2", request),
        coreResourcesgetrelatedworkspaceusersv2: (request) => client.requestOperation("Core/ResourcesGetRelatedWorkspaceUsersV2", request),
        coreResourcesattachamailboxtocurrentuserv2: (request) => client.requestOperation("Core/ResourcesAttachAMailboxToCurrentUserV2", request),
        coreResourcesunlinkamailboxfromcurrentuserv2: (request) => client.requestOperation("Core/ResourcesUnlinkAMailboxFromCurrentUserV2", request),
        coreResourcessetmailboxasprimaryv2: (request) => client.requestOperation("Core/ResourcesSetMailboxAsPrimaryV2", request),
        coreResourcesupdatemailboxcredentialpasswordv2: (request) => client.requestOperation("Core/ResourcesUpdateMailboxCredentialPasswordV2", request),
        coreResourceslistphonesv2: (request) => client.requestOperation("Core/ResourcesListPhonesV2", request),
        coreResourcesdeleteaphonev2: (request) => client.requestOperation("Core/ResourcesDeleteAPhoneV2", request),
        coreResourcesdisplayaphonev2: (request) => client.requestOperation("Core/ResourcesDisplayAPhoneV2", request),
    };
}
//# sourceMappingURL=profile.js.map