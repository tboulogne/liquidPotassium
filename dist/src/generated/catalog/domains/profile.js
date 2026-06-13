export const profileOperations = [
    {
        "operationId": "Core/ResourcesListUserInformationV2",
        "functionName": "coreResourceslistuserinformationv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile",
        "summary": "List user information",
        "description": "This endpoint allows you to retrieve all the information of the current user.",
        "tags": [
            "Profile"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "with",
                "in": "query",
                "required": false
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile",
            "operationId": "Core/ResourcesListUserInformationV2",
            "summary": "List user information",
            "categoryPath": [
                "Core Resources",
                "Profile"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "phones",
                        "enum": [
                            "emails",
                            "phones",
                            "security"
                        ]
                    },
                    "enumValues": [
                        "emails",
                        "phones",
                        "security"
                    ],
                    "values": [
                        "emails",
                        "phones",
                        "security"
                    ],
                    "examples": [
                        "phones"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesUpdateProfileInformationV2",
        "functionName": "coreResourcesupdateprofileinformationv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "PATCH",
        "path": "/2/profile",
        "summary": "Update profile information",
        "description": "",
        "tags": [
            "Profile"
        ],
        "mutating": true,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "dry_run",
                "in": "query",
                "required": false
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [
            "application/json"
        ],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/patch/2/profile",
            "operationId": "Core/ResourcesUpdateProfileInformationV2",
            "summary": "Update profile information",
            "categoryPath": [
                "Core Resources",
                "Profile"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "dry_run",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "dry_run",
                        "type": "boolean",
                        "description": "Ensures that the request passes the system validation",
                        "example": true
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        true
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "401",
                "404",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesListAuthenticatorPasskeysV2",
        "functionName": "coreResourceslistauthenticatorpasskeysv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/2fa/authenticator/passkeys",
        "summary": "List Authenticator Passkeys",
        "description": "List the active Authenticator Passkeys for the current User.",
        "tags": [
            "Profile > Two Factor > Authenticator > Passkeys"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/2fa/authenticator/passkeys",
            "operationId": "Core/ResourcesListAuthenticatorPasskeysV2",
            "summary": "List Authenticator Passkeys",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Two Factor",
                "Authenticator",
                "Passkeys"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "401",
                "403",
                "404"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesDeleteAnAuthenticatorPasskeyV2",
        "functionName": "coreResourcesdeleteanauthenticatorpasskeyv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "DELETE",
        "path": "/2/profile/2fa/authenticator/passkeys/{passkey}",
        "summary": "Delete an Authenticator Passkey",
        "description": "Delete an active Authenticator Passkey for the current User.",
        "tags": [
            "Profile > Two Factor > Authenticator > Passkeys"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "passkey",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "password",
                "in": "query",
                "required": true
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/delete/2/profile/2fa/authenticator/passkeys/%7Bpasskey%7D",
            "operationId": "Core/ResourcesDeleteAnAuthenticatorPasskeyV2",
            "summary": "Delete an Authenticator Passkey",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Two Factor",
                "Authenticator",
                "Passkeys"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "passkey",
                    "in": "path",
                    "required": true,
                    "description": "Unique identifier of the Passkey",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "example"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "example"
                    ]
                },
                {
                    "name": "password",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "password",
                        "type": "string",
                        "example": "5t\\M{XmCZsy:w"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "5t\\M{XmCZsy:w"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "401",
                "403",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesListApplicationsPasswordsV2",
        "functionName": "coreResourceslistapplicationspasswordsv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/applications/passwords",
        "summary": "List applications passwords",
        "description": "This endpoint allows you to retrieve all the application password of the current user.",
        "tags": [
            "Profile > Applications Passwords"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/applications/passwords",
            "operationId": "Core/ResourcesListApplicationsPasswordsV2",
            "summary": "List applications passwords",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Applications Passwords"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesAddAnApplicationPasswordV2",
        "functionName": "coreResourcesaddanapplicationpasswordv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "POST",
        "path": "/2/profile/applications/passwords",
        "summary": "Add an application password",
        "description": "Add a profile specific password\nWarning: password given in response cannot be retrieved later, so store / show it immediately",
        "tags": [
            "Profile > Applications Passwords"
        ],
        "mutating": true,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/2/profile/applications/passwords",
            "operationId": "Core/ResourcesAddAnApplicationPasswordV2",
            "summary": "Add an application password",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Applications Passwords"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "201",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesDisplayAnApplicationPasswordV2",
        "functionName": "coreResourcesdisplayanapplicationpasswordv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/applications/passwords/{password_id}",
        "summary": "Display an application password",
        "description": "Returns a variety of information about a single application password specified by the requested unique identifier.",
        "tags": [
            "Profile > Applications Passwords"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "password_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/applications/passwords/%7Bpassword_id%7D",
            "operationId": "Core/ResourcesDisplayAnApplicationPasswordV2",
            "summary": "Display an application password",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Applications Passwords"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "password_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the password to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18086
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18086
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesDeleteProfilesAvatarV2",
        "functionName": "coreResourcesdeleteprofilesavatarv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "DELETE",
        "path": "/2/profile/avatar",
        "summary": "Delete profile's avatar.",
        "description": "",
        "tags": [
            "Profile"
        ],
        "mutating": true,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/delete/2/profile/avatar",
            "operationId": "Core/ResourcesDeleteProfilesAvatarV2",
            "summary": "Delete profile's avatar",
            "categoryPath": [
                "Core Resources",
                "Profile"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "401",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesAddUpdateProfilesAvatarV2",
        "functionName": "coreResourcesaddupdateprofilesavatarv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "POST",
        "path": "/2/profile/avatar",
        "summary": "Add / Update profile's avatar.",
        "description": "Image must be a scared image with minimum size of 16 of type image/png, image/jpeg or image/gif",
        "tags": [
            "Profile"
        ],
        "mutating": true,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [
            "application/json"
        ],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/2/profile/avatar",
            "operationId": "Core/ResourcesAddUpdateProfilesAvatarV2",
            "summary": "Add / Update profile's avatar",
            "categoryPath": [
                "Core Resources",
                "Profile"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "401",
                "404",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesListEmailsV2",
        "functionName": "coreResourceslistemailsv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/emails",
        "summary": "List emails",
        "description": "Retrieve list of all email addresses of the current user's profile.",
        "tags": [
            "Profile > Emails"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/emails",
            "operationId": "Core/ResourcesListEmailsV2",
            "summary": "List emails",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Emails"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesDeleteAnEmailV2",
        "functionName": "coreResourcesdeleteanemailv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "DELETE",
        "path": "/2/profile/emails/{email_type}/{email_id}",
        "summary": "Delete an email",
        "description": "Delete an email address of the current user's profile.",
        "tags": [
            "Profile > Emails"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "email_type",
                "in": "path",
                "required": true
            },
            {
                "name": "email_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/delete/2/profile/emails/%7Bemail_type%7D/%7Bemail_id%7D",
            "operationId": "Core/ResourcesDeleteAnEmailV2",
            "summary": "Delete an email",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Emails"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "email_type",
                    "in": "path",
                    "required": true,
                    "description": "The email type (email|email_request) to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "example"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "example"
                    ]
                },
                {
                    "name": "email_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the email to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 93465
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        93465
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "401",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesDisplayAnEmailV2",
        "functionName": "coreResourcesdisplayanemailv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/emails/{email_type}/{email_id}",
        "summary": "Display an email",
        "description": "Get details of a specific email address of the current user's profile.",
        "tags": [
            "Profile > Emails"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "email_type",
                "in": "path",
                "required": true
            },
            {
                "name": "email_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/emails/%7Bemail_type%7D/%7Bemail_id%7D",
            "operationId": "Core/ResourcesDisplayAnEmailV2",
            "summary": "Display an email",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Emails"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "email_type",
                    "in": "path",
                    "required": true,
                    "description": "The email type (email|email_request) to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "example"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "example"
                    ]
                },
                {
                    "name": "email_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the email to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 26143
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        26143
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesGetRelatedWorkspaceUsersV2",
        "functionName": "coreResourcesgetrelatedworkspaceusersv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/ksuites/mailboxes",
        "summary": "Get related workspace users",
        "description": "",
        "tags": [
            "kSuite > Workspace"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/ksuites/mailboxes",
            "operationId": "Core/ResourcesGetRelatedWorkspaceUsersV2",
            "summary": "Get related workspace users",
            "categoryPath": [
                "Core Resources",
                "kSuite",
                "Workspace"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesAttachAMailboxToCurrentUserV2",
        "functionName": "coreResourcesattachamailboxtocurrentuserv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "POST",
        "path": "/2/profile/ksuites/mailboxes",
        "summary": "Attach a mailbox to current user",
        "description": "",
        "tags": [
            "kSuite > Workspace"
        ],
        "mutating": true,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [
            "application/json"
        ],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/2/profile/ksuites/mailboxes",
            "operationId": "Core/ResourcesAttachAMailboxToCurrentUserV2",
            "summary": "Attach a mailbox to current user",
            "categoryPath": [
                "Core Resources",
                "kSuite",
                "Workspace"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "201",
                "400",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesUnlinkAMailboxFromCurrentUserV2",
        "functionName": "coreResourcesunlinkamailboxfromcurrentuserv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "DELETE",
        "path": "/2/profile/ksuites/mailboxes/{mailbox_id}",
        "summary": "Unlink a mailbox from current user",
        "description": "",
        "tags": [
            "kSuite > Workspace"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "mailbox_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/delete/2/profile/ksuites/mailboxes/%7Bmailbox_id%7D",
            "operationId": "Core/ResourcesUnlinkAMailboxFromCurrentUserV2",
            "summary": "Unlink a mailbox from current user",
            "categoryPath": [
                "Core Resources",
                "kSuite",
                "Workspace"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "mailbox_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "example"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "example"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesSetMailboxAsPrimaryV2",
        "functionName": "coreResourcessetmailboxasprimaryv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "PUT",
        "path": "/2/profile/ksuites/mailboxes/{mailbox_id}/set_primary",
        "summary": "Set mailbox as primary",
        "description": "",
        "tags": [
            "kSuite > Workspace"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "mailbox_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/put/2/profile/ksuites/mailboxes/%7Bmailbox_id%7D/set_primary",
            "operationId": "Core/ResourcesSetMailboxAsPrimaryV2",
            "summary": "Set mailbox as primary",
            "categoryPath": [
                "Core Resources",
                "kSuite",
                "Workspace"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "mailbox_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "example"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "example"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "400",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesUpdateMailboxCredentialPasswordV2",
        "functionName": "coreResourcesupdatemailboxcredentialpasswordv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "PUT",
        "path": "/2/profile/ksuites/mailboxes/{mailbox_id}/update_password",
        "summary": "Update mailbox credential password",
        "description": "",
        "tags": [
            "kSuite > Workspace"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "mailbox_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [
            "application/json"
        ],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/put/2/profile/ksuites/mailboxes/%7Bmailbox_id%7D/update_password",
            "operationId": "Core/ResourcesUpdateMailboxCredentialPasswordV2",
            "summary": "Update mailbox credential password",
            "categoryPath": [
                "Core Resources",
                "kSuite",
                "Workspace"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "mailbox_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "example"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "example"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "400",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesListPhonesV2",
        "functionName": "coreResourceslistphonesv2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/phones",
        "summary": "List phones",
        "description": "This endpoint allows you to retrieve all the phones of the current user.",
        "tags": [
            "Profile > Phones"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/phones",
            "operationId": "Core/ResourcesListPhonesV2",
            "summary": "List phones",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Phones"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesDeleteAPhoneV2",
        "functionName": "coreResourcesdeleteaphonev2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "DELETE",
        "path": "/2/profile/phones/{phone_id}",
        "summary": "Delete a phone",
        "description": "Delete a current user profile phone",
        "tags": [
            "Profile > Phones"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "phone_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/delete/2/profile/phones/%7Bphone_id%7D",
            "operationId": "Core/ResourcesDeleteAPhoneV2",
            "summary": "Delete a phone",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Phones"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "phone_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the phone to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 45333
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        45333
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "401",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Core/ResourcesDisplayAPhoneV2",
        "functionName": "coreResourcesdisplayaphonev2",
        "originalOperationId": null,
        "domain": "profile",
        "method": "GET",
        "path": "/2/profile/phones/{phone_id}",
        "summary": "Display a phone",
        "description": "Returns a variety of information about a single phone specified by the requested unique identifier.",
        "tags": [
            "Profile > Phones"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "phone_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/profile/phones/%7Bphone_id%7D",
            "operationId": "Core/ResourcesDisplayAPhoneV2",
            "summary": "Display a phone",
            "categoryPath": [
                "Core Resources",
                "Profile",
                "Phones"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "phone_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the phone to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 99603
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        99603
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "401",
                "404"
            ]
        }
    }
];
//# sourceMappingURL=profile.js.map