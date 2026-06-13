export const publicCloudOperations = [
    {
        "operationId": "Public/CloudListAllPublicClouds",
        "functionName": "publicCloudlistallpublicclouds",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds",
        "summary": "List all public clouds",
        "description": "List all public clouds for the given account",
        "tags": [
            "Product Management"
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
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "filter",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds",
            "operationId": "Public/CloudListAllPublicClouds",
            "summary": "List all public clouds",
            "categoryPath": [
                "Public Cloud",
                "Product Management"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "offsetable",
                    "description": "Limit a request's results and define from which item you want the results\n",
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "status",
                        "enum": [
                            "status",
                            "tags"
                        ]
                    },
                    "enumValues": [
                        "status",
                        "tags"
                    ],
                    "values": [
                        "status",
                        "tags"
                    ],
                    "examples": [
                        "status"
                    ]
                },
                {
                    "name": "account_id",
                    "in": "query",
                    "required": true,
                    "description": "The account identifier",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "account_id",
                        "type": "integer",
                        "description": "Unique identifier of the `account` that is related to the resource `{name}`",
                        "example": 5201
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5201
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
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search for filtered results",
                                "example": "My Public Cloud"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                    "name": "limit",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items to return<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 25246
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        25246
                    ]
                },
                {
                    "name": "skip",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the index of the first item to return (0 = first item)<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 46084
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        46084
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
                        "example": 95571
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        95571
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
                        "example": 40044
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        40044
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
                            "customer_name",
                            "internal_name",
                            "expired_at",
                            "price",
                            "project_count"
                        ]
                    },
                    "enumValues": [
                        "customer_name",
                        "internal_name",
                        "expired_at",
                        "price",
                        "project_count"
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
                        "example": "desc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        "asc",
                        "desc"
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
                        "example": "order_for[customer_name]=asc"
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
                        "order_for[customer_name]=asc"
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
        "operationId": "Public/CloudGetPublicCloudInfo",
        "functionName": "publicCloudgetpubliccloudinfo",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}",
        "summary": "Get public cloud info",
        "description": "Get a public cloud's details",
        "tags": [
            "Product Management"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D",
            "operationId": "Public/CloudGetPublicCloudInfo",
            "summary": "Get public cloud info",
            "categoryPath": [
                "Public Cloud",
                "Product Management"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Unique identifier of the Public Cloud product",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 1176
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        1176
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
                        "example": "status",
                        "enum": [
                            "status",
                            "tags"
                        ]
                    },
                    "enumValues": [
                        "status",
                        "tags"
                    ],
                    "values": [
                        "status",
                        "tags"
                    ],
                    "examples": [
                        "status"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudUpdateAPublicCloud",
        "functionName": "publicCloudupdateapubliccloud",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}",
        "summary": "Update a public cloud",
        "description": "Update the given public cloud",
        "tags": [
            "Product Management"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D",
            "operationId": "Public/CloudUpdateAPublicCloud",
            "summary": "Update a public cloud",
            "categoryPath": [
                "Public Cloud",
                "Product Management"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Unique identifier of the Public Cloud product",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 64919
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        64919
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListProjects",
        "functionName": "publicCloudlistprojects",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects",
        "summary": "List projects",
        "description": "List all public cloud projects of the given public cloud",
        "tags": [
            "Projects"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects",
            "operationId": "Public/CloudListProjects",
            "summary": "List projects",
            "categoryPath": [
                "Public Cloud",
                "Projects"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "offsetable",
                    "description": "Limit a request's results and define from which item you want the results\n",
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
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Unique identifier of the Public Cloud product",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68928
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68928
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
                        "example": "services",
                        "enum": [
                            "services"
                        ]
                    },
                    "enumValues": [
                        "services"
                    ],
                    "values": [
                        "services"
                    ],
                    "examples": [
                        "services"
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
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search for filtered results",
                                "example": "My Public Cloud"
                            },
                            "status": {
                                "title": "status",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "blocked",
                                        "blocking",
                                        "creating",
                                        "deleted",
                                        "deleting",
                                        "error",
                                        "ok",
                                        "restoring",
                                        "suspended",
                                        "suspending",
                                        "updating"
                                    ],
                                    "type": "string",
                                    "description": "Filter by status"
                                },
                                "description": "Filter by status"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                    "name": "limit",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items to return<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 92618
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        92618
                    ]
                },
                {
                    "name": "skip",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the index of the first item to return (0 = first item)<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 88323
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        88323
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
                        "example": 77583
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        77583
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
                        "example": 58031
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        58031
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
                            "name",
                            "open_stack_name",
                            "resource_level",
                            "price",
                            "user_count",
                            "status"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "open_stack_name",
                        "resource_level",
                        "price",
                        "user_count",
                        "status"
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
                        "example": "desc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        "asc",
                        "desc"
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
                        "example": "order_for[name]=asc"
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
                        "order_for[name]=asc"
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
        "operationId": "Public/CloudCreateProject",
        "functionName": "publicCloudcreateproject",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects",
        "summary": "Create project",
        "description": "Create a new public cloud project with user",
        "tags": [
            "Projects"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects",
            "operationId": "Public/CloudCreateProject",
            "summary": "Create project",
            "categoryPath": [
                "Public Cloud",
                "Projects"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "asynchronous",
                    "description": "This route response is asynchronous\n",
                    "values": [
                        "always"
                    ]
                }
            ],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Unique identifier of the Public Cloud",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95337
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95337
                    ]
                }
            ],
            "responseStatuses": [
                "202"
            ]
        }
    },
    {
        "operationId": "Public/CloudDeleteProject",
        "functionName": "publicClouddeleteproject",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}",
        "summary": "Delete project",
        "description": "Delete the given public cloud project and it's users (the project can be restored during 7 days)",
        "tags": [
            "Projects"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D",
            "operationId": "Public/CloudDeleteProject",
            "summary": "Delete project",
            "categoryPath": [
                "Public Cloud",
                "Projects"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "asynchronous",
                    "description": "This route response is asynchronous\n",
                    "values": [
                        "always"
                    ]
                }
            ],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 12725
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        12725
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 90387
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        90387
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "202",
                "400"
            ]
        }
    },
    {
        "operationId": "Public/CloudGetProjectDetails",
        "functionName": "publicCloudgetprojectdetails",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}",
        "summary": "Get project details",
        "description": "Get the given public cloud project details",
        "tags": [
            "Projects"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D",
            "operationId": "Public/CloudGetProjectDetails",
            "summary": "Get project details",
            "categoryPath": [
                "Public Cloud",
                "Projects"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18148
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18148
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51838
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51838
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
                        "example": "services",
                        "enum": [
                            "services"
                        ]
                    },
                    "enumValues": [
                        "services"
                    ],
                    "values": [
                        "services"
                    ],
                    "examples": [
                        "services"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudUpdateProject",
        "functionName": "publicCloudupdateproject",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}",
        "summary": "Update project",
        "description": "Update the given public cloud project",
        "tags": [
            "Projects"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D",
            "operationId": "Public/CloudUpdateProject",
            "summary": "Update project",
            "categoryPath": [
                "Public Cloud",
                "Projects"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "asynchronous",
                    "description": "This route response is asynchronous\n",
                    "values": [
                        "always"
                    ]
                }
            ],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 77554
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        77554
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48790
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48790
                    ]
                }
            ],
            "responseStatuses": [
                "202"
            ]
        }
    },
    {
        "operationId": "Public/CloudListDatabaseServices",
        "functionName": "publicCloudlistdatabaseservices",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas",
        "summary": "List Database Services",
        "description": "List all Database Services for the given public cloud project",
        "tags": [
            "Database Service"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas",
            "operationId": "Public/CloudListDatabaseServices",
            "summary": "List Database Services",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
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
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 14944
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        14944
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 69480
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        69480
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
                        "example": "tags",
                        "enum": [
                            "projects",
                            "packs",
                            "tags",
                            "connection",
                            "configuration",
                            "backups"
                        ]
                    },
                    "enumValues": [
                        "projects",
                        "packs",
                        "tags",
                        "connection",
                        "configuration",
                        "backups"
                    ],
                    "values": [
                        "projects",
                        "packs",
                        "tags",
                        "connection",
                        "configuration",
                        "backups"
                    ],
                    "examples": [
                        "tags"
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
                            "currency": {
                                "title": "currency",
                                "enum": [
                                    "CHF",
                                    "EUR"
                                ],
                                "type": "string"
                            },
                            "regions": {
                                "title": "regions",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "dc4-a"
                                    ],
                                    "type": "string",
                                    "description": "Filter by region"
                                },
                                "description": "Filter by regions"
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search by name or OpenStack name",
                                "example": "My Database Service"
                            },
                            "statuses": {
                                "title": "statuses",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "error",
                                        "initializing",
                                        "paused",
                                        "ready",
                                        "stopping",
                                        "unknown"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Status",
                                    "example": "Inactive"
                                },
                                "description": "Filter by Statuses"
                            },
                            "tags": {
                                "title": "tags",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer",
                                    "description": "Filter by Tag Identifier"
                                },
                                "description": "Filter by Tag Identifiers"
                            },
                            "types": {
                                "title": "types",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "mysql"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Type",
                                    "example": "mysql"
                                },
                                "description": "Filter by Statuses"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                        "example": 58319
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        58319
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
                        "example": 6131
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        6131
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
                            "name",
                            "status",
                            "region",
                            "instance_type",
                            "storage"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "status",
                        "region",
                        "instance_type",
                        "storage"
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
                        "example": "desc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        "asc",
                        "desc"
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
                        "example": "order_for[name]=asc"
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
                        "order_for[name]=asc"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateDatabaseService",
        "functionName": "publicCloudcreatedatabaseservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas",
        "summary": "Create Database Service",
        "description": "Create a new Database Service for the given public cloud project",
        "tags": [
            "Database Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas",
            "operationId": "Public/CloudCreateDatabaseService",
            "summary": "Create Database Service",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 12891
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        12891
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55582
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55582
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "Public/CloudDeleteDatabaseService",
        "functionName": "publicClouddeletedatabaseservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}",
        "summary": "Delete Database Service",
        "description": "Delete the given Database Service",
        "tags": [
            "Database Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "keep_backup_files",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D",
            "operationId": "Public/CloudDeleteDatabaseService",
            "summary": "Delete Database Service",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98340
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98340
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 87076
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        87076
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 50057
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        50057
                    ]
                },
                {
                    "name": "keep_backup_files",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "keep_backup_files",
                        "type": "boolean",
                        "description": "Should the database backup files be kept and not deleted",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudGetDatabaseService",
        "functionName": "publicCloudgetdatabaseservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}",
        "summary": "Get Database Service",
        "description": "Return an instance of Database Service",
        "tags": [
            "Database Service"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D",
            "operationId": "Public/CloudGetDatabaseService",
            "summary": "Get Database Service",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 21598
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        21598
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 87830
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        87830
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 76722
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        76722
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
                        "example": "backups",
                        "enum": [
                            "projects",
                            "packs",
                            "tags",
                            "connection",
                            "configuration",
                            "backups"
                        ]
                    },
                    "enumValues": [
                        "projects",
                        "packs",
                        "tags",
                        "connection",
                        "configuration",
                        "backups"
                    ],
                    "values": [
                        "projects",
                        "packs",
                        "tags",
                        "connection",
                        "configuration",
                        "backups"
                    ],
                    "examples": [
                        "backups"
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
                            "currency": {
                                "title": "currency",
                                "enum": [
                                    "CHF",
                                    "EUR"
                                ],
                                "type": "string"
                            }
                        },
                        "description": "Available filters",
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
        "operationId": "Public/CloudUpdateDatabaseService",
        "functionName": "publicCloudupdatedatabaseservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}",
        "summary": "Update Database Service",
        "description": "Update the given Database Service",
        "tags": [
            "Database Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D",
            "operationId": "Public/CloudUpdateDatabaseService",
            "summary": "Update Database Service",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 93337
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        93337
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 7555
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        7555
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16814
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16814
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListBackupSchedules",
        "functionName": "publicCloudlistbackupschedules",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backup_schedules",
        "summary": "List Backup Schedules",
        "description": "List all backup schedules for given Database Service",
        "tags": [
            "Database Service > Backups > Scheduled"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backup_schedules",
            "operationId": "Public/CloudListBackupSchedules",
            "summary": "List Backup Schedules",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups",
                "Scheduled"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 35407
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        35407
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 91411
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        91411
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59163
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59163
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateBackupSchedule",
        "functionName": "publicCloudcreatebackupschedule",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backup_schedules",
        "summary": "Create Backup Schedule",
        "description": "",
        "tags": [
            "Database Service > Backups > Scheduled"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backup_schedules",
            "operationId": "Public/CloudCreateBackupSchedule",
            "summary": "Create Backup Schedule",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups",
                "Scheduled"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68546
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68546
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51143
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51143
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 87782
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        87782
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "400"
            ]
        }
    },
    {
        "operationId": "Public/CloudDeleteBackupSchedule",
        "functionName": "publicClouddeletebackupschedule",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backup_schedules/{backup_schedule_id}",
        "summary": "Delete Backup Schedule",
        "description": "Delete the backup schedule from the given Database Service",
        "tags": [
            "Database Service > Backups > Scheduled"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "backup_schedule_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backup_schedules/%7Bbackup_schedule_id%7D",
            "operationId": "Public/CloudDeleteBackupSchedule",
            "summary": "Delete Backup Schedule",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups",
                "Scheduled"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 15744
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        15744
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 52939
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        52939
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65828
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65828
                    ]
                },
                {
                    "name": "backup_schedule_id",
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
        "operationId": "Public/CloudGetBackupSchedule",
        "functionName": "publicCloudgetbackupschedule",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backup_schedules/{backup_schedule_id}",
        "summary": "Get Backup Schedule",
        "description": "Get the Backup Schedule for given Database Service",
        "tags": [
            "Database Service > Backups > Scheduled"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "backup_schedule_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backup_schedules/%7Bbackup_schedule_id%7D",
            "operationId": "Public/CloudGetBackupSchedule",
            "summary": "Get Backup Schedule",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups",
                "Scheduled"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 21017
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        21017
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 64830
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        64830
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 962
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        962
                    ]
                },
                {
                    "name": "backup_schedule_id",
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
        "operationId": "Public/CloudUpdateBackupSchedule",
        "functionName": "publicCloudupdatebackupschedule",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backup_schedules/{backup_schedule_id}",
        "summary": "Update Backup Schedule",
        "description": "",
        "tags": [
            "Database Service > Backups > Scheduled"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "backup_schedule_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backup_schedules/%7Bbackup_schedule_id%7D",
            "operationId": "Public/CloudUpdateBackupSchedule",
            "summary": "Update Backup Schedule",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups",
                "Scheduled"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37390
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37390
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65271
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65271
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33999
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33999
                    ]
                },
                {
                    "name": "backup_schedule_id",
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
        "operationId": "Public/CloudListBackups",
        "functionName": "publicCloudlistbackups",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backups",
        "summary": "List Backups",
        "description": "List all backups for given Database Service",
        "tags": [
            "Database Service > Backups"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "filter",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backups",
            "operationId": "Public/CloudListBackups",
            "summary": "List Backups",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": true,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "sortable",
                    "description": "",
                    "values": []
                }
            ],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 36363
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        36363
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 80496
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        80496
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 57687
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        57687
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
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search by name or OpenStack name",
                                "example": "My Database Service"
                            },
                            "statuses": {
                                "title": "statuses",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "Error",
                                        "Failed",
                                        "Running",
                                        "Starting",
                                        "Succeeded",
                                        "Unknown"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Status",
                                    "example": "Inactive"
                                },
                                "description": "Filter by Statuses"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                            "created_at",
                            "completed_at",
                            "status",
                            "location"
                        ]
                    },
                    "enumValues": [
                        "created_at",
                        "completed_at",
                        "status",
                        "location"
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
                        "example": "order_for[created_at]=asc"
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
                        "order_for[created_at]=asc"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudDeleteBackup",
        "functionName": "publicClouddeletebackup",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backups/{backup_id}",
        "summary": "Delete Backup",
        "description": "Delete the given Database Service backup",
        "tags": [
            "Database Service > Backups"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "backup_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backups/%7Bbackup_id%7D",
            "operationId": "Public/CloudDeleteBackup",
            "summary": "Delete Backup",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18179
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18179
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 1785
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        1785
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 1836
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        1836
                    ]
                },
                {
                    "name": "backup_id",
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
        "operationId": "Public/CloudGetBackup",
        "functionName": "publicCloudgetbackup",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/backups/{backup_id}",
        "summary": "Get Backup",
        "description": "Get the current information for the given Database Service backup",
        "tags": [
            "Database Service > Backups"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "backup_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/backups/%7Bbackup_id%7D",
            "operationId": "Public/CloudGetBackup",
            "summary": "Get Backup",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Backups"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 10917
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10917
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 61339
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        61339
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 47116
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        47116
                    ]
                },
                {
                    "name": "backup_id",
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
        "operationId": "Public/CloudRemoveConfiguration",
        "functionName": "publicCloudremoveconfiguration",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/configurations",
        "summary": "Remove Configuration",
        "description": "Remove the configuration from the given Database Service",
        "tags": [
            "Database Service > Configurations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/configurations",
            "operationId": "Public/CloudRemoveConfiguration",
            "summary": "Remove Configuration",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Configurations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 88821
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        88821
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 49217
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        49217
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98347
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98347
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListConfiguration",
        "functionName": "publicCloudlistconfiguration",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/configurations",
        "summary": "List Configuration",
        "description": "List the configuration for given Database Service",
        "tags": [
            "Database Service > Configurations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/configurations",
            "operationId": "Public/CloudListConfiguration",
            "summary": "List Configuration",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Configurations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 7981
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        7981
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 26442
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        26442
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 10970
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10970
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateUpdateConfiguration",
        "functionName": "publicCloudcreateupdateconfiguration",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PUT",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/configurations",
        "summary": "Create/Update Configuration",
        "description": "Add/Update the configuration for the given Database Service",
        "tags": [
            "Database Service > Configurations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/configurations",
            "operationId": "Public/CloudCreateUpdateConfiguration",
            "summary": "Create/Update Configuration",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Configurations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79426
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79426
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 14862
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        14862
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 69073
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        69073
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "delete_1_public_clouds_public_cloud_id_projects_public_cloud_project_id_dbaas_dbaas_id_ip_filters",
        "functionName": "delete1PublicCloudsPublicCloudIdProjectsPublicCloudProjectIdDbaasDbaasIdIpFilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/ip_filters",
        "summary": "Remove IP Filters",
        "description": "Remove all IP filters from the given Database Service",
        "tags": [
            "Database Service > IP Filters"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/ip_filters",
            "operationId": null,
            "summary": "Remove IP Filters",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "IP Filters"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65841
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65841
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 14642
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        14642
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 41333
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        41333
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_public_clouds_public_cloud_id_projects_public_cloud_project_id_dbaas_dbaas_id_ip_filters",
        "functionName": "get1PublicCloudsPublicCloudIdProjectsPublicCloudProjectIdDbaasDbaasIdIpFilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/ip_filters",
        "summary": "List IP Filters",
        "description": "List all IP filters for given Database Service",
        "tags": [
            "Database Service > IP Filters"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/ip_filters",
            "operationId": null,
            "summary": "List IP Filters",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "IP Filters"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 32185
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        32185
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 29385
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        29385
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 3484
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        3484
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "put_1_public_clouds_public_cloud_id_projects_public_cloud_project_id_dbaas_dbaas_id_ip_filters",
        "functionName": "put1PublicCloudsPublicCloudIdProjectsPublicCloudProjectIdDbaasDbaasIdIpFilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PUT",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/ip_filters",
        "summary": "Create/Update IP Filters",
        "description": "Add/Update the list of IP filters for the given Database Service",
        "tags": [
            "Database Service > IP Filters"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/ip_filters",
            "operationId": null,
            "summary": "Create/Update IP Filters",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "IP Filters"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 63394
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        63394
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 89191
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        89191
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 87045
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        87045
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListLogs",
        "functionName": "publicCloudlistlogs",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/logs",
        "summary": "List Logs",
        "description": "List all Database Service logs for the given Database Service",
        "tags": [
            "Database Service > Logs"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "direction",
                "in": "query",
                "required": false
            },
            {
                "name": "filter",
                "in": "query",
                "required": false
            },
            {
                "name": "from_date",
                "in": "query",
                "required": false
            },
            {
                "name": "page",
                "in": "query",
                "required": false
            },
            {
                "name": "per_page",
                "in": "query",
                "required": false
            },
            {
                "name": "to_date",
                "in": "query",
                "required": false
            },
            {
                "name": "type",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/logs",
            "operationId": "Public/CloudListLogs",
            "summary": "List Logs",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Logs"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 14740
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        14740
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95698
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95698
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 6706
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        6706
                    ]
                },
                {
                    "name": "direction",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "direction",
                        "enum": [
                            "asc",
                            "desc"
                        ],
                        "type": "string",
                        "description": "Query direction by date",
                        "example": "desc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        "desc"
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
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search by log text",
                                "example": "Log 123"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "from_date",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "from_date",
                        "minimum": 1767222000,
                        "type": "integer",
                        "description": "Get logs from this date [format: timestamp]",
                        "example": "1767222000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1767222000"
                    ]
                },
                {
                    "name": "page",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "page",
                        "type": "integer",
                        "description": "Current page number to return",
                        "example": "2"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2"
                    ]
                },
                {
                    "name": "per_page",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "per_page",
                        "maximum": 500,
                        "type": "integer",
                        "description": "How many records to return per page",
                        "example": "100"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "100"
                    ]
                },
                {
                    "name": "to_date",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to_date",
                        "type": "integer",
                        "description": "Get logs to this date [format: timestamp]",
                        "example": "1772319600"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1772319600"
                    ]
                },
                {
                    "name": "type",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "type",
                        "enum": [
                            "slow-logs",
                            "stdout"
                        ],
                        "type": "string",
                        "description": "Type of log to return",
                        "example": "stdout"
                    },
                    "enumValues": [
                        "slow-logs",
                        "stdout"
                    ],
                    "values": [],
                    "examples": [
                        "stdout"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudDownloadLogs",
        "functionName": "publicClouddownloadlogs",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/logs/download",
        "summary": "Download Logs",
        "description": "Download all logs for the given Database Service and period.",
        "tags": [
            "Database Service > Logs"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "direction",
                "in": "query",
                "required": false
            },
            {
                "name": "filter",
                "in": "query",
                "required": false
            },
            {
                "name": "format",
                "in": "query",
                "required": false
            },
            {
                "name": "from_date",
                "in": "query",
                "required": false
            },
            {
                "name": "to_date",
                "in": "query",
                "required": false
            },
            {
                "name": "type",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/logs/download",
            "operationId": "Public/CloudDownloadLogs",
            "summary": "Download Logs",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Logs"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 87868
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        87868
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59049
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59049
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 60079
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        60079
                    ]
                },
                {
                    "name": "direction",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "direction",
                        "enum": [
                            "asc",
                            "desc"
                        ],
                        "type": "string",
                        "description": "Query direction by date",
                        "example": "desc"
                    },
                    "enumValues": [
                        "asc",
                        "desc"
                    ],
                    "values": [],
                    "examples": [
                        "desc"
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
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search by log text",
                                "example": "Log 123"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "format",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "format",
                        "enum": [
                            "json",
                            "text"
                        ],
                        "type": "string",
                        "description": "Format to download logs in",
                        "example": "json"
                    },
                    "enumValues": [
                        "json",
                        "text"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "from_date",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "from_date",
                        "minimum": 1767222000,
                        "type": "integer",
                        "description": "Get logs from this date [format: timestamp]",
                        "example": "1767222000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1767222000"
                    ]
                },
                {
                    "name": "to_date",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to_date",
                        "type": "integer",
                        "description": "Get logs to this date [format: timestamp]",
                        "example": "1772319600"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1772319600"
                    ]
                },
                {
                    "name": "type",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "type",
                        "enum": [
                            "slow-logs",
                            "stdout"
                        ],
                        "type": "string",
                        "description": "Type of log to return",
                        "example": "stdout"
                    },
                    "enumValues": [
                        "slow-logs",
                        "stdout"
                    ],
                    "values": [],
                    "examples": [
                        "stdout"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudResetPassword",
        "functionName": "publicCloudresetpassword",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/reset_password",
        "summary": "Reset Password",
        "description": "Reset the root password and send it and other connection information to use for logging into the given Database Service",
        "tags": [
            "Database Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/reset_password",
            "operationId": "Public/CloudResetPassword",
            "summary": "Reset Password",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 5232
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5232
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 71092
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        71092
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 46073
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        46073
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
        "operationId": "Public/CloudCreateRestore",
        "functionName": "publicCloudcreaterestore",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/restores",
        "summary": "Create Restore",
        "description": "Create a new restore for the given Database Service using the given backup",
        "tags": [
            "Database Service > Restores"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/restores",
            "operationId": "Public/CloudCreateRestore",
            "summary": "Create Restore",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Restores"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 25493
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        25493
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 7298
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        7298
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 62934
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        62934
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "400"
            ]
        }
    },
    {
        "operationId": "Public/CloudGetRestore",
        "functionName": "publicCloudgetrestore",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/restores/{restore_id}",
        "summary": "Get Restore",
        "description": "Get the current information for the given Database Service restore",
        "tags": [
            "Database Service > Restores"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "restore_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/restores/%7Brestore_id%7D",
            "operationId": "Public/CloudGetRestore",
            "summary": "Get Restore",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Restores"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 97773
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        97773
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 94190
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        94190
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 392
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        392
                    ]
                },
                {
                    "name": "restore_id",
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
        "operationId": "Public/CloudToggleSlowLogs",
        "functionName": "publicCloudtoggleslowlogs",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/dbaas/{dbaas_id}/toggle_slow_logs",
        "summary": "Toggle Slow Logs",
        "description": "Turn on/off slow logs for the given Database Service",
        "tags": [
            "Database Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "dbaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/dbaas/%7Bdbaas_id%7D/toggle_slow_logs",
            "operationId": "Public/CloudToggleSlowLogs",
            "summary": "Toggle Slow Logs",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 20350
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        20350
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 32349
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        32349
                    ]
                },
                {
                    "name": "dbaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 8232
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        8232
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListKubernetesServices",
        "functionName": "publicCloudlistkubernetesservices",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas",
        "summary": "List Kubernetes Services",
        "description": "List all instances of Kubernetes Service in the given project",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas",
            "operationId": "Public/CloudListKubernetesServices",
            "summary": "List Kubernetes Services",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "offsetable",
                    "description": "Limit a request's results and define from which item you want the results\n",
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
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 99018
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        99018
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 91091
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        91091
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
                        "example": "tags",
                        "enum": [
                            "packs",
                            "projects",
                            "instances",
                            "tags"
                        ]
                    },
                    "enumValues": [
                        "packs",
                        "projects",
                        "instances",
                        "tags"
                    ],
                    "values": [
                        "packs",
                        "projects",
                        "instances",
                        "tags"
                    ],
                    "examples": [
                        "tags"
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
                            "packs": {
                                "title": "packs",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        1,
                                        2
                                    ],
                                    "type": "integer",
                                    "description": "Filter by Pack Identifier"
                                },
                                "description": "Filter by Pack Identifiers"
                            },
                            "regions": {
                                "title": "regions",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "dc3-a",
                                        "dc4-a"
                                    ],
                                    "type": "string",
                                    "description": "Filter by region"
                                },
                                "description": "Filter by regions"
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search by name or OpenStack name",
                                "example": "My KaaS"
                            },
                            "statuses": {
                                "title": "statuses",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "Active",
                                        "Creating",
                                        "Deleting",
                                        "Failed",
                                        "Suspended",
                                        "Unknown",
                                        "Updating"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Status",
                                    "example": "Inactive"
                                },
                                "description": "Filter by Statuses"
                            },
                            "tags": {
                                "title": "tags",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer",
                                    "description": "Filter by Tag Identifier"
                                },
                                "description": "Filter by Tag Identifiers"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                    "name": "limit",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items to return<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 14613
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        14613
                    ]
                },
                {
                    "name": "skip",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the index of the first item to return (0 = first item)<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 82933
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        82933
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
                        "example": 53479
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        53479
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
                        "example": 88868
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        88868
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
                            "name",
                            "open_stack_name",
                            "region",
                            "kubernetes_version"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "open_stack_name",
                        "region",
                        "kubernetes_version"
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
                        "example": "order_for[name]=asc"
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
                        "order_for[name]=asc"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateKubernetesService",
        "functionName": "publicCloudcreatekubernetesservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas",
        "summary": "Create Kubernetes Service",
        "description": "Create a new instance of Kubernetes Service\n\nReturns the unique identifier of the newly created Kubernetes Service",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas",
            "operationId": "Public/CloudCreateKubernetesService",
            "summary": "Create Kubernetes Service",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 22156
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        22156
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 89747
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        89747
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "400"
            ]
        }
    },
    {
        "operationId": "Public/CloudDeleteKubernetesService",
        "functionName": "publicClouddeletekubernetesservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}",
        "summary": "Delete Kubernetes Service",
        "description": "Delete an instance of Kubernetes Service",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D",
            "operationId": "Public/CloudDeleteKubernetesService",
            "summary": "Delete Kubernetes Service",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98115
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98115
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 58492
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        58492
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 15221
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        15221
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudGetKubernetesService",
        "functionName": "publicCloudgetkubernetesservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}",
        "summary": "Get Kubernetes Service",
        "description": "Return an instance of Kubernetes Service",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D",
            "operationId": "Public/CloudGetKubernetesService",
            "summary": "Get Kubernetes Service",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 39096
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        39096
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 96613
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        96613
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 96937
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        96937
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
                        "example": "instances",
                        "enum": [
                            "packs",
                            "projects",
                            "instances",
                            "tags"
                        ]
                    },
                    "enumValues": [
                        "packs",
                        "projects",
                        "instances",
                        "tags"
                    ],
                    "values": [
                        "packs",
                        "projects",
                        "instances",
                        "tags"
                    ],
                    "examples": [
                        "instances"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudUpdateKubernetesService",
        "functionName": "publicCloudupdatekubernetesservice",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}",
        "summary": "Update Kubernetes Service",
        "description": "Modify an instance of Kubernetes Service",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D",
            "operationId": "Public/CloudUpdateKubernetesService",
            "summary": "Update Kubernetes Service",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 4982
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        4982
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 40990
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        40990
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 10741
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10741
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudGetTheCurrentStateOfAKaasApiserverParams",
        "functionName": "publicCloudgetthecurrentstateofakaasapiserverparams",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/apiserver",
        "summary": "Get the current state of a Kaas apiserver params",
        "description": "",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/apiserver",
            "operationId": "Public/CloudGetTheCurrentStateOfAKaasApiserverParams",
            "summary": "Get the current state of a Kaas apiserver params",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 94294
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        94294
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79565
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79565
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 61679
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        61679
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudPatchApiserverParamsOfASpecificKaas",
        "functionName": "publicCloudpatchapiserverparamsofaspecifickaas",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/apiserver",
        "summary": "Patch apiserver params of a specific Kaas",
        "description": "",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/apiserver",
            "operationId": "Public/CloudPatchApiserverParamsOfASpecificKaas",
            "summary": "Patch apiserver params of a specific Kaas",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 70557
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        70557
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 31024
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        31024
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68196
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68196
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListInstancePools",
        "functionName": "publicCloudlistinstancepools",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/instance_pools",
        "summary": "List Instance Pools",
        "description": "List all Instance Pools for the given Kubernetes Service",
        "tags": [
            "Kubernetes Service > Instance Pools"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "filter",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/instance_pools",
            "operationId": "Public/CloudListInstancePools",
            "summary": "List Instance Pools",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Instance Pools"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "offsetable",
                    "description": "Limit a request's results and define from which item you want the results\n",
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
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98654
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98654
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16933
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16933
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 24688
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        24688
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
                            "availability_zones": {
                                "title": "availability_zones",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "az-1",
                                        "az-2",
                                        "az-3",
                                        "dc3-a-04",
                                        "dc3-a-09",
                                        "dc3-a-10"
                                    ],
                                    "type": "string",
                                    "description": "Filter by availability zone"
                                },
                                "description": "Filter by availability zones"
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search for node pool",
                                "example": "My Node Pool"
                            },
                            "statuses": {
                                "title": "statuses",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "Active",
                                        "Creating",
                                        "Deleting",
                                        "Failed",
                                        "FailedQuota",
                                        "ScalingDown",
                                        "ScalingUp",
                                        "Unknown",
                                        "Updating"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Status",
                                    "example": "Inactive"
                                },
                                "description": "Filter by Statuses"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                    "name": "limit",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items to return<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 26480
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        26480
                    ]
                },
                {
                    "name": "skip",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the index of the first item to return (0 = first item)<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 92622
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        92622
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
                        "example": 63605
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        63605
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
                        "example": 34048
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        34048
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
                            "name",
                            "open_stack_name",
                            "availability_zone",
                            "flavor",
                            "minimum_instances"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "open_stack_name",
                        "availability_zone",
                        "flavor",
                        "minimum_instances"
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
                        "example": "order_for[name]=asc"
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
                        "order_for[name]=asc"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateInstancePool",
        "functionName": "publicCloudcreateinstancepool",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/instance_pools",
        "summary": "Create Instance Pool",
        "description": "Create a new Instance Pool for the given Kubernetes Service\n\nReturns the unique identifier of the newly created Instance Pool",
        "tags": [
            "Kubernetes Service > Instance Pools"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/instance_pools",
            "operationId": "Public/CloudCreateInstancePool",
            "summary": "Create Instance Pool",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Instance Pools"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 50582
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        50582
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 25073
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        25073
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 75431
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        75431
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "400"
            ]
        }
    },
    {
        "operationId": "Public/CloudDeleteInstancePool",
        "functionName": "publicClouddeleteinstancepool",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/instance_pools/{kaas_worker_pool_id}",
        "summary": "Delete Instance Pool",
        "description": "Delete an Instance Pool from the given Kubernetes Service",
        "tags": [
            "Kubernetes Service > Instance Pools"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_worker_pool_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/instance_pools/%7Bkaas_worker_pool_id%7D",
            "operationId": "Public/CloudDeleteInstancePool",
            "summary": "Delete Instance Pool",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Instance Pools"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 73483
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        73483
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 70792
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        70792
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 39170
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        39170
                    ]
                },
                {
                    "name": "kaas_worker_pool_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 864
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        864
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
        "operationId": "Public/CloudGetInstancePool",
        "functionName": "publicCloudgetinstancepool",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/instance_pools/{kaas_worker_pool_id}",
        "summary": "Get Instance Pool",
        "description": "Return an Instance Pool from the given Kubernetes Service",
        "tags": [
            "Kubernetes Service > Instance Pools"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_worker_pool_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/instance_pools/%7Bkaas_worker_pool_id%7D",
            "operationId": "Public/CloudGetInstancePool",
            "summary": "Get Instance Pool",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Instance Pools"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37631
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37631
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 89500
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        89500
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 30947
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        30947
                    ]
                },
                {
                    "name": "kaas_worker_pool_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 27682
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        27682
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
        "operationId": "Public/CloudUpdateInstancePool",
        "functionName": "publicCloudupdateinstancepool",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/instance_pools/{kaas_worker_pool_id}",
        "summary": "Update Instance Pool",
        "description": "Modify an Instance Pool from the given Kubernetes Service",
        "tags": [
            "Kubernetes Service > Instance Pools"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_worker_pool_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/instance_pools/%7Bkaas_worker_pool_id%7D",
            "operationId": "Public/CloudUpdateInstancePool",
            "summary": "Update Instance Pool",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Instance Pools"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48394
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48394
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 57224
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        57224
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65739
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65739
                    ]
                },
                {
                    "name": "kaas_worker_pool_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 13292
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        13292
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
        "operationId": "Public/CloudRemoveIPFilters",
        "functionName": "publicCloudremoveipfilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/ip_filters",
        "summary": "Remove IP Filters",
        "description": "Remove all IP filters from the given Kubernetes Service",
        "tags": [
            "Kubernetes Service > IP Filtering"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/ip_filters",
            "operationId": "Public/CloudRemoveIPFilters",
            "summary": "Remove IP Filters",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "IP Filtering"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 49885
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        49885
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 93128
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        93128
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 32856
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        32856
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListIPFilters",
        "functionName": "publicCloudlistipfilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/ip_filters",
        "summary": "List IP Filters",
        "description": "List all IP filters for given Kubernetes Service",
        "tags": [
            "Kubernetes Service > IP Filtering"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/ip_filters",
            "operationId": "Public/CloudListIPFilters",
            "summary": "List IP Filters",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "IP Filtering"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 99537
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        99537
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51459
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51459
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 36485
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        36485
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateUpdateIPFilters",
        "functionName": "publicCloudcreateupdateipfilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PUT",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/ip_filters",
        "summary": "Create/Update IP Filters",
        "description": "Add/Update the list of IP filters for the given Kubernetes Service",
        "tags": [
            "Kubernetes Service > IP Filtering"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/ip_filters",
            "operationId": "Public/CloudCreateUpdateIPFilters",
            "summary": "Create/Update IP Filters",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "IP Filtering"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 23768
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        23768
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33078
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33078
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33778
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33778
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudDownloadKubernetesServiceConfiguration",
        "functionName": "publicClouddownloadkubernetesserviceconfiguration",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/{kaas_id}/kube_config",
        "summary": "Download Kubernetes Service Configuration",
        "description": "Download the KaaS Administration Kubernetes Service Configuration",
        "tags": [
            "Kubernetes Service"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "kaas_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/%7Bkaas_id%7D/kube_config",
            "operationId": "Public/CloudDownloadKubernetesServiceConfiguration",
            "summary": "Download Kubernetes Service Configuration",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 80593
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        80593
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 84050
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        84050
                    ]
                },
                {
                    "name": "kaas_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 72904
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        72904
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListFlavors",
        "functionName": "publicCloudlistflavors",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/flavors",
        "summary": "List Flavors",
        "description": "List all possible Kubernetes Service flavors for the given account",
        "tags": [
            "Kubernetes Service > Data"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "filter",
                "in": "query",
                "required": false
            },
            {
                "name": "page",
                "in": "query",
                "required": false
            },
            {
                "name": "per_page",
                "in": "query",
                "required": false
            },
            {
                "name": "region",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/flavors",
            "operationId": "Public/CloudListFlavors",
            "summary": "List Flavors",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95495
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95495
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 72992
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        72992
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
                            "available": {
                                "title": "available",
                                "type": "boolean",
                                "description": "Filter by Available Images"
                            },
                            "cpu": {
                                "title": "cpu",
                                "type": "integer",
                                "description": "Filter by number of CPUs"
                            },
                            "gpu_optimized": {
                                "title": "gpu_optimized",
                                "type": "boolean",
                                "description": "Filter by GPU Optimized Images"
                            },
                            "gpu_types": {
                                "title": "gpu_types",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "A2",
                                        "L4",
                                        "T4"
                                    ],
                                    "type": "string",
                                    "description": "Filter by GPU Optimized Images"
                                },
                                "description": "Filter by GPU Optimized Images"
                            },
                            "iops_optimized": {
                                "title": "iops_optimized",
                                "type": "boolean",
                                "description": "Filter by Memory Optimized Images"
                            },
                            "maximum_cpu": {
                                "title": "maximum_cpu",
                                "minimum": 0,
                                "type": "integer",
                                "description": "Filter by number of CPUs, maximum value"
                            },
                            "maximum_ram": {
                                "title": "maximum_ram",
                                "minimum": 0,
                                "type": "integer",
                                "description": "Filter by amount of RAM, maximum value"
                            },
                            "maximum_rate": {
                                "title": "maximum_rate",
                                "type": "object",
                                "properties": {
                                    "excluding_tax": {
                                        "title": "excluding_tax",
                                        "type": "number",
                                        "description": "Filter by maximum rate (lte, including tax)",
                                        "format": "double"
                                    },
                                    "including_tax": {
                                        "title": "including_tax",
                                        "type": "number",
                                        "description": "Filter by maximum rate (lte, including tax)",
                                        "format": "double"
                                    }
                                },
                                "description": "Filter by maximum rate"
                            },
                            "maximum_storage": {
                                "title": "maximum_storage",
                                "minimum": 0,
                                "type": "integer",
                                "description": "Filter by amount of Storage, maximum value"
                            },
                            "memory_optimized": {
                                "title": "memory_optimized",
                                "type": "boolean",
                                "description": "Filter by Memory Optimized Images"
                            },
                            "minimum_rate": {
                                "title": "minimum_rate",
                                "type": "object",
                                "properties": {
                                    "excluding_tax": {
                                        "title": "excluding_tax",
                                        "type": "number",
                                        "description": "Filter by minimum rate (gte, excluding tax)",
                                        "format": "double"
                                    },
                                    "including_tax": {
                                        "title": "including_tax",
                                        "type": "number",
                                        "description": "Filter by minimum rate (gte, including tax)",
                                        "format": "double"
                                    }
                                },
                                "description": "Filter by minimum rate"
                            },
                            "ram": {
                                "title": "ram",
                                "type": "integer",
                                "description": "Filter by amount of RAM"
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search flavors by name",
                                "example": "a1-ram2"
                            },
                            "storage": {
                                "title": "storage",
                                "type": "integer",
                                "description": "Filter by amount of Storage"
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
                    "name": "page",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "page",
                        "minimum": 1,
                        "type": "integer",
                        "example": 84288
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        84288
                    ]
                },
                {
                    "name": "per_page",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "per_page",
                        "minimum": 1,
                        "type": "integer",
                        "example": 80764
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        80764
                    ]
                },
                {
                    "name": "region",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "region",
                        "enum": [
                            "dc3-a",
                            "dc4-a"
                        ],
                        "type": "string",
                        "description": "Public Cloud region to use for your KaaS",
                        "example": "dc4-a"
                    },
                    "enumValues": [
                        "dc3-a",
                        "dc4-a"
                    ],
                    "values": [],
                    "examples": [
                        "dc4-a"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListFlavorFilters",
        "functionName": "publicCloudlistflavorfilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/kaas/flavors/filters",
        "summary": "List Flavor Filters",
        "description": "List filters for Kubernetes Service flavors for the given account",
        "tags": [
            "Kubernetes Service > Data"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "region",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/kaas/flavors/filters",
            "operationId": "Public/CloudListFlavorFilters",
            "summary": "List Flavor Filters",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 63512
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        63512
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 92667
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        92667
                    ]
                },
                {
                    "name": "region",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "region",
                        "enum": [
                            "dc3-a",
                            "dc4-a"
                        ],
                        "type": "string",
                        "description": "Public Cloud region to use for your KaaS",
                        "example": "dc4-a"
                    },
                    "enumValues": [
                        "dc3-a",
                        "dc4-a"
                    ],
                    "values": [],
                    "examples": [
                        "dc4-a"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListUsers",
        "functionName": "publicCloudlistusers",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users",
        "summary": "List users",
        "description": "List all public cloud users for the given public cloud project",
        "tags": [
            "Users"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "filter",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users",
            "operationId": "Public/CloudListUsers",
            "summary": "List users",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "offsetable",
                    "description": "Limit a request's results and define from which item you want the results\n",
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
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48809
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48809
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 23382
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        23382
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
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search for filtered results",
                                "example": "My Public Cloud user"
                            },
                            "status": {
                                "title": "status",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "creating",
                                        "deleting",
                                        "disabled",
                                        "disabling",
                                        "error",
                                        "ok",
                                        "updating"
                                    ],
                                    "type": "string",
                                    "description": "Filter by status"
                                },
                                "description": "Filter by status"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                    "name": "limit",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items to return<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 82949
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        82949
                    ]
                },
                {
                    "name": "skip",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the index of the first item to return (0 = first item)<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 78440
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        78440
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
                        "example": 7578
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        7578
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
                        "example": 20592
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        20592
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
                            "description",
                            "open_stack_name",
                            "email",
                            "status"
                        ]
                    },
                    "enumValues": [
                        "description",
                        "open_stack_name",
                        "email",
                        "status"
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
                        "example": "order_for[description]=asc"
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
                        "order_for[description]=asc"
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
        "operationId": "Public/CloudCreateUser",
        "functionName": "publicCloudcreateuser",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users",
        "summary": "Create user",
        "description": "Create a new public cloud user for the given public cloud project",
        "tags": [
            "Users"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users",
            "operationId": "Public/CloudCreateUser",
            "summary": "Create user",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "asynchronous",
                    "description": "This route response is asynchronous\n",
                    "values": [
                        "always"
                    ]
                }
            ],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 21957
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        21957
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 17954
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        17954
                    ]
                }
            ],
            "responseStatuses": [
                "202",
                "400"
            ]
        }
    },
    {
        "operationId": "Public/CloudDeleteUser",
        "functionName": "publicClouddeleteuser",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "DELETE",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users/{public_cloud_user_id}",
        "summary": "Delete user",
        "description": "Delete the given public cloud user",
        "tags": [
            "Users"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_user_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users/%7Bpublic_cloud_user_id%7D",
            "operationId": "Public/CloudDeleteUser",
            "summary": "Delete user",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18678
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18678
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 9977
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        9977
                    ]
                },
                {
                    "name": "public_cloud_user_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud User Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 39381
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        39381
                    ]
                }
            ],
            "responseStatuses": [
                "202",
                "400"
            ]
        }
    },
    {
        "operationId": "Public/CloudGetUser",
        "functionName": "publicCloudgetuser",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users/{public_cloud_user_id}",
        "summary": "Get user",
        "description": "Get the given public cloud user details",
        "tags": [
            "Users"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_user_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users/%7Bpublic_cloud_user_id%7D",
            "operationId": "Public/CloudGetUser",
            "summary": "Get user",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 25733
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        25733
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 6168
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        6168
                    ]
                },
                {
                    "name": "public_cloud_user_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud User Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 86533
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        86533
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudUpdateUser",
        "functionName": "publicCloudupdateuser",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "PATCH",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users/{public_cloud_user_id}",
        "summary": "Update user",
        "description": "Update the given public cloud user",
        "tags": [
            "Users"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_user_id",
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
            "url": "https://developer.infomaniak.com/docs/api/patch/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users/%7Bpublic_cloud_user_id%7D",
            "operationId": "Public/CloudUpdateUser",
            "summary": "Update user",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33687
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33687
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 73260
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        73260
                    ]
                },
                {
                    "name": "public_cloud_user_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud User Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16779
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16779
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
        "operationId": "Public/CloudGetAuthenticationFile",
        "functionName": "publicCloudgetauthenticationfile",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users/{public_cloud_user_id}/authentication/{type}",
        "summary": "Get authentication file",
        "description": "Get the authentication file for the given public cloud user",
        "tags": [
            "Users"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_user_id",
                "in": "path",
                "required": true
            },
            {
                "name": "type",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "region",
                "in": "query",
                "required": false
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users/%7Bpublic_cloud_user_id%7D/authentication/%7Btype%7D",
            "operationId": "Public/CloudGetAuthenticationFile",
            "summary": "Get authentication file",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 9960
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        9960
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 83409
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        83409
                    ]
                },
                {
                    "name": "public_cloud_user_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud User Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 77780
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        77780
                    ]
                },
                {
                    "name": "type",
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
                    "name": "region",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "region",
                        "enum": [
                            "pub1",
                            "pub2"
                        ],
                        "type": "string",
                        "description": " target public cloud region",
                        "example": "pub2"
                    },
                    "enumValues": [
                        "pub1",
                        "pub2"
                    ],
                    "values": [],
                    "examples": [
                        "pub2"
                    ]
                }
            ],
            "responseStatuses": [
                "202"
            ]
        }
    },
    {
        "operationId": "Public/CloudUpdateUserWithInvitation",
        "functionName": "publicCloudupdateuserwithinvitation",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users/{public_cloud_user_id}/invite",
        "summary": "Update user with invitation",
        "description": "Update the given public cloud user and sent an invitation to reset the user's password",
        "tags": [
            "Users"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_user_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users/%7Bpublic_cloud_user_id%7D/invite",
            "operationId": "Public/CloudUpdateUserWithInvitation",
            "summary": "Update user with invitation",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 4244
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        4244
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 6262
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        6262
                    ]
                },
                {
                    "name": "public_cloud_user_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud User Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 35704
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        35704
                    ]
                }
            ],
            "responseStatuses": [
                "202",
                "400",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Public_CloudGetAuthenticationFile_get_1_public_clouds_public_cloud_id_projects_public_cloud_project_id_users_public_cloud_user_id_openrc",
        "functionName": "publicCloudgetauthenticationfileGet1PublicCloudsPublicCloudIdProjectsPublicCloudProjectIdUsersPublicCloudUserIdOpenrc",
        "originalOperationId": "Public/CloudGetAuthenticationFile",
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users/{public_cloud_user_id}/openrc",
        "summary": "Get authentication file",
        "description": "Get the authentication file for the given public cloud user",
        "tags": [
            "Users"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_user_id",
                "in": "path",
                "required": true
            },
            {
                "name": "type",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "region",
                "in": "query",
                "required": false
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users/%7Bpublic_cloud_user_id%7D/openrc",
            "operationId": "Public/CloudGetAuthenticationFile",
            "summary": "Get authentication file",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 2307
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2307
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 43966
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        43966
                    ]
                },
                {
                    "name": "public_cloud_user_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud User Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 77228
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        77228
                    ]
                },
                {
                    "name": "type",
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
                    "name": "region",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "region",
                        "enum": [
                            "pub1",
                            "pub2"
                        ],
                        "type": "string",
                        "description": " target public cloud region",
                        "example": "pub1"
                    },
                    "enumValues": [
                        "pub1",
                        "pub2"
                    ],
                    "values": [],
                    "examples": [
                        "pub1"
                    ]
                }
            ],
            "responseStatuses": [
                "202"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateUserInvitation",
        "functionName": "publicCloudcreateuserinvitation",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/{public_cloud_project_id}/users/invite",
        "summary": "Create user invitation",
        "description": "Create a new public cloud user invitation for the given public cloud project",
        "tags": [
            "Users"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
                "in": "path",
                "required": true
            },
            {
                "name": "public_cloud_project_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/%7Bpublic_cloud_project_id%7D/users/invite",
            "operationId": "Public/CloudCreateUserInvitation",
            "summary": "Create user invitation",
            "categoryPath": [
                "Public Cloud",
                "Users"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "asynchronous",
                    "description": "This route response is asynchronous\n",
                    "values": [
                        "always"
                    ]
                }
            ],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Product Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95925
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95925
                    ]
                },
                {
                    "name": "public_cloud_project_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Project Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 46791
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        46791
                    ]
                }
            ],
            "responseStatuses": [
                "202",
                "400",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Public/CloudCreateProjectWithInvitation",
        "functionName": "publicCloudcreateprojectwithinvitation",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "POST",
        "path": "/1/public_clouds/{public_cloud_id}/projects/invite",
        "summary": "Create project with invitation",
        "description": "Create a new public cloud project with a user invitation",
        "tags": [
            "Projects"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "public_cloud_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/public_clouds/%7Bpublic_cloud_id%7D/projects/invite",
            "operationId": "Public/CloudCreateProjectWithInvitation",
            "summary": "Create project with invitation",
            "categoryPath": [
                "Public Cloud",
                "Projects"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "asynchronous",
                    "description": "This route response is asynchronous\n",
                    "values": [
                        "always"
                    ]
                }
            ],
            "parameters": [
                {
                    "name": "public_cloud_id",
                    "in": "path",
                    "required": true,
                    "description": "Public Cloud Identifier",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 58080
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        58080
                    ]
                }
            ],
            "responseStatuses": [
                "202",
                "401",
                "404"
            ]
        }
    },
    {
        "operationId": "Public/CloudAccesses",
        "functionName": "publicCloudaccesses",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/accesses",
        "summary": "Accesses",
        "description": "Return a list of access by Service for a given account and if maintenance ongoing",
        "tags": [
            "Product Management"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "account_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/accesses",
            "operationId": "Public/CloudAccesses",
            "summary": "Accesses",
            "categoryPath": [
                "Public Cloud",
                "Product Management"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "account_id",
                    "in": "query",
                    "required": true,
                    "description": "The account identifier",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "account_id",
                        "type": "integer",
                        "description": "Unique identifier of the `account` that is related to the resource `{name}`",
                        "example": 56706
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        56706
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudGetConfig",
        "functionName": "publicCloudgetconfig",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/config",
        "summary": "Get config",
        "description": "Get configuration information for the given account",
        "tags": [
            "Config"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "account_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/config",
            "operationId": "Public/CloudGetConfig",
            "summary": "Get config",
            "categoryPath": [
                "Public Cloud",
                "Config"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "account_id",
                    "in": "query",
                    "required": true,
                    "description": "The account identifier",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "account_id",
                        "type": "integer",
                        "description": "Unique identifier of the `account` that is related to the resource `{name}`",
                        "example": 21712
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        21712
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListAllDatabaseServices",
        "functionName": "publicCloudlistalldatabaseservices",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/dbaas",
        "summary": "List All Database Services",
        "description": "List all Database Services for all public clouds in the given account",
        "tags": [
            "Database Service"
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
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "filter",
                "in": "query",
                "required": false
            },
            {
                "name": "public_cloud_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/dbaas",
            "operationId": "Public/CloudListAllDatabaseServices",
            "summary": "List All Database Services",
            "categoryPath": [
                "Public Cloud",
                "Database Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "configuration",
                        "enum": [
                            "projects",
                            "packs",
                            "tags",
                            "connection",
                            "configuration",
                            "backups"
                        ]
                    },
                    "enumValues": [
                        "projects",
                        "packs",
                        "tags",
                        "connection",
                        "configuration",
                        "backups"
                    ],
                    "values": [
                        "projects",
                        "packs",
                        "tags",
                        "connection",
                        "configuration",
                        "backups"
                    ],
                    "examples": [
                        "configuration"
                    ]
                },
                {
                    "name": "account_id",
                    "in": "query",
                    "required": true,
                    "description": "The account identifier",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "account_id",
                        "type": "integer",
                        "description": "Unique identifier of the `account` that is related to the resource `{name}`",
                        "example": 49312
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        49312
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
                            "currency": {
                                "title": "currency",
                                "enum": [
                                    "CHF",
                                    "EUR"
                                ],
                                "type": "string"
                            },
                            "regions": {
                                "title": "regions",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "dc4-a"
                                    ],
                                    "type": "string",
                                    "description": "Filter by region"
                                },
                                "description": "Filter by regions"
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search by name or OpenStack name",
                                "example": "My Database Service"
                            },
                            "statuses": {
                                "title": "statuses",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "error",
                                        "initializing",
                                        "paused",
                                        "ready",
                                        "stopping",
                                        "unknown"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Status",
                                    "example": "Inactive"
                                },
                                "description": "Filter by Statuses"
                            },
                            "tags": {
                                "title": "tags",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer",
                                    "description": "Filter by Tag Identifier"
                                },
                                "description": "Filter by Tag Identifiers"
                            },
                            "types": {
                                "title": "types",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "mysql"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Type",
                                    "example": "mysql"
                                },
                                "description": "Filter by Statuses"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "public_cloud_id",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "public_cloud_id",
                        "type": "integer",
                        "example": 8320
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        8320
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
                        "example": 39454
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        39454
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
                        "example": 94239
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        94239
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
                            "name",
                            "status",
                            "region",
                            "configuration.name",
                            "configuration.storage"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "status",
                        "region",
                        "configuration.name",
                        "configuration.storage"
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
                        "example": "order_for[name]=asc"
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
                        "order_for[name]=asc"
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
        "operationId": "Public/CloudGetConfigurationInformation",
        "functionName": "publicCloudgetconfigurationinformation",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/dbaas/configurations",
        "summary": "Get Configuration Information",
        "description": "Return configuration information including object storage rates and possible parameters",
        "tags": [
            "Database Service > Configurations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "filter",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/dbaas/configurations",
            "operationId": "Public/CloudGetConfigurationInformation",
            "summary": "Get Configuration Information",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Configurations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
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
                            "currency": {
                                "title": "currency",
                                "enum": [
                                    "CHF",
                                    "EUR"
                                ],
                                "type": "string"
                            }
                        },
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
        "operationId": "get_1_public_clouds_dbaas_packs",
        "functionName": "get1PublicCloudsDbaasPacks",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/dbaas/packs",
        "summary": "List Packs",
        "description": "List all available Database Service packs",
        "tags": [
            "Database Service > Data"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "filter",
                "in": "query",
                "required": false
            },
            {
                "name": "type",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/dbaas/packs",
            "operationId": null,
            "summary": "List Packs",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
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
                            "available": {
                                "title": "available",
                                "type": "boolean",
                                "description": "Filter by Available Images"
                            },
                            "cpu": {
                                "title": "cpu",
                                "type": "integer",
                                "description": "Filter by number of CPUs"
                            },
                            "currency": {
                                "title": "currency",
                                "enum": [
                                    "CHF",
                                    "EUR"
                                ],
                                "type": "string"
                            },
                            "groups": {
                                "title": "groups",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "string"
                                }
                            },
                            "instances": {
                                "title": "instances",
                                "type": "integer",
                                "description": "Filter by number of instances"
                            },
                            "maximum_cpu": {
                                "title": "maximum_cpu",
                                "minimum": 0,
                                "type": "integer",
                                "description": "Filter by number of CPUs, maximum value"
                            },
                            "maximum_instances": {
                                "title": "maximum_instances",
                                "minimum": 0,
                                "type": "integer",
                                "description": "Filter by number of instances, maximum value"
                            },
                            "maximum_ram": {
                                "title": "maximum_ram",
                                "minimum": 0,
                                "type": "integer",
                                "description": "Filter by amount of RAM, maximum value"
                            },
                            "maximum_rate": {
                                "title": "maximum_rate",
                                "type": "object",
                                "properties": {
                                    "excluding_tax": {
                                        "title": "excluding_tax",
                                        "type": "number",
                                        "description": "Filter by maximum rate (lte, including tax)",
                                        "format": "double"
                                    },
                                    "including_tax": {
                                        "title": "including_tax",
                                        "type": "number",
                                        "description": "Filter by maximum rate (lte, including tax)",
                                        "format": "double"
                                    }
                                },
                                "description": "Filter by maximum rate"
                            },
                            "maximum_storage": {
                                "title": "maximum_storage",
                                "minimum": 0,
                                "type": "integer",
                                "description": "Filter by amount of Storage, maximum value"
                            },
                            "minimum_rate": {
                                "title": "minimum_rate",
                                "type": "object",
                                "properties": {
                                    "excluding_tax": {
                                        "title": "excluding_tax",
                                        "type": "number",
                                        "description": "Filter by minimum rate (gte, excluding tax)",
                                        "format": "double"
                                    },
                                    "including_tax": {
                                        "title": "including_tax",
                                        "type": "number",
                                        "description": "Filter by minimum rate (gte, including tax)",
                                        "format": "double"
                                    }
                                },
                                "description": "Filter by minimum rate"
                            },
                            "names": {
                                "title": "names",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "string"
                                }
                            },
                            "ram": {
                                "title": "ram",
                                "type": "integer",
                                "description": "Filter by amount of RAM"
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search flavors by name",
                                "example": "a1-ram2"
                            },
                            "storage": {
                                "title": "storage",
                                "type": "integer",
                                "description": "Filter by amount of Storage"
                            },
                            "type": {
                                "title": "type",
                                "enum": [
                                    "mysql"
                                ],
                                "type": "string",
                                "description": "Type of the resource `{name}`"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "type",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "type",
                        "enum": [
                            "mysql"
                        ],
                        "type": "string",
                        "description": "Type of the resource `{name}`",
                        "example": "mysql"
                    },
                    "enumValues": [
                        "mysql"
                    ],
                    "values": [],
                    "examples": [
                        "mysql"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudPackFilters",
        "functionName": "publicCloudpackfilters",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/dbaas/packs/filters",
        "summary": "Pack Filters",
        "description": "List all filters that can be used when filtering packs",
        "tags": [
            "Database Service > Data"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "filter",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/dbaas/packs/filters",
            "operationId": "Public/CloudPackFilters",
            "summary": "Pack Filters",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
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
                            "currency": {
                                "title": "currency",
                                "enum": [
                                    "CHF",
                                    "EUR"
                                ],
                                "type": "string"
                            }
                        },
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
        "operationId": "get_1_public_clouds_dbaas_regions",
        "functionName": "get1PublicCloudsDbaasRegions",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/dbaas/regions",
        "summary": "List Regions",
        "description": "List all possible regions to use when creating a Database Service",
        "tags": [
            "Database Service > Data"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/dbaas/regions",
            "operationId": null,
            "summary": "List Regions",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListTypes",
        "functionName": "publicCloudlisttypes",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/dbaas/types",
        "summary": "List Types",
        "description": "List all available Database Service types",
        "tags": [
            "Database Service > Data"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/dbaas/types",
            "operationId": "Public/CloudListTypes",
            "summary": "List Types",
            "categoryPath": [
                "Public Cloud",
                "Database Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListAllKubernetesServices",
        "functionName": "publicCloudlistallkubernetesservices",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/kaas",
        "summary": "List All Kubernetes Services",
        "description": "List all Kubernetes Services for all Public Clouds",
        "tags": [
            "Kubernetes Service"
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
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "filter",
                "in": "query",
                "required": false
            },
            {
                "name": "public_cloud_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/kaas",
            "operationId": "Public/CloudListAllKubernetesServices",
            "summary": "List All Kubernetes Services",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": true,
            "sortable": true,
            "authUser": true,
            "version": 1,
            "capabilities": [
                {
                    "name": "countable",
                    "description": "Give the total number of records\n",
                    "values": []
                },
                {
                    "name": "offsetable",
                    "description": "Limit a request's results and define from which item you want the results\n",
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "projects",
                        "enum": [
                            "packs",
                            "projects",
                            "instances",
                            "tags"
                        ]
                    },
                    "enumValues": [
                        "packs",
                        "projects",
                        "instances",
                        "tags"
                    ],
                    "values": [
                        "packs",
                        "projects",
                        "instances",
                        "tags"
                    ],
                    "examples": [
                        "projects"
                    ]
                },
                {
                    "name": "account_id",
                    "in": "query",
                    "required": true,
                    "description": "The account identifier",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "account_id",
                        "type": "integer",
                        "description": "Unique identifier of the `account` that is related to the resource `{name}`",
                        "example": 33832
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33832
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
                            "packs": {
                                "title": "packs",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        1,
                                        2
                                    ],
                                    "type": "integer",
                                    "description": "Filter by Pack Identifier"
                                },
                                "description": "Filter by Pack Identifiers"
                            },
                            "regions": {
                                "title": "regions",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "dc3-a",
                                        "dc4-a"
                                    ],
                                    "type": "string",
                                    "description": "Filter by region"
                                },
                                "description": "Filter by regions"
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "description": "Search by name or OpenStack name",
                                "example": "My KaaS"
                            },
                            "statuses": {
                                "title": "statuses",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "enum": [
                                        "Active",
                                        "Creating",
                                        "Deleting",
                                        "Failed",
                                        "Suspended",
                                        "Unknown",
                                        "Updating"
                                    ],
                                    "type": "string",
                                    "description": "Filter by Status",
                                    "example": "Inactive"
                                },
                                "description": "Filter by Statuses"
                            },
                            "tags": {
                                "title": "tags",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer",
                                    "description": "Filter by Tag Identifier"
                                },
                                "description": "Filter by Tag Identifiers"
                            }
                        },
                        "description": "Available filters",
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "public_cloud_id",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "public_cloud_id",
                        "type": "integer",
                        "description": "A valid Public Cloud Identifier to filter the list by",
                        "example": "12345"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "12345"
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
                    "name": "limit",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the number of items to return<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 7063
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        7063
                    ]
                },
                {
                    "name": "skip",
                    "in": "query",
                    "required": false,
                    "description": "*Optional parameter* that define the index of the first item to return (0 = first item)<br />\nPart of the `offset` capacity\n",
                    "style": null,
                    "explode": null,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 10004
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        10004
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
                        "example": 68775
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        68775
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
                        "example": 79539
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        79539
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
                            "name",
                            "open_stack_name",
                            "region",
                            "kubernetes_version"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "open_stack_name",
                        "region",
                        "kubernetes_version"
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
                        "example": "order_for[name]=asc"
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
                        "order_for[name]=asc"
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
        "operationId": "Public/CloudListAvailabilityZones",
        "functionName": "publicCloudlistavailabilityzones",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/kaas/availability_zones",
        "summary": "List Availability Zones",
        "description": "List all possible Kubernetes Service Availability Zones for the given Region",
        "tags": [
            "Kubernetes Service > Data"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "region",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/kaas/availability_zones",
            "operationId": "Public/CloudListAvailabilityZones",
            "summary": "List Availability Zones",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "region",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "region",
                        "enum": [
                            "dc3-a",
                            "dc4-a"
                        ],
                        "type": "string",
                        "description": "List all Availability Zones for the given Public Cloud Region",
                        "example": "dc4-a"
                    },
                    "enumValues": [
                        "dc3-a",
                        "dc4-a"
                    ],
                    "values": [],
                    "examples": [
                        "dc4-a"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListPacks",
        "functionName": "publicCloudlistpacks",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/kaas/packs",
        "summary": "List Packs",
        "description": "List all Kubernetes Service Packs for the current client",
        "tags": [
            "Kubernetes Service > Data"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/kaas/packs",
            "operationId": "Public/CloudListPacks",
            "summary": "List Packs",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListRegions",
        "functionName": "publicCloudlistregions",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/kaas/regions",
        "summary": "List Regions",
        "description": "List all possible Kubernetes Service Regions",
        "tags": [
            "Kubernetes Service > Data"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/kaas/regions",
            "operationId": "Public/CloudListRegions",
            "summary": "List Regions",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Public/CloudListKubernetesVersions",
        "functionName": "publicCloudlistkubernetesversions",
        "originalOperationId": null,
        "domain": "publicCloud",
        "method": "GET",
        "path": "/1/public_clouds/kaas/versions",
        "summary": "List Kubernetes Versions",
        "description": "List all possible Kubernetes Service Versions",
        "tags": [
            "Kubernetes Service > Data"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/public_clouds/kaas/versions",
            "operationId": "Public/CloudListKubernetesVersions",
            "summary": "List Kubernetes Versions",
            "categoryPath": [
                "Public Cloud",
                "Kubernetes Service",
                "Data"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": true,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200"
            ]
        }
    }
];
//# sourceMappingURL=publicCloud.js.map