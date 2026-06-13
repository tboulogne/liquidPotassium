export const radioOperations = [
    {
        "operationId": "get_1_radios",
        "functionName": "get1Radios",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios",
        "summary": "List products",
        "description": "This endpoint allows you to retrieve all the products.",
        "tags": [
            "Radio Products"
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
                "name": "order_by",
                "in": "query",
                "required": false
            },
            {
                "name": "order_for",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios",
            "operationId": null,
            "summary": "List products",
            "categoryPath": [
                "Streaming radio",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
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
                        "example": "stations",
                        "enum": [
                            "pack",
                            "listeners",
                            "stations",
                            "stations.streams",
                            "stations.streams.is_up",
                            "stations.hls_stream",
                            "monthly_consumption"
                        ]
                    },
                    "enumValues": [
                        "pack",
                        "listeners",
                        "stations",
                        "stations.streams",
                        "stations.streams.is_up",
                        "stations.hls_stream",
                        "monthly_consumption"
                    ],
                    "values": [
                        "pack",
                        "listeners",
                        "stations",
                        "stations.streams",
                        "stations.streams.is_up",
                        "stations.hls_stream",
                        "monthly_consumption"
                    ],
                    "examples": [
                        "stations"
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
                        "description": "Specify the account",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
                    ]
                },
                {
                    "name": "order_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "array",
                    "schema": {
                        "title": "order_by",
                        "type": "array",
                        "items": {
                            "title": "item",
                            "enum": [
                                "auditors",
                                "customer_name",
                                "expired_at",
                                "monthly_consumption",
                                "offer",
                                "overquota_at",
                                "stations_number"
                            ],
                            "type": "string"
                        },
                        "description": "the field to order the result by",
                        "example": "customer_name"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "customer_name"
                    ]
                },
                {
                    "name": "order_for",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "array",
                    "schema": {
                        "title": "order_for",
                        "type": "array",
                        "items": {
                            "title": "item",
                            "enum": [
                                "asc",
                                "desc"
                            ],
                            "type": "string"
                        },
                        "description": "the direction of the sort",
                        "example": "asc"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "asc"
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
                        "minimum": 1,
                        "type": "integer",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
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
                        "description": "the field to search the stat by",
                        "example": "test"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "test"
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
                        "example": 99475
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        99475
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
                        "example": 68579
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        68579
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
                        "example": 18994
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        18994
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
                        "example": 44405
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        44405
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "desc"
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
                        "desc"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_radios_radio_product_id",
        "functionName": "get1RadiosRadioProductId",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}",
        "summary": "Get product",
        "description": "This endpoint allows you to retrieve a product.",
        "tags": [
            "Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D",
            "operationId": null,
            "summary": "Get product",
            "categoryPath": [
                "Streaming radio",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 27117
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        27117
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
                        "example": "stations.streams",
                        "enum": [
                            "pack",
                            "listeners",
                            "stations",
                            "stations.streams",
                            "streams",
                            "options",
                            "account",
                            "pack_price",
                            "packs",
                            "monthly_consumption",
                            "count_active_deal",
                            "deleted_at"
                        ]
                    },
                    "enumValues": [
                        "pack",
                        "listeners",
                        "stations",
                        "stations.streams",
                        "streams",
                        "options",
                        "account",
                        "pack_price",
                        "packs",
                        "monthly_consumption",
                        "count_active_deal",
                        "deleted_at"
                    ],
                    "values": [
                        "pack",
                        "listeners",
                        "stations",
                        "stations.streams",
                        "streams",
                        "options",
                        "account",
                        "pack_price",
                        "packs",
                        "monthly_consumption",
                        "count_active_deal",
                        "deleted_at"
                    ],
                    "examples": [
                        "stations.streams"
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
        "operationId": "Streaming/radioUpdateProduct",
        "functionName": "streamingRadioupdateproduct",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}",
        "summary": "Update product",
        "description": "This endpoint allows you to update a product.",
        "tags": [
            "Radio Products"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D",
            "operationId": "Streaming/radioUpdateProduct",
            "summary": "Update product",
            "categoryPath": [
                "Streaming radio",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 86005
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        86005
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetTheListOfStreamInConflictWithAnUpdateOfRestrictions",
        "functionName": "streamingRadiogetthelistofstreaminconflictwithanupdateofrestrictions",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/conflict_restrictions",
        "summary": "Get the list of stream in conflict with an update of restrictions",
        "description": "",
        "tags": [
            "Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "country_list",
                "in": "query",
                "required": false
            },
            {
                "name": "ip_exclude_list",
                "in": "query",
                "required": false
            },
            {
                "name": "ip_include_list",
                "in": "query",
                "required": false
            },
            {
                "name": "is_allow_country",
                "in": "query",
                "required": false
            },
            {
                "name": "is_hash_restriction",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/conflict_restrictions",
            "operationId": "Streaming/radioGetTheListOfStreamInConflictWithAnUpdateOfRestrictions",
            "summary": "Get the list of stream in conflict with an update of restrictions",
            "categoryPath": [
                "Streaming radio",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 78118
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        78118
                    ]
                },
                {
                    "name": "country_list",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "country_list",
                        "maxLength": 800,
                        "pattern": "^([A-Z]{2},?)*$",
                        "type": "string",
                        "description": "Specify the country list not allow accessing to the stream",
                        "nullable": true,
                        "example": "IT,JP"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "IT,JP"
                    ]
                },
                {
                    "name": "ip_exclude_list",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "ip_exclude_list",
                        "maxLength": 255,
                        "type": "string",
                        "description": "Specify the ip list not allow accessing to the stream",
                        "nullable": true,
                        "example": "127.0.0.3,127.0.0.4"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "127.0.0.3,127.0.0.4"
                    ]
                },
                {
                    "name": "ip_include_list",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "ip_include_list",
                        "maxLength": 255,
                        "type": "string",
                        "description": "Specify the ip list allow accessing to the stream",
                        "nullable": true,
                        "example": "127.0.0.1,127.0.0.2"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "127.0.0.1,127.0.0.2"
                    ]
                },
                {
                    "name": "is_allow_country",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "is_allow_country",
                        "type": "boolean",
                        "description": "Specify if the access restriction rules is enabled",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
                    ]
                },
                {
                    "name": "is_hash_restriction",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "is_hash_restriction",
                        "type": "boolean",
                        "description": "Specify if the access restriction rules is enabled",
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
        "operationId": "Streaming/radioGenerateAReportForExportMediapulseLogWithStationsInProduct",
        "functionName": "streamingRadiogenerateareportforexportmediapulselogwithstationsinproduct",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/mediapulse/report",
        "summary": "Generate a report for export mediapulse log with stations in product",
        "description": "",
        "tags": [
            "Mediapulse"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
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
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/mediapulse/report",
            "operationId": "Streaming/radioGenerateAReportForExportMediapulseLogWithStationsInProduct",
            "summary": "Generate a report for export mediapulse log with stations in product",
            "categoryPath": [
                "Streaming radio",
                "Mediapulse"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 8810
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        8810
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
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
                        "minimum": 1,
                        "type": "integer",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station to filter the report",
                        "example": "1,2,3"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,2,3"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming_radioGetNotification_get_1_radios_radio_product_id_notification",
        "functionName": "streamingRadiogetnotificationGet1RadiosRadioProductIdNotification",
        "originalOperationId": "Streaming/radioGetNotification",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/notification",
        "summary": "Get notification",
        "description": "This endpoint allows you to retrieve the notification bind to the radio_product or station if it's exist.",
        "tags": [
            "Notifications"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/notification",
            "operationId": "Streaming/radioGetNotification",
            "summary": "Get notification",
            "categoryPath": [
                "Streaming radio",
                "Notifications"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 83208
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        83208
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": null,
                    "schema": {
                        "oneOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "nullable": true
                            }
                        ]
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": []
                }
            ],
            "responseStatuses": [
                "200",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioUpdateNotificationRadioProduct",
        "functionName": "streamingRadioupdatenotificationradioproduct",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/notification",
        "summary": "Update notification radio product",
        "description": "This endpoint allows you to update a notification for radio product.",
        "tags": [
            "Notifications"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/notification",
            "operationId": "Streaming/radioUpdateNotificationRadioProduct",
            "summary": "Update notification radio product",
            "categoryPath": [
                "Streaming radio",
                "Notifications"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79690
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79690
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioListRadioProductOptions",
        "functionName": "streamingRadiolistradioproductoptions",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/options",
        "summary": "List radio product options",
        "description": "This endpoint allows you to retrieve all the option attach to a radio product.",
        "tags": [
            "Radio Product Options"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/options",
            "operationId": "Streaming/radioListRadioProductOptions",
            "summary": "List radio product options",
            "categoryPath": [
                "Streaming radio",
                "Radio Product Options"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 1028
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        1028
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
        "operationId": "Streaming/radioListProductPlayers",
        "functionName": "streamingRadiolistproductplayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/players",
        "summary": "List product players",
        "description": "This endpoint allows you to retrieve all the players in a product.",
        "tags": [
            "Players"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/players",
            "operationId": "Streaming/radioListProductPlayers",
            "summary": "List product players",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
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
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 85730
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        85730
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
                        "example": "stations",
                        "enum": [
                            "stations"
                        ]
                    },
                    "enumValues": [
                        "stations"
                    ],
                    "values": [
                        "stations"
                    ],
                    "examples": [
                        "stations"
                    ]
                },
                {
                    "name": "type",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "array",
                    "schema": {
                        "title": "type",
                        "type": "array",
                        "items": {
                            "title": "item",
                            "enum": [
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "big",
                                "medium",
                                "small",
                                "superplayer",
                                "superplayer_extended"
                            ],
                            "type": "string",
                            "description": "The player type<note><strong>superplayer_extended,1</strong>: Superplayer_extended</note><note><strong>superplayer,2</strong>: Superplayer</note><note><strong>big,3</strong>: Big</note><note><strong>medium,4</strong>: Medium</note><note><strong>small,5</strong>: Small</note>",
                            "example": "4"
                        },
                        "description": "Type of the resource `{name}`",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
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
                        "example": 5894
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        5894
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
                        "example": 58863
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        58863
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
                        "example": 50227
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        50227
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
                        "example": 11735
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        11735
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "asc"
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
                        "asc"
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
        "operationId": "Streaming/radioStorePlayer",
        "functionName": "streamingRadiostoreplayer",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/players",
        "summary": "Store player",
        "description": "This endpoint allows you to store a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/players",
            "operationId": "Streaming/radioStorePlayer",
            "summary": "Store player",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 4105
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        4105
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeletePlayer",
        "functionName": "streamingRadiodeleteplayer",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/players/{player_id}",
        "summary": "Delete player",
        "description": "This endpoint allows you to delete a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "player_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/players/%7Bplayer_id%7D",
            "operationId": "Streaming/radioDeletePlayer",
            "summary": "Delete player",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 93824
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        93824
                    ]
                },
                {
                    "name": "player_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 23766
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        23766
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetPlayer",
        "functionName": "streamingRadiogetplayer",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/players/{player_id}",
        "summary": "Get player",
        "description": "This endpoint allows you to retrieve a player.",
        "tags": [
            "Players"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "player_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/players/%7Bplayer_id%7D",
            "operationId": "Streaming/radioGetPlayer",
            "summary": "Get player",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38076
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38076
                    ]
                },
                {
                    "name": "player_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 29240
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        29240
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
        "operationId": "Streaming/radioUpdatePlayer",
        "functionName": "streamingRadioupdateplayer",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/players/{player_id}",
        "summary": "Update player",
        "description": "This endpoint allows you to update a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "player_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/players/%7Bplayer_id%7D",
            "operationId": "Streaming/radioUpdatePlayer",
            "summary": "Update player",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 93670
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        93670
                    ]
                },
                {
                    "name": "player_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 88842
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        88842
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDuplicatePlayer",
        "functionName": "streamingRadioduplicateplayer",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/players/{player_id}/duplicate",
        "summary": "Duplicate player",
        "description": "This endpoint allows you to duplicate a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "player_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/players/%7Bplayer_id%7D/duplicate",
            "operationId": "Streaming/radioDuplicatePlayer",
            "summary": "Duplicate player",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55350
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55350
                    ]
                },
                {
                    "name": "player_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16062
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16062
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioResetPlayer",
        "functionName": "streamingRadioresetplayer",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/players/{player_id}/reset",
        "summary": "Reset player",
        "description": "This endpoint allows you to reset a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "player_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/players/%7Bplayer_id%7D/reset",
            "operationId": "Streaming/radioResetPlayer",
            "summary": "Reset player",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59723
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59723
                    ]
                },
                {
                    "name": "player_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 67332
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        67332
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteThumbnail",
        "functionName": "streamingRadiodeletethumbnail",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/players/{player_id}/thumbnail",
        "summary": "Delete thumbnail",
        "description": "This endpoint allows you to delete a thumbnail.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "player_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/players/%7Bplayer_id%7D/thumbnail",
            "operationId": "Streaming/radioDeleteThumbnail",
            "summary": "Delete thumbnail",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 86387
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        86387
                    ]
                },
                {
                    "name": "player_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59042
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59042
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
                            "loading",
                            "restriction",
                            "thumbnail",
                            "unavailable"
                        ],
                        "type": "string",
                        "description": "Specify the type of thumbnail will be changed",
                        "example": "1"
                    },
                    "enumValues": [
                        "loading",
                        "restriction",
                        "thumbnail",
                        "unavailable"
                    ],
                    "values": [],
                    "examples": [
                        "1"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioUpdateThumbnail",
        "functionName": "streamingRadioupdatethumbnail",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/players/{player_id}/thumbnail",
        "summary": "Update thumbnail",
        "description": "This endpoint allows you to update a thumbnail.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "player_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/players/%7Bplayer_id%7D/thumbnail",
            "operationId": "Streaming/radioUpdateThumbnail",
            "summary": "Update thumbnail",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 50534
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        50534
                    ]
                },
                {
                    "name": "player_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 69110
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        69110
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioSetTheRestrictionsToAllStreamsInProduct",
        "functionName": "streamingRadiosettherestrictionstoallstreamsinproduct",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/restrictions",
        "summary": "Set the restrictions to all streams in product",
        "description": "",
        "tags": [
            "Radio Products"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/restrictions",
            "operationId": "Streaming/radioSetTheRestrictionsToAllStreamsInProduct",
            "summary": "Set the restrictions to all streams in product",
            "categoryPath": [
                "Streaming radio",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95636
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95636
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/radioListStations",
        "functionName": "streamingRadioliststations",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations",
        "summary": "List stations",
        "description": "This endpoint allows you to retrieve all the stations.",
        "tags": [
            "Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
                "name": "return",
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
        "docs": null
    },
    {
        "operationId": "Streaming/radioStoreStation",
        "functionName": "streamingRadiostorestation",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations",
        "summary": "Store station",
        "description": "This endpoint allows you to store a station.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
        "operationId": "delete_1_radios_radio_product_id_stations_station_id",
        "functionName": "delete1RadiosRadioProductIdStationsStationId",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}",
        "summary": "Delete station",
        "description": "This endpoint allows you to delete a station.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "user_password",
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
        "docs": null
    },
    {
        "operationId": "get_1_radios_radio_product_id_stations_station_id",
        "functionName": "get1RadiosRadioProductIdStationsStationId",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}",
        "summary": "Get station",
        "description": "This endpoint allows you to retrieve a station.",
        "tags": [
            "Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "docs": null
    },
    {
        "operationId": "put_1_radios_radio_product_id_stations_station_id",
        "functionName": "put1RadiosRadioProductIdStationsStationId",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}",
        "summary": "Update station",
        "description": "This endpoint allows you to update a station.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "operationId": "Streaming/radioGetAutoDJ",
        "functionName": "streamingRadiogetautodj",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj",
        "summary": "Get AutoDJ",
        "description": "This endpoint allows you to retrieve an AutoDJ.",
        "tags": [
            "AutoDJ"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj",
            "operationId": "Streaming/radioGetAutoDJ",
            "summary": "Get AutoDJ",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 27023
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        27023
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 87228
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        87228
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
        "operationId": "Streaming/radioStoreAutoDJ",
        "functionName": "streamingRadiostoreautodj",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj",
        "summary": "Store AutoDJ",
        "description": "This endpoint allows you to store an AutoDJ.",
        "tags": [
            "AutoDJ"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj",
            "operationId": "Streaming/radioStoreAutoDJ",
            "summary": "Store AutoDJ",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 61911
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        61911
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55051
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55051
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioUpdateAutoDJ",
        "functionName": "streamingRadioupdateautodj",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj",
        "summary": "Update AutoDJ",
        "description": "This endpoint allows you to update an AutoDJ.",
        "tags": [
            "AutoDJ"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj",
            "operationId": "Streaming/radioUpdateAutoDJ",
            "summary": "Update AutoDJ",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 53205
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        53205
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16917
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16917
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJEvents",
        "functionName": "streamingRadiothisendpointallowsyoutolistautodjevents",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/events",
        "summary": "This endpoint allows you to list AutoDJ events.",
        "description": "*\n* @api-summary       List AutoDJ Event\n* @api_operation     ListAutoDJEvent",
        "tags": [
            "AutoDJ > Events"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/events",
            "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJEvents",
            "summary": "This endpoint allows you to list AutoDJ events",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Events"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 7943
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        7943
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 32880
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        32880
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioStoreAutoDJEvent",
        "functionName": "streamingRadiostoreautodjevent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/events",
        "summary": "Store AutoDJ Event",
        "description": "This endpoint allows you to store an AutoDJ event.",
        "tags": [
            "AutoDJ > Events"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/events",
            "operationId": "Streaming/radioStoreAutoDJEvent",
            "summary": "Store AutoDJ Event",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Events"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 49586
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        49586
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95692
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95692
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteAutoDJEvent",
        "functionName": "streamingRadiodeleteautodjevent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/events/{event_id}",
        "summary": "Delete AutoDJ event",
        "description": "This endpoint allows you to delete an AutoDJ event.",
        "tags": [
            "AutoDJ > Events"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "event_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "date",
                "in": "query",
                "required": false
            },
            {
                "name": "scope",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/events/%7Bevent_id%7D",
            "operationId": "Streaming/radioDeleteAutoDJEvent",
            "summary": "Delete AutoDJ event",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Events"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37550
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37550
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 17799
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        17799
                    ]
                },
                {
                    "name": "event_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the event to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 31066
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        31066
                    ]
                },
                {
                    "name": "date",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "date",
                        "type": "string",
                        "description": "Specify the date of the recurrence",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope",
                        "enum": [
                            "next",
                            "one"
                        ],
                        "type": "string",
                        "description": "Specify the scope to update event and its recurrence",
                        "example": "next"
                    },
                    "enumValues": [
                        "next",
                        "one"
                    ],
                    "values": [],
                    "examples": [
                        "next"
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
        "operationId": "Streaming/radioGetAutoDJEvent",
        "functionName": "streamingRadiogetautodjevent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/events/{event_id}",
        "summary": "Get AutoDJ event",
        "description": "This endpoint allows you to retrieve an AutoDJ event.",
        "tags": [
            "AutoDJ > Events"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "event_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/events/%7Bevent_id%7D",
            "operationId": "Streaming/radioGetAutoDJEvent",
            "summary": "Get AutoDJ event",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Events"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 75504
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        75504
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 1890
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        1890
                    ]
                },
                {
                    "name": "event_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the event to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 6601
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        6601
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
        "operationId": "Streaming/radioUpdateAutoDJEvent",
        "functionName": "streamingRadioupdateautodjevent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/events/{event_id}",
        "summary": "Update AutoDJ event",
        "description": "This endpoint allows you to update an AutoDJ event.",
        "tags": [
            "AutoDJ > Events"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "event_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/events/%7Bevent_id%7D",
            "operationId": "Streaming/radioUpdateAutoDJEvent",
            "summary": "Update AutoDJ event",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Events"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38829
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38829
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 24781
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        24781
                    ]
                },
                {
                    "name": "event_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the event to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 85639
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        85639
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJMedia",
        "functionName": "streamingRadiothisendpointallowsyoutolistautodjmedia",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/medias",
        "summary": "This endpoint allows you to list AutoDJ media.",
        "description": "*\n* @api-summary       List AutoDJ Media\n* @api_operation     ListAutoDJMedia",
        "tags": [
            "AutoDJ > Media"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/medias",
            "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJMedia",
            "summary": "This endpoint allows you to list AutoDJ media",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Media"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 13543
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        13543
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 91714
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        91714
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
        "operationId": "Streaming/radioStoreAutoDJMedia",
        "functionName": "streamingRadiostoreautodjmedia",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/medias",
        "summary": "Store AutoDJ Media",
        "description": "This endpoint allows you to store an AutoDJ media.",
        "tags": [
            "AutoDJ > Media"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/medias",
            "operationId": "Streaming/radioStoreAutoDJMedia",
            "summary": "Store AutoDJ Media",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Media"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 570
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        570
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11608
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11608
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteAutoDJMedia",
        "functionName": "streamingRadiodeleteautodjmedia",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/medias/{media_id}",
        "summary": "Delete AutoDJ Media",
        "description": "This endpoint allows you to delete an AutoDJ media.",
        "tags": [
            "AutoDJ > Media"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "media_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/medias/%7Bmedia_id%7D",
            "operationId": "Streaming/radioDeleteAutoDJMedia",
            "summary": "Delete AutoDJ Media",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Media"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 46820
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        46820
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 9040
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        9040
                    ]
                },
                {
                    "name": "media_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the media to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetAutoDJMedia",
        "functionName": "streamingRadiogetautodjmedia",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/medias/{media_id}",
        "summary": "Get AutoDJ Media",
        "description": "This endpoint allows you to retrieve an AutoDJ media.",
        "tags": [
            "AutoDJ > Media"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "media_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/medias/%7Bmedia_id%7D",
            "operationId": "Streaming/radioGetAutoDJMedia",
            "summary": "Get AutoDJ Media",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Media"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18491
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18491
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 24401
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        24401
                    ]
                },
                {
                    "name": "media_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the media to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioUpdateAutoDJMedia",
        "functionName": "streamingRadioupdateautodjmedia",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/medias/{media_id}",
        "summary": "Update AutoDJ Media",
        "description": "This endpoint allows you to update an AutoDJ media.",
        "tags": [
            "AutoDJ > Media"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "media_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/medias/%7Bmedia_id%7D",
            "operationId": "Streaming/radioUpdateAutoDJMedia",
            "summary": "Update AutoDJ Media",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Media"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55368
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55368
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 7189
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        7189
                    ]
                },
                {
                    "name": "media_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the media to request.",
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
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetPlayingPlaylist",
        "functionName": "streamingRadiogetplayingplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playing_playlist",
        "summary": "Get Playing Playlist",
        "description": "This endpoint allows you to get the playing playlist attached to AutoDJ.",
        "tags": [
            "AutoDJ > Playing playlist"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playing_playlist",
            "operationId": "Streaming/radioGetPlayingPlaylist",
            "summary": "Get Playing Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playing playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 50313
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        50313
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16731
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16731
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioGeneratePlaylist",
        "functionName": "streamingRadiogenerateplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playing_playlist/generate",
        "summary": "Generate Playlist",
        "description": "",
        "tags": [
            "AutoDJ > Playing playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playing_playlist/generate",
            "operationId": "Streaming/radioGeneratePlaylist",
            "summary": "Generate Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playing playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 29730
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        29730
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 56009
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        56009
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
        "operationId": "Streaming_radioGetPlayingPlaylist_get_1_radios_radio_product_id_stations_station_id_autodj_playing_playlist_medias",
        "functionName": "streamingRadiogetplayingplaylistGet1RadiosRadioProductIdStationsStationIdAutodjPlayingPlaylistMedias",
        "originalOperationId": "Streaming/radioGetPlayingPlaylist",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playing_playlist/medias",
        "summary": "Get Playing Playlist",
        "description": "This endpoint allows you to get the playing playlist attached to AutoDJ.",
        "tags": [
            "AutoDJ > Playing playlist"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playing_playlist/medias",
            "operationId": "Streaming/radioGetPlayingPlaylist",
            "summary": "Get Playing Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playing playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 70008
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        70008
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 90040
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        90040
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioRemoveMedia",
        "functionName": "streamingRadioremovemedia",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playing_playlist/medias/{playing_media_id}",
        "summary": "Remove media",
        "description": "This endpoint allows you to remove media from playing playlist.",
        "tags": [
            "AutoDJ > Playing playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "playing_media_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playing_playlist/medias/%7Bplaying_media_id%7D",
            "operationId": "Streaming/radioRemoveMedia",
            "summary": "Remove media",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playing playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 76902
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        76902
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 13045
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        13045
                    ]
                },
                {
                    "name": "playing_media_id",
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
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioMoveMediaAfter",
        "functionName": "streamingRadiomovemediaafter",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playing_playlist/medias/{playing_media_id}/move",
        "summary": "Move media after",
        "description": "This endpoint allows you to move radio media after another one in the playing playlist.",
        "tags": [
            "AutoDJ > Playing playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "playing_media_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playing_playlist/medias/%7Bplaying_media_id%7D/move",
            "operationId": "Streaming/radioMoveMediaAfter",
            "summary": "Move media after",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playing playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33677
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33677
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 17442
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        17442
                    ]
                },
                {
                    "name": "playing_media_id",
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
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioInsertMediaAfter",
        "functionName": "streamingRadioinsertmediaafter",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playing_playlist/medias/insert",
        "summary": "Insert media after",
        "description": "This endpoint allows you to insert vod media after another one in the playing playlist.",
        "tags": [
            "AutoDJ > Playing playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playing_playlist/medias/insert",
            "operationId": "Streaming/radioInsertMediaAfter",
            "summary": "Insert media after",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playing playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 53592
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        53592
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 69920
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        69920
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
        "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJPlaylist",
        "functionName": "streamingRadiothisendpointallowsyoutolistautodjplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playlists",
        "summary": "This endpoint allows you to list AutoDJ playlist.",
        "description": "*\n* @api-summary       List AutoDJ Playlist\n* @api_operation     ListAutoDJPlaylist",
        "tags": [
            "AutoDJ > Playlist"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playlists",
            "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJPlaylist",
            "summary": "This endpoint allows you to list AutoDJ playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 47089
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        47089
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 2908
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2908
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
        "operationId": "Streaming/radioStoreAutoDJPlaylist",
        "functionName": "streamingRadiostoreautodjplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playlists",
        "summary": "Store AutoDJ Playlist",
        "description": "This endpoint allows you to store an AutoDJ playlist.",
        "tags": [
            "AutoDJ > Playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playlists",
            "operationId": "Streaming/radioStoreAutoDJPlaylist",
            "summary": "Store AutoDJ Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 90711
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        90711
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 57376
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        57376
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteAutoDJPlaylist",
        "functionName": "streamingRadiodeleteautodjplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playlists/{playlist_id}",
        "summary": "Delete AutoDJ Playlist",
        "description": "This endpoint allows you to delete an AutoDJ playlist.",
        "tags": [
            "AutoDJ > Playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "playlist_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playlists/%7Bplaylist_id%7D",
            "operationId": "Streaming/radioDeleteAutoDJPlaylist",
            "summary": "Delete AutoDJ Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55797
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55797
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 17604
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        17604
                    ]
                },
                {
                    "name": "playlist_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the playlist to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetAutoDJPlaylist",
        "functionName": "streamingRadiogetautodjplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playlists/{playlist_id}",
        "summary": "Get AutoDJ Playlist",
        "description": "This endpoint allows you to retrieve an AutoDJ playlist.",
        "tags": [
            "AutoDJ > Playlist"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "playlist_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playlists/%7Bplaylist_id%7D",
            "operationId": "Streaming/radioGetAutoDJPlaylist",
            "summary": "Get AutoDJ Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38914
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38914
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 3544
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        3544
                    ]
                },
                {
                    "name": "playlist_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the playlist to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioUpdateAutoDJPlaylist",
        "functionName": "streamingRadioupdateautodjplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playlists/{playlist_id}",
        "summary": "Update AutoDJ Playlist",
        "description": "This endpoint allows you to update an AutoDJ playlist.",
        "tags": [
            "AutoDJ > Playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "playlist_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playlists/%7Bplaylist_id%7D",
            "operationId": "Streaming/radioUpdateAutoDJPlaylist",
            "summary": "Update AutoDJ Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 57549
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        57549
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 12841
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        12841
                    ]
                },
                {
                    "name": "playlist_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the playlist to request.",
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
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "put_1_radios_radio_product_id_stations_station_id_autodj_playlists_playlist_id_attach_media",
        "functionName": "put1RadiosRadioProductIdStationsStationIdAutodjPlaylistsPlaylistIdAttachMedia",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playlists/{playlist_id}/attach_media",
        "summary": "Update AutoDJ Playlist",
        "description": "This endpoint allows you to update an AutoDJ playlist.",
        "tags": [
            "AutoDJ > Playlist"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "playlist_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playlists/%7Bplaylist_id%7D/attach_media",
            "operationId": null,
            "summary": "Update AutoDJ Playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 36455
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        36455
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11500
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11500
                    ]
                },
                {
                    "name": "playlist_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the playlist to request.",
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
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJMediasInPlaylist",
        "functionName": "streamingRadiothisendpointallowsyoutolistautodjmediasinplaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/playlists/{playlist_id}/medias",
        "summary": "This endpoint allows you to list AutoDJ medias in playlist.",
        "description": "*\n* @api-summary       List AutoDJ Medias Playlist\n* @api_operation     ListAutoDJMediasPlaylist",
        "tags": [
            "AutoDJ > Playlist"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "playlist_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/playlists/%7Bplaylist_id%7D/medias",
            "operationId": "Streaming/radioThisEndpointAllowsYouToListAutoDJMediasInPlaylist",
            "summary": "This endpoint allows you to list AutoDJ medias in playlist",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ",
                "Playlist"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 56189
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        56189
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 93854
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        93854
                    ]
                },
                {
                    "name": "playlist_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the playlist to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioRestart",
        "functionName": "streamingRadiorestart",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/autodj/restart",
        "summary": "Restart",
        "description": "This endpoint allows you to restart AutoDJ.",
        "tags": [
            "AutoDJ"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/autodj/restart",
            "operationId": "Streaming/radioRestart",
            "summary": "Restart",
            "categoryPath": [
                "Streaming radio",
                "AutoDJ"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 9717
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        9717
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65949
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65949
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
        "operationId": "Streaming/radioDisconnectStreams",
        "functionName": "streamingRadiodisconnectstreams",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/disconnect_streams",
        "summary": "Disconnect streams",
        "description": "This endpoint allows you to force the disconnection of the main streams.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "docs": null
    },
    {
        "operationId": "Streaming/radioListEncoderEvents",
        "functionName": "streamingRadiolistencoderevents",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/encoder_events",
        "summary": "List encoder events",
        "description": "This endpoint allows you to retrieve encoder events by date.",
        "tags": [
            "Encoder Events"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
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
                "name": "return",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/encoder_events",
            "operationId": "Streaming/radioListEncoderEvents",
            "summary": "List encoder events",
            "categoryPath": [
                "Streaming radio",
                "Encoder Events"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": null,
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
                }
            ],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 19367
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        19367
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18354
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18354
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
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
                        "minimum": 1,
                        "type": "integer",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
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
                        "description": "return the count instead of the stat",
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
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                        "example": 30226
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        30226
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
                        "example": 68318
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        68318
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
        "operationId": "Streaming/radioDeleteHlsStream",
        "functionName": "streamingRadiodeletehlsstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream",
        "summary": "Delete hls stream",
        "description": "This endpoint allows you to delete a hls stream.",
        "tags": [
            "Hls Stream"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "user_password",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream",
            "operationId": "Streaming/radioDeleteHlsStream",
            "summary": "Delete hls stream",
            "categoryPath": [
                "Streaming radio",
                "Hls Stream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 40796
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        40796
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 97290
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        97290
                    ]
                },
                {
                    "name": "user_password",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "user_password",
                        "type": "string",
                        "description": "Specify the user password to check authorization",
                        "example": "my_secure_password"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "my_secure_password"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetHlsStream",
        "functionName": "streamingRadiogethlsstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream",
        "summary": "Get hls stream",
        "description": "This endpoint allows you to retrieve a hls stream.",
        "tags": [
            "Hls Stream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream",
            "operationId": "Streaming/radioGetHlsStream",
            "summary": "Get hls stream",
            "categoryPath": [
                "Streaming radio",
                "Hls Stream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
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
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51064
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51064
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11537
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11537
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
                        "example": 4444
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        4444
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
                        "example": 24369
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        24369
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
                        "example": 90207
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        90207
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
                        "example": 81159
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        81159
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "desc"
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
                        "desc"
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
        "operationId": "Streaming/radioUpdateHlsStream",
        "functionName": "streamingRadioupdatehlsstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream",
        "summary": "Update hls stream",
        "description": "This endpoint allows you to update a hls stream.",
        "tags": [
            "Hls Stream"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream",
            "operationId": "Streaming/radioUpdateHlsStream",
            "summary": "Update hls stream",
            "categoryPath": [
                "Streaming radio",
                "Hls Stream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 6713
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        6713
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 60037
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        60037
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "post_1_radios_radio_product_id_stations_station_id_hls_stream_add",
        "functionName": "post1RadiosRadioProductIdStationsStationIdHlsStreamAdd",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/add",
        "summary": "Add hls stream",
        "description": "This endpoint allows you to add a hls stream.",
        "tags": [
            "Hls Stream"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/add",
            "operationId": null,
            "summary": "Add hls stream",
            "categoryPath": [
                "Streaming radio",
                "Hls Stream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 77119
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        77119
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 52733
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        52733
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_consumption",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsConsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/consumption",
        "summary": "Get consumption",
        "description": "This endpoint allows you to retrieve hls stream consumption stats.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/consumption",
            "operationId": null,
            "summary": "Get consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 86239
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        86239
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 77778
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        77778
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_countries_continent",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsCountriesContinent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/countries_continent",
        "summary": "Get countries by continent",
        "description": "This endpoint allows you to retrieve hls stream total countries stats by continent.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/countries_continent",
            "operationId": null,
            "summary": "Get countries by continent",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 41341
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        41341
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 28534
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        28534
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_countries",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsCountries",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/countries",
        "summary": "Get countries",
        "description": "This endpoint allows you to retrieve hls stream countries stats.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/countries",
            "operationId": null,
            "summary": "Get countries",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 42680
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        42680
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 24574
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        24574
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_export_csv",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsExportCsv",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/export_csv",
        "summary": "Export stats",
        "description": "This endpoint allows you to export hls stream stats.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "timezone",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json",
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/export_csv",
            "operationId": null,
            "summary": "Export stats",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 23045
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        23045
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 24276
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        24276
                    ]
                },
                {
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "listeners_per_minute",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "listeners_per_minute"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "listeners_per_minute",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "listeners_per_minute"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "year"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "year"
                    ]
                },
                {
                    "name": "timezone",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "timezone",
                        "enum": [
                            "Africa/Abidjan",
                            "Africa/Accra",
                            "Africa/Addis_Ababa",
                            "Africa/Algiers",
                            "Africa/Asmara",
                            "Africa/Bamako",
                            "Africa/Bangui",
                            "Africa/Banjul",
                            "Africa/Bissau",
                            "Africa/Blantyre",
                            "Africa/Brazzaville",
                            "Africa/Bujumbura",
                            "Africa/Cairo",
                            "Africa/Casablanca",
                            "Africa/Ceuta",
                            "Africa/Conakry",
                            "Africa/Dakar",
                            "Africa/Dar_es_Salaam",
                            "Africa/Djibouti",
                            "Africa/Douala",
                            "Africa/El_Aaiun",
                            "Africa/Freetown",
                            "Africa/Gaborone",
                            "Africa/Harare",
                            "Africa/Johannesburg",
                            "Africa/Juba",
                            "Africa/Kampala",
                            "Africa/Khartoum",
                            "Africa/Kigali",
                            "Africa/Kinshasa",
                            "Africa/Lagos",
                            "Africa/Libreville",
                            "Africa/Lome",
                            "Africa/Luanda",
                            "Africa/Lubumbashi",
                            "Africa/Lusaka",
                            "Africa/Malabo",
                            "Africa/Maputo",
                            "Africa/Maseru",
                            "Africa/Mbabane",
                            "Africa/Mogadishu",
                            "Africa/Monrovia",
                            "Africa/Nairobi",
                            "Africa/Ndjamena",
                            "Africa/Niamey",
                            "Africa/Nouakchott",
                            "Africa/Ouagadougou",
                            "Africa/Porto-Novo",
                            "Africa/Sao_Tome",
                            "Africa/Tripoli",
                            "Africa/Tunis",
                            "Africa/Windhoek",
                            "America/Adak",
                            "America/Anchorage",
                            "America/Anguilla",
                            "America/Antigua",
                            "America/Araguaina",
                            "America/Argentina/Buenos_Aires",
                            "America/Argentina/Catamarca",
                            "America/Argentina/Cordoba",
                            "America/Argentina/Jujuy",
                            "America/Argentina/La_Rioja",
                            "America/Argentina/Mendoza",
                            "America/Argentina/Rio_Gallegos",
                            "America/Argentina/Salta",
                            "America/Argentina/San_Juan",
                            "America/Argentina/San_Luis",
                            "America/Argentina/Tucuman",
                            "America/Argentina/Ushuaia",
                            "America/Aruba",
                            "America/Asuncion",
                            "America/Atikokan",
                            "America/Bahia",
                            "America/Bahia_Banderas",
                            "America/Barbados",
                            "America/Belem",
                            "America/Belize",
                            "America/Blanc-Sablon",
                            "America/Boa_Vista",
                            "America/Bogota",
                            "America/Boise",
                            "America/Cambridge_Bay",
                            "America/Campo_Grande",
                            "America/Cancun",
                            "America/Caracas",
                            "America/Cayenne",
                            "America/Cayman",
                            "America/Chicago",
                            "America/Chihuahua",
                            "America/Ciudad_Juarez",
                            "America/Costa_Rica",
                            "America/Coyhaique",
                            "America/Creston",
                            "America/Cuiaba",
                            "America/Curacao",
                            "America/Danmarkshavn",
                            "America/Dawson",
                            "America/Dawson_Creek",
                            "America/Denver",
                            "America/Detroit",
                            "America/Dominica",
                            "America/Edmonton",
                            "America/Eirunepe",
                            "America/El_Salvador",
                            "America/Fort_Nelson",
                            "America/Fortaleza",
                            "America/Glace_Bay",
                            "America/Goose_Bay",
                            "America/Grand_Turk",
                            "America/Grenada",
                            "America/Guadeloupe",
                            "America/Guatemala",
                            "America/Guayaquil",
                            "America/Guyana",
                            "America/Halifax",
                            "America/Havana",
                            "America/Hermosillo",
                            "America/Indiana/Indianapolis",
                            "America/Indiana/Knox",
                            "America/Indiana/Marengo",
                            "America/Indiana/Petersburg",
                            "America/Indiana/Tell_City",
                            "America/Indiana/Vevay",
                            "America/Indiana/Vincennes",
                            "America/Indiana/Winamac",
                            "America/Inuvik",
                            "America/Iqaluit",
                            "America/Jamaica",
                            "America/Juneau",
                            "America/Kentucky/Louisville",
                            "America/Kentucky/Monticello",
                            "America/Kralendijk",
                            "America/La_Paz",
                            "America/Lima",
                            "America/Los_Angeles",
                            "America/Lower_Princes",
                            "America/Maceio",
                            "America/Managua",
                            "America/Manaus",
                            "America/Marigot",
                            "America/Martinique",
                            "America/Matamoros",
                            "America/Mazatlan",
                            "America/Menominee",
                            "America/Merida",
                            "America/Metlakatla",
                            "America/Mexico_City",
                            "America/Miquelon",
                            "America/Moncton",
                            "America/Monterrey",
                            "America/Montevideo",
                            "America/Montserrat",
                            "America/Nassau",
                            "America/New_York",
                            "America/Nome",
                            "America/Noronha",
                            "America/North_Dakota/Beulah",
                            "America/North_Dakota/Center",
                            "America/North_Dakota/New_Salem",
                            "America/Nuuk",
                            "America/Ojinaga",
                            "America/Panama",
                            "America/Paramaribo",
                            "America/Phoenix",
                            "America/Port-au-Prince",
                            "America/Port_of_Spain",
                            "America/Porto_Velho",
                            "America/Puerto_Rico",
                            "America/Punta_Arenas",
                            "America/Rankin_Inlet",
                            "America/Recife",
                            "America/Regina",
                            "America/Resolute",
                            "America/Rio_Branco",
                            "America/Santarem",
                            "America/Santiago",
                            "America/Santo_Domingo",
                            "America/Sao_Paulo",
                            "America/Scoresbysund",
                            "America/Sitka",
                            "America/St_Barthelemy",
                            "America/St_Johns",
                            "America/St_Kitts",
                            "America/St_Lucia",
                            "America/St_Thomas",
                            "America/St_Vincent",
                            "America/Swift_Current",
                            "America/Tegucigalpa",
                            "America/Thule",
                            "America/Tijuana",
                            "America/Toronto",
                            "America/Tortola",
                            "America/Vancouver",
                            "America/Whitehorse",
                            "America/Winnipeg",
                            "America/Yakutat",
                            "Antarctica/Casey",
                            "Antarctica/Davis",
                            "Antarctica/DumontDUrville",
                            "Antarctica/Macquarie",
                            "Antarctica/Mawson",
                            "Antarctica/McMurdo",
                            "Antarctica/Palmer",
                            "Antarctica/Rothera",
                            "Antarctica/Syowa",
                            "Antarctica/Troll",
                            "Antarctica/Vostok",
                            "Arctic/Longyearbyen",
                            "Asia/Aden",
                            "Asia/Almaty",
                            "Asia/Amman",
                            "Asia/Anadyr",
                            "Asia/Aqtau",
                            "Asia/Aqtobe",
                            "Asia/Ashgabat",
                            "Asia/Atyrau",
                            "Asia/Baghdad",
                            "Asia/Bahrain",
                            "Asia/Baku",
                            "Asia/Bangkok",
                            "Asia/Barnaul",
                            "Asia/Beirut",
                            "Asia/Bishkek",
                            "Asia/Brunei",
                            "Asia/Chita",
                            "Asia/Colombo",
                            "Asia/Damascus",
                            "Asia/Dhaka",
                            "Asia/Dili",
                            "Asia/Dubai",
                            "Asia/Dushanbe",
                            "Asia/Famagusta",
                            "Asia/Gaza",
                            "Asia/Hebron",
                            "Asia/Ho_Chi_Minh",
                            "Asia/Hong_Kong",
                            "Asia/Hovd",
                            "Asia/Irkutsk",
                            "Asia/Jakarta",
                            "Asia/Jayapura",
                            "Asia/Jerusalem",
                            "Asia/Kabul",
                            "Asia/Kamchatka",
                            "Asia/Karachi",
                            "Asia/Kathmandu",
                            "Asia/Khandyga",
                            "Asia/Kolkata",
                            "Asia/Krasnoyarsk",
                            "Asia/Kuala_Lumpur",
                            "Asia/Kuching",
                            "Asia/Kuwait",
                            "Asia/Macau",
                            "Asia/Magadan",
                            "Asia/Makassar",
                            "Asia/Manila",
                            "Asia/Muscat",
                            "Asia/Nicosia",
                            "Asia/Novokuznetsk",
                            "Asia/Novosibirsk",
                            "Asia/Omsk",
                            "Asia/Oral",
                            "Asia/Phnom_Penh",
                            "Asia/Pontianak",
                            "Asia/Pyongyang",
                            "Asia/Qatar",
                            "Asia/Qostanay",
                            "Asia/Qyzylorda",
                            "Asia/Riyadh",
                            "Asia/Sakhalin",
                            "Asia/Samarkand",
                            "Asia/Seoul",
                            "Asia/Shanghai",
                            "Asia/Singapore",
                            "Asia/Srednekolymsk",
                            "Asia/Taipei",
                            "Asia/Tashkent",
                            "Asia/Tbilisi",
                            "Asia/Tehran",
                            "Asia/Thimphu",
                            "Asia/Tokyo",
                            "Asia/Tomsk",
                            "Asia/Ulaanbaatar",
                            "Asia/Urumqi",
                            "Asia/Ust-Nera",
                            "Asia/Vientiane",
                            "Asia/Vladivostok",
                            "Asia/Yakutsk",
                            "Asia/Yangon",
                            "Asia/Yekaterinburg",
                            "Asia/Yerevan",
                            "Atlantic/Azores",
                            "Atlantic/Bermuda",
                            "Atlantic/Canary",
                            "Atlantic/Cape_Verde",
                            "Atlantic/Faroe",
                            "Atlantic/Madeira",
                            "Atlantic/Reykjavik",
                            "Atlantic/South_Georgia",
                            "Atlantic/St_Helena",
                            "Atlantic/Stanley",
                            "Australia/Adelaide",
                            "Australia/Brisbane",
                            "Australia/Broken_Hill",
                            "Australia/Darwin",
                            "Australia/Eucla",
                            "Australia/Hobart",
                            "Australia/Lindeman",
                            "Australia/Lord_Howe",
                            "Australia/Melbourne",
                            "Australia/Perth",
                            "Australia/Sydney",
                            "Europe/Amsterdam",
                            "Europe/Andorra",
                            "Europe/Astrakhan",
                            "Europe/Athens",
                            "Europe/Belgrade",
                            "Europe/Berlin",
                            "Europe/Bratislava",
                            "Europe/Brussels",
                            "Europe/Bucharest",
                            "Europe/Budapest",
                            "Europe/Busingen",
                            "Europe/Chisinau",
                            "Europe/Copenhagen",
                            "Europe/Dublin",
                            "Europe/Gibraltar",
                            "Europe/Guernsey",
                            "Europe/Helsinki",
                            "Europe/Isle_of_Man",
                            "Europe/Istanbul",
                            "Europe/Jersey",
                            "Europe/Kaliningrad",
                            "Europe/Kirov",
                            "Europe/Kyiv",
                            "Europe/Lisbon",
                            "Europe/Ljubljana",
                            "Europe/London",
                            "Europe/Luxembourg",
                            "Europe/Madrid",
                            "Europe/Malta",
                            "Europe/Mariehamn",
                            "Europe/Minsk",
                            "Europe/Monaco",
                            "Europe/Moscow",
                            "Europe/Oslo",
                            "Europe/Paris",
                            "Europe/Podgorica",
                            "Europe/Prague",
                            "Europe/Riga",
                            "Europe/Rome",
                            "Europe/Samara",
                            "Europe/San_Marino",
                            "Europe/Sarajevo",
                            "Europe/Saratov",
                            "Europe/Simferopol",
                            "Europe/Skopje",
                            "Europe/Sofia",
                            "Europe/Stockholm",
                            "Europe/Tallinn",
                            "Europe/Tirane",
                            "Europe/Ulyanovsk",
                            "Europe/Vaduz",
                            "Europe/Vatican",
                            "Europe/Vienna",
                            "Europe/Vilnius",
                            "Europe/Volgograd",
                            "Europe/Warsaw",
                            "Europe/Zagreb",
                            "Europe/Zurich",
                            "Indian/Antananarivo",
                            "Indian/Chagos",
                            "Indian/Christmas",
                            "Indian/Cocos",
                            "Indian/Comoro",
                            "Indian/Kerguelen",
                            "Indian/Mahe",
                            "Indian/Maldives",
                            "Indian/Mauritius",
                            "Indian/Mayotte",
                            "Indian/Reunion",
                            "Pacific/Apia",
                            "Pacific/Auckland",
                            "Pacific/Bougainville",
                            "Pacific/Chatham",
                            "Pacific/Chuuk",
                            "Pacific/Easter",
                            "Pacific/Efate",
                            "Pacific/Fakaofo",
                            "Pacific/Fiji",
                            "Pacific/Funafuti",
                            "Pacific/Galapagos",
                            "Pacific/Gambier",
                            "Pacific/Guadalcanal",
                            "Pacific/Guam",
                            "Pacific/Honolulu",
                            "Pacific/Kanton",
                            "Pacific/Kiritimati",
                            "Pacific/Kosrae",
                            "Pacific/Kwajalein",
                            "Pacific/Majuro",
                            "Pacific/Marquesas",
                            "Pacific/Midway",
                            "Pacific/Nauru",
                            "Pacific/Niue",
                            "Pacific/Norfolk",
                            "Pacific/Noumea",
                            "Pacific/Pago_Pago",
                            "Pacific/Palau",
                            "Pacific/Pitcairn",
                            "Pacific/Pohnpei",
                            "Pacific/Port_Moresby",
                            "Pacific/Rarotonga",
                            "Pacific/Saipan",
                            "Pacific/Tahiti",
                            "Pacific/Tarawa",
                            "Pacific/Tongatapu",
                            "Pacific/Wake",
                            "Pacific/Wallis",
                            "UTC"
                        ],
                        "type": "string",
                        "description": "Specify the timezone for the output date",
                        "example": "America/Eirunepe"
                    },
                    "enumValues": [
                        "Africa/Abidjan",
                        "Africa/Accra",
                        "Africa/Addis_Ababa",
                        "Africa/Algiers",
                        "Africa/Asmara",
                        "Africa/Bamako",
                        "Africa/Bangui",
                        "Africa/Banjul",
                        "Africa/Bissau",
                        "Africa/Blantyre",
                        "Africa/Brazzaville",
                        "Africa/Bujumbura",
                        "Africa/Cairo",
                        "Africa/Casablanca",
                        "Africa/Ceuta",
                        "Africa/Conakry",
                        "Africa/Dakar",
                        "Africa/Dar_es_Salaam",
                        "Africa/Djibouti",
                        "Africa/Douala",
                        "Africa/El_Aaiun",
                        "Africa/Freetown",
                        "Africa/Gaborone",
                        "Africa/Harare",
                        "Africa/Johannesburg",
                        "Africa/Juba",
                        "Africa/Kampala",
                        "Africa/Khartoum",
                        "Africa/Kigali",
                        "Africa/Kinshasa",
                        "Africa/Lagos",
                        "Africa/Libreville",
                        "Africa/Lome",
                        "Africa/Luanda",
                        "Africa/Lubumbashi",
                        "Africa/Lusaka",
                        "Africa/Malabo",
                        "Africa/Maputo",
                        "Africa/Maseru",
                        "Africa/Mbabane",
                        "Africa/Mogadishu",
                        "Africa/Monrovia",
                        "Africa/Nairobi",
                        "Africa/Ndjamena",
                        "Africa/Niamey",
                        "Africa/Nouakchott",
                        "Africa/Ouagadougou",
                        "Africa/Porto-Novo",
                        "Africa/Sao_Tome",
                        "Africa/Tripoli",
                        "Africa/Tunis",
                        "Africa/Windhoek",
                        "America/Adak",
                        "America/Anchorage",
                        "America/Anguilla",
                        "America/Antigua",
                        "America/Araguaina",
                        "America/Argentina/Buenos_Aires",
                        "America/Argentina/Catamarca",
                        "America/Argentina/Cordoba",
                        "America/Argentina/Jujuy",
                        "America/Argentina/La_Rioja",
                        "America/Argentina/Mendoza",
                        "America/Argentina/Rio_Gallegos",
                        "America/Argentina/Salta",
                        "America/Argentina/San_Juan",
                        "America/Argentina/San_Luis",
                        "America/Argentina/Tucuman",
                        "America/Argentina/Ushuaia",
                        "America/Aruba",
                        "America/Asuncion",
                        "America/Atikokan",
                        "America/Bahia",
                        "America/Bahia_Banderas",
                        "America/Barbados",
                        "America/Belem",
                        "America/Belize",
                        "America/Blanc-Sablon",
                        "America/Boa_Vista",
                        "America/Bogota",
                        "America/Boise",
                        "America/Cambridge_Bay",
                        "America/Campo_Grande",
                        "America/Cancun",
                        "America/Caracas",
                        "America/Cayenne",
                        "America/Cayman",
                        "America/Chicago",
                        "America/Chihuahua",
                        "America/Ciudad_Juarez",
                        "America/Costa_Rica",
                        "America/Coyhaique",
                        "America/Creston",
                        "America/Cuiaba",
                        "America/Curacao",
                        "America/Danmarkshavn",
                        "America/Dawson",
                        "America/Dawson_Creek",
                        "America/Denver",
                        "America/Detroit",
                        "America/Dominica",
                        "America/Edmonton",
                        "America/Eirunepe",
                        "America/El_Salvador",
                        "America/Fort_Nelson",
                        "America/Fortaleza",
                        "America/Glace_Bay",
                        "America/Goose_Bay",
                        "America/Grand_Turk",
                        "America/Grenada",
                        "America/Guadeloupe",
                        "America/Guatemala",
                        "America/Guayaquil",
                        "America/Guyana",
                        "America/Halifax",
                        "America/Havana",
                        "America/Hermosillo",
                        "America/Indiana/Indianapolis",
                        "America/Indiana/Knox",
                        "America/Indiana/Marengo",
                        "America/Indiana/Petersburg",
                        "America/Indiana/Tell_City",
                        "America/Indiana/Vevay",
                        "America/Indiana/Vincennes",
                        "America/Indiana/Winamac",
                        "America/Inuvik",
                        "America/Iqaluit",
                        "America/Jamaica",
                        "America/Juneau",
                        "America/Kentucky/Louisville",
                        "America/Kentucky/Monticello",
                        "America/Kralendijk",
                        "America/La_Paz",
                        "America/Lima",
                        "America/Los_Angeles",
                        "America/Lower_Princes",
                        "America/Maceio",
                        "America/Managua",
                        "America/Manaus",
                        "America/Marigot",
                        "America/Martinique",
                        "America/Matamoros",
                        "America/Mazatlan",
                        "America/Menominee",
                        "America/Merida",
                        "America/Metlakatla",
                        "America/Mexico_City",
                        "America/Miquelon",
                        "America/Moncton",
                        "America/Monterrey",
                        "America/Montevideo",
                        "America/Montserrat",
                        "America/Nassau",
                        "America/New_York",
                        "America/Nome",
                        "America/Noronha",
                        "America/North_Dakota/Beulah",
                        "America/North_Dakota/Center",
                        "America/North_Dakota/New_Salem",
                        "America/Nuuk",
                        "America/Ojinaga",
                        "America/Panama",
                        "America/Paramaribo",
                        "America/Phoenix",
                        "America/Port-au-Prince",
                        "America/Port_of_Spain",
                        "America/Porto_Velho",
                        "America/Puerto_Rico",
                        "America/Punta_Arenas",
                        "America/Rankin_Inlet",
                        "America/Recife",
                        "America/Regina",
                        "America/Resolute",
                        "America/Rio_Branco",
                        "America/Santarem",
                        "America/Santiago",
                        "America/Santo_Domingo",
                        "America/Sao_Paulo",
                        "America/Scoresbysund",
                        "America/Sitka",
                        "America/St_Barthelemy",
                        "America/St_Johns",
                        "America/St_Kitts",
                        "America/St_Lucia",
                        "America/St_Thomas",
                        "America/St_Vincent",
                        "America/Swift_Current",
                        "America/Tegucigalpa",
                        "America/Thule",
                        "America/Tijuana",
                        "America/Toronto",
                        "America/Tortola",
                        "America/Vancouver",
                        "America/Whitehorse",
                        "America/Winnipeg",
                        "America/Yakutat",
                        "Antarctica/Casey",
                        "Antarctica/Davis",
                        "Antarctica/DumontDUrville",
                        "Antarctica/Macquarie",
                        "Antarctica/Mawson",
                        "Antarctica/McMurdo",
                        "Antarctica/Palmer",
                        "Antarctica/Rothera",
                        "Antarctica/Syowa",
                        "Antarctica/Troll",
                        "Antarctica/Vostok",
                        "Arctic/Longyearbyen",
                        "Asia/Aden",
                        "Asia/Almaty",
                        "Asia/Amman",
                        "Asia/Anadyr",
                        "Asia/Aqtau",
                        "Asia/Aqtobe",
                        "Asia/Ashgabat",
                        "Asia/Atyrau",
                        "Asia/Baghdad",
                        "Asia/Bahrain",
                        "Asia/Baku",
                        "Asia/Bangkok",
                        "Asia/Barnaul",
                        "Asia/Beirut",
                        "Asia/Bishkek",
                        "Asia/Brunei",
                        "Asia/Chita",
                        "Asia/Colombo",
                        "Asia/Damascus",
                        "Asia/Dhaka",
                        "Asia/Dili",
                        "Asia/Dubai",
                        "Asia/Dushanbe",
                        "Asia/Famagusta",
                        "Asia/Gaza",
                        "Asia/Hebron",
                        "Asia/Ho_Chi_Minh",
                        "Asia/Hong_Kong",
                        "Asia/Hovd",
                        "Asia/Irkutsk",
                        "Asia/Jakarta",
                        "Asia/Jayapura",
                        "Asia/Jerusalem",
                        "Asia/Kabul",
                        "Asia/Kamchatka",
                        "Asia/Karachi",
                        "Asia/Kathmandu",
                        "Asia/Khandyga",
                        "Asia/Kolkata",
                        "Asia/Krasnoyarsk",
                        "Asia/Kuala_Lumpur",
                        "Asia/Kuching",
                        "Asia/Kuwait",
                        "Asia/Macau",
                        "Asia/Magadan",
                        "Asia/Makassar",
                        "Asia/Manila",
                        "Asia/Muscat",
                        "Asia/Nicosia",
                        "Asia/Novokuznetsk",
                        "Asia/Novosibirsk",
                        "Asia/Omsk",
                        "Asia/Oral",
                        "Asia/Phnom_Penh",
                        "Asia/Pontianak",
                        "Asia/Pyongyang",
                        "Asia/Qatar",
                        "Asia/Qostanay",
                        "Asia/Qyzylorda",
                        "Asia/Riyadh",
                        "Asia/Sakhalin",
                        "Asia/Samarkand",
                        "Asia/Seoul",
                        "Asia/Shanghai",
                        "Asia/Singapore",
                        "Asia/Srednekolymsk",
                        "Asia/Taipei",
                        "Asia/Tashkent",
                        "Asia/Tbilisi",
                        "Asia/Tehran",
                        "Asia/Thimphu",
                        "Asia/Tokyo",
                        "Asia/Tomsk",
                        "Asia/Ulaanbaatar",
                        "Asia/Urumqi",
                        "Asia/Ust-Nera",
                        "Asia/Vientiane",
                        "Asia/Vladivostok",
                        "Asia/Yakutsk",
                        "Asia/Yangon",
                        "Asia/Yekaterinburg",
                        "Asia/Yerevan",
                        "Atlantic/Azores",
                        "Atlantic/Bermuda",
                        "Atlantic/Canary",
                        "Atlantic/Cape_Verde",
                        "Atlantic/Faroe",
                        "Atlantic/Madeira",
                        "Atlantic/Reykjavik",
                        "Atlantic/South_Georgia",
                        "Atlantic/St_Helena",
                        "Atlantic/Stanley",
                        "Australia/Adelaide",
                        "Australia/Brisbane",
                        "Australia/Broken_Hill",
                        "Australia/Darwin",
                        "Australia/Eucla",
                        "Australia/Hobart",
                        "Australia/Lindeman",
                        "Australia/Lord_Howe",
                        "Australia/Melbourne",
                        "Australia/Perth",
                        "Australia/Sydney",
                        "Europe/Amsterdam",
                        "Europe/Andorra",
                        "Europe/Astrakhan",
                        "Europe/Athens",
                        "Europe/Belgrade",
                        "Europe/Berlin",
                        "Europe/Bratislava",
                        "Europe/Brussels",
                        "Europe/Bucharest",
                        "Europe/Budapest",
                        "Europe/Busingen",
                        "Europe/Chisinau",
                        "Europe/Copenhagen",
                        "Europe/Dublin",
                        "Europe/Gibraltar",
                        "Europe/Guernsey",
                        "Europe/Helsinki",
                        "Europe/Isle_of_Man",
                        "Europe/Istanbul",
                        "Europe/Jersey",
                        "Europe/Kaliningrad",
                        "Europe/Kirov",
                        "Europe/Kyiv",
                        "Europe/Lisbon",
                        "Europe/Ljubljana",
                        "Europe/London",
                        "Europe/Luxembourg",
                        "Europe/Madrid",
                        "Europe/Malta",
                        "Europe/Mariehamn",
                        "Europe/Minsk",
                        "Europe/Monaco",
                        "Europe/Moscow",
                        "Europe/Oslo",
                        "Europe/Paris",
                        "Europe/Podgorica",
                        "Europe/Prague",
                        "Europe/Riga",
                        "Europe/Rome",
                        "Europe/Samara",
                        "Europe/San_Marino",
                        "Europe/Sarajevo",
                        "Europe/Saratov",
                        "Europe/Simferopol",
                        "Europe/Skopje",
                        "Europe/Sofia",
                        "Europe/Stockholm",
                        "Europe/Tallinn",
                        "Europe/Tirane",
                        "Europe/Ulyanovsk",
                        "Europe/Vaduz",
                        "Europe/Vatican",
                        "Europe/Vienna",
                        "Europe/Vilnius",
                        "Europe/Volgograd",
                        "Europe/Warsaw",
                        "Europe/Zagreb",
                        "Europe/Zurich",
                        "Indian/Antananarivo",
                        "Indian/Chagos",
                        "Indian/Christmas",
                        "Indian/Cocos",
                        "Indian/Comoro",
                        "Indian/Kerguelen",
                        "Indian/Mahe",
                        "Indian/Maldives",
                        "Indian/Mauritius",
                        "Indian/Mayotte",
                        "Indian/Reunion",
                        "Pacific/Apia",
                        "Pacific/Auckland",
                        "Pacific/Bougainville",
                        "Pacific/Chatham",
                        "Pacific/Chuuk",
                        "Pacific/Easter",
                        "Pacific/Efate",
                        "Pacific/Fakaofo",
                        "Pacific/Fiji",
                        "Pacific/Funafuti",
                        "Pacific/Galapagos",
                        "Pacific/Gambier",
                        "Pacific/Guadalcanal",
                        "Pacific/Guam",
                        "Pacific/Honolulu",
                        "Pacific/Kanton",
                        "Pacific/Kiritimati",
                        "Pacific/Kosrae",
                        "Pacific/Kwajalein",
                        "Pacific/Majuro",
                        "Pacific/Marquesas",
                        "Pacific/Midway",
                        "Pacific/Nauru",
                        "Pacific/Niue",
                        "Pacific/Norfolk",
                        "Pacific/Noumea",
                        "Pacific/Pago_Pago",
                        "Pacific/Palau",
                        "Pacific/Pitcairn",
                        "Pacific/Pohnpei",
                        "Pacific/Port_Moresby",
                        "Pacific/Rarotonga",
                        "Pacific/Saipan",
                        "Pacific/Tahiti",
                        "Pacific/Tarawa",
                        "Pacific/Tongatapu",
                        "Pacific/Wake",
                        "Pacific/Wallis",
                        "UTC"
                    ],
                    "values": [],
                    "examples": [
                        "America/Eirunepe"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_listeners_per_minute",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsListenersPerMinute",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/listeners_per_minute",
        "summary": "Get listeners by minute",
        "description": "This endpoint allows you to retrieve hls stream listeners stats by minute on last 24h.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/listeners_per_minute",
            "operationId": null,
            "summary": "Get listeners by minute",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 52434
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        52434
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65600
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65600
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_listeners",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsListeners",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/listeners",
        "summary": "Get listeners",
        "description": "This endpoint allows you to retrieve hls stream listeners stats.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/listeners",
            "operationId": null,
            "summary": "Get listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 88308
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        88308
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16567
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16567
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "week"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "week"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_players",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsPlayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/players",
        "summary": "Get players",
        "description": "This endpoint allows you to retrieve players stats.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/players",
            "operationId": null,
            "summary": "Get players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 5144
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5144
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 22986
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        22986
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_total_consumption",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsTotalConsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/total_consumption",
        "summary": "Get total consumption",
        "description": "This endpoint allows you to retrieve total hls stream consumption stats.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/total_consumption",
            "operationId": null,
            "summary": "Get total consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 81846
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        81846
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 15479
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        15479
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_hls_stream_stats_total_players",
        "functionName": "get1RadiosRadioProductIdStationsStationIdHlsStreamStatsTotalPlayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/stats/total_players",
        "summary": "Get total players",
        "description": "This endpoint allows you to retrieve players total stats.",
        "tags": [
            "Stats > HlsStream"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/stats/total_players",
            "operationId": null,
            "summary": "Get total players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "HlsStream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 4824
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        4824
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 673
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        673
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "post_1_radios_radio_product_id_stations_station_id_hls_stream_toggle_direct_live",
        "functionName": "post1RadiosRadioProductIdStationsStationIdHlsStreamToggleDirectLive",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/hls_stream/toggle_direct_live",
        "summary": "Toggle direct live",
        "description": "This endpoint allows you to toggle direct live.",
        "tags": [
            "Hls Stream"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/hls_stream/toggle_direct_live",
            "operationId": null,
            "summary": "Toggle direct live",
            "categoryPath": [
                "Streaming radio",
                "Hls Stream"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 62805
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        62805
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 62653
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        62653
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioExportLogAsMediapulse",
        "functionName": "streamingRadioexportlogasmediapulse",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/mediapulse/export_log",
        "summary": "Export log as Mediapulse",
        "description": "We generate the log from Elastic if not already exist\nReturn true if we start the generation",
        "tags": [
            "Mediapulse"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/mediapulse/export_log",
            "operationId": "Streaming/radioExportLogAsMediapulse",
            "summary": "Export log as Mediapulse",
            "categoryPath": [
                "Streaming radio",
                "Mediapulse"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 64226
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        64226
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 94223
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        94223
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/radioCheckIfMediapulseLogFileIsAlreadyPresentInStorage",
        "functionName": "streamingRadiocheckifmediapulselogfileisalreadypresentinstorage",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/mediapulse/export_log/available",
        "summary": "Check if Mediapulse log file is already present in storage",
        "description": "",
        "tags": [
            "Mediapulse"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/mediapulse/export_log/available",
            "operationId": "Streaming/radioCheckIfMediapulseLogFileIsAlreadyPresentInStorage",
            "summary": "Check if Mediapulse log file is already present in storage",
            "categoryPath": [
                "Streaming radio",
                "Mediapulse"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 5989
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5989
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 43691
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        43691
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGenerateAReportForExportMediapulseLogOnAStation",
        "functionName": "streamingRadiogenerateareportforexportmediapulselogonastation",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/mediapulse/report",
        "summary": "Generate a report for export mediapulse log on a station",
        "description": "",
        "tags": [
            "Mediapulse"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
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
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/mediapulse/report",
            "operationId": "Streaming/radioGenerateAReportForExportMediapulseLogOnAStation",
            "summary": "Generate a report for export mediapulse log on a station",
            "categoryPath": [
                "Streaming radio",
                "Mediapulse"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 34625
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        34625
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 52765
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        52765
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
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
                        "minimum": 1,
                        "type": "integer",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetNotification",
        "functionName": "streamingRadiogetnotification",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/notification",
        "summary": "Get notification",
        "description": "This endpoint allows you to retrieve the notification bind to the radio_product or station if it's exist.",
        "tags": [
            "Notifications"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/notification",
            "operationId": "Streaming/radioGetNotification",
            "summary": "Get notification",
            "categoryPath": [
                "Streaming radio",
                "Notifications"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37153
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37153
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": null,
                    "schema": {
                        "oneOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "nullable": true
                            }
                        ]
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": []
                }
            ],
            "responseStatuses": [
                "200",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioUpdateNotification",
        "functionName": "streamingRadioupdatenotification",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/notification",
        "summary": "Update notification",
        "description": "This endpoint allows you to update a notification.",
        "tags": [
            "Notifications"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/notification",
            "operationId": "Streaming/radioUpdateNotification",
            "summary": "Update notification",
            "categoryPath": [
                "Streaming radio",
                "Notifications"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48776
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48776
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": null,
                    "schema": {
                        "oneOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "nullable": true
                            }
                        ]
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": []
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioListStationPlayers",
        "functionName": "streamingRadioliststationplayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/players",
        "summary": "List station players",
        "description": "This endpoint allows you to retrieve all the players in a station.",
        "tags": [
            "Players"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/players",
            "operationId": "Streaming/radioListStationPlayers",
            "summary": "List station players",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
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
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11752
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11752
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 45364
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        45364
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
                        "example": 22960
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        22960
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
                        "example": 29171
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        29171
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
                        "example": 65298
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        65298
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
                        "example": 27946
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        27946
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "desc"
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
                        "desc"
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
        "operationId": "Streaming/radioResetGeneralParameters",
        "functionName": "streamingRadioresetgeneralparameters",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/reset_general_parameters",
        "summary": "Reset general parameters",
        "description": "This endpoint allows you to reset general parameters.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "docs": null
    },
    {
        "operationId": "Streaming/radioSendLogs",
        "functionName": "streamingRadiosendlogs",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/send_logs",
        "summary": "Send logs",
        "description": "This endpoint allows you to send logs.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "operationId": "Streaming/radioListServerEvents",
        "functionName": "streamingRadiolistserverevents",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/server_events",
        "summary": "List server events",
        "description": "This endpoint allows you to retrieve master and edge events by date.",
        "tags": [
            "Server Events"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "return",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/server_events",
            "operationId": "Streaming/radioListServerEvents",
            "summary": "List server events",
            "categoryPath": [
                "Streaming radio",
                "Server Events"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": null,
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
                }
            ],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 76616
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        76616
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 44991
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        44991
                    ]
                },
                {
                    "name": "filter",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "filter",
                        "maxLength": 255,
                        "enum": [
                            "edge",
                            "master"
                        ],
                        "type": "string",
                        "description": "the value to filter stat by",
                        "example": "aFieldValue"
                    },
                    "enumValues": [
                        "edge",
                        "master"
                    ],
                    "values": [],
                    "examples": [
                        "aFieldValue"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
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
                        "description": "return the count instead of the stat",
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
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                        "example": 19875
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        19875
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
                        "example": 84878
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        84878
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
        "operationId": "Streaming/radioGetConsumption",
        "functionName": "streamingRadiogetconsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/consumption",
        "summary": "Get consumption",
        "description": "This endpoint allows you to retrieve station consumption stats.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/consumption",
            "operationId": "Streaming/radioGetConsumption",
            "summary": "Get consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98728
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98728
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 31225
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        31225
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetCountriesByContinent",
        "functionName": "streamingRadiogetcountriesbycontinent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/countries_continent",
        "summary": "Get countries by continent",
        "description": "This endpoint allows you to retrieve station total countries stats by continent.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/countries_continent",
            "operationId": "Streaming/radioGetCountriesByContinent",
            "summary": "Get countries by continent",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 90334
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        90334
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79889
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79889
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetCountries",
        "functionName": "streamingRadiogetcountries",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/countries",
        "summary": "Get countries",
        "description": "This endpoint allows you to retrieve station countries stats.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/countries",
            "operationId": "Streaming/radioGetCountries",
            "summary": "Get countries",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68798
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68798
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33305
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33305
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
                        "example": false
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        false
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
        "operationId": "Streaming/radioExportStatsByStream",
        "functionName": "streamingRadioexportstatsbystream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/export_csv_by_stream",
        "summary": "Export stats by stream",
        "description": "This endpoint allows you to export station stats by stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
                "in": "query",
                "required": false
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json",
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/export_csv_by_stream",
            "operationId": "Streaming/radioExportStatsByStream",
            "summary": "Export stats by stream",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38658
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38658
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 86001
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        86001
                    ]
                },
                {
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "listeners_per_minute",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "listeners_per_minute"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "listeners_per_minute",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "listeners_per_minute"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "year"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "year"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioExportStats",
        "functionName": "streamingRadioexportstats",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/export_csv",
        "summary": "Export stats",
        "description": "This endpoint allows you to export station stats.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
                "in": "query",
                "required": false
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json",
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/export_csv",
            "operationId": "Streaming/radioExportStats",
            "summary": "Export stats",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 80793
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        80793
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 63969
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        63969
                    ]
                },
                {
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "listeners_by_stream",
                            "listeners_per_minute",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "countries"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "listeners_by_stream",
                        "listeners_per_minute",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "countries"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "year"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "year"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioListStatsLinks",
        "functionName": "streamingRadioliststatslinks",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/links",
        "summary": "List stats links",
        "description": "This endpoint allows you to get all stats links.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/links",
            "operationId": "Streaming/radioListStatsLinks",
            "summary": "List stats links",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37563
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37563
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38476
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38476
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
        "operationId": "Streaming/radioGetListenersPerMinutePerStream",
        "functionName": "streamingRadiogetlistenersperminuteperstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/listeners_per_minute_grouped",
        "summary": "Get listeners per minute per stream",
        "description": "This endpoint allows you to retrieve station listeners stats per minute per stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/listeners_per_minute_grouped",
            "operationId": "Streaming/radioGetListenersPerMinutePerStream",
            "summary": "Get listeners per minute per stream",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98319
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98319
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59670
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59670
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioGetListenersPerMinute",
        "functionName": "streamingRadiogetlistenersperminute",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/listeners_per_minute",
        "summary": "Get listeners per minute",
        "description": "This endpoint allows you to retrieve station listeners stats per minute.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/listeners_per_minute",
            "operationId": "Streaming/radioGetListenersPerMinute",
            "summary": "Get listeners per minute",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 46527
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        46527
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 17975
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        17975
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioGetListeners",
        "functionName": "streamingRadiogetlisteners",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/listeners",
        "summary": "Get listeners",
        "description": "This endpoint allows you to retrieve station listeners stats.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/listeners",
            "operationId": "Streaming/radioGetListeners",
            "summary": "Get listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 62076
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        62076
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 73931
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        73931
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "month"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "month"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
                        "example": false
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        false
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
        "operationId": "Streaming/radioGetPlayers",
        "functionName": "streamingRadiogetplayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/players",
        "summary": "Get players",
        "description": "This endpoint allows you to retrieve players stats.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/players",
            "operationId": "Streaming/radioGetPlayers",
            "summary": "Get players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
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
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 35691
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        35691
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
                        "example": false
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        false
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
        "operationId": "Streaming/radioGetStatsByStreams",
        "functionName": "streamingRadiogetstatsbystreams",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/stats_by_stream",
        "summary": "Get stats by streams",
        "description": "This endpoint allows you to retrieve stats group by streams.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/stats_by_stream",
            "operationId": "Streaming/radioGetStatsByStreams",
            "summary": "Get stats by streams",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 71487
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        71487
                    ]
                },
                {
                    "name": "station_id",
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
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "listeners"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "listeners"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
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
        "operationId": "Streaming/radioGetConsumptionByStream",
        "functionName": "streamingRadiogetconsumptionbystream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/stream_consumption",
        "summary": "Get consumption by stream",
        "description": "This endpoint allows you to retrieve station consumption stats by stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/stream_consumption",
            "operationId": "Streaming/radioGetConsumptionByStream",
            "summary": "Get consumption by stream",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 874
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        874
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 9924
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        9924
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetListenersByStream",
        "functionName": "streamingRadiogetlistenersbystream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/stream_listeners",
        "summary": "Get listeners by stream",
        "description": "This endpoint allows you to retrieve station listeners stats by stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_empty",
                "in": "query",
                "required": false
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/stream_listeners",
            "operationId": "Streaming/radioGetListenersByStream",
            "summary": "Get listeners by stream",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 80969
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        80969
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 54205
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        54205
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_empty",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_empty",
                        "type": "boolean",
                        "description": "Define if stream without listener are in the return",
                        "example": "1"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetTotalConsumption",
        "functionName": "streamingRadiogettotalconsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/total_consumption",
        "summary": "Get total consumption",
        "description": "This endpoint allows you to retrieve station total consumption stats.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/total_consumption",
            "operationId": "Streaming/radioGetTotalConsumption",
            "summary": "Get total consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 57551
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        57551
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68826
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68826
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetTotalPlayers",
        "functionName": "streamingRadiogettotalplayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/stats/total_players",
        "summary": "Get total players",
        "description": "This endpoint allows you to retrieve players total stats.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "stream_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_hls_stats",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/stats/total_players",
            "operationId": "Streaming/radioGetTotalPlayers",
            "summary": "Get total players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 46007
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        46007
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 20832
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        20832
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "stream_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "stream_ids",
                        "type": "string",
                        "description": "List of stream ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_hls_stats",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_hls_stats",
                        "type": "boolean",
                        "description": "Define if hls stream will be count in the stats",
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
                "404"
            ]
        }
    },
    {
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreams",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams",
        "summary": "List streams",
        "description": "This endpoint allows you to retrieve all the streams.",
        "tags": [
            "Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams",
            "operationId": null,
            "summary": "List streams",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
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
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 26855
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        26855
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 82978
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        82978
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
                        "example": "custom_fields",
                        "enum": [
                            "is_up",
                            "custom_fields",
                            "listeners"
                        ]
                    },
                    "enumValues": [
                        "is_up",
                        "custom_fields",
                        "listeners"
                    ],
                    "values": [
                        "is_up",
                        "custom_fields",
                        "listeners"
                    ],
                    "examples": [
                        "custom_fields"
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
                        "example": 83604
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        83604
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
                        "example": 88716
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        88716
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
                        "example": 49354
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        49354
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
                        "example": 17982
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        17982
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "asc"
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
                        "asc"
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
        "operationId": "Streaming/radioStoreStream",
        "functionName": "streamingRadiostorestream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams",
        "summary": "Store stream",
        "description": "This endpoint allows you to store a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams",
            "operationId": "Streaming/radioStoreStream",
            "summary": "Store stream",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
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
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 54381
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        54381
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 31274
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        31274
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
                        "example": 8044
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        8044
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
                        "example": 10683
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        10683
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
                        "example": 45168
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        45168
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
                        "example": 99329
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        99329
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "desc"
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
                        "desc"
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteStream",
        "functionName": "streamingRadiodeletestream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}",
        "summary": "Delete stream",
        "description": "This endpoint allows you to delete a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "user_password",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D",
            "operationId": "Streaming/radioDeleteStream",
            "summary": "Delete stream",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 15568
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        15568
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 90470
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        90470
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 9901
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        9901
                    ]
                },
                {
                    "name": "user_password",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "user_password",
                        "type": "string",
                        "description": "Specify the user password to check authorization",
                        "example": "my_secure_password"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "my_secure_password"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetStream",
        "functionName": "streamingRadiogetstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}",
        "summary": "Get stream",
        "description": "This endpoint allows you to retrieve a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D",
            "operationId": "Streaming/radioGetStream",
            "summary": "Get stream",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 86434
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        86434
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 23337
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        23337
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 41185
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        41185
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
                        "example": "is_up",
                        "enum": [
                            "is_up",
                            "custom_fields",
                            "listeners"
                        ]
                    },
                    "enumValues": [
                        "is_up",
                        "custom_fields",
                        "listeners"
                    ],
                    "values": [
                        "is_up",
                        "custom_fields",
                        "listeners"
                    ],
                    "examples": [
                        "is_up"
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
        "operationId": "Streaming/radioUpdateStream",
        "functionName": "streamingRadioupdatestream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "PUT",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}",
        "summary": "Update stream",
        "description": "This endpoint allows you to update a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D",
            "operationId": "Streaming/radioUpdateStream",
            "summary": "Update stream",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 90296
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        90296
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 10128
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10128
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 62605
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        62605
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetActualBitrate",
        "functionName": "streamingRadiogetactualbitrate",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/actual-bitrate",
        "summary": "Get actual bitrate",
        "description": "This endpoint allows you to check real the bitrate of the stream.",
        "tags": [
            "Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/actual-bitrate",
            "operationId": "Streaming/radioGetActualBitrate",
            "summary": "Get actual bitrate",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 78368
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        78368
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 94171
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        94171
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 52817
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        52817
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
        "operationId": "Streaming/radioAddFallbackStream",
        "functionName": "streamingRadioaddfallbackstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/add-fallback",
        "summary": "Add fallback stream",
        "description": "This endpoint allows you to add a fallback stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/add-fallback",
            "operationId": "Streaming/radioAddFallbackStream",
            "summary": "Add fallback stream",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 66716
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        66716
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 92582
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        92582
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the source stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51456
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51456
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteIntroductionFile",
        "functionName": "streamingRadiodeleteintroductionfile",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/introduction-file",
        "summary": "Delete introduction file",
        "description": "This endpoint allows you to delete the introduction file for a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/introduction-file",
            "operationId": "Streaming/radioDeleteIntroductionFile",
            "summary": "Delete introduction file",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 94716
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        94716
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38286
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38286
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79913
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79913
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_introduction_file",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdIntroductionFile",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/introduction-file",
        "summary": "Get introduction file",
        "description": "This endpoint allows you to get the introduction file for a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/introduction-file",
            "operationId": null,
            "summary": "Get introduction file",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 32480
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        32480
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 77936
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        77936
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 45721
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        45721
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
        "operationId": "Streaming/radioUpdateIntroductionFile",
        "functionName": "streamingRadioupdateintroductionfile",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/introduction-file",
        "summary": "Update introduction file",
        "description": "This endpoint allows you to update the introduction file for a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/introduction-file",
            "operationId": "Streaming/radioUpdateIntroductionFile",
            "summary": "Update introduction file",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 49534
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        49534
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 39260
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        39260
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68028
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68028
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioRemoveFallbackStream",
        "functionName": "streamingRadioremovefallbackstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/remove-fallback",
        "summary": "Remove fallback stream",
        "description": "This endpoint allows you to remove the fallback stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/remove-fallback",
            "operationId": "Streaming/radioRemoveFallbackStream",
            "summary": "Remove fallback stream",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 32545
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        32545
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 16198
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        16198
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the source stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 17794
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        17794
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_consumption",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsConsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/consumption",
        "summary": "Get consumption",
        "description": "This endpoint allows you to retrieve stream consumption stats.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/consumption",
            "operationId": null,
            "summary": "Get consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 25387
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        25387
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37720
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37720
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 20430
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        20430
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_countries_continent",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsCountriesContinent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/countries_continent",
        "summary": "Get countries by continent",
        "description": "This endpoint allows you to retrieve stream total countries stats by continent.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/countries_continent",
            "operationId": null,
            "summary": "Get countries by continent",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 492
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        492
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 27540
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        27540
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 88038
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        88038
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_countries",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsCountries",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/countries",
        "summary": "Get countries",
        "description": "This endpoint allows you to retrieve stream countries stats.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/countries",
            "operationId": null,
            "summary": "Get countries",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 78817
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        78817
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 32290
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        32290
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 20359
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        20359
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_export_csv",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsExportCsv",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/export_csv",
        "summary": "Export stats",
        "description": "This endpoint allows you to export stream stats.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "timezone",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "application/json",
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/export_csv",
            "operationId": null,
            "summary": "Export stats",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 13581
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        13581
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 20815
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        20815
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 86287
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        86287
                    ]
                },
                {
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "listeners_per_minute",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "consumption"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "listeners_per_minute",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "consumption"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "week"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "week"
                    ]
                },
                {
                    "name": "timezone",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "timezone",
                        "enum": [
                            "Africa/Abidjan",
                            "Africa/Accra",
                            "Africa/Addis_Ababa",
                            "Africa/Algiers",
                            "Africa/Asmara",
                            "Africa/Bamako",
                            "Africa/Bangui",
                            "Africa/Banjul",
                            "Africa/Bissau",
                            "Africa/Blantyre",
                            "Africa/Brazzaville",
                            "Africa/Bujumbura",
                            "Africa/Cairo",
                            "Africa/Casablanca",
                            "Africa/Ceuta",
                            "Africa/Conakry",
                            "Africa/Dakar",
                            "Africa/Dar_es_Salaam",
                            "Africa/Djibouti",
                            "Africa/Douala",
                            "Africa/El_Aaiun",
                            "Africa/Freetown",
                            "Africa/Gaborone",
                            "Africa/Harare",
                            "Africa/Johannesburg",
                            "Africa/Juba",
                            "Africa/Kampala",
                            "Africa/Khartoum",
                            "Africa/Kigali",
                            "Africa/Kinshasa",
                            "Africa/Lagos",
                            "Africa/Libreville",
                            "Africa/Lome",
                            "Africa/Luanda",
                            "Africa/Lubumbashi",
                            "Africa/Lusaka",
                            "Africa/Malabo",
                            "Africa/Maputo",
                            "Africa/Maseru",
                            "Africa/Mbabane",
                            "Africa/Mogadishu",
                            "Africa/Monrovia",
                            "Africa/Nairobi",
                            "Africa/Ndjamena",
                            "Africa/Niamey",
                            "Africa/Nouakchott",
                            "Africa/Ouagadougou",
                            "Africa/Porto-Novo",
                            "Africa/Sao_Tome",
                            "Africa/Tripoli",
                            "Africa/Tunis",
                            "Africa/Windhoek",
                            "America/Adak",
                            "America/Anchorage",
                            "America/Anguilla",
                            "America/Antigua",
                            "America/Araguaina",
                            "America/Argentina/Buenos_Aires",
                            "America/Argentina/Catamarca",
                            "America/Argentina/Cordoba",
                            "America/Argentina/Jujuy",
                            "America/Argentina/La_Rioja",
                            "America/Argentina/Mendoza",
                            "America/Argentina/Rio_Gallegos",
                            "America/Argentina/Salta",
                            "America/Argentina/San_Juan",
                            "America/Argentina/San_Luis",
                            "America/Argentina/Tucuman",
                            "America/Argentina/Ushuaia",
                            "America/Aruba",
                            "America/Asuncion",
                            "America/Atikokan",
                            "America/Bahia",
                            "America/Bahia_Banderas",
                            "America/Barbados",
                            "America/Belem",
                            "America/Belize",
                            "America/Blanc-Sablon",
                            "America/Boa_Vista",
                            "America/Bogota",
                            "America/Boise",
                            "America/Cambridge_Bay",
                            "America/Campo_Grande",
                            "America/Cancun",
                            "America/Caracas",
                            "America/Cayenne",
                            "America/Cayman",
                            "America/Chicago",
                            "America/Chihuahua",
                            "America/Ciudad_Juarez",
                            "America/Costa_Rica",
                            "America/Coyhaique",
                            "America/Creston",
                            "America/Cuiaba",
                            "America/Curacao",
                            "America/Danmarkshavn",
                            "America/Dawson",
                            "America/Dawson_Creek",
                            "America/Denver",
                            "America/Detroit",
                            "America/Dominica",
                            "America/Edmonton",
                            "America/Eirunepe",
                            "America/El_Salvador",
                            "America/Fort_Nelson",
                            "America/Fortaleza",
                            "America/Glace_Bay",
                            "America/Goose_Bay",
                            "America/Grand_Turk",
                            "America/Grenada",
                            "America/Guadeloupe",
                            "America/Guatemala",
                            "America/Guayaquil",
                            "America/Guyana",
                            "America/Halifax",
                            "America/Havana",
                            "America/Hermosillo",
                            "America/Indiana/Indianapolis",
                            "America/Indiana/Knox",
                            "America/Indiana/Marengo",
                            "America/Indiana/Petersburg",
                            "America/Indiana/Tell_City",
                            "America/Indiana/Vevay",
                            "America/Indiana/Vincennes",
                            "America/Indiana/Winamac",
                            "America/Inuvik",
                            "America/Iqaluit",
                            "America/Jamaica",
                            "America/Juneau",
                            "America/Kentucky/Louisville",
                            "America/Kentucky/Monticello",
                            "America/Kralendijk",
                            "America/La_Paz",
                            "America/Lima",
                            "America/Los_Angeles",
                            "America/Lower_Princes",
                            "America/Maceio",
                            "America/Managua",
                            "America/Manaus",
                            "America/Marigot",
                            "America/Martinique",
                            "America/Matamoros",
                            "America/Mazatlan",
                            "America/Menominee",
                            "America/Merida",
                            "America/Metlakatla",
                            "America/Mexico_City",
                            "America/Miquelon",
                            "America/Moncton",
                            "America/Monterrey",
                            "America/Montevideo",
                            "America/Montserrat",
                            "America/Nassau",
                            "America/New_York",
                            "America/Nome",
                            "America/Noronha",
                            "America/North_Dakota/Beulah",
                            "America/North_Dakota/Center",
                            "America/North_Dakota/New_Salem",
                            "America/Nuuk",
                            "America/Ojinaga",
                            "America/Panama",
                            "America/Paramaribo",
                            "America/Phoenix",
                            "America/Port-au-Prince",
                            "America/Port_of_Spain",
                            "America/Porto_Velho",
                            "America/Puerto_Rico",
                            "America/Punta_Arenas",
                            "America/Rankin_Inlet",
                            "America/Recife",
                            "America/Regina",
                            "America/Resolute",
                            "America/Rio_Branco",
                            "America/Santarem",
                            "America/Santiago",
                            "America/Santo_Domingo",
                            "America/Sao_Paulo",
                            "America/Scoresbysund",
                            "America/Sitka",
                            "America/St_Barthelemy",
                            "America/St_Johns",
                            "America/St_Kitts",
                            "America/St_Lucia",
                            "America/St_Thomas",
                            "America/St_Vincent",
                            "America/Swift_Current",
                            "America/Tegucigalpa",
                            "America/Thule",
                            "America/Tijuana",
                            "America/Toronto",
                            "America/Tortola",
                            "America/Vancouver",
                            "America/Whitehorse",
                            "America/Winnipeg",
                            "America/Yakutat",
                            "Antarctica/Casey",
                            "Antarctica/Davis",
                            "Antarctica/DumontDUrville",
                            "Antarctica/Macquarie",
                            "Antarctica/Mawson",
                            "Antarctica/McMurdo",
                            "Antarctica/Palmer",
                            "Antarctica/Rothera",
                            "Antarctica/Syowa",
                            "Antarctica/Troll",
                            "Antarctica/Vostok",
                            "Arctic/Longyearbyen",
                            "Asia/Aden",
                            "Asia/Almaty",
                            "Asia/Amman",
                            "Asia/Anadyr",
                            "Asia/Aqtau",
                            "Asia/Aqtobe",
                            "Asia/Ashgabat",
                            "Asia/Atyrau",
                            "Asia/Baghdad",
                            "Asia/Bahrain",
                            "Asia/Baku",
                            "Asia/Bangkok",
                            "Asia/Barnaul",
                            "Asia/Beirut",
                            "Asia/Bishkek",
                            "Asia/Brunei",
                            "Asia/Chita",
                            "Asia/Colombo",
                            "Asia/Damascus",
                            "Asia/Dhaka",
                            "Asia/Dili",
                            "Asia/Dubai",
                            "Asia/Dushanbe",
                            "Asia/Famagusta",
                            "Asia/Gaza",
                            "Asia/Hebron",
                            "Asia/Ho_Chi_Minh",
                            "Asia/Hong_Kong",
                            "Asia/Hovd",
                            "Asia/Irkutsk",
                            "Asia/Jakarta",
                            "Asia/Jayapura",
                            "Asia/Jerusalem",
                            "Asia/Kabul",
                            "Asia/Kamchatka",
                            "Asia/Karachi",
                            "Asia/Kathmandu",
                            "Asia/Khandyga",
                            "Asia/Kolkata",
                            "Asia/Krasnoyarsk",
                            "Asia/Kuala_Lumpur",
                            "Asia/Kuching",
                            "Asia/Kuwait",
                            "Asia/Macau",
                            "Asia/Magadan",
                            "Asia/Makassar",
                            "Asia/Manila",
                            "Asia/Muscat",
                            "Asia/Nicosia",
                            "Asia/Novokuznetsk",
                            "Asia/Novosibirsk",
                            "Asia/Omsk",
                            "Asia/Oral",
                            "Asia/Phnom_Penh",
                            "Asia/Pontianak",
                            "Asia/Pyongyang",
                            "Asia/Qatar",
                            "Asia/Qostanay",
                            "Asia/Qyzylorda",
                            "Asia/Riyadh",
                            "Asia/Sakhalin",
                            "Asia/Samarkand",
                            "Asia/Seoul",
                            "Asia/Shanghai",
                            "Asia/Singapore",
                            "Asia/Srednekolymsk",
                            "Asia/Taipei",
                            "Asia/Tashkent",
                            "Asia/Tbilisi",
                            "Asia/Tehran",
                            "Asia/Thimphu",
                            "Asia/Tokyo",
                            "Asia/Tomsk",
                            "Asia/Ulaanbaatar",
                            "Asia/Urumqi",
                            "Asia/Ust-Nera",
                            "Asia/Vientiane",
                            "Asia/Vladivostok",
                            "Asia/Yakutsk",
                            "Asia/Yangon",
                            "Asia/Yekaterinburg",
                            "Asia/Yerevan",
                            "Atlantic/Azores",
                            "Atlantic/Bermuda",
                            "Atlantic/Canary",
                            "Atlantic/Cape_Verde",
                            "Atlantic/Faroe",
                            "Atlantic/Madeira",
                            "Atlantic/Reykjavik",
                            "Atlantic/South_Georgia",
                            "Atlantic/St_Helena",
                            "Atlantic/Stanley",
                            "Australia/Adelaide",
                            "Australia/Brisbane",
                            "Australia/Broken_Hill",
                            "Australia/Darwin",
                            "Australia/Eucla",
                            "Australia/Hobart",
                            "Australia/Lindeman",
                            "Australia/Lord_Howe",
                            "Australia/Melbourne",
                            "Australia/Perth",
                            "Australia/Sydney",
                            "Europe/Amsterdam",
                            "Europe/Andorra",
                            "Europe/Astrakhan",
                            "Europe/Athens",
                            "Europe/Belgrade",
                            "Europe/Berlin",
                            "Europe/Bratislava",
                            "Europe/Brussels",
                            "Europe/Bucharest",
                            "Europe/Budapest",
                            "Europe/Busingen",
                            "Europe/Chisinau",
                            "Europe/Copenhagen",
                            "Europe/Dublin",
                            "Europe/Gibraltar",
                            "Europe/Guernsey",
                            "Europe/Helsinki",
                            "Europe/Isle_of_Man",
                            "Europe/Istanbul",
                            "Europe/Jersey",
                            "Europe/Kaliningrad",
                            "Europe/Kirov",
                            "Europe/Kyiv",
                            "Europe/Lisbon",
                            "Europe/Ljubljana",
                            "Europe/London",
                            "Europe/Luxembourg",
                            "Europe/Madrid",
                            "Europe/Malta",
                            "Europe/Mariehamn",
                            "Europe/Minsk",
                            "Europe/Monaco",
                            "Europe/Moscow",
                            "Europe/Oslo",
                            "Europe/Paris",
                            "Europe/Podgorica",
                            "Europe/Prague",
                            "Europe/Riga",
                            "Europe/Rome",
                            "Europe/Samara",
                            "Europe/San_Marino",
                            "Europe/Sarajevo",
                            "Europe/Saratov",
                            "Europe/Simferopol",
                            "Europe/Skopje",
                            "Europe/Sofia",
                            "Europe/Stockholm",
                            "Europe/Tallinn",
                            "Europe/Tirane",
                            "Europe/Ulyanovsk",
                            "Europe/Vaduz",
                            "Europe/Vatican",
                            "Europe/Vienna",
                            "Europe/Vilnius",
                            "Europe/Volgograd",
                            "Europe/Warsaw",
                            "Europe/Zagreb",
                            "Europe/Zurich",
                            "Indian/Antananarivo",
                            "Indian/Chagos",
                            "Indian/Christmas",
                            "Indian/Cocos",
                            "Indian/Comoro",
                            "Indian/Kerguelen",
                            "Indian/Mahe",
                            "Indian/Maldives",
                            "Indian/Mauritius",
                            "Indian/Mayotte",
                            "Indian/Reunion",
                            "Pacific/Apia",
                            "Pacific/Auckland",
                            "Pacific/Bougainville",
                            "Pacific/Chatham",
                            "Pacific/Chuuk",
                            "Pacific/Easter",
                            "Pacific/Efate",
                            "Pacific/Fakaofo",
                            "Pacific/Fiji",
                            "Pacific/Funafuti",
                            "Pacific/Galapagos",
                            "Pacific/Gambier",
                            "Pacific/Guadalcanal",
                            "Pacific/Guam",
                            "Pacific/Honolulu",
                            "Pacific/Kanton",
                            "Pacific/Kiritimati",
                            "Pacific/Kosrae",
                            "Pacific/Kwajalein",
                            "Pacific/Majuro",
                            "Pacific/Marquesas",
                            "Pacific/Midway",
                            "Pacific/Nauru",
                            "Pacific/Niue",
                            "Pacific/Norfolk",
                            "Pacific/Noumea",
                            "Pacific/Pago_Pago",
                            "Pacific/Palau",
                            "Pacific/Pitcairn",
                            "Pacific/Pohnpei",
                            "Pacific/Port_Moresby",
                            "Pacific/Rarotonga",
                            "Pacific/Saipan",
                            "Pacific/Tahiti",
                            "Pacific/Tarawa",
                            "Pacific/Tongatapu",
                            "Pacific/Wake",
                            "Pacific/Wallis",
                            "UTC"
                        ],
                        "type": "string",
                        "description": "Specify the timezone for the output date",
                        "example": "America/Indiana/Tell_City"
                    },
                    "enumValues": [
                        "Africa/Abidjan",
                        "Africa/Accra",
                        "Africa/Addis_Ababa",
                        "Africa/Algiers",
                        "Africa/Asmara",
                        "Africa/Bamako",
                        "Africa/Bangui",
                        "Africa/Banjul",
                        "Africa/Bissau",
                        "Africa/Blantyre",
                        "Africa/Brazzaville",
                        "Africa/Bujumbura",
                        "Africa/Cairo",
                        "Africa/Casablanca",
                        "Africa/Ceuta",
                        "Africa/Conakry",
                        "Africa/Dakar",
                        "Africa/Dar_es_Salaam",
                        "Africa/Djibouti",
                        "Africa/Douala",
                        "Africa/El_Aaiun",
                        "Africa/Freetown",
                        "Africa/Gaborone",
                        "Africa/Harare",
                        "Africa/Johannesburg",
                        "Africa/Juba",
                        "Africa/Kampala",
                        "Africa/Khartoum",
                        "Africa/Kigali",
                        "Africa/Kinshasa",
                        "Africa/Lagos",
                        "Africa/Libreville",
                        "Africa/Lome",
                        "Africa/Luanda",
                        "Africa/Lubumbashi",
                        "Africa/Lusaka",
                        "Africa/Malabo",
                        "Africa/Maputo",
                        "Africa/Maseru",
                        "Africa/Mbabane",
                        "Africa/Mogadishu",
                        "Africa/Monrovia",
                        "Africa/Nairobi",
                        "Africa/Ndjamena",
                        "Africa/Niamey",
                        "Africa/Nouakchott",
                        "Africa/Ouagadougou",
                        "Africa/Porto-Novo",
                        "Africa/Sao_Tome",
                        "Africa/Tripoli",
                        "Africa/Tunis",
                        "Africa/Windhoek",
                        "America/Adak",
                        "America/Anchorage",
                        "America/Anguilla",
                        "America/Antigua",
                        "America/Araguaina",
                        "America/Argentina/Buenos_Aires",
                        "America/Argentina/Catamarca",
                        "America/Argentina/Cordoba",
                        "America/Argentina/Jujuy",
                        "America/Argentina/La_Rioja",
                        "America/Argentina/Mendoza",
                        "America/Argentina/Rio_Gallegos",
                        "America/Argentina/Salta",
                        "America/Argentina/San_Juan",
                        "America/Argentina/San_Luis",
                        "America/Argentina/Tucuman",
                        "America/Argentina/Ushuaia",
                        "America/Aruba",
                        "America/Asuncion",
                        "America/Atikokan",
                        "America/Bahia",
                        "America/Bahia_Banderas",
                        "America/Barbados",
                        "America/Belem",
                        "America/Belize",
                        "America/Blanc-Sablon",
                        "America/Boa_Vista",
                        "America/Bogota",
                        "America/Boise",
                        "America/Cambridge_Bay",
                        "America/Campo_Grande",
                        "America/Cancun",
                        "America/Caracas",
                        "America/Cayenne",
                        "America/Cayman",
                        "America/Chicago",
                        "America/Chihuahua",
                        "America/Ciudad_Juarez",
                        "America/Costa_Rica",
                        "America/Coyhaique",
                        "America/Creston",
                        "America/Cuiaba",
                        "America/Curacao",
                        "America/Danmarkshavn",
                        "America/Dawson",
                        "America/Dawson_Creek",
                        "America/Denver",
                        "America/Detroit",
                        "America/Dominica",
                        "America/Edmonton",
                        "America/Eirunepe",
                        "America/El_Salvador",
                        "America/Fort_Nelson",
                        "America/Fortaleza",
                        "America/Glace_Bay",
                        "America/Goose_Bay",
                        "America/Grand_Turk",
                        "America/Grenada",
                        "America/Guadeloupe",
                        "America/Guatemala",
                        "America/Guayaquil",
                        "America/Guyana",
                        "America/Halifax",
                        "America/Havana",
                        "America/Hermosillo",
                        "America/Indiana/Indianapolis",
                        "America/Indiana/Knox",
                        "America/Indiana/Marengo",
                        "America/Indiana/Petersburg",
                        "America/Indiana/Tell_City",
                        "America/Indiana/Vevay",
                        "America/Indiana/Vincennes",
                        "America/Indiana/Winamac",
                        "America/Inuvik",
                        "America/Iqaluit",
                        "America/Jamaica",
                        "America/Juneau",
                        "America/Kentucky/Louisville",
                        "America/Kentucky/Monticello",
                        "America/Kralendijk",
                        "America/La_Paz",
                        "America/Lima",
                        "America/Los_Angeles",
                        "America/Lower_Princes",
                        "America/Maceio",
                        "America/Managua",
                        "America/Manaus",
                        "America/Marigot",
                        "America/Martinique",
                        "America/Matamoros",
                        "America/Mazatlan",
                        "America/Menominee",
                        "America/Merida",
                        "America/Metlakatla",
                        "America/Mexico_City",
                        "America/Miquelon",
                        "America/Moncton",
                        "America/Monterrey",
                        "America/Montevideo",
                        "America/Montserrat",
                        "America/Nassau",
                        "America/New_York",
                        "America/Nome",
                        "America/Noronha",
                        "America/North_Dakota/Beulah",
                        "America/North_Dakota/Center",
                        "America/North_Dakota/New_Salem",
                        "America/Nuuk",
                        "America/Ojinaga",
                        "America/Panama",
                        "America/Paramaribo",
                        "America/Phoenix",
                        "America/Port-au-Prince",
                        "America/Port_of_Spain",
                        "America/Porto_Velho",
                        "America/Puerto_Rico",
                        "America/Punta_Arenas",
                        "America/Rankin_Inlet",
                        "America/Recife",
                        "America/Regina",
                        "America/Resolute",
                        "America/Rio_Branco",
                        "America/Santarem",
                        "America/Santiago",
                        "America/Santo_Domingo",
                        "America/Sao_Paulo",
                        "America/Scoresbysund",
                        "America/Sitka",
                        "America/St_Barthelemy",
                        "America/St_Johns",
                        "America/St_Kitts",
                        "America/St_Lucia",
                        "America/St_Thomas",
                        "America/St_Vincent",
                        "America/Swift_Current",
                        "America/Tegucigalpa",
                        "America/Thule",
                        "America/Tijuana",
                        "America/Toronto",
                        "America/Tortola",
                        "America/Vancouver",
                        "America/Whitehorse",
                        "America/Winnipeg",
                        "America/Yakutat",
                        "Antarctica/Casey",
                        "Antarctica/Davis",
                        "Antarctica/DumontDUrville",
                        "Antarctica/Macquarie",
                        "Antarctica/Mawson",
                        "Antarctica/McMurdo",
                        "Antarctica/Palmer",
                        "Antarctica/Rothera",
                        "Antarctica/Syowa",
                        "Antarctica/Troll",
                        "Antarctica/Vostok",
                        "Arctic/Longyearbyen",
                        "Asia/Aden",
                        "Asia/Almaty",
                        "Asia/Amman",
                        "Asia/Anadyr",
                        "Asia/Aqtau",
                        "Asia/Aqtobe",
                        "Asia/Ashgabat",
                        "Asia/Atyrau",
                        "Asia/Baghdad",
                        "Asia/Bahrain",
                        "Asia/Baku",
                        "Asia/Bangkok",
                        "Asia/Barnaul",
                        "Asia/Beirut",
                        "Asia/Bishkek",
                        "Asia/Brunei",
                        "Asia/Chita",
                        "Asia/Colombo",
                        "Asia/Damascus",
                        "Asia/Dhaka",
                        "Asia/Dili",
                        "Asia/Dubai",
                        "Asia/Dushanbe",
                        "Asia/Famagusta",
                        "Asia/Gaza",
                        "Asia/Hebron",
                        "Asia/Ho_Chi_Minh",
                        "Asia/Hong_Kong",
                        "Asia/Hovd",
                        "Asia/Irkutsk",
                        "Asia/Jakarta",
                        "Asia/Jayapura",
                        "Asia/Jerusalem",
                        "Asia/Kabul",
                        "Asia/Kamchatka",
                        "Asia/Karachi",
                        "Asia/Kathmandu",
                        "Asia/Khandyga",
                        "Asia/Kolkata",
                        "Asia/Krasnoyarsk",
                        "Asia/Kuala_Lumpur",
                        "Asia/Kuching",
                        "Asia/Kuwait",
                        "Asia/Macau",
                        "Asia/Magadan",
                        "Asia/Makassar",
                        "Asia/Manila",
                        "Asia/Muscat",
                        "Asia/Nicosia",
                        "Asia/Novokuznetsk",
                        "Asia/Novosibirsk",
                        "Asia/Omsk",
                        "Asia/Oral",
                        "Asia/Phnom_Penh",
                        "Asia/Pontianak",
                        "Asia/Pyongyang",
                        "Asia/Qatar",
                        "Asia/Qostanay",
                        "Asia/Qyzylorda",
                        "Asia/Riyadh",
                        "Asia/Sakhalin",
                        "Asia/Samarkand",
                        "Asia/Seoul",
                        "Asia/Shanghai",
                        "Asia/Singapore",
                        "Asia/Srednekolymsk",
                        "Asia/Taipei",
                        "Asia/Tashkent",
                        "Asia/Tbilisi",
                        "Asia/Tehran",
                        "Asia/Thimphu",
                        "Asia/Tokyo",
                        "Asia/Tomsk",
                        "Asia/Ulaanbaatar",
                        "Asia/Urumqi",
                        "Asia/Ust-Nera",
                        "Asia/Vientiane",
                        "Asia/Vladivostok",
                        "Asia/Yakutsk",
                        "Asia/Yangon",
                        "Asia/Yekaterinburg",
                        "Asia/Yerevan",
                        "Atlantic/Azores",
                        "Atlantic/Bermuda",
                        "Atlantic/Canary",
                        "Atlantic/Cape_Verde",
                        "Atlantic/Faroe",
                        "Atlantic/Madeira",
                        "Atlantic/Reykjavik",
                        "Atlantic/South_Georgia",
                        "Atlantic/St_Helena",
                        "Atlantic/Stanley",
                        "Australia/Adelaide",
                        "Australia/Brisbane",
                        "Australia/Broken_Hill",
                        "Australia/Darwin",
                        "Australia/Eucla",
                        "Australia/Hobart",
                        "Australia/Lindeman",
                        "Australia/Lord_Howe",
                        "Australia/Melbourne",
                        "Australia/Perth",
                        "Australia/Sydney",
                        "Europe/Amsterdam",
                        "Europe/Andorra",
                        "Europe/Astrakhan",
                        "Europe/Athens",
                        "Europe/Belgrade",
                        "Europe/Berlin",
                        "Europe/Bratislava",
                        "Europe/Brussels",
                        "Europe/Bucharest",
                        "Europe/Budapest",
                        "Europe/Busingen",
                        "Europe/Chisinau",
                        "Europe/Copenhagen",
                        "Europe/Dublin",
                        "Europe/Gibraltar",
                        "Europe/Guernsey",
                        "Europe/Helsinki",
                        "Europe/Isle_of_Man",
                        "Europe/Istanbul",
                        "Europe/Jersey",
                        "Europe/Kaliningrad",
                        "Europe/Kirov",
                        "Europe/Kyiv",
                        "Europe/Lisbon",
                        "Europe/Ljubljana",
                        "Europe/London",
                        "Europe/Luxembourg",
                        "Europe/Madrid",
                        "Europe/Malta",
                        "Europe/Mariehamn",
                        "Europe/Minsk",
                        "Europe/Monaco",
                        "Europe/Moscow",
                        "Europe/Oslo",
                        "Europe/Paris",
                        "Europe/Podgorica",
                        "Europe/Prague",
                        "Europe/Riga",
                        "Europe/Rome",
                        "Europe/Samara",
                        "Europe/San_Marino",
                        "Europe/Sarajevo",
                        "Europe/Saratov",
                        "Europe/Simferopol",
                        "Europe/Skopje",
                        "Europe/Sofia",
                        "Europe/Stockholm",
                        "Europe/Tallinn",
                        "Europe/Tirane",
                        "Europe/Ulyanovsk",
                        "Europe/Vaduz",
                        "Europe/Vatican",
                        "Europe/Vienna",
                        "Europe/Vilnius",
                        "Europe/Volgograd",
                        "Europe/Warsaw",
                        "Europe/Zagreb",
                        "Europe/Zurich",
                        "Indian/Antananarivo",
                        "Indian/Chagos",
                        "Indian/Christmas",
                        "Indian/Cocos",
                        "Indian/Comoro",
                        "Indian/Kerguelen",
                        "Indian/Mahe",
                        "Indian/Maldives",
                        "Indian/Mauritius",
                        "Indian/Mayotte",
                        "Indian/Reunion",
                        "Pacific/Apia",
                        "Pacific/Auckland",
                        "Pacific/Bougainville",
                        "Pacific/Chatham",
                        "Pacific/Chuuk",
                        "Pacific/Easter",
                        "Pacific/Efate",
                        "Pacific/Fakaofo",
                        "Pacific/Fiji",
                        "Pacific/Funafuti",
                        "Pacific/Galapagos",
                        "Pacific/Gambier",
                        "Pacific/Guadalcanal",
                        "Pacific/Guam",
                        "Pacific/Honolulu",
                        "Pacific/Kanton",
                        "Pacific/Kiritimati",
                        "Pacific/Kosrae",
                        "Pacific/Kwajalein",
                        "Pacific/Majuro",
                        "Pacific/Marquesas",
                        "Pacific/Midway",
                        "Pacific/Nauru",
                        "Pacific/Niue",
                        "Pacific/Norfolk",
                        "Pacific/Noumea",
                        "Pacific/Pago_Pago",
                        "Pacific/Palau",
                        "Pacific/Pitcairn",
                        "Pacific/Pohnpei",
                        "Pacific/Port_Moresby",
                        "Pacific/Rarotonga",
                        "Pacific/Saipan",
                        "Pacific/Tahiti",
                        "Pacific/Tarawa",
                        "Pacific/Tongatapu",
                        "Pacific/Wake",
                        "Pacific/Wallis",
                        "UTC"
                    ],
                    "values": [],
                    "examples": [
                        "America/Indiana/Tell_City"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "Streaming/radioGetListenersByMinute",
        "functionName": "streamingRadiogetlistenersbyminute",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/listeners_per_minute",
        "summary": "Get listeners by minute",
        "description": "This endpoint allows you to retrieve stream listeners stats by minute on last 24h.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/listeners_per_minute",
            "operationId": "Streaming/radioGetListenersByMinute",
            "summary": "Get listeners by minute",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 71208
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        71208
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95845
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95845
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38981
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38981
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_listeners",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsListeners",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/listeners",
        "summary": "Get listeners",
        "description": "This endpoint allows you to retrieve stream listeners stats.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/listeners",
            "operationId": null,
            "summary": "Get listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 69786
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        69786
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18048
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18048
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 66461
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        66461
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "year"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "year"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_players",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsPlayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/players",
        "summary": "Get players",
        "description": "This endpoint allows you to retrieve players stats.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/players",
            "operationId": null,
            "summary": "Get players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 10919
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10919
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 85285
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        85285
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 80466
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        80466
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_total_consumption",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsTotalConsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/total_consumption",
        "summary": "Get total consumption",
        "description": "This endpoint allows you to retrieve total stream consumption stats.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/total_consumption",
            "operationId": null,
            "summary": "Get total consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65831
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65831
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 61407
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        61407
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "get_1_radios_radio_product_id_stations_station_id_streams_stream_id_stats_total_players",
        "functionName": "get1RadiosRadioProductIdStationsStationIdStreamsStreamIdStatsTotalPlayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/stats/total_players",
        "summary": "Get total players",
        "description": "This endpoint allows you to retrieve players total stats.",
        "tags": [
            "Stats > Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "to",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/stats/total_players",
            "operationId": null,
            "summary": "Get total players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 47255
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        47255
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11709
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11709
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55054
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55054
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
                            "hls"
                        ],
                        "type": "string",
                        "description": "the type of the stream to query stats for",
                        "example": "hls"
                    },
                    "enumValues": [
                        "hls"
                    ],
                    "values": [],
                    "examples": [
                        "hls"
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
        "operationId": "post_1_radios_radio_product_id_stations_station_id_streams_stream_id_toggle_direct_live",
        "functionName": "post1RadiosRadioProductIdStationsStationIdStreamsStreamIdToggleDirectLive",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/toggle_direct_live",
        "summary": "Toggle direct live",
        "description": "This endpoint allows you to toggle direct live.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/toggle_direct_live",
            "operationId": null,
            "summary": "Toggle direct live",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48417
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48417
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 92315
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        92315
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 99527
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        99527
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteStreamAndUnbind",
        "functionName": "streamingRadiodeletestreamandunbind",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/streams/{stream_id}/unbind",
        "summary": "Delete stream and unbind",
        "description": "This endpoint allows you to delete a stream and convert transcoding stream to standard stream.",
        "tags": [
            "Streams"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "streams_id_to_unbind",
                "in": "query",
                "required": true
            },
            {
                "name": "user_password",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/streams/%7Bstream_id%7D/unbind",
            "operationId": "Streaming/radioDeleteStreamAndUnbind",
            "summary": "Delete stream and unbind",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 45876
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        45876
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 84567
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        84567
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 72143
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        72143
                    ]
                },
                {
                    "name": "streams_id_to_unbind",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "streams_id_to_unbind",
                        "type": "string",
                        "description": "Specify the stream id that will be unbind",
                        "example": "1,4,7"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,4,7"
                    ]
                },
                {
                    "name": "user_password",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "user_password",
                        "type": "string",
                        "description": "Specify the user password to check authorization",
                        "example": "my_secure_password"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "my_secure_password"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioDeleteStationThumbnail",
        "functionName": "streamingRadiodeletestationthumbnail",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/thumbnail",
        "summary": "Delete station thumbnail",
        "description": "This endpoint allows you to delete a station thumbnail.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "docs": null
    },
    {
        "operationId": "Streaming/radioUpdateStationThumbnail",
        "functionName": "streamingRadioupdatestationthumbnail",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/thumbnail",
        "summary": "Update station thumbnail",
        "description": "This endpoint allows you to update a station thumbnail.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "operationId": "Streaming/radioToggleDirectLive",
        "functionName": "streamingRadiotoggledirectlive",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/toggle_direct_live",
        "summary": "Toggle direct live",
        "description": "This endpoint allows you to toggle direct live.",
        "tags": [
            "Stations"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
        "docs": null
    },
    {
        "operationId": "delete_1_radios_radio_product_id_stations_station_id_transcoding",
        "functionName": "delete1RadiosRadioProductIdStationsStationIdTranscoding",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/transcoding",
        "summary": "Delete transcoding",
        "description": "This endpoint allows you to delete transcoding.",
        "tags": [
            "Transcodings"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/transcoding",
            "operationId": null,
            "summary": "Delete transcoding",
            "categoryPath": [
                "Streaming radio",
                "Transcodings"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 83291
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        83291
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 82123
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        82123
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "delete_1_radios_radio_product_id_stations_station_id_transcoding_stream_id",
        "functionName": "delete1RadiosRadioProductIdStationsStationIdTranscodingStreamId",
        "originalOperationId": null,
        "domain": "radio",
        "method": "DELETE",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/transcoding/{stream_id}",
        "summary": "Remove transcoded stream",
        "description": "This endpoint allows you to remove transcoded stream.",
        "tags": [
            "Transcodings"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/transcoding/%7Bstream_id%7D",
            "operationId": null,
            "summary": "Remove transcoded stream",
            "categoryPath": [
                "Streaming radio",
                "Transcodings"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18388
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18388
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 53244
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        53244
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the transcoded stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 36373
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        36373
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/radioUnbindTranscodedStream",
        "functionName": "streamingRadiounbindtranscodedstream",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/transcoding/{stream_id}/unbind",
        "summary": "Unbind transcoded stream",
        "description": "This endpoint allows you to unbind transcoding on transcoded stream.",
        "tags": [
            "Transcodings"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
                "in": "path",
                "required": true
            },
            {
                "name": "stream_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/transcoding/%7Bstream_id%7D/unbind",
            "operationId": "Streaming/radioUnbindTranscodedStream",
            "summary": "Unbind transcoded stream",
            "categoryPath": [
                "Streaming radio",
                "Transcodings"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 18275
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        18275
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 57959
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        57959
                    ]
                },
                {
                    "name": "stream_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the transcoded stream to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 71598
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        71598
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404",
                "500"
            ]
        }
    },
    {
        "operationId": "post_1_radios_radio_product_id_stations_station_id_transcoding_add",
        "functionName": "post1RadiosRadioProductIdStationsStationIdTranscodingAdd",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/{radio_product_id}/stations/{station_id}/transcoding/add",
        "summary": "Add transcoded stream",
        "description": "This endpoint allows you to add transcoded stream.",
        "tags": [
            "Transcodings"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            },
            {
                "name": "station_id",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/%7Bradio_product_id%7D/stations/%7Bstation_id%7D/transcoding/add",
            "operationId": null,
            "summary": "Add transcoded stream",
            "categoryPath": [
                "Streaming radio",
                "Transcodings"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 52985
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        52985
                    ]
                },
                {
                    "name": "station_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33735
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33735
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "404"
            ]
        }
    },
    {
        "operationId": "get_1_radios_radio_product_id_stats_consumption",
        "functionName": "get1RadiosRadioProductIdStatsConsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/consumption",
        "summary": "Get consumption",
        "description": "This endpoint allows you to retrieve product consumption stats.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/consumption",
            "operationId": null,
            "summary": "Get consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 23901
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        23901
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_countries_continent",
        "functionName": "get1RadiosRadioProductIdStatsCountriesContinent",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/countries_continent",
        "summary": "Get countries by continent",
        "description": "This endpoint allows you to retrieve product total countries stats by continent.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/countries_continent",
            "operationId": null,
            "summary": "Get countries by continent",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 89573
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        89573
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_countries",
        "functionName": "get1RadiosRadioProductIdStatsCountries",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/countries",
        "summary": "Get countries",
        "description": "This endpoint allows you to retrieve product countries stats.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/countries",
            "operationId": null,
            "summary": "Get countries",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 83425
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        83425
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioExportStatsByStation",
        "functionName": "streamingRadioexportstatsbystation",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/export_csv_by_station",
        "summary": "Export stats by station",
        "description": "This endpoint allows you to export product stats by station.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "timezone",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json",
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/export_csv_by_station",
            "operationId": "Streaming/radioExportStatsByStation",
            "summary": "Export stats by station",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 29388
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        29388
                    ]
                },
                {
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "listeners_per_minute",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "consumption"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "listeners_per_minute",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "consumption"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "week"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "week"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "timezone",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "timezone",
                        "enum": [
                            "Africa/Abidjan",
                            "Africa/Accra",
                            "Africa/Addis_Ababa",
                            "Africa/Algiers",
                            "Africa/Asmara",
                            "Africa/Bamako",
                            "Africa/Bangui",
                            "Africa/Banjul",
                            "Africa/Bissau",
                            "Africa/Blantyre",
                            "Africa/Brazzaville",
                            "Africa/Bujumbura",
                            "Africa/Cairo",
                            "Africa/Casablanca",
                            "Africa/Ceuta",
                            "Africa/Conakry",
                            "Africa/Dakar",
                            "Africa/Dar_es_Salaam",
                            "Africa/Djibouti",
                            "Africa/Douala",
                            "Africa/El_Aaiun",
                            "Africa/Freetown",
                            "Africa/Gaborone",
                            "Africa/Harare",
                            "Africa/Johannesburg",
                            "Africa/Juba",
                            "Africa/Kampala",
                            "Africa/Khartoum",
                            "Africa/Kigali",
                            "Africa/Kinshasa",
                            "Africa/Lagos",
                            "Africa/Libreville",
                            "Africa/Lome",
                            "Africa/Luanda",
                            "Africa/Lubumbashi",
                            "Africa/Lusaka",
                            "Africa/Malabo",
                            "Africa/Maputo",
                            "Africa/Maseru",
                            "Africa/Mbabane",
                            "Africa/Mogadishu",
                            "Africa/Monrovia",
                            "Africa/Nairobi",
                            "Africa/Ndjamena",
                            "Africa/Niamey",
                            "Africa/Nouakchott",
                            "Africa/Ouagadougou",
                            "Africa/Porto-Novo",
                            "Africa/Sao_Tome",
                            "Africa/Tripoli",
                            "Africa/Tunis",
                            "Africa/Windhoek",
                            "America/Adak",
                            "America/Anchorage",
                            "America/Anguilla",
                            "America/Antigua",
                            "America/Araguaina",
                            "America/Argentina/Buenos_Aires",
                            "America/Argentina/Catamarca",
                            "America/Argentina/Cordoba",
                            "America/Argentina/Jujuy",
                            "America/Argentina/La_Rioja",
                            "America/Argentina/Mendoza",
                            "America/Argentina/Rio_Gallegos",
                            "America/Argentina/Salta",
                            "America/Argentina/San_Juan",
                            "America/Argentina/San_Luis",
                            "America/Argentina/Tucuman",
                            "America/Argentina/Ushuaia",
                            "America/Aruba",
                            "America/Asuncion",
                            "America/Atikokan",
                            "America/Bahia",
                            "America/Bahia_Banderas",
                            "America/Barbados",
                            "America/Belem",
                            "America/Belize",
                            "America/Blanc-Sablon",
                            "America/Boa_Vista",
                            "America/Bogota",
                            "America/Boise",
                            "America/Cambridge_Bay",
                            "America/Campo_Grande",
                            "America/Cancun",
                            "America/Caracas",
                            "America/Cayenne",
                            "America/Cayman",
                            "America/Chicago",
                            "America/Chihuahua",
                            "America/Ciudad_Juarez",
                            "America/Costa_Rica",
                            "America/Coyhaique",
                            "America/Creston",
                            "America/Cuiaba",
                            "America/Curacao",
                            "America/Danmarkshavn",
                            "America/Dawson",
                            "America/Dawson_Creek",
                            "America/Denver",
                            "America/Detroit",
                            "America/Dominica",
                            "America/Edmonton",
                            "America/Eirunepe",
                            "America/El_Salvador",
                            "America/Fort_Nelson",
                            "America/Fortaleza",
                            "America/Glace_Bay",
                            "America/Goose_Bay",
                            "America/Grand_Turk",
                            "America/Grenada",
                            "America/Guadeloupe",
                            "America/Guatemala",
                            "America/Guayaquil",
                            "America/Guyana",
                            "America/Halifax",
                            "America/Havana",
                            "America/Hermosillo",
                            "America/Indiana/Indianapolis",
                            "America/Indiana/Knox",
                            "America/Indiana/Marengo",
                            "America/Indiana/Petersburg",
                            "America/Indiana/Tell_City",
                            "America/Indiana/Vevay",
                            "America/Indiana/Vincennes",
                            "America/Indiana/Winamac",
                            "America/Inuvik",
                            "America/Iqaluit",
                            "America/Jamaica",
                            "America/Juneau",
                            "America/Kentucky/Louisville",
                            "America/Kentucky/Monticello",
                            "America/Kralendijk",
                            "America/La_Paz",
                            "America/Lima",
                            "America/Los_Angeles",
                            "America/Lower_Princes",
                            "America/Maceio",
                            "America/Managua",
                            "America/Manaus",
                            "America/Marigot",
                            "America/Martinique",
                            "America/Matamoros",
                            "America/Mazatlan",
                            "America/Menominee",
                            "America/Merida",
                            "America/Metlakatla",
                            "America/Mexico_City",
                            "America/Miquelon",
                            "America/Moncton",
                            "America/Monterrey",
                            "America/Montevideo",
                            "America/Montserrat",
                            "America/Nassau",
                            "America/New_York",
                            "America/Nome",
                            "America/Noronha",
                            "America/North_Dakota/Beulah",
                            "America/North_Dakota/Center",
                            "America/North_Dakota/New_Salem",
                            "America/Nuuk",
                            "America/Ojinaga",
                            "America/Panama",
                            "America/Paramaribo",
                            "America/Phoenix",
                            "America/Port-au-Prince",
                            "America/Port_of_Spain",
                            "America/Porto_Velho",
                            "America/Puerto_Rico",
                            "America/Punta_Arenas",
                            "America/Rankin_Inlet",
                            "America/Recife",
                            "America/Regina",
                            "America/Resolute",
                            "America/Rio_Branco",
                            "America/Santarem",
                            "America/Santiago",
                            "America/Santo_Domingo",
                            "America/Sao_Paulo",
                            "America/Scoresbysund",
                            "America/Sitka",
                            "America/St_Barthelemy",
                            "America/St_Johns",
                            "America/St_Kitts",
                            "America/St_Lucia",
                            "America/St_Thomas",
                            "America/St_Vincent",
                            "America/Swift_Current",
                            "America/Tegucigalpa",
                            "America/Thule",
                            "America/Tijuana",
                            "America/Toronto",
                            "America/Tortola",
                            "America/Vancouver",
                            "America/Whitehorse",
                            "America/Winnipeg",
                            "America/Yakutat",
                            "Antarctica/Casey",
                            "Antarctica/Davis",
                            "Antarctica/DumontDUrville",
                            "Antarctica/Macquarie",
                            "Antarctica/Mawson",
                            "Antarctica/McMurdo",
                            "Antarctica/Palmer",
                            "Antarctica/Rothera",
                            "Antarctica/Syowa",
                            "Antarctica/Troll",
                            "Antarctica/Vostok",
                            "Arctic/Longyearbyen",
                            "Asia/Aden",
                            "Asia/Almaty",
                            "Asia/Amman",
                            "Asia/Anadyr",
                            "Asia/Aqtau",
                            "Asia/Aqtobe",
                            "Asia/Ashgabat",
                            "Asia/Atyrau",
                            "Asia/Baghdad",
                            "Asia/Bahrain",
                            "Asia/Baku",
                            "Asia/Bangkok",
                            "Asia/Barnaul",
                            "Asia/Beirut",
                            "Asia/Bishkek",
                            "Asia/Brunei",
                            "Asia/Chita",
                            "Asia/Colombo",
                            "Asia/Damascus",
                            "Asia/Dhaka",
                            "Asia/Dili",
                            "Asia/Dubai",
                            "Asia/Dushanbe",
                            "Asia/Famagusta",
                            "Asia/Gaza",
                            "Asia/Hebron",
                            "Asia/Ho_Chi_Minh",
                            "Asia/Hong_Kong",
                            "Asia/Hovd",
                            "Asia/Irkutsk",
                            "Asia/Jakarta",
                            "Asia/Jayapura",
                            "Asia/Jerusalem",
                            "Asia/Kabul",
                            "Asia/Kamchatka",
                            "Asia/Karachi",
                            "Asia/Kathmandu",
                            "Asia/Khandyga",
                            "Asia/Kolkata",
                            "Asia/Krasnoyarsk",
                            "Asia/Kuala_Lumpur",
                            "Asia/Kuching",
                            "Asia/Kuwait",
                            "Asia/Macau",
                            "Asia/Magadan",
                            "Asia/Makassar",
                            "Asia/Manila",
                            "Asia/Muscat",
                            "Asia/Nicosia",
                            "Asia/Novokuznetsk",
                            "Asia/Novosibirsk",
                            "Asia/Omsk",
                            "Asia/Oral",
                            "Asia/Phnom_Penh",
                            "Asia/Pontianak",
                            "Asia/Pyongyang",
                            "Asia/Qatar",
                            "Asia/Qostanay",
                            "Asia/Qyzylorda",
                            "Asia/Riyadh",
                            "Asia/Sakhalin",
                            "Asia/Samarkand",
                            "Asia/Seoul",
                            "Asia/Shanghai",
                            "Asia/Singapore",
                            "Asia/Srednekolymsk",
                            "Asia/Taipei",
                            "Asia/Tashkent",
                            "Asia/Tbilisi",
                            "Asia/Tehran",
                            "Asia/Thimphu",
                            "Asia/Tokyo",
                            "Asia/Tomsk",
                            "Asia/Ulaanbaatar",
                            "Asia/Urumqi",
                            "Asia/Ust-Nera",
                            "Asia/Vientiane",
                            "Asia/Vladivostok",
                            "Asia/Yakutsk",
                            "Asia/Yangon",
                            "Asia/Yekaterinburg",
                            "Asia/Yerevan",
                            "Atlantic/Azores",
                            "Atlantic/Bermuda",
                            "Atlantic/Canary",
                            "Atlantic/Cape_Verde",
                            "Atlantic/Faroe",
                            "Atlantic/Madeira",
                            "Atlantic/Reykjavik",
                            "Atlantic/South_Georgia",
                            "Atlantic/St_Helena",
                            "Atlantic/Stanley",
                            "Australia/Adelaide",
                            "Australia/Brisbane",
                            "Australia/Broken_Hill",
                            "Australia/Darwin",
                            "Australia/Eucla",
                            "Australia/Hobart",
                            "Australia/Lindeman",
                            "Australia/Lord_Howe",
                            "Australia/Melbourne",
                            "Australia/Perth",
                            "Australia/Sydney",
                            "Europe/Amsterdam",
                            "Europe/Andorra",
                            "Europe/Astrakhan",
                            "Europe/Athens",
                            "Europe/Belgrade",
                            "Europe/Berlin",
                            "Europe/Bratislava",
                            "Europe/Brussels",
                            "Europe/Bucharest",
                            "Europe/Budapest",
                            "Europe/Busingen",
                            "Europe/Chisinau",
                            "Europe/Copenhagen",
                            "Europe/Dublin",
                            "Europe/Gibraltar",
                            "Europe/Guernsey",
                            "Europe/Helsinki",
                            "Europe/Isle_of_Man",
                            "Europe/Istanbul",
                            "Europe/Jersey",
                            "Europe/Kaliningrad",
                            "Europe/Kirov",
                            "Europe/Kyiv",
                            "Europe/Lisbon",
                            "Europe/Ljubljana",
                            "Europe/London",
                            "Europe/Luxembourg",
                            "Europe/Madrid",
                            "Europe/Malta",
                            "Europe/Mariehamn",
                            "Europe/Minsk",
                            "Europe/Monaco",
                            "Europe/Moscow",
                            "Europe/Oslo",
                            "Europe/Paris",
                            "Europe/Podgorica",
                            "Europe/Prague",
                            "Europe/Riga",
                            "Europe/Rome",
                            "Europe/Samara",
                            "Europe/San_Marino",
                            "Europe/Sarajevo",
                            "Europe/Saratov",
                            "Europe/Simferopol",
                            "Europe/Skopje",
                            "Europe/Sofia",
                            "Europe/Stockholm",
                            "Europe/Tallinn",
                            "Europe/Tirane",
                            "Europe/Ulyanovsk",
                            "Europe/Vaduz",
                            "Europe/Vatican",
                            "Europe/Vienna",
                            "Europe/Vilnius",
                            "Europe/Volgograd",
                            "Europe/Warsaw",
                            "Europe/Zagreb",
                            "Europe/Zurich",
                            "Indian/Antananarivo",
                            "Indian/Chagos",
                            "Indian/Christmas",
                            "Indian/Cocos",
                            "Indian/Comoro",
                            "Indian/Kerguelen",
                            "Indian/Mahe",
                            "Indian/Maldives",
                            "Indian/Mauritius",
                            "Indian/Mayotte",
                            "Indian/Reunion",
                            "Pacific/Apia",
                            "Pacific/Auckland",
                            "Pacific/Bougainville",
                            "Pacific/Chatham",
                            "Pacific/Chuuk",
                            "Pacific/Easter",
                            "Pacific/Efate",
                            "Pacific/Fakaofo",
                            "Pacific/Fiji",
                            "Pacific/Funafuti",
                            "Pacific/Galapagos",
                            "Pacific/Gambier",
                            "Pacific/Guadalcanal",
                            "Pacific/Guam",
                            "Pacific/Honolulu",
                            "Pacific/Kanton",
                            "Pacific/Kiritimati",
                            "Pacific/Kosrae",
                            "Pacific/Kwajalein",
                            "Pacific/Majuro",
                            "Pacific/Marquesas",
                            "Pacific/Midway",
                            "Pacific/Nauru",
                            "Pacific/Niue",
                            "Pacific/Norfolk",
                            "Pacific/Noumea",
                            "Pacific/Pago_Pago",
                            "Pacific/Palau",
                            "Pacific/Pitcairn",
                            "Pacific/Pohnpei",
                            "Pacific/Port_Moresby",
                            "Pacific/Rarotonga",
                            "Pacific/Saipan",
                            "Pacific/Tahiti",
                            "Pacific/Tarawa",
                            "Pacific/Tongatapu",
                            "Pacific/Wake",
                            "Pacific/Wallis",
                            "UTC"
                        ],
                        "type": "string",
                        "description": "Specify the timezone for the output date",
                        "example": "Asia/Qostanay"
                    },
                    "enumValues": [
                        "Africa/Abidjan",
                        "Africa/Accra",
                        "Africa/Addis_Ababa",
                        "Africa/Algiers",
                        "Africa/Asmara",
                        "Africa/Bamako",
                        "Africa/Bangui",
                        "Africa/Banjul",
                        "Africa/Bissau",
                        "Africa/Blantyre",
                        "Africa/Brazzaville",
                        "Africa/Bujumbura",
                        "Africa/Cairo",
                        "Africa/Casablanca",
                        "Africa/Ceuta",
                        "Africa/Conakry",
                        "Africa/Dakar",
                        "Africa/Dar_es_Salaam",
                        "Africa/Djibouti",
                        "Africa/Douala",
                        "Africa/El_Aaiun",
                        "Africa/Freetown",
                        "Africa/Gaborone",
                        "Africa/Harare",
                        "Africa/Johannesburg",
                        "Africa/Juba",
                        "Africa/Kampala",
                        "Africa/Khartoum",
                        "Africa/Kigali",
                        "Africa/Kinshasa",
                        "Africa/Lagos",
                        "Africa/Libreville",
                        "Africa/Lome",
                        "Africa/Luanda",
                        "Africa/Lubumbashi",
                        "Africa/Lusaka",
                        "Africa/Malabo",
                        "Africa/Maputo",
                        "Africa/Maseru",
                        "Africa/Mbabane",
                        "Africa/Mogadishu",
                        "Africa/Monrovia",
                        "Africa/Nairobi",
                        "Africa/Ndjamena",
                        "Africa/Niamey",
                        "Africa/Nouakchott",
                        "Africa/Ouagadougou",
                        "Africa/Porto-Novo",
                        "Africa/Sao_Tome",
                        "Africa/Tripoli",
                        "Africa/Tunis",
                        "Africa/Windhoek",
                        "America/Adak",
                        "America/Anchorage",
                        "America/Anguilla",
                        "America/Antigua",
                        "America/Araguaina",
                        "America/Argentina/Buenos_Aires",
                        "America/Argentina/Catamarca",
                        "America/Argentina/Cordoba",
                        "America/Argentina/Jujuy",
                        "America/Argentina/La_Rioja",
                        "America/Argentina/Mendoza",
                        "America/Argentina/Rio_Gallegos",
                        "America/Argentina/Salta",
                        "America/Argentina/San_Juan",
                        "America/Argentina/San_Luis",
                        "America/Argentina/Tucuman",
                        "America/Argentina/Ushuaia",
                        "America/Aruba",
                        "America/Asuncion",
                        "America/Atikokan",
                        "America/Bahia",
                        "America/Bahia_Banderas",
                        "America/Barbados",
                        "America/Belem",
                        "America/Belize",
                        "America/Blanc-Sablon",
                        "America/Boa_Vista",
                        "America/Bogota",
                        "America/Boise",
                        "America/Cambridge_Bay",
                        "America/Campo_Grande",
                        "America/Cancun",
                        "America/Caracas",
                        "America/Cayenne",
                        "America/Cayman",
                        "America/Chicago",
                        "America/Chihuahua",
                        "America/Ciudad_Juarez",
                        "America/Costa_Rica",
                        "America/Coyhaique",
                        "America/Creston",
                        "America/Cuiaba",
                        "America/Curacao",
                        "America/Danmarkshavn",
                        "America/Dawson",
                        "America/Dawson_Creek",
                        "America/Denver",
                        "America/Detroit",
                        "America/Dominica",
                        "America/Edmonton",
                        "America/Eirunepe",
                        "America/El_Salvador",
                        "America/Fort_Nelson",
                        "America/Fortaleza",
                        "America/Glace_Bay",
                        "America/Goose_Bay",
                        "America/Grand_Turk",
                        "America/Grenada",
                        "America/Guadeloupe",
                        "America/Guatemala",
                        "America/Guayaquil",
                        "America/Guyana",
                        "America/Halifax",
                        "America/Havana",
                        "America/Hermosillo",
                        "America/Indiana/Indianapolis",
                        "America/Indiana/Knox",
                        "America/Indiana/Marengo",
                        "America/Indiana/Petersburg",
                        "America/Indiana/Tell_City",
                        "America/Indiana/Vevay",
                        "America/Indiana/Vincennes",
                        "America/Indiana/Winamac",
                        "America/Inuvik",
                        "America/Iqaluit",
                        "America/Jamaica",
                        "America/Juneau",
                        "America/Kentucky/Louisville",
                        "America/Kentucky/Monticello",
                        "America/Kralendijk",
                        "America/La_Paz",
                        "America/Lima",
                        "America/Los_Angeles",
                        "America/Lower_Princes",
                        "America/Maceio",
                        "America/Managua",
                        "America/Manaus",
                        "America/Marigot",
                        "America/Martinique",
                        "America/Matamoros",
                        "America/Mazatlan",
                        "America/Menominee",
                        "America/Merida",
                        "America/Metlakatla",
                        "America/Mexico_City",
                        "America/Miquelon",
                        "America/Moncton",
                        "America/Monterrey",
                        "America/Montevideo",
                        "America/Montserrat",
                        "America/Nassau",
                        "America/New_York",
                        "America/Nome",
                        "America/Noronha",
                        "America/North_Dakota/Beulah",
                        "America/North_Dakota/Center",
                        "America/North_Dakota/New_Salem",
                        "America/Nuuk",
                        "America/Ojinaga",
                        "America/Panama",
                        "America/Paramaribo",
                        "America/Phoenix",
                        "America/Port-au-Prince",
                        "America/Port_of_Spain",
                        "America/Porto_Velho",
                        "America/Puerto_Rico",
                        "America/Punta_Arenas",
                        "America/Rankin_Inlet",
                        "America/Recife",
                        "America/Regina",
                        "America/Resolute",
                        "America/Rio_Branco",
                        "America/Santarem",
                        "America/Santiago",
                        "America/Santo_Domingo",
                        "America/Sao_Paulo",
                        "America/Scoresbysund",
                        "America/Sitka",
                        "America/St_Barthelemy",
                        "America/St_Johns",
                        "America/St_Kitts",
                        "America/St_Lucia",
                        "America/St_Thomas",
                        "America/St_Vincent",
                        "America/Swift_Current",
                        "America/Tegucigalpa",
                        "America/Thule",
                        "America/Tijuana",
                        "America/Toronto",
                        "America/Tortola",
                        "America/Vancouver",
                        "America/Whitehorse",
                        "America/Winnipeg",
                        "America/Yakutat",
                        "Antarctica/Casey",
                        "Antarctica/Davis",
                        "Antarctica/DumontDUrville",
                        "Antarctica/Macquarie",
                        "Antarctica/Mawson",
                        "Antarctica/McMurdo",
                        "Antarctica/Palmer",
                        "Antarctica/Rothera",
                        "Antarctica/Syowa",
                        "Antarctica/Troll",
                        "Antarctica/Vostok",
                        "Arctic/Longyearbyen",
                        "Asia/Aden",
                        "Asia/Almaty",
                        "Asia/Amman",
                        "Asia/Anadyr",
                        "Asia/Aqtau",
                        "Asia/Aqtobe",
                        "Asia/Ashgabat",
                        "Asia/Atyrau",
                        "Asia/Baghdad",
                        "Asia/Bahrain",
                        "Asia/Baku",
                        "Asia/Bangkok",
                        "Asia/Barnaul",
                        "Asia/Beirut",
                        "Asia/Bishkek",
                        "Asia/Brunei",
                        "Asia/Chita",
                        "Asia/Colombo",
                        "Asia/Damascus",
                        "Asia/Dhaka",
                        "Asia/Dili",
                        "Asia/Dubai",
                        "Asia/Dushanbe",
                        "Asia/Famagusta",
                        "Asia/Gaza",
                        "Asia/Hebron",
                        "Asia/Ho_Chi_Minh",
                        "Asia/Hong_Kong",
                        "Asia/Hovd",
                        "Asia/Irkutsk",
                        "Asia/Jakarta",
                        "Asia/Jayapura",
                        "Asia/Jerusalem",
                        "Asia/Kabul",
                        "Asia/Kamchatka",
                        "Asia/Karachi",
                        "Asia/Kathmandu",
                        "Asia/Khandyga",
                        "Asia/Kolkata",
                        "Asia/Krasnoyarsk",
                        "Asia/Kuala_Lumpur",
                        "Asia/Kuching",
                        "Asia/Kuwait",
                        "Asia/Macau",
                        "Asia/Magadan",
                        "Asia/Makassar",
                        "Asia/Manila",
                        "Asia/Muscat",
                        "Asia/Nicosia",
                        "Asia/Novokuznetsk",
                        "Asia/Novosibirsk",
                        "Asia/Omsk",
                        "Asia/Oral",
                        "Asia/Phnom_Penh",
                        "Asia/Pontianak",
                        "Asia/Pyongyang",
                        "Asia/Qatar",
                        "Asia/Qostanay",
                        "Asia/Qyzylorda",
                        "Asia/Riyadh",
                        "Asia/Sakhalin",
                        "Asia/Samarkand",
                        "Asia/Seoul",
                        "Asia/Shanghai",
                        "Asia/Singapore",
                        "Asia/Srednekolymsk",
                        "Asia/Taipei",
                        "Asia/Tashkent",
                        "Asia/Tbilisi",
                        "Asia/Tehran",
                        "Asia/Thimphu",
                        "Asia/Tokyo",
                        "Asia/Tomsk",
                        "Asia/Ulaanbaatar",
                        "Asia/Urumqi",
                        "Asia/Ust-Nera",
                        "Asia/Vientiane",
                        "Asia/Vladivostok",
                        "Asia/Yakutsk",
                        "Asia/Yangon",
                        "Asia/Yekaterinburg",
                        "Asia/Yerevan",
                        "Atlantic/Azores",
                        "Atlantic/Bermuda",
                        "Atlantic/Canary",
                        "Atlantic/Cape_Verde",
                        "Atlantic/Faroe",
                        "Atlantic/Madeira",
                        "Atlantic/Reykjavik",
                        "Atlantic/South_Georgia",
                        "Atlantic/St_Helena",
                        "Atlantic/Stanley",
                        "Australia/Adelaide",
                        "Australia/Brisbane",
                        "Australia/Broken_Hill",
                        "Australia/Darwin",
                        "Australia/Eucla",
                        "Australia/Hobart",
                        "Australia/Lindeman",
                        "Australia/Lord_Howe",
                        "Australia/Melbourne",
                        "Australia/Perth",
                        "Australia/Sydney",
                        "Europe/Amsterdam",
                        "Europe/Andorra",
                        "Europe/Astrakhan",
                        "Europe/Athens",
                        "Europe/Belgrade",
                        "Europe/Berlin",
                        "Europe/Bratislava",
                        "Europe/Brussels",
                        "Europe/Bucharest",
                        "Europe/Budapest",
                        "Europe/Busingen",
                        "Europe/Chisinau",
                        "Europe/Copenhagen",
                        "Europe/Dublin",
                        "Europe/Gibraltar",
                        "Europe/Guernsey",
                        "Europe/Helsinki",
                        "Europe/Isle_of_Man",
                        "Europe/Istanbul",
                        "Europe/Jersey",
                        "Europe/Kaliningrad",
                        "Europe/Kirov",
                        "Europe/Kyiv",
                        "Europe/Lisbon",
                        "Europe/Ljubljana",
                        "Europe/London",
                        "Europe/Luxembourg",
                        "Europe/Madrid",
                        "Europe/Malta",
                        "Europe/Mariehamn",
                        "Europe/Minsk",
                        "Europe/Monaco",
                        "Europe/Moscow",
                        "Europe/Oslo",
                        "Europe/Paris",
                        "Europe/Podgorica",
                        "Europe/Prague",
                        "Europe/Riga",
                        "Europe/Rome",
                        "Europe/Samara",
                        "Europe/San_Marino",
                        "Europe/Sarajevo",
                        "Europe/Saratov",
                        "Europe/Simferopol",
                        "Europe/Skopje",
                        "Europe/Sofia",
                        "Europe/Stockholm",
                        "Europe/Tallinn",
                        "Europe/Tirane",
                        "Europe/Ulyanovsk",
                        "Europe/Vaduz",
                        "Europe/Vatican",
                        "Europe/Vienna",
                        "Europe/Vilnius",
                        "Europe/Volgograd",
                        "Europe/Warsaw",
                        "Europe/Zagreb",
                        "Europe/Zurich",
                        "Indian/Antananarivo",
                        "Indian/Chagos",
                        "Indian/Christmas",
                        "Indian/Cocos",
                        "Indian/Comoro",
                        "Indian/Kerguelen",
                        "Indian/Mahe",
                        "Indian/Maldives",
                        "Indian/Mauritius",
                        "Indian/Mayotte",
                        "Indian/Reunion",
                        "Pacific/Apia",
                        "Pacific/Auckland",
                        "Pacific/Bougainville",
                        "Pacific/Chatham",
                        "Pacific/Chuuk",
                        "Pacific/Easter",
                        "Pacific/Efate",
                        "Pacific/Fakaofo",
                        "Pacific/Fiji",
                        "Pacific/Funafuti",
                        "Pacific/Galapagos",
                        "Pacific/Gambier",
                        "Pacific/Guadalcanal",
                        "Pacific/Guam",
                        "Pacific/Honolulu",
                        "Pacific/Kanton",
                        "Pacific/Kiritimati",
                        "Pacific/Kosrae",
                        "Pacific/Kwajalein",
                        "Pacific/Majuro",
                        "Pacific/Marquesas",
                        "Pacific/Midway",
                        "Pacific/Nauru",
                        "Pacific/Niue",
                        "Pacific/Norfolk",
                        "Pacific/Noumea",
                        "Pacific/Pago_Pago",
                        "Pacific/Palau",
                        "Pacific/Pitcairn",
                        "Pacific/Pohnpei",
                        "Pacific/Port_Moresby",
                        "Pacific/Rarotonga",
                        "Pacific/Saipan",
                        "Pacific/Tahiti",
                        "Pacific/Tarawa",
                        "Pacific/Tongatapu",
                        "Pacific/Wake",
                        "Pacific/Wallis",
                        "UTC"
                    ],
                    "values": [],
                    "examples": [
                        "Asia/Qostanay"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_export_csv",
        "functionName": "get1RadiosRadioProductIdStatsExportCsv",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/export_csv",
        "summary": "Export stats",
        "description": "This endpoint allows you to export product stats.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "timezone",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            }
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json",
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/export_csv",
            "operationId": null,
            "summary": "Export stats",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 82079
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        82079
                    ]
                },
                {
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "listeners_by_station",
                            "listeners_per_minute",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "countries"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "listeners_by_station",
                        "listeners_per_minute",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "countries"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "year"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "year"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "timezone",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "timezone",
                        "enum": [
                            "Africa/Abidjan",
                            "Africa/Accra",
                            "Africa/Addis_Ababa",
                            "Africa/Algiers",
                            "Africa/Asmara",
                            "Africa/Bamako",
                            "Africa/Bangui",
                            "Africa/Banjul",
                            "Africa/Bissau",
                            "Africa/Blantyre",
                            "Africa/Brazzaville",
                            "Africa/Bujumbura",
                            "Africa/Cairo",
                            "Africa/Casablanca",
                            "Africa/Ceuta",
                            "Africa/Conakry",
                            "Africa/Dakar",
                            "Africa/Dar_es_Salaam",
                            "Africa/Djibouti",
                            "Africa/Douala",
                            "Africa/El_Aaiun",
                            "Africa/Freetown",
                            "Africa/Gaborone",
                            "Africa/Harare",
                            "Africa/Johannesburg",
                            "Africa/Juba",
                            "Africa/Kampala",
                            "Africa/Khartoum",
                            "Africa/Kigali",
                            "Africa/Kinshasa",
                            "Africa/Lagos",
                            "Africa/Libreville",
                            "Africa/Lome",
                            "Africa/Luanda",
                            "Africa/Lubumbashi",
                            "Africa/Lusaka",
                            "Africa/Malabo",
                            "Africa/Maputo",
                            "Africa/Maseru",
                            "Africa/Mbabane",
                            "Africa/Mogadishu",
                            "Africa/Monrovia",
                            "Africa/Nairobi",
                            "Africa/Ndjamena",
                            "Africa/Niamey",
                            "Africa/Nouakchott",
                            "Africa/Ouagadougou",
                            "Africa/Porto-Novo",
                            "Africa/Sao_Tome",
                            "Africa/Tripoli",
                            "Africa/Tunis",
                            "Africa/Windhoek",
                            "America/Adak",
                            "America/Anchorage",
                            "America/Anguilla",
                            "America/Antigua",
                            "America/Araguaina",
                            "America/Argentina/Buenos_Aires",
                            "America/Argentina/Catamarca",
                            "America/Argentina/Cordoba",
                            "America/Argentina/Jujuy",
                            "America/Argentina/La_Rioja",
                            "America/Argentina/Mendoza",
                            "America/Argentina/Rio_Gallegos",
                            "America/Argentina/Salta",
                            "America/Argentina/San_Juan",
                            "America/Argentina/San_Luis",
                            "America/Argentina/Tucuman",
                            "America/Argentina/Ushuaia",
                            "America/Aruba",
                            "America/Asuncion",
                            "America/Atikokan",
                            "America/Bahia",
                            "America/Bahia_Banderas",
                            "America/Barbados",
                            "America/Belem",
                            "America/Belize",
                            "America/Blanc-Sablon",
                            "America/Boa_Vista",
                            "America/Bogota",
                            "America/Boise",
                            "America/Cambridge_Bay",
                            "America/Campo_Grande",
                            "America/Cancun",
                            "America/Caracas",
                            "America/Cayenne",
                            "America/Cayman",
                            "America/Chicago",
                            "America/Chihuahua",
                            "America/Ciudad_Juarez",
                            "America/Costa_Rica",
                            "America/Coyhaique",
                            "America/Creston",
                            "America/Cuiaba",
                            "America/Curacao",
                            "America/Danmarkshavn",
                            "America/Dawson",
                            "America/Dawson_Creek",
                            "America/Denver",
                            "America/Detroit",
                            "America/Dominica",
                            "America/Edmonton",
                            "America/Eirunepe",
                            "America/El_Salvador",
                            "America/Fort_Nelson",
                            "America/Fortaleza",
                            "America/Glace_Bay",
                            "America/Goose_Bay",
                            "America/Grand_Turk",
                            "America/Grenada",
                            "America/Guadeloupe",
                            "America/Guatemala",
                            "America/Guayaquil",
                            "America/Guyana",
                            "America/Halifax",
                            "America/Havana",
                            "America/Hermosillo",
                            "America/Indiana/Indianapolis",
                            "America/Indiana/Knox",
                            "America/Indiana/Marengo",
                            "America/Indiana/Petersburg",
                            "America/Indiana/Tell_City",
                            "America/Indiana/Vevay",
                            "America/Indiana/Vincennes",
                            "America/Indiana/Winamac",
                            "America/Inuvik",
                            "America/Iqaluit",
                            "America/Jamaica",
                            "America/Juneau",
                            "America/Kentucky/Louisville",
                            "America/Kentucky/Monticello",
                            "America/Kralendijk",
                            "America/La_Paz",
                            "America/Lima",
                            "America/Los_Angeles",
                            "America/Lower_Princes",
                            "America/Maceio",
                            "America/Managua",
                            "America/Manaus",
                            "America/Marigot",
                            "America/Martinique",
                            "America/Matamoros",
                            "America/Mazatlan",
                            "America/Menominee",
                            "America/Merida",
                            "America/Metlakatla",
                            "America/Mexico_City",
                            "America/Miquelon",
                            "America/Moncton",
                            "America/Monterrey",
                            "America/Montevideo",
                            "America/Montserrat",
                            "America/Nassau",
                            "America/New_York",
                            "America/Nome",
                            "America/Noronha",
                            "America/North_Dakota/Beulah",
                            "America/North_Dakota/Center",
                            "America/North_Dakota/New_Salem",
                            "America/Nuuk",
                            "America/Ojinaga",
                            "America/Panama",
                            "America/Paramaribo",
                            "America/Phoenix",
                            "America/Port-au-Prince",
                            "America/Port_of_Spain",
                            "America/Porto_Velho",
                            "America/Puerto_Rico",
                            "America/Punta_Arenas",
                            "America/Rankin_Inlet",
                            "America/Recife",
                            "America/Regina",
                            "America/Resolute",
                            "America/Rio_Branco",
                            "America/Santarem",
                            "America/Santiago",
                            "America/Santo_Domingo",
                            "America/Sao_Paulo",
                            "America/Scoresbysund",
                            "America/Sitka",
                            "America/St_Barthelemy",
                            "America/St_Johns",
                            "America/St_Kitts",
                            "America/St_Lucia",
                            "America/St_Thomas",
                            "America/St_Vincent",
                            "America/Swift_Current",
                            "America/Tegucigalpa",
                            "America/Thule",
                            "America/Tijuana",
                            "America/Toronto",
                            "America/Tortola",
                            "America/Vancouver",
                            "America/Whitehorse",
                            "America/Winnipeg",
                            "America/Yakutat",
                            "Antarctica/Casey",
                            "Antarctica/Davis",
                            "Antarctica/DumontDUrville",
                            "Antarctica/Macquarie",
                            "Antarctica/Mawson",
                            "Antarctica/McMurdo",
                            "Antarctica/Palmer",
                            "Antarctica/Rothera",
                            "Antarctica/Syowa",
                            "Antarctica/Troll",
                            "Antarctica/Vostok",
                            "Arctic/Longyearbyen",
                            "Asia/Aden",
                            "Asia/Almaty",
                            "Asia/Amman",
                            "Asia/Anadyr",
                            "Asia/Aqtau",
                            "Asia/Aqtobe",
                            "Asia/Ashgabat",
                            "Asia/Atyrau",
                            "Asia/Baghdad",
                            "Asia/Bahrain",
                            "Asia/Baku",
                            "Asia/Bangkok",
                            "Asia/Barnaul",
                            "Asia/Beirut",
                            "Asia/Bishkek",
                            "Asia/Brunei",
                            "Asia/Chita",
                            "Asia/Colombo",
                            "Asia/Damascus",
                            "Asia/Dhaka",
                            "Asia/Dili",
                            "Asia/Dubai",
                            "Asia/Dushanbe",
                            "Asia/Famagusta",
                            "Asia/Gaza",
                            "Asia/Hebron",
                            "Asia/Ho_Chi_Minh",
                            "Asia/Hong_Kong",
                            "Asia/Hovd",
                            "Asia/Irkutsk",
                            "Asia/Jakarta",
                            "Asia/Jayapura",
                            "Asia/Jerusalem",
                            "Asia/Kabul",
                            "Asia/Kamchatka",
                            "Asia/Karachi",
                            "Asia/Kathmandu",
                            "Asia/Khandyga",
                            "Asia/Kolkata",
                            "Asia/Krasnoyarsk",
                            "Asia/Kuala_Lumpur",
                            "Asia/Kuching",
                            "Asia/Kuwait",
                            "Asia/Macau",
                            "Asia/Magadan",
                            "Asia/Makassar",
                            "Asia/Manila",
                            "Asia/Muscat",
                            "Asia/Nicosia",
                            "Asia/Novokuznetsk",
                            "Asia/Novosibirsk",
                            "Asia/Omsk",
                            "Asia/Oral",
                            "Asia/Phnom_Penh",
                            "Asia/Pontianak",
                            "Asia/Pyongyang",
                            "Asia/Qatar",
                            "Asia/Qostanay",
                            "Asia/Qyzylorda",
                            "Asia/Riyadh",
                            "Asia/Sakhalin",
                            "Asia/Samarkand",
                            "Asia/Seoul",
                            "Asia/Shanghai",
                            "Asia/Singapore",
                            "Asia/Srednekolymsk",
                            "Asia/Taipei",
                            "Asia/Tashkent",
                            "Asia/Tbilisi",
                            "Asia/Tehran",
                            "Asia/Thimphu",
                            "Asia/Tokyo",
                            "Asia/Tomsk",
                            "Asia/Ulaanbaatar",
                            "Asia/Urumqi",
                            "Asia/Ust-Nera",
                            "Asia/Vientiane",
                            "Asia/Vladivostok",
                            "Asia/Yakutsk",
                            "Asia/Yangon",
                            "Asia/Yekaterinburg",
                            "Asia/Yerevan",
                            "Atlantic/Azores",
                            "Atlantic/Bermuda",
                            "Atlantic/Canary",
                            "Atlantic/Cape_Verde",
                            "Atlantic/Faroe",
                            "Atlantic/Madeira",
                            "Atlantic/Reykjavik",
                            "Atlantic/South_Georgia",
                            "Atlantic/St_Helena",
                            "Atlantic/Stanley",
                            "Australia/Adelaide",
                            "Australia/Brisbane",
                            "Australia/Broken_Hill",
                            "Australia/Darwin",
                            "Australia/Eucla",
                            "Australia/Hobart",
                            "Australia/Lindeman",
                            "Australia/Lord_Howe",
                            "Australia/Melbourne",
                            "Australia/Perth",
                            "Australia/Sydney",
                            "Europe/Amsterdam",
                            "Europe/Andorra",
                            "Europe/Astrakhan",
                            "Europe/Athens",
                            "Europe/Belgrade",
                            "Europe/Berlin",
                            "Europe/Bratislava",
                            "Europe/Brussels",
                            "Europe/Bucharest",
                            "Europe/Budapest",
                            "Europe/Busingen",
                            "Europe/Chisinau",
                            "Europe/Copenhagen",
                            "Europe/Dublin",
                            "Europe/Gibraltar",
                            "Europe/Guernsey",
                            "Europe/Helsinki",
                            "Europe/Isle_of_Man",
                            "Europe/Istanbul",
                            "Europe/Jersey",
                            "Europe/Kaliningrad",
                            "Europe/Kirov",
                            "Europe/Kyiv",
                            "Europe/Lisbon",
                            "Europe/Ljubljana",
                            "Europe/London",
                            "Europe/Luxembourg",
                            "Europe/Madrid",
                            "Europe/Malta",
                            "Europe/Mariehamn",
                            "Europe/Minsk",
                            "Europe/Monaco",
                            "Europe/Moscow",
                            "Europe/Oslo",
                            "Europe/Paris",
                            "Europe/Podgorica",
                            "Europe/Prague",
                            "Europe/Riga",
                            "Europe/Rome",
                            "Europe/Samara",
                            "Europe/San_Marino",
                            "Europe/Sarajevo",
                            "Europe/Saratov",
                            "Europe/Simferopol",
                            "Europe/Skopje",
                            "Europe/Sofia",
                            "Europe/Stockholm",
                            "Europe/Tallinn",
                            "Europe/Tirane",
                            "Europe/Ulyanovsk",
                            "Europe/Vaduz",
                            "Europe/Vatican",
                            "Europe/Vienna",
                            "Europe/Vilnius",
                            "Europe/Volgograd",
                            "Europe/Warsaw",
                            "Europe/Zagreb",
                            "Europe/Zurich",
                            "Indian/Antananarivo",
                            "Indian/Chagos",
                            "Indian/Christmas",
                            "Indian/Cocos",
                            "Indian/Comoro",
                            "Indian/Kerguelen",
                            "Indian/Mahe",
                            "Indian/Maldives",
                            "Indian/Mauritius",
                            "Indian/Mayotte",
                            "Indian/Reunion",
                            "Pacific/Apia",
                            "Pacific/Auckland",
                            "Pacific/Bougainville",
                            "Pacific/Chatham",
                            "Pacific/Chuuk",
                            "Pacific/Easter",
                            "Pacific/Efate",
                            "Pacific/Fakaofo",
                            "Pacific/Fiji",
                            "Pacific/Funafuti",
                            "Pacific/Galapagos",
                            "Pacific/Gambier",
                            "Pacific/Guadalcanal",
                            "Pacific/Guam",
                            "Pacific/Honolulu",
                            "Pacific/Kanton",
                            "Pacific/Kiritimati",
                            "Pacific/Kosrae",
                            "Pacific/Kwajalein",
                            "Pacific/Majuro",
                            "Pacific/Marquesas",
                            "Pacific/Midway",
                            "Pacific/Nauru",
                            "Pacific/Niue",
                            "Pacific/Norfolk",
                            "Pacific/Noumea",
                            "Pacific/Pago_Pago",
                            "Pacific/Palau",
                            "Pacific/Pitcairn",
                            "Pacific/Pohnpei",
                            "Pacific/Port_Moresby",
                            "Pacific/Rarotonga",
                            "Pacific/Saipan",
                            "Pacific/Tahiti",
                            "Pacific/Tarawa",
                            "Pacific/Tongatapu",
                            "Pacific/Wake",
                            "Pacific/Wallis",
                            "UTC"
                        ],
                        "type": "string",
                        "description": "Specify the timezone for the output date",
                        "example": "Africa/Blantyre"
                    },
                    "enumValues": [
                        "Africa/Abidjan",
                        "Africa/Accra",
                        "Africa/Addis_Ababa",
                        "Africa/Algiers",
                        "Africa/Asmara",
                        "Africa/Bamako",
                        "Africa/Bangui",
                        "Africa/Banjul",
                        "Africa/Bissau",
                        "Africa/Blantyre",
                        "Africa/Brazzaville",
                        "Africa/Bujumbura",
                        "Africa/Cairo",
                        "Africa/Casablanca",
                        "Africa/Ceuta",
                        "Africa/Conakry",
                        "Africa/Dakar",
                        "Africa/Dar_es_Salaam",
                        "Africa/Djibouti",
                        "Africa/Douala",
                        "Africa/El_Aaiun",
                        "Africa/Freetown",
                        "Africa/Gaborone",
                        "Africa/Harare",
                        "Africa/Johannesburg",
                        "Africa/Juba",
                        "Africa/Kampala",
                        "Africa/Khartoum",
                        "Africa/Kigali",
                        "Africa/Kinshasa",
                        "Africa/Lagos",
                        "Africa/Libreville",
                        "Africa/Lome",
                        "Africa/Luanda",
                        "Africa/Lubumbashi",
                        "Africa/Lusaka",
                        "Africa/Malabo",
                        "Africa/Maputo",
                        "Africa/Maseru",
                        "Africa/Mbabane",
                        "Africa/Mogadishu",
                        "Africa/Monrovia",
                        "Africa/Nairobi",
                        "Africa/Ndjamena",
                        "Africa/Niamey",
                        "Africa/Nouakchott",
                        "Africa/Ouagadougou",
                        "Africa/Porto-Novo",
                        "Africa/Sao_Tome",
                        "Africa/Tripoli",
                        "Africa/Tunis",
                        "Africa/Windhoek",
                        "America/Adak",
                        "America/Anchorage",
                        "America/Anguilla",
                        "America/Antigua",
                        "America/Araguaina",
                        "America/Argentina/Buenos_Aires",
                        "America/Argentina/Catamarca",
                        "America/Argentina/Cordoba",
                        "America/Argentina/Jujuy",
                        "America/Argentina/La_Rioja",
                        "America/Argentina/Mendoza",
                        "America/Argentina/Rio_Gallegos",
                        "America/Argentina/Salta",
                        "America/Argentina/San_Juan",
                        "America/Argentina/San_Luis",
                        "America/Argentina/Tucuman",
                        "America/Argentina/Ushuaia",
                        "America/Aruba",
                        "America/Asuncion",
                        "America/Atikokan",
                        "America/Bahia",
                        "America/Bahia_Banderas",
                        "America/Barbados",
                        "America/Belem",
                        "America/Belize",
                        "America/Blanc-Sablon",
                        "America/Boa_Vista",
                        "America/Bogota",
                        "America/Boise",
                        "America/Cambridge_Bay",
                        "America/Campo_Grande",
                        "America/Cancun",
                        "America/Caracas",
                        "America/Cayenne",
                        "America/Cayman",
                        "America/Chicago",
                        "America/Chihuahua",
                        "America/Ciudad_Juarez",
                        "America/Costa_Rica",
                        "America/Coyhaique",
                        "America/Creston",
                        "America/Cuiaba",
                        "America/Curacao",
                        "America/Danmarkshavn",
                        "America/Dawson",
                        "America/Dawson_Creek",
                        "America/Denver",
                        "America/Detroit",
                        "America/Dominica",
                        "America/Edmonton",
                        "America/Eirunepe",
                        "America/El_Salvador",
                        "America/Fort_Nelson",
                        "America/Fortaleza",
                        "America/Glace_Bay",
                        "America/Goose_Bay",
                        "America/Grand_Turk",
                        "America/Grenada",
                        "America/Guadeloupe",
                        "America/Guatemala",
                        "America/Guayaquil",
                        "America/Guyana",
                        "America/Halifax",
                        "America/Havana",
                        "America/Hermosillo",
                        "America/Indiana/Indianapolis",
                        "America/Indiana/Knox",
                        "America/Indiana/Marengo",
                        "America/Indiana/Petersburg",
                        "America/Indiana/Tell_City",
                        "America/Indiana/Vevay",
                        "America/Indiana/Vincennes",
                        "America/Indiana/Winamac",
                        "America/Inuvik",
                        "America/Iqaluit",
                        "America/Jamaica",
                        "America/Juneau",
                        "America/Kentucky/Louisville",
                        "America/Kentucky/Monticello",
                        "America/Kralendijk",
                        "America/La_Paz",
                        "America/Lima",
                        "America/Los_Angeles",
                        "America/Lower_Princes",
                        "America/Maceio",
                        "America/Managua",
                        "America/Manaus",
                        "America/Marigot",
                        "America/Martinique",
                        "America/Matamoros",
                        "America/Mazatlan",
                        "America/Menominee",
                        "America/Merida",
                        "America/Metlakatla",
                        "America/Mexico_City",
                        "America/Miquelon",
                        "America/Moncton",
                        "America/Monterrey",
                        "America/Montevideo",
                        "America/Montserrat",
                        "America/Nassau",
                        "America/New_York",
                        "America/Nome",
                        "America/Noronha",
                        "America/North_Dakota/Beulah",
                        "America/North_Dakota/Center",
                        "America/North_Dakota/New_Salem",
                        "America/Nuuk",
                        "America/Ojinaga",
                        "America/Panama",
                        "America/Paramaribo",
                        "America/Phoenix",
                        "America/Port-au-Prince",
                        "America/Port_of_Spain",
                        "America/Porto_Velho",
                        "America/Puerto_Rico",
                        "America/Punta_Arenas",
                        "America/Rankin_Inlet",
                        "America/Recife",
                        "America/Regina",
                        "America/Resolute",
                        "America/Rio_Branco",
                        "America/Santarem",
                        "America/Santiago",
                        "America/Santo_Domingo",
                        "America/Sao_Paulo",
                        "America/Scoresbysund",
                        "America/Sitka",
                        "America/St_Barthelemy",
                        "America/St_Johns",
                        "America/St_Kitts",
                        "America/St_Lucia",
                        "America/St_Thomas",
                        "America/St_Vincent",
                        "America/Swift_Current",
                        "America/Tegucigalpa",
                        "America/Thule",
                        "America/Tijuana",
                        "America/Toronto",
                        "America/Tortola",
                        "America/Vancouver",
                        "America/Whitehorse",
                        "America/Winnipeg",
                        "America/Yakutat",
                        "Antarctica/Casey",
                        "Antarctica/Davis",
                        "Antarctica/DumontDUrville",
                        "Antarctica/Macquarie",
                        "Antarctica/Mawson",
                        "Antarctica/McMurdo",
                        "Antarctica/Palmer",
                        "Antarctica/Rothera",
                        "Antarctica/Syowa",
                        "Antarctica/Troll",
                        "Antarctica/Vostok",
                        "Arctic/Longyearbyen",
                        "Asia/Aden",
                        "Asia/Almaty",
                        "Asia/Amman",
                        "Asia/Anadyr",
                        "Asia/Aqtau",
                        "Asia/Aqtobe",
                        "Asia/Ashgabat",
                        "Asia/Atyrau",
                        "Asia/Baghdad",
                        "Asia/Bahrain",
                        "Asia/Baku",
                        "Asia/Bangkok",
                        "Asia/Barnaul",
                        "Asia/Beirut",
                        "Asia/Bishkek",
                        "Asia/Brunei",
                        "Asia/Chita",
                        "Asia/Colombo",
                        "Asia/Damascus",
                        "Asia/Dhaka",
                        "Asia/Dili",
                        "Asia/Dubai",
                        "Asia/Dushanbe",
                        "Asia/Famagusta",
                        "Asia/Gaza",
                        "Asia/Hebron",
                        "Asia/Ho_Chi_Minh",
                        "Asia/Hong_Kong",
                        "Asia/Hovd",
                        "Asia/Irkutsk",
                        "Asia/Jakarta",
                        "Asia/Jayapura",
                        "Asia/Jerusalem",
                        "Asia/Kabul",
                        "Asia/Kamchatka",
                        "Asia/Karachi",
                        "Asia/Kathmandu",
                        "Asia/Khandyga",
                        "Asia/Kolkata",
                        "Asia/Krasnoyarsk",
                        "Asia/Kuala_Lumpur",
                        "Asia/Kuching",
                        "Asia/Kuwait",
                        "Asia/Macau",
                        "Asia/Magadan",
                        "Asia/Makassar",
                        "Asia/Manila",
                        "Asia/Muscat",
                        "Asia/Nicosia",
                        "Asia/Novokuznetsk",
                        "Asia/Novosibirsk",
                        "Asia/Omsk",
                        "Asia/Oral",
                        "Asia/Phnom_Penh",
                        "Asia/Pontianak",
                        "Asia/Pyongyang",
                        "Asia/Qatar",
                        "Asia/Qostanay",
                        "Asia/Qyzylorda",
                        "Asia/Riyadh",
                        "Asia/Sakhalin",
                        "Asia/Samarkand",
                        "Asia/Seoul",
                        "Asia/Shanghai",
                        "Asia/Singapore",
                        "Asia/Srednekolymsk",
                        "Asia/Taipei",
                        "Asia/Tashkent",
                        "Asia/Tbilisi",
                        "Asia/Tehran",
                        "Asia/Thimphu",
                        "Asia/Tokyo",
                        "Asia/Tomsk",
                        "Asia/Ulaanbaatar",
                        "Asia/Urumqi",
                        "Asia/Ust-Nera",
                        "Asia/Vientiane",
                        "Asia/Vladivostok",
                        "Asia/Yakutsk",
                        "Asia/Yangon",
                        "Asia/Yekaterinburg",
                        "Asia/Yerevan",
                        "Atlantic/Azores",
                        "Atlantic/Bermuda",
                        "Atlantic/Canary",
                        "Atlantic/Cape_Verde",
                        "Atlantic/Faroe",
                        "Atlantic/Madeira",
                        "Atlantic/Reykjavik",
                        "Atlantic/South_Georgia",
                        "Atlantic/St_Helena",
                        "Atlantic/Stanley",
                        "Australia/Adelaide",
                        "Australia/Brisbane",
                        "Australia/Broken_Hill",
                        "Australia/Darwin",
                        "Australia/Eucla",
                        "Australia/Hobart",
                        "Australia/Lindeman",
                        "Australia/Lord_Howe",
                        "Australia/Melbourne",
                        "Australia/Perth",
                        "Australia/Sydney",
                        "Europe/Amsterdam",
                        "Europe/Andorra",
                        "Europe/Astrakhan",
                        "Europe/Athens",
                        "Europe/Belgrade",
                        "Europe/Berlin",
                        "Europe/Bratislava",
                        "Europe/Brussels",
                        "Europe/Bucharest",
                        "Europe/Budapest",
                        "Europe/Busingen",
                        "Europe/Chisinau",
                        "Europe/Copenhagen",
                        "Europe/Dublin",
                        "Europe/Gibraltar",
                        "Europe/Guernsey",
                        "Europe/Helsinki",
                        "Europe/Isle_of_Man",
                        "Europe/Istanbul",
                        "Europe/Jersey",
                        "Europe/Kaliningrad",
                        "Europe/Kirov",
                        "Europe/Kyiv",
                        "Europe/Lisbon",
                        "Europe/Ljubljana",
                        "Europe/London",
                        "Europe/Luxembourg",
                        "Europe/Madrid",
                        "Europe/Malta",
                        "Europe/Mariehamn",
                        "Europe/Minsk",
                        "Europe/Monaco",
                        "Europe/Moscow",
                        "Europe/Oslo",
                        "Europe/Paris",
                        "Europe/Podgorica",
                        "Europe/Prague",
                        "Europe/Riga",
                        "Europe/Rome",
                        "Europe/Samara",
                        "Europe/San_Marino",
                        "Europe/Sarajevo",
                        "Europe/Saratov",
                        "Europe/Simferopol",
                        "Europe/Skopje",
                        "Europe/Sofia",
                        "Europe/Stockholm",
                        "Europe/Tallinn",
                        "Europe/Tirane",
                        "Europe/Ulyanovsk",
                        "Europe/Vaduz",
                        "Europe/Vatican",
                        "Europe/Vienna",
                        "Europe/Vilnius",
                        "Europe/Volgograd",
                        "Europe/Warsaw",
                        "Europe/Zagreb",
                        "Europe/Zurich",
                        "Indian/Antananarivo",
                        "Indian/Chagos",
                        "Indian/Christmas",
                        "Indian/Cocos",
                        "Indian/Comoro",
                        "Indian/Kerguelen",
                        "Indian/Mahe",
                        "Indian/Maldives",
                        "Indian/Mauritius",
                        "Indian/Mayotte",
                        "Indian/Reunion",
                        "Pacific/Apia",
                        "Pacific/Auckland",
                        "Pacific/Bougainville",
                        "Pacific/Chatham",
                        "Pacific/Chuuk",
                        "Pacific/Easter",
                        "Pacific/Efate",
                        "Pacific/Fakaofo",
                        "Pacific/Fiji",
                        "Pacific/Funafuti",
                        "Pacific/Galapagos",
                        "Pacific/Gambier",
                        "Pacific/Guadalcanal",
                        "Pacific/Guam",
                        "Pacific/Honolulu",
                        "Pacific/Kanton",
                        "Pacific/Kiritimati",
                        "Pacific/Kosrae",
                        "Pacific/Kwajalein",
                        "Pacific/Majuro",
                        "Pacific/Marquesas",
                        "Pacific/Midway",
                        "Pacific/Nauru",
                        "Pacific/Niue",
                        "Pacific/Norfolk",
                        "Pacific/Noumea",
                        "Pacific/Pago_Pago",
                        "Pacific/Palau",
                        "Pacific/Pitcairn",
                        "Pacific/Pohnpei",
                        "Pacific/Port_Moresby",
                        "Pacific/Rarotonga",
                        "Pacific/Saipan",
                        "Pacific/Tahiti",
                        "Pacific/Tarawa",
                        "Pacific/Tongatapu",
                        "Pacific/Wake",
                        "Pacific/Wallis",
                        "UTC"
                    ],
                    "values": [],
                    "examples": [
                        "Africa/Blantyre"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioGetListenersPerMinutePerStation",
        "functionName": "streamingRadiogetlistenersperminuteperstation",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/listeners_per_minute_grouped",
        "summary": "Get listeners per minute per station",
        "description": "This endpoint allows you to retrieve product listeners stats per minuteh.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/listeners_per_minute_grouped",
            "operationId": "Streaming/radioGetListenersPerMinutePerStation",
            "summary": "Get listeners per minute per station",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 76622
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        76622
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_listeners_per_minute",
        "functionName": "get1RadiosRadioProductIdStatsListenersPerMinute",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/listeners_per_minute",
        "summary": "Get listeners per minute",
        "description": "This endpoint allows you to retrieve product listeners stats per minute.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/listeners_per_minute",
            "operationId": null,
            "summary": "Get listeners per minute",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48721
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48721
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_listeners",
        "functionName": "get1RadiosRadioProductIdStatsListeners",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/listeners",
        "summary": "Get listeners",
        "description": "This endpoint allows you to retrieve product listeners stats.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "scope_by",
                "in": "query",
                "required": false
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/listeners",
            "operationId": null,
            "summary": "Get listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 73686
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        73686
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "scope_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "scope_by",
                        "enum": [
                            "day",
                            "month",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specifies the time period over which to aggregate and retrieve stats",
                        "example": "week"
                    },
                    "enumValues": [
                        "day",
                        "month",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "week"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_players",
        "functionName": "get1RadiosRadioProductIdStatsPlayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/players",
        "summary": "Get players",
        "description": "This endpoint allows you to retrieve players stats.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/players",
            "operationId": null,
            "summary": "Get players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 2345
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2345
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioGetConsumptionByStation",
        "functionName": "streamingRadiogetconsumptionbystation",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/station_consumption",
        "summary": "Get consumption by station",
        "description": "This endpoint allows you to retrieve product consumption stats by station.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/station_consumption",
            "operationId": "Streaming/radioGetConsumptionByStation",
            "summary": "Get consumption by station",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79148
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79148
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioGetListenersByStation",
        "functionName": "streamingRadiogetlistenersbystation",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/station_listeners",
        "summary": "Get listeners by station",
        "description": "This endpoint allows you to retrieve product listeners stats by station.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
                "in": "query",
                "required": true
            },
            {
                "name": "with_empty",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/station_listeners",
            "operationId": "Streaming/radioGetListenersByStation",
            "summary": "Get listeners by station",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 76064
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        76064
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    ]
                },
                {
                    "name": "with_empty",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "boolean",
                    "schema": {
                        "title": "with_empty",
                        "type": "boolean",
                        "description": "Define if station without listener are in the return",
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
                "200",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetStatsByStations",
        "functionName": "streamingRadiogetstatsbystations",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/stats_by_station",
        "summary": "Get stats by stations",
        "description": "This endpoint allows you to retrieve stats group by stations.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/stats_by_station",
            "operationId": "Streaming/radioGetStatsByStations",
            "summary": "Get stats by stations",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 19388
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        19388
                    ]
                },
                {
                    "name": "datatype",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "consumption",
                            "countries",
                            "listeners",
                            "players"
                        ],
                        "type": "string",
                        "description": "Specify the type of data to export",
                        "example": "players"
                    },
                    "enumValues": [
                        "consumption",
                        "countries",
                        "listeners",
                        "players"
                    ],
                    "values": [],
                    "examples": [
                        "players"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_total_consumption",
        "functionName": "get1RadiosRadioProductIdStatsTotalConsumption",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/total_consumption",
        "summary": "Get total consumption",
        "description": "This endpoint allows you to retrieve product total consumption stats.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/total_consumption",
            "operationId": null,
            "summary": "Get total consumption",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 99540
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        99540
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "get_1_radios_radio_product_id_stats_total_players",
        "functionName": "get1RadiosRadioProductIdStatsTotalPlayers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/stats/total_players",
        "summary": "Get total players",
        "description": "This endpoint allows you to retrieve total players stats.",
        "tags": [
            "Stats > Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "station_ids",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/stats/total_players",
            "operationId": null,
            "summary": "Get total players",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the radio product to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 69841
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        69841
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get stats",
                        "example": "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-01-01, 2022-01-01 00:00:00, 1640995200"
                    ]
                },
                {
                    "name": "station_ids",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "station_ids",
                        "type": "string",
                        "description": "List of station ids for get stats",
                        "example": "1,3,5"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1,3,5"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get stats",
                        "example": "2022-12-31, 2022-12-31 00:00:00, 1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "2022-12-31, 2022-12-31 00:00:00, 1672444800"
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
        "operationId": "Streaming/radioListUsers",
        "functionName": "streamingRadiolistusers",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/{radio_product_id}/users",
        "summary": "List users",
        "description": "This endpoint allows you to retrieve all users attach to the product.",
        "tags": [
            "Radio Products"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "radio_product_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/%7Bradio_product_id%7D/users",
            "operationId": "Streaming/radioListUsers",
            "summary": "List users",
            "categoryPath": [
                "Streaming radio",
                "Radio Products"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "radio_product_id",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the station to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68990
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68990
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
        "operationId": "Streaming_radioGetStatsListeners_get_1_radios_admin_stats_group_xml",
        "functionName": "streamingRadiogetstatslistenersGet1RadiosAdminStatsGroupXml",
        "originalOperationId": "Streaming/radioGetStatsListeners",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/admin/stats_group.xml",
        "summary": "Get stats listeners",
        "description": "This endpoint allows you to get stats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": false
            },
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/admin/stats_group.xml",
            "operationId": "Streaming/radioGetStatsListeners",
            "summary": "Get stats listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "datatype",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "json"
                        ],
                        "type": "string",
                        "description": "Specify the type of return for the data (default:xml)",
                        "example": "json"
                    },
                    "enumValues": [
                        "json"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming_radioGetStatsListeners_get_1_radios_admin_stats",
        "functionName": "streamingRadiogetstatslistenersGet1RadiosAdminStats",
        "originalOperationId": "Streaming/radioGetStatsListeners",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/admin/stats",
        "summary": "Get stats listeners",
        "description": "This endpoint allows you to get stats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": false
            },
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/admin/stats",
            "operationId": "Streaming/radioGetStatsListeners",
            "summary": "Get stats listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "datatype",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "json"
                        ],
                        "type": "string",
                        "description": "Specify the type of return for the data (default:xml)",
                        "example": "json"
                    },
                    "enumValues": [
                        "json"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming_radioGetStatsListeners_get_1_radios_admin_stats_xml",
        "functionName": "streamingRadiogetstatslistenersGet1RadiosAdminStatsXml",
        "originalOperationId": "Streaming/radioGetStatsListeners",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/admin/stats.xml",
        "summary": "Get stats listeners",
        "description": "This endpoint allows you to get stats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": false
            },
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/admin/stats.xml",
            "operationId": "Streaming/radioGetStatsListeners",
            "summary": "Get stats listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "datatype",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "json"
                        ],
                        "type": "string",
                        "description": "Specify the type of return for the data (default:xml)",
                        "example": "json"
                    },
                    "enumValues": [
                        "json"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming_radioGetMediastats_get_1_radios_listclients_xml",
        "functionName": "streamingRadiogetmediastatsGet1RadiosListclientsXml",
        "originalOperationId": "Streaming/radioGetMediastats",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/listclients.xml",
        "summary": "Get Mediastats",
        "description": "This endpoint allows you to get mediastats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/listclients.xml",
            "operationId": "Streaming/radioGetMediastats",
            "summary": "Get Mediastats",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming_radioGetMediastats_get_1_radios_mediastats_php",
        "functionName": "streamingRadiogetmediastatsGet1RadiosMediastatsPhp",
        "originalOperationId": "Streaming/radioGetMediastats",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/mediastats.php",
        "summary": "Get Mediastats",
        "description": "This endpoint allows you to get mediastats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/mediastats.php",
            "operationId": "Streaming/radioGetMediastats",
            "summary": "Get Mediastats",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioListOptions",
        "functionName": "streamingRadiolistoptions",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/options",
        "summary": "List options",
        "description": "This endpoint allows you to retrieve all the options.",
        "tags": [
            "Options"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "country",
                "in": "query",
                "required": false
            },
            {
                "name": "option_prices",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/options",
            "operationId": "Streaming/radioListOptions",
            "summary": "List options",
            "categoryPath": [
                "Streaming radio",
                "Options"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": true,
            "authUser": null,
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
                    "name": "country",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "country",
                        "pattern": "^[a-zA-Z]{1,24}$",
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
                    "name": "option_prices",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "option_prices",
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
                        "example": 36809
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        36809
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
                        "example": 96682
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        96682
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
                        "example": 98865
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        98865
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
                        "example": 35978
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        35978
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "asc"
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
                        "asc"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_radios_packs",
        "functionName": "get1RadiosPacks",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/packs",
        "summary": "List packs",
        "description": "This endpoint allows you to retrieve all the packs.",
        "tags": [
            "Packs"
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
                "name": "country",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/packs",
            "operationId": null,
            "summary": "List packs",
            "categoryPath": [
                "Streaming radio",
                "Packs"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": true,
            "sortable": true,
            "authUser": null,
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
                        "example": "pack_prices",
                        "enum": [
                            "pack_prices"
                        ]
                    },
                    "enumValues": [
                        "pack_prices"
                    ],
                    "values": [
                        "pack_prices"
                    ],
                    "examples": [
                        "pack_prices"
                    ]
                },
                {
                    "name": "country",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "country",
                        "pattern": "^[a-zA-Z]{1,24}$",
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
                        "example": 62216
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        62216
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
                        "example": 39922
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        39922
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
                        "example": 15363
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        15363
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
                        "example": 81709
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        81709
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
                        ]
                    },
                    "enumValues": [],
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
                        "example": "desc"
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
                        "desc"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetPlayerConfig",
        "functionName": "streamingRadiogetplayerconfig",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/players/{player_uuid}/config",
        "summary": "Get player config",
        "description": "This endpoint allows you to get the player config.",
        "tags": [
            "Players"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "player_uuid",
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/players/%7Bplayer_uuid%7D/config",
            "operationId": "Streaming/radioGetPlayerConfig",
            "summary": "Get player config",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "player_uuid",
                    "in": "path",
                    "required": true,
                    "description": "The universally unique identifier (UUID) of the player to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming_radioGetPlayerConfig_post_1_radios_players_player_uuid_config",
        "functionName": "streamingRadiogetplayerconfigPost1RadiosPlayersPlayerUuidConfig",
        "originalOperationId": "Streaming/radioGetPlayerConfig",
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/players/{player_uuid}/config",
        "summary": "Get player config",
        "description": "This endpoint allows you to get the player config.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "player_uuid",
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/players/%7Bplayer_uuid%7D/config",
            "operationId": "Streaming/radioGetPlayerConfig",
            "summary": "Get player config",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "player_uuid",
                    "in": "path",
                    "required": true,
                    "description": "The universally unique identifier (UUID) of the player to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioCheckDomainAccessForPlayer",
        "functionName": "streamingRadiocheckdomainaccessforplayer",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/players/{player_uuid}/domain-access",
        "summary": "Check domain access for player",
        "description": "This endpoint allows you to check domain access for player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "player_uuid",
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/players/%7Bplayer_uuid%7D/domain-access",
            "operationId": "Streaming/radioCheckDomainAccessForPlayer",
            "summary": "Check domain access for player",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "player_uuid",
                    "in": "path",
                    "required": true,
                    "description": "The universally unique identifier (UUID) of the player to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioCheckIpAccessToMountpoint",
        "functionName": "streamingRadiocheckipaccesstomountpoint",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/players/ip-access",
        "summary": "Check ip access to mountpoint",
        "description": "This endpoint allows you to check ip access to mountpoint.",
        "tags": [
            "Players"
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/players/ip-access",
            "operationId": "Streaming/radioCheckIpAccessToMountpoint",
            "summary": "Check ip access to mountpoint",
            "categoryPath": [
                "Streaming radio",
                "Players"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetPlaylistWithLegacyParameters",
        "functionName": "streamingRadiogetplaylistwithlegacyparameters",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/playlist/{any}",
        "summary": "Get playlist with legacy parameters",
        "description": "This endpoint allows you to get playlist file with legacy parameters.",
        "tags": [
            "Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "any",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestContentTypes": [],
        "responseContentTypes": [
            "application/json",
            "application/octet-stream"
        ],
        "deprecated": false,
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/playlist/%7Bany%7D",
            "operationId": "Streaming/radioGetPlaylistWithLegacyParameters",
            "summary": "Get playlist with legacy parameters",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "any",
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
                    "name": "type",
                    "in": "any",
                    "required": false,
                    "description": "",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "type",
                        "enum": [
                            "asx",
                            "m3u",
                            "pls",
                            "qtl",
                            "ram",
                            "xspf"
                        ],
                        "type": "string",
                        "description": "The playlist type<note><strong>asx,asx</strong>: Asx</note><note><strong>pls,pls</strong>: Pls</note><note><strong>qtl,qtl</strong>: Qtl</note><note><strong>ram,ram</strong>: Ram</note><note><strong>xspf,xspf</strong>: Xspf</note><note><strong>m3u,m3u</strong>: M3u</note>",
                        "example": "m3u"
                    },
                    "enumValues": [
                        "asx",
                        "m3u",
                        "pls",
                        "qtl",
                        "ram",
                        "xspf"
                    ],
                    "values": [],
                    "examples": [
                        "m3u"
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
        "operationId": "Streaming_radioGetStatus_get_1_radios_radio_diag_status_php",
        "functionName": "streamingRadiogetstatusGet1RadiosRadioDiagStatusPhp",
        "originalOperationId": "Streaming/radioGetStatus",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/radio/diag/status.php",
        "summary": "Get status",
        "description": "This endpoint allows you to get status from streams of a station.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": false
            },
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/radio/diag/status.php",
            "operationId": "Streaming/radioGetStatus",
            "summary": "Get status",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "datatype",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "json"
                        ],
                        "type": "string",
                        "description": "Specify the type of return for the data (default:xml)",
                        "example": "json"
                    },
                    "enumValues": [
                        "json"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetInstantListeners",
        "functionName": "streamingRadiogetinstantlisteners",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/stats/listeners",
        "summary": "Get instant listeners",
        "description": "This endpoint allows you to get instant listeners on streams of a station.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/stats/listeners",
            "operationId": "Streaming/radioGetInstantListeners",
            "summary": "Get instant listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetMediastats",
        "functionName": "streamingRadiogetmediastats",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/stats/mediastats",
        "summary": "Get Mediastats",
        "description": "This endpoint allows you to get mediastats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/stats/mediastats",
            "operationId": "Streaming/radioGetMediastats",
            "summary": "Get Mediastats",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioSetMetadataToStation",
        "functionName": "streamingRadiosetmetadatatostation",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/stats/metadata",
        "summary": "Set metadata to station",
        "description": "This endpoint allows you to set metadata to a station.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "data",
                "in": "query",
                "required": false
            },
            {
                "name": "push",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/stats/metadata",
            "operationId": "Streaming/radioSetMetadataToStation",
            "summary": "Set metadata to station",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "data",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "data",
                        "type": "string",
                        "description": "Specify the metadata for the station (same as push)",
                        "example": "artist - title"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "artist - title"
                    ]
                },
                {
                    "name": "push",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "push",
                        "type": "string",
                        "description": "Specify the metadata for the station (same as data)",
                        "example": "artist - title"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "artist - title"
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
        "operationId": "Streaming/radioGetStatus",
        "functionName": "streamingRadiogetstatus",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/stats/status",
        "summary": "Get status",
        "description": "This endpoint allows you to get status from streams of a station.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": false
            },
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/stats/status",
            "operationId": "Streaming/radioGetStatus",
            "summary": "Get status",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "datatype",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "json"
                        ],
                        "type": "string",
                        "description": "Specify the type of return for the data (default:xml)",
                        "example": "json"
                    },
                    "enumValues": [
                        "json"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming_radioGetStatsListeners_get_1_radios_stats_sum_listeners_on_product",
        "functionName": "streamingRadiogetstatslistenersGet1RadiosStatsSumListenersOnProduct",
        "originalOperationId": "Streaming/radioGetStatsListeners",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/stats/sum-listeners-on-product",
        "summary": "Get stats listeners",
        "description": "This endpoint allows you to get stats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": false
            },
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/stats/sum-listeners-on-product",
            "operationId": "Streaming/radioGetStatsListeners",
            "summary": "Get stats listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "datatype",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "json"
                        ],
                        "type": "string",
                        "description": "Specify the type of return for the data (default:xml)",
                        "example": "json"
                    },
                    "enumValues": [
                        "json"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "Streaming/radioGetStatsListeners",
        "functionName": "streamingRadiogetstatslisteners",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/stats/sum-listeners",
        "summary": "Get stats listeners",
        "description": "This endpoint allows you to get stats listeners on a stream.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "datatype",
                "in": "query",
                "required": false
            },
            {
                "name": "mountpoint",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/stats/sum-listeners",
            "operationId": "Streaming/radioGetStatsListeners",
            "summary": "Get stats listeners",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "datatype",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "datatype",
                        "enum": [
                            "json"
                        ],
                        "type": "string",
                        "description": "Specify the type of return for the data (default:xml)",
                        "example": "json"
                    },
                    "enumValues": [
                        "json"
                    ],
                    "values": [],
                    "examples": [
                        "json"
                    ]
                },
                {
                    "name": "mountpoint",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "mountpoint",
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
                "404"
            ]
        }
    },
    {
        "operationId": "get_1_radios_streams_stream_uuid_introduction_file",
        "functionName": "get1RadiosStreamsStreamUuidIntroductionFile",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/streams/{stream_uuid}/introduction-file",
        "summary": "Get introduction file",
        "description": "This endpoint allows you to get the introduction file for a stream.",
        "tags": [
            "Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "stream_uuid",
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/streams/%7Bstream_uuid%7D/introduction-file",
            "operationId": null,
            "summary": "Get introduction file",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "stream_uuid",
                    "in": "path",
                    "required": true,
                    "description": "The universal unique identifier (ID) of the stream to request.",
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
                "404"
            ]
        }
    },
    {
        "operationId": "get_1_radios_streams_stream_uuid_playlist",
        "functionName": "get1RadiosStreamsStreamUuidPlaylist",
        "originalOperationId": null,
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/streams/{stream_uuid}/playlist",
        "summary": "get playlist with stream url",
        "description": "This endpoint allows you to get playlist file with stream url.",
        "tags": [
            "Streams"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "stream_uuid",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/streams/%7Bstream_uuid%7D/playlist",
            "operationId": null,
            "summary": "get playlist with stream url",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "stream_uuid",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the stream to request.",
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
                    "name": "type",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "type",
                        "type": "string",
                        "description": "The playlist type<note><strong>asx,asx</strong>: Asx</note><note><strong>pls,pls</strong>: Pls</note><note><strong>qtl,qtl</strong>: Qtl</note><note><strong>ram,ram</strong>: Ram</note><note><strong>xspf,xspf</strong>: Xspf</note><note><strong>m3u,m3u</strong>: M3u</note>",
                        "example": "m3u"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "m3u"
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
        "operationId": "Streaming/radioMountpointIsAvailable",
        "functionName": "streamingRadiomountpointisavailable",
        "originalOperationId": null,
        "domain": "radio",
        "method": "POST",
        "path": "/1/radios/streams/available-mountpoint",
        "summary": "Mountpoint is available",
        "description": "This endpoint allows you to check if a stream mountpoint is available.",
        "tags": [
            "Streams"
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/radios/streams/available-mountpoint",
            "operationId": "Streaming/radioMountpointIsAvailable",
            "summary": "Mountpoint is available",
            "categoryPath": [
                "Streaming radio",
                "Streams"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
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
        "operationId": "Streaming_radioSetMetadataToStation_get_1_radios_updatemetadata_php",
        "functionName": "streamingRadiosetmetadatatostationGet1RadiosUpdatemetadataPhp",
        "originalOperationId": "Streaming/radioSetMetadataToStation",
        "domain": "radio",
        "method": "GET",
        "path": "/1/radios/updatemetadata.php",
        "summary": "Set metadata to station",
        "description": "This endpoint allows you to set metadata to a station.",
        "tags": [
            "Stats > Stations"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "data",
                "in": "query",
                "required": false
            },
            {
                "name": "push",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/radios/updatemetadata.php",
            "operationId": "Streaming/radioSetMetadataToStation",
            "summary": "Set metadata to station",
            "categoryPath": [
                "Streaming radio",
                "Stats",
                "Stations"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
            "sortable": null,
            "authUser": null,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "data",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "data",
                        "type": "string",
                        "description": "Specify the metadata for the station (same as push)",
                        "example": "artist - title"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "artist - title"
                    ]
                },
                {
                    "name": "push",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "push",
                        "type": "string",
                        "description": "Specify the metadata for the station (same as data)",
                        "example": "artist - title"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "artist - title"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "404"
            ]
        }
    }
];
//# sourceMappingURL=radio.js.map