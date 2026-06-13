export const domainsOperations = [
    {
        "operationId": "get_2_domains_domain_dnssec_check",
        "functionName": "get2DomainsDomainDnssecCheck",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/{domain}/dnssec/check",
        "summary": "Check DNSSEC",
        "description": "Check the status of the DNSSEC.",
        "tags": [
            "Domain > DNSSEC"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "domain",
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
        "deprecated": true,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/%7Bdomain%7D/dnssec/check",
            "operationId": null,
            "summary": "Check DNSSEC",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "DNSSEC"
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
                    "name": "domain",
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
        "operationId": "post_2_domains_domain_dnssec_disable",
        "functionName": "post2DomainsDomainDnssecDisable",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/{domain}/dnssec/disable",
        "summary": "Disable DNSSEC",
        "description": "Disable DNSSEC",
        "tags": [
            "Domain > DNSSEC"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "domain",
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
        "deprecated": true,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/%7Bdomain%7D/dnssec/disable",
            "operationId": null,
            "summary": "Disable DNSSEC",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "DNSSEC"
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
                    "name": "domain",
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
        "operationId": "post_2_domains_domain_dnssec_enable",
        "functionName": "post2DomainsDomainDnssecEnable",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/{domain}/dnssec/enable",
        "summary": "Enable DNSSEC",
        "description": "Enable DNSSEC",
        "tags": [
            "Domain > DNSSEC"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "domain",
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
        "deprecated": true,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/%7Bdomain%7D/dnssec/enable",
            "operationId": null,
            "summary": "Enable DNSSEC",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "DNSSEC"
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
                    "name": "domain",
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
        "operationId": "put_2_domains_domain_nameservers",
        "functionName": "put2DomainsDomainNameservers",
        "originalOperationId": null,
        "domain": "domains",
        "method": "PUT",
        "path": "/2/domains/{domain}/nameservers",
        "summary": "Update Nameservers",
        "description": "Update Domain's Nameservers",
        "tags": [
            "Domain > Nameservers"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "domain",
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
        "deprecated": true,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/put/2/domains/%7Bdomain%7D/nameservers",
            "operationId": null,
            "summary": "Update Nameservers",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Nameservers"
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
                    "name": "domain",
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
        "operationId": "get_2_domains_domain_zones",
        "functionName": "get2DomainsDomainZones",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/{domain}/zones",
        "summary": "List Zones",
        "description": "List all Zones (base zone and delegated zones)",
        "tags": [
            "Domain > Zone"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "domain",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "return",
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
        "deprecated": true,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/%7Bdomain%7D/zones",
            "operationId": null,
            "summary": "List Zones",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Zone"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "paginable",
                    "description": "Group a request's items in pages and define which page you want to display\n",
                    "values": []
                }
            ],
            "parameters": [
                {
                    "name": "domain",
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
                },
                {
                    "name": "return",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "return",
                        "enum": [
                            "total"
                        ],
                        "type": "string",
                        "description": "Specify what to return. Use \"total\" to return only the total count of zones",
                        "nullable": true,
                        "example": "total"
                    },
                    "enumValues": [
                        "total"
                    ],
                    "values": [],
                    "examples": [
                        "total"
                    ]
                },
                {
                    "name": "return",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* :  If you pass this parameter with the value `total`, then the response will be the number of items in the collection, instead of the items themselves.<br />\nPart of the `total` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "string",
                    "schema": {
                        "enum": [
                            "total"
                        ],
                        "type": "string",
                        "example": "total"
                    },
                    "enumValues": [
                        "total"
                    ],
                    "values": [],
                    "examples": [
                        "total"
                    ]
                },
                {
                    "name": "page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "default": 1,
                        "example": 38041
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        38041
                    ]
                },
                {
                    "name": "per_page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "minimum": 1,
                        "example": 33588
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        33588
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneCheckDomainV2",
        "functionName": "domainZonecheckdomainv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/accounts/{account}/check",
        "summary": "Check Domain",
        "description": "Check the availability of a Domain",
        "tags": [
            "Domain > Order"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/accounts/%7Baccount%7D/check",
            "operationId": "Domain/&/ZoneCheckDomainV2",
            "summary": "Check Domain",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Order"
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
                    "name": "account",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneListContactsV2",
        "functionName": "domainZonelistcontactsv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/accounts/{account}/contacts",
        "summary": "List Contacts",
        "description": "List all Contacts",
        "tags": [
            "Domain > Contact"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "account",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "with",
                "in": "query",
                "required": false
            },
            {
                "name": "domain",
                "in": "query",
                "required": false
            },
            {
                "name": "email",
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
        "docs": null
    },
    {
        "operationId": "Domain/&/ZoneCreateContactV2",
        "functionName": "domainZonecreatecontactv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/accounts/{account}/contacts",
        "summary": "Create Contact",
        "description": "Create a Contact",
        "tags": [
            "Domain > Contact"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
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
        "docs": null
    },
    {
        "operationId": "Domain/&/ZoneUpdateContactV2",
        "functionName": "domainZoneupdatecontactv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "PUT",
        "path": "/2/domains/accounts/{account}/contacts/{contact}",
        "summary": "Update Contact",
        "description": "Update a Contact\n\nA validation may be required. If so, a validation email will be sent\nand the update will need to be confirmed via the email link.\nOtherwise, the Contact is updated immediately.",
        "tags": [
            "Domain > Contact"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
                "in": "path",
                "required": true
            },
            {
                "name": "contact",
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
        "docs": null
    },
    {
        "operationId": "Domain/&/ZoneCreateDomainV2",
        "functionName": "domainZonecreatedomainv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/accounts/{account}/create",
        "summary": "Create Domain",
        "description": "Create a Domain using prepaid payment (documentation: <a href='https://developer.infomaniak.com/docs/api/order/domain/how'>https://developer.infomaniak.com/docs/api/order/domain/how</a>)",
        "tags": [
            "Domain > Order"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/accounts/%7Baccount%7D/create",
            "operationId": "Domain/&/ZoneCreateDomainV2",
            "summary": "Create Domain",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Order"
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
                    "name": "account",
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
                "400"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneRetryCreateDomainV2",
        "functionName": "domainZoneretrycreatedomainv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/accounts/{account}/create/{domain}",
        "summary": "Retry Create Domain",
        "description": "Retry a failed Domain creation, with updated Contact and additional fields",
        "tags": [
            "Domain > Order"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
                "in": "path",
                "required": true
            },
            {
                "name": "domain",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/accounts/%7Baccount%7D/create/%7Bdomain%7D",
            "operationId": "Domain/&/ZoneRetryCreateDomainV2",
            "summary": "Retry Create Domain",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Order"
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
                    "name": "account",
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
                },
                {
                    "name": "domain",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneListDocumentsV2",
        "functionName": "domainZonelistdocumentsv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/accounts/{account}/documents",
        "summary": "List Documents",
        "description": "List all account's domain related documents",
        "tags": [
            "Domain > Document"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "account",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/accounts/%7Baccount%7D/documents",
            "operationId": "Domain/&/ZoneListDocumentsV2",
            "summary": "List Documents",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Document"
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
                    "name": "account",
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
                "200"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneUploadDocumentV2",
        "functionName": "domainZoneuploaddocumentv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/accounts/{account}/documents",
        "summary": "Upload Document",
        "description": "Upload domain related document",
        "tags": [
            "Domain > Document"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/accounts/%7Baccount%7D/documents",
            "operationId": "Domain/&/ZoneUploadDocumentV2",
            "summary": "Upload Document",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Document"
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
                    "name": "account",
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
                "422"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneGetDocumentV2",
        "functionName": "domainZonegetdocumentv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/accounts/{account}/documents/{document_id}",
        "summary": "Get Document",
        "description": "Get an account domain related document",
        "tags": [
            "Domain > Document"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "account",
                "in": "path",
                "required": true
            },
            {
                "name": "document_id",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/accounts/%7Baccount%7D/documents/%7Bdocument_id%7D",
            "operationId": "Domain/&/ZoneGetDocumentV2",
            "summary": "Get Document",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Document"
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
                    "name": "account",
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
                },
                {
                    "name": "document_id",
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
                },
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
                        "example": "url",
                        "enum": [
                            "url"
                        ]
                    },
                    "enumValues": [
                        "url"
                    ],
                    "values": [
                        "url"
                    ],
                    "examples": [
                        "url"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneTransferDomainV2",
        "functionName": "domainZonetransferdomainv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/accounts/{account}/transfer",
        "summary": "Transfer Domain",
        "description": "Transfer a domain using prepaid payment (documentation: <a href='https://developer.infomaniak.com/docs/api/order/domain/how'>https://developer.infomaniak.com/docs/api/order/domain/how</a>)",
        "tags": [
            "Domain > Order"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/accounts/%7Baccount%7D/transfer",
            "operationId": "Domain/&/ZoneTransferDomainV2",
            "summary": "Transfer Domain",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Order"
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
                    "name": "account",
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
                "400"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneRetryTransferDomainV2",
        "functionName": "domainZoneretrytransferdomainv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/accounts/{account}/transfer/{domain}",
        "summary": "Retry Transfer Domain",
        "description": "Retry a failed domain transfer, with updated contact and additional fields",
        "tags": [
            "Domain > Order"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "account",
                "in": "path",
                "required": true
            },
            {
                "name": "domain",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/accounts/%7Baccount%7D/transfer/%7Bdomain%7D",
            "operationId": "Domain/&/ZoneRetryTransferDomainV2",
            "summary": "Retry Transfer Domain",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Order"
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
                    "name": "account",
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
                },
                {
                    "name": "domain",
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
                "404",
                "429"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneListDomainsV2",
        "functionName": "domainZonelistdomainsv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/domains",
        "summary": "List Domains",
        "description": "List all Domains",
        "tags": [
            "Domain"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": false
            },
            {
                "name": "expires_after",
                "in": "query",
                "required": false
            },
            {
                "name": "expires_before",
                "in": "query",
                "required": false
            },
            {
                "name": "order_by",
                "in": "query",
                "required": false
            },
            {
                "name": "order_dir",
                "in": "query",
                "required": false
            },
            {
                "name": "search",
                "in": "query",
                "required": false
            },
            {
                "name": "tld",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/domains",
            "operationId": "Domain/&/ZoneListDomainsV2",
            "summary": "List Domains",
            "categoryPath": [
                "Domain & Zone",
                "Domain"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "paginable",
                    "description": "Group a request's items in pages and define which page you want to display\n",
                    "values": []
                }
            ],
            "parameters": [
                {
                    "name": "account_id",
                    "in": "query",
                    "required": false,
                    "description": "The account identifier",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "account_id",
                        "type": "integer",
                        "description": "Filter domains by account ID",
                        "nullable": true,
                        "example": "12345"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "12345"
                    ]
                },
                {
                    "name": "expires_after",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "expires_after",
                        "type": "integer",
                        "description": "Filter domains expiring after this timestamp",
                        "nullable": true,
                        "example": "1704067200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1704067200"
                    ]
                },
                {
                    "name": "expires_before",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "expires_before",
                        "type": "integer",
                        "description": "Filter domains expiring before this timestamp",
                        "nullable": true,
                        "example": "1735689600"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1735689600"
                    ]
                },
                {
                    "name": "order_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "order_by",
                        "enum": [
                            "expiration",
                            "name"
                        ],
                        "type": "string",
                        "description": "Sort results by field",
                        "nullable": true,
                        "example": "expiration"
                    },
                    "enumValues": [
                        "expiration",
                        "name"
                    ],
                    "values": [],
                    "examples": [
                        "expiration"
                    ]
                },
                {
                    "name": "order_dir",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "order_dir",
                        "enum": [
                            "asc",
                            "desc"
                        ],
                        "type": "string",
                        "description": "Sort direction",
                        "nullable": true,
                        "example": "asc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        "asc"
                    ]
                },
                {
                    "name": "search",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "search",
                        "minLength": 1,
                        "type": "string",
                        "description": "Filter domains by name",
                        "nullable": true,
                        "example": "mydomain.ch"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "mydomain.ch"
                    ]
                },
                {
                    "name": "tld",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "tld",
                        "type": "string",
                        "description": "Filter domains by TLD",
                        "nullable": true,
                        "example": "ch"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "ch"
                    ]
                },
                {
                    "name": "return",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* :  If you pass this parameter with the value `total`, then the response will be the number of items in the collection, instead of the items themselves.<br />\nPart of the `total` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "string",
                    "schema": {
                        "enum": [
                            "total"
                        ],
                        "type": "string",
                        "example": "total"
                    },
                    "enumValues": [
                        "total"
                    ],
                    "values": [],
                    "examples": [
                        "total"
                    ]
                },
                {
                    "name": "page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "default": 1,
                        "example": 22108
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        22108
                    ]
                },
                {
                    "name": "per_page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "minimum": 1,
                        "example": 6487
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        6487
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneShowDomainV2",
        "functionName": "domainZoneshowdomainv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/domains/{domain}",
        "summary": "Show Domain",
        "description": "Show a Domain",
        "tags": [
            "Domain"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "domain",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/domains/%7Bdomain%7D",
            "operationId": "Domain/&/ZoneShowDomainV2",
            "summary": "Show Domain",
            "categoryPath": [
                "Domain & Zone",
                "Domain"
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
                    "name": "domain",
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
                "200"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneCheckDNSSECV2",
        "functionName": "domainZonecheckdnssecv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/domains/{domain}/dnssec/check",
        "summary": "Check DNSSEC",
        "description": "Check the status of the DNSSEC.",
        "tags": [
            "Domain > DNSSEC"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "domain",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/domains/%7Bdomain%7D/dnssec/check",
            "operationId": "Domain/&/ZoneCheckDNSSECV2",
            "summary": "Check DNSSEC",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "DNSSEC"
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
                    "name": "domain",
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
        "operationId": "Domain/&/ZoneDisableDNSSECV2",
        "functionName": "domainZonedisablednssecv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/domains/{domain}/dnssec/disable",
        "summary": "Disable DNSSEC",
        "description": "Disable DNSSEC",
        "tags": [
            "Domain > DNSSEC"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "domain",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/domains/%7Bdomain%7D/dnssec/disable",
            "operationId": "Domain/&/ZoneDisableDNSSECV2",
            "summary": "Disable DNSSEC",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "DNSSEC"
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
                    "name": "domain",
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
        "operationId": "Domain/&/ZoneEnableDNSSECV2",
        "functionName": "domainZoneenablednssecv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/domains/domains/{domain}/dnssec/enable",
        "summary": "Enable DNSSEC",
        "description": "Enable DNSSEC",
        "tags": [
            "Domain > DNSSEC"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "domain",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/domains/domains/%7Bdomain%7D/dnssec/enable",
            "operationId": "Domain/&/ZoneEnableDNSSECV2",
            "summary": "Enable DNSSEC",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "DNSSEC"
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
                    "name": "domain",
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
        "operationId": "Domain/&/ZoneUpdateNameserversV2",
        "functionName": "domainZoneupdatenameserversv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "PUT",
        "path": "/2/domains/domains/{domain}/nameservers",
        "summary": "Update Nameservers",
        "description": "Update Domain's Nameservers",
        "tags": [
            "Domain > Nameservers"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "domain",
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
            "url": "https://developer.infomaniak.com/docs/api/put/2/domains/domains/%7Bdomain%7D/nameservers",
            "operationId": "Domain/&/ZoneUpdateNameserversV2",
            "summary": "Update Nameservers",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Nameservers"
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
                    "name": "domain",
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
        "operationId": "Domain/&/ZoneListZonesV2",
        "functionName": "domainZonelistzonesv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/domains/domains/{domain}/zones",
        "summary": "List Zones",
        "description": "List all Zones (base zone and delegated zones)",
        "tags": [
            "Domain > Zone"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "domain",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "return",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/domains/domains/%7Bdomain%7D/zones",
            "operationId": "Domain/&/ZoneListZonesV2",
            "summary": "List Zones",
            "categoryPath": [
                "Domain & Zone",
                "Domain",
                "Zone"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": null,
            "authUser": true,
            "version": 2,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "paginable",
                    "description": "Group a request's items in pages and define which page you want to display\n",
                    "values": []
                }
            ],
            "parameters": [
                {
                    "name": "domain",
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
                },
                {
                    "name": "return",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "return",
                        "enum": [
                            "total"
                        ],
                        "type": "string",
                        "description": "Specify what to return. Use \"total\" to return only the total count of zones",
                        "nullable": true,
                        "example": "total"
                    },
                    "enumValues": [
                        "total"
                    ],
                    "values": [],
                    "examples": [
                        "total"
                    ]
                },
                {
                    "name": "return",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* :  If you pass this parameter with the value `total`, then the response will be the number of items in the collection, instead of the items themselves.<br />\nPart of the `total` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "string",
                    "schema": {
                        "enum": [
                            "total"
                        ],
                        "type": "string",
                        "example": "total"
                    },
                    "enumValues": [
                        "total"
                    ],
                    "values": [],
                    "examples": [
                        "total"
                    ]
                },
                {
                    "name": "page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "default": 1,
                        "example": 25960
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        25960
                    ]
                },
                {
                    "name": "per_page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "minimum": 1,
                        "example": 10036
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        10036
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneListTLDsV2",
        "functionName": "domainZonelisttldsv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/tld",
        "summary": "List TLDs",
        "description": "List all TLDs",
        "tags": [
            "Tld"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "with",
                "in": "query",
                "required": false
            },
            {
                "name": "groups",
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/tld",
            "operationId": "Domain/&/ZoneListTLDsV2",
            "summary": "List TLDs",
            "categoryPath": [
                "Domain & Zone",
                "Tld"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
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
                        "example": "time",
                        "enum": [
                            "length",
                            "periods",
                            "groups",
                            "transfer_method",
                            "is_idn",
                            "support",
                            "time"
                        ]
                    },
                    "enumValues": [
                        "length",
                        "periods",
                        "groups",
                        "transfer_method",
                        "is_idn",
                        "support",
                        "time"
                    ],
                    "values": [
                        "length",
                        "periods",
                        "groups",
                        "transfer_method",
                        "is_idn",
                        "support",
                        "time"
                    ],
                    "examples": [
                        "time"
                    ]
                },
                {
                    "name": "groups",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "array",
                    "schema": {
                        "title": "groups",
                        "type": "array",
                        "items": {
                            "title": "item",
                            "type": "integer"
                        },
                        "description": "Filter by groups",
                        "nullable": true,
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneShowTLDV2",
        "functionName": "domainZoneshowtldv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/tld/{tld}",
        "summary": "Show TLD",
        "description": "Show a TLD",
        "tags": [
            "Tld"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "tld",
                "in": "path",
                "required": true
            }
        ],
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/tld/%7Btld%7D",
            "operationId": "Domain/&/ZoneShowTLDV2",
            "summary": "Show TLD",
            "categoryPath": [
                "Domain & Zone",
                "Tld"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 2,
            "capabilities": [],
            "parameters": [
                {
                    "name": "tld",
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
                },
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
                        "example": "periods",
                        "enum": [
                            "length",
                            "periods",
                            "groups",
                            "transfer_method",
                            "fields",
                            "is_idn",
                            "idn",
                            "support",
                            "time"
                        ]
                    },
                    "enumValues": [
                        "length",
                        "periods",
                        "groups",
                        "transfer_method",
                        "fields",
                        "is_idn",
                        "idn",
                        "support",
                        "time"
                    ],
                    "values": [
                        "length",
                        "periods",
                        "groups",
                        "transfer_method",
                        "fields",
                        "is_idn",
                        "idn",
                        "support",
                        "time"
                    ],
                    "examples": [
                        "periods"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneDeleteZoneV2",
        "functionName": "domainZonedeletezonev2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "DELETE",
        "path": "/2/zones/{zone}",
        "summary": "Delete zone",
        "description": "Delete a given zone",
        "tags": [
            "Zone"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "zone",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/2/zones/%7Bzone%7D",
            "operationId": "Domain/&/ZoneDeleteZoneV2",
            "summary": "Delete zone",
            "categoryPath": [
                "Domain & Zone",
                "Zone"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                "401",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneShowZoneV2",
        "functionName": "domainZoneshowzonev2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/zones/{zone}",
        "summary": "Show zone",
        "description": "Get zone information",
        "tags": [
            "Zone"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/zones/%7Bzone%7D",
            "operationId": "Domain/&/ZoneShowZoneV2",
            "summary": "Show zone",
            "categoryPath": [
                "Domain & Zone",
                "Zone"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "label",
                        "enum": [
                            "skel",
                            "records",
                            "records_description",
                            "idn",
                            "label"
                        ]
                    },
                    "enumValues": [
                        "skel",
                        "records",
                        "records_description",
                        "idn",
                        "label"
                    ],
                    "values": [
                        "skel",
                        "records",
                        "records_description",
                        "idn",
                        "label"
                    ],
                    "examples": [
                        "label"
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
        "operationId": "Domain/&/ZoneStoreZoneV2",
        "functionName": "domainZonestorezonev2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/zones/{zone}",
        "summary": "Store zone",
        "description": "Store a zone<br/>\n⚠️ You do not need to add a delegated subzone if it is delegated on the same server. We recommended adding dns records directly to the parent zone.",
        "tags": [
            "Zone"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "with",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/zones/%7Bzone%7D",
            "operationId": "Domain/&/ZoneStoreZoneV2",
            "summary": "Store zone",
            "categoryPath": [
                "Domain & Zone",
                "Zone"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "records",
                        "enum": [
                            "skel",
                            "records",
                            "records_description",
                            "idn"
                        ]
                    },
                    "enumValues": [
                        "skel",
                        "records",
                        "records_description",
                        "idn"
                    ],
                    "values": [
                        "skel",
                        "records",
                        "records_description",
                        "idn"
                    ],
                    "examples": [
                        "records"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "400",
                "401",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneUpdateZoneV2",
        "functionName": "domainZoneupdatezonev2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "PUT",
        "path": "/2/zones/{zone}",
        "summary": "Update zone",
        "description": "Update a given zone",
        "tags": [
            "Zone"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "with",
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
            "url": "https://developer.infomaniak.com/docs/api/put/2/zones/%7Bzone%7D",
            "operationId": "Domain/&/ZoneUpdateZoneV2",
            "summary": "Update zone",
            "categoryPath": [
                "Domain & Zone",
                "Zone"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "records_description",
                        "enum": [
                            "skel",
                            "records",
                            "records_description",
                            "idn"
                        ]
                    },
                    "enumValues": [
                        "skel",
                        "records",
                        "records_description",
                        "idn"
                    ],
                    "values": [
                        "skel",
                        "records",
                        "records_description",
                        "idn"
                    ],
                    "examples": [
                        "records_description"
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
        "operationId": "Domain/&/ZoneZoneExistsV2",
        "functionName": "domainZonezoneexistsv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/zones/{zone}/exists",
        "summary": "Zone exists",
        "description": "Check if zone exists",
        "tags": [
            "Zone"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "zone",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/zones/%7Bzone%7D/exists",
            "operationId": "Domain/&/ZoneZoneExistsV2",
            "summary": "Zone exists",
            "categoryPath": [
                "Domain & Zone",
                "Zone"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneListDnsRecordsV2",
        "functionName": "domainZonelistdnsrecordsv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/zones/{zone}/records",
        "summary": "List dns records",
        "description": "Retrieve all dns record for a given zone",
        "tags": [
            "Zone > Dns Record"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "with",
                "in": "query",
                "required": false
            },
            {
                "name": "filter",
                "in": "query",
                "required": false
            },
            {
                "name": "search",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/zones/%7Bzone%7D/records",
            "operationId": "Domain/&/ZoneListDnsRecordsV2",
            "summary": "List dns records",
            "categoryPath": [
                "Domain & Zone",
                "Zone",
                "Dns Record"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 2,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "paginable",
                    "description": "Group a request's items in pages and define which page you want to display\n",
                    "values": []
                },
                {
                    "name": "sortable",
                    "description": "",
                    "values": []
                }
            ],
            "parameters": [
                {
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "label",
                        "enum": [
                            "idn",
                            "records_description",
                            "label"
                        ]
                    },
                    "enumValues": [
                        "idn",
                        "records_description",
                        "label"
                    ],
                    "values": [
                        "idn",
                        "records_description",
                        "label"
                    ],
                    "examples": [
                        "label"
                    ]
                },
                {
                    "name": "filter",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "filter",
                        "type": "object",
                        "properties": {
                            "source": {
                                "title": "source",
                                "maxLength": 255,
                                "type": "string",
                                "description": "Filter dns record by source",
                                "example": "filter[source]=www"
                            },
                            "types": {
                                "title": "types",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "A",
                                        "AAAA",
                                        "CAA",
                                        "CNAME",
                                        "DNAME",
                                        "DNSKEY",
                                        "DS",
                                        "MX",
                                        "NS",
                                        "PTR",
                                        "SMIMEA",
                                        "SOA",
                                        "SRV",
                                        "SSHFP",
                                        "TLSA",
                                        "TXT"
                                    ],
                                    "type": "string",
                                    "description": "Filter dns record by types",
                                    "example": "filter[types][]=A"
                                },
                                "description": "Filter dns record by types",
                                "example": "filter[types][]=A"
                            }
                        },
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "search",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "search",
                        "type": "string",
                        "description": "Search in all dns record",
                        "example": "example"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "example"
                    ]
                },
                {
                    "name": "return",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* :  If you pass this parameter with the value `total`, then the response will be the number of items in the collection, instead of the items themselves.<br />\nPart of the `total` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "string",
                    "schema": {
                        "enum": [
                            "total"
                        ],
                        "type": "string",
                        "example": "total"
                    },
                    "enumValues": [
                        "total"
                    ],
                    "values": [],
                    "examples": [
                        "total"
                    ]
                },
                {
                    "name": "page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the page number<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "default": 1,
                        "example": 74788
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        74788
                    ]
                },
                {
                    "name": "per_page",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "description": "*Optional parameter* that define the number of items per page<br />\nPart of the `pagination` capacity\n",
                        "type": "integer",
                        "minimum": 1,
                        "example": 92279
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        92279
                    ]
                },
                {
                    "name": "order_by",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the field used for sorting<br />\nPart of the `sort` capacity\n",
                    "style": "form",
                    "explode": false,
                    "schemaType": null,
                    "schema": {
                        "description": "*Optional parameter* that define the field used for sorting<br />\nPart of the `sort` capacity\n",
                        "oneOf": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            }
                        ],
                        "enum": [
                            "id",
                            "source_idn",
                            "target",
                            "type",
                            "ttl",
                            "updated_at"
                        ]
                    },
                    "enumValues": [
                        "id",
                        "source_idn",
                        "target",
                        "type",
                        "ttl",
                        "updated_at"
                    ],
                    "values": [],
                    "examples": [
                        "id"
                    ]
                },
                {
                    "name": "order",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the default sort order<br />\nPart of the `sort` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "string",
                    "schema": {
                        "enum": [
                            "asc",
                            "desc"
                        ],
                        "type": "string",
                        "default": "asc",
                        "example": "asc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        "asc"
                    ]
                },
                {
                    "name": "order_for",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the sorting order for a field<br />\nBy default **order** is used<br />\nPart of the `sort` capacity\n",
                    "style": "deepObject",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "description": "*Optional parameter* that define the sorting order for a field<br />\nBy default **order** is used<br />\nPart of the `sort` capacity\n",
                        "type": "object",
                        "enum": [
                            "asc",
                            "desc"
                        ],
                        "example": "order_for[id]=asc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        {
                            "id": "asc"
                        },
                        "order_for[id]=asc"
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
        "operationId": "Domain/&/ZoneStoreDnsRecordV2",
        "functionName": "domainZonestorednsrecordv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "POST",
        "path": "/2/zones/{zone}/records",
        "summary": "Store dns record",
        "description": "Create a dns record in a given zone",
        "tags": [
            "Zone > Dns Record"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "with",
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/zones/%7Bzone%7D/records",
            "operationId": "Domain/&/ZoneStoreDnsRecordV2",
            "summary": "Store dns record",
            "categoryPath": [
                "Domain & Zone",
                "Zone",
                "Dns Record"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "idn",
                        "enum": [
                            "idn",
                            "alias",
                            "records_description",
                            "label"
                        ]
                    },
                    "enumValues": [
                        "idn",
                        "alias",
                        "records_description",
                        "label"
                    ],
                    "values": [
                        "idn",
                        "alias",
                        "records_description",
                        "label"
                    ],
                    "examples": [
                        "idn"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "400",
                "401",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneDeleteDnsRecordV2",
        "functionName": "domainZonedeletednsrecordv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "DELETE",
        "path": "/2/zones/{zone}/records/{record}",
        "summary": "Delete dns record",
        "description": "Delete a dns record",
        "tags": [
            "Zone > Dns Record"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            },
            {
                "name": "record",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/2/zones/%7Bzone%7D/records/%7Brecord%7D",
            "operationId": "Domain/&/ZoneDeleteDnsRecordV2",
            "summary": "Delete dns record",
            "categoryPath": [
                "Domain & Zone",
                "Zone",
                "Dns Record"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "record",
                    "in": "path",
                    "required": true,
                    "description": "Record identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 47789
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        47789
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
        "operationId": "Domain/&/ZoneShowDnsRecordV2",
        "functionName": "domainZoneshowdnsrecordv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/zones/{zone}/records/{record}",
        "summary": "Show dns record",
        "description": "Retrieve one dns record for a given zone",
        "tags": [
            "Zone > Dns Record"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            },
            {
                "name": "record",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/zones/%7Bzone%7D/records/%7Brecord%7D",
            "operationId": "Domain/&/ZoneShowDnsRecordV2",
            "summary": "Show dns record",
            "categoryPath": [
                "Domain & Zone",
                "Zone",
                "Dns Record"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "record",
                    "in": "path",
                    "required": true,
                    "description": "Record identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 91183
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        91183
                    ]
                },
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
                        "example": "records_description",
                        "enum": [
                            "idn",
                            "alias",
                            "records_description",
                            "label"
                        ]
                    },
                    "enumValues": [
                        "idn",
                        "alias",
                        "records_description",
                        "label"
                    ],
                    "values": [
                        "idn",
                        "alias",
                        "records_description",
                        "label"
                    ],
                    "examples": [
                        "records_description"
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
        "operationId": "Domain/&/ZoneUpdateDnsRecordV2",
        "functionName": "domainZoneupdatednsrecordv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "PUT",
        "path": "/2/zones/{zone}/records/{record}",
        "summary": "Update dns record",
        "description": "Update a dns record",
        "tags": [
            "Zone > Dns Record"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            },
            {
                "name": "record",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "with",
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
            "url": "https://developer.infomaniak.com/docs/api/put/2/zones/%7Bzone%7D/records/%7Brecord%7D",
            "operationId": "Domain/&/ZoneUpdateDnsRecordV2",
            "summary": "Update dns record",
            "categoryPath": [
                "Domain & Zone",
                "Zone",
                "Dns Record"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "record",
                    "in": "path",
                    "required": true,
                    "description": "Record identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 45898
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        45898
                    ]
                },
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
                        "example": "idn",
                        "enum": [
                            "idn",
                            "alias",
                            "records_description",
                            "label"
                        ]
                    },
                    "enumValues": [
                        "idn",
                        "alias",
                        "records_description",
                        "label"
                    ],
                    "values": [
                        "idn",
                        "alias",
                        "records_description",
                        "label"
                    ],
                    "examples": [
                        "idn"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "400",
                "401",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Domain/&/ZoneCheckDnsRecordsV2",
        "functionName": "domainZonecheckdnsrecordsv2",
        "originalOperationId": null,
        "domain": "domains",
        "method": "GET",
        "path": "/2/zones/{zone}/records/{record}/check",
        "summary": "Check dns records",
        "description": "Verify that the given dns record exists and resolve on name servers master and it's slave",
        "tags": [
            "Zone > Dns Record"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "zone",
                "in": "path",
                "required": true
            },
            {
                "name": "record",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/zones/%7Bzone%7D/records/%7Brecord%7D/check",
            "operationId": "Domain/&/ZoneCheckDnsRecordsV2",
            "summary": "Check dns records",
            "categoryPath": [
                "Domain & Zone",
                "Zone",
                "Dns Record"
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
                    "name": "zone",
                    "in": "path",
                    "required": true,
                    "description": "A domain name or a sub delegated zone",
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
                    "name": "record",
                    "in": "path",
                    "required": true,
                    "description": "Record identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48138
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48138
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "400",
                "401",
                "404"
            ]
        }
    }
];
//# sourceMappingURL=domains.js.map