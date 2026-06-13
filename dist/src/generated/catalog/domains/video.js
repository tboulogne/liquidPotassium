export const videoOperations = [
    {
        "operationId": "Streaming/videoListChannels",
        "functionName": "streamingVideolistchannels",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos",
        "summary": "List channels",
        "description": "This endpoint allows you to retrieve all channels on the pack order.",
        "tags": [
            "Channel"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos",
            "operationId": "Streaming/videoListChannels",
            "summary": "List channels",
            "categoryPath": [
                "Streaming video",
                "Channel"
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
                        "example": "account",
                        "enum": [
                            "consumption",
                            "default_options",
                            "live",
                            "machines",
                            "options",
                            "options_orders",
                            "real_type",
                            "recording_status",
                            "restriction",
                            "streams",
                            "status",
                            "players",
                            "tags",
                            "rights",
                            "order",
                            "account",
                            "pool",
                            "transcoders"
                        ]
                    },
                    "enumValues": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
                    ],
                    "values": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
                    ],
                    "examples": [
                        "account"
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
                        "example": 98325
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        98325
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
                        "example": 71961
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        71961
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
                        "example": 90807
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        90807
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
                        "example": 77736
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        77736
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
                            "consumption",
                            "viewer"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "consumption",
                        "viewer"
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
        "operationId": "Streaming/videoCreateAChannel",
        "functionName": "streamingVideocreateachannel",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos",
        "summary": "Create a channel",
        "description": "This endpoint allows you to create a channel.",
        "tags": [
            "Channel"
        ],
        "mutating": true,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "ttl",
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos",
            "operationId": "Streaming/videoCreateAChannel",
            "summary": "Create a channel",
            "categoryPath": [
                "Streaming video",
                "Channel"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "ttl",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "ttl",
                        "maximum": 3600,
                        "minimum": 1,
                        "type": "integer",
                        "description": "Specify the name of the channel",
                        "example": 2653
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2653
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "Streaming/videoDeleteAChannel",
        "functionName": "streamingVideodeleteachannel",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}",
        "summary": "Delete a channel",
        "description": "This endpoint allows you to delete a channel.",
        "tags": [
            "Channel"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D",
            "operationId": "Streaming/videoDeleteAChannel",
            "summary": "Delete a channel",
            "categoryPath": [
                "Streaming video",
                "Channel"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 61004
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        61004
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnAChannel",
        "functionName": "streamingVideoreturnachannel",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}",
        "summary": "Return a channel",
        "description": "This endpoint allows you to retrieve a channel.",
        "tags": [
            "Channel"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D",
            "operationId": "Streaming/videoReturnAChannel",
            "summary": "Return a channel",
            "categoryPath": [
                "Streaming video",
                "Channel"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11259
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11259
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
                            "consumption",
                            "default_options",
                            "live",
                            "machines",
                            "options",
                            "options_orders",
                            "real_type",
                            "recording_status",
                            "restriction",
                            "streams",
                            "status",
                            "players",
                            "tags",
                            "rights",
                            "order",
                            "account",
                            "pool",
                            "transcoders"
                        ]
                    },
                    "enumValues": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
                    ],
                    "values": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
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
        "operationId": "Streaming/videoUpdateAChannel",
        "functionName": "streamingVideoupdateachannel",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}",
        "summary": "Update a channel",
        "description": "This endpoint allows you to update a channel.",
        "tags": [
            "Channel"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D",
            "operationId": "Streaming/videoUpdateAChannel",
            "summary": "Update a channel",
            "categoryPath": [
                "Streaming video",
                "Channel"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 70667
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        70667
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoConfigAChannel",
        "functionName": "streamingVideoconfigachannel",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/encodes",
        "summary": "Config a channel",
        "description": "This endpoint retrieve the data needed to configure an encoder to publish the\nstreams associated to the given channel.\nIf the channel is meant to be pulled, this will return an empty collection.",
        "tags": [
            "Channel > Config"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/encodes",
            "operationId": "Streaming/videoConfigAChannel",
            "summary": "Config a channel",
            "categoryPath": [
                "Streaming video",
                "Channel",
                "Config"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 71686
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        71686
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
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
        "operationId": "Streaming/videoListAllEvents",
        "functionName": "streamingVideolistallevents",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/events",
        "summary": "List all events",
        "description": "This endpoint allows you to retrieve all Event.",
        "tags": [
            "Event"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/events",
            "operationId": "Streaming/videoListAllEvents",
            "summary": "List all events",
            "categoryPath": [
                "Streaming video",
                "Event"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79032
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79032
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoCreateAnEvent",
        "functionName": "streamingVideocreateanevent",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/events",
        "summary": "Create an event",
        "description": "This endpoint allows you to create an Event.",
        "tags": [
            "Event"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/events",
            "operationId": "Streaming/videoCreateAnEvent",
            "summary": "Create an event",
            "categoryPath": [
                "Streaming video",
                "Event"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 31808
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        31808
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "Streaming/videoDeleteAnEvent",
        "functionName": "streamingVideodeleteanevent",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}/events/{repeatable_planned_event}",
        "summary": "Delete an event",
        "description": "This endpoint allows you to delete an Event.",
        "tags": [
            "Event"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "repeatable_planned_event",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D/events/%7Brepeatable_planned_event%7D",
            "operationId": "Streaming/videoDeleteAnEvent",
            "summary": "Delete an event",
            "categoryPath": [
                "Streaming video",
                "Event"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 92939
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        92939
                    ]
                },
                {
                    "name": "repeatable_planned_event",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnAnEvent",
        "functionName": "streamingVideoreturnanevent",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/events/{repeatable_planned_event}",
        "summary": "Return an event",
        "description": "This endpoint allows you to retrieve an Event.",
        "tags": [
            "Event"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "repeatable_planned_event",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/events/%7Brepeatable_planned_event%7D",
            "operationId": "Streaming/videoReturnAnEvent",
            "summary": "Return an event",
            "categoryPath": [
                "Streaming video",
                "Event"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 46266
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        46266
                    ]
                },
                {
                    "name": "repeatable_planned_event",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateAnEvent",
        "functionName": "streamingVideoupdateanevent",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/events/{repeatable_planned_event}",
        "summary": "Update an event",
        "description": "This endpoint allows you to update an Event.",
        "tags": [
            "Event"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "repeatable_planned_event",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/events/%7Brepeatable_planned_event%7D",
            "operationId": "Streaming/videoUpdateAnEvent",
            "summary": "Update an event",
            "categoryPath": [
                "Streaming video",
                "Event"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 94146
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        94146
                    ]
                },
                {
                    "name": "repeatable_planned_event",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnListOfConnection",
        "functionName": "streamingVideoreturnlistofconnection",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/history",
        "summary": "Return list of connection",
        "description": "This endpoint allows you to retrieve a list of connection",
        "tags": [
            "Stats > Channel > Connection history"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/history",
            "operationId": "Streaming/videoReturnListOfConnection",
            "summary": "Return list of connection",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Connection history"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 80538
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        80538
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_history_connection_history",
        "functionName": "get1VideosChannelHistoryConnectionHistory",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/history/{connection_history}",
        "summary": "Return a channel",
        "description": "This endpoint allows you to retrieve a channel.",
        "tags": [
            "Stats > Channel > Connection history"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "connection_history",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/history/%7Bconnection_history%7D",
            "operationId": null,
            "summary": "Return a channel",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Connection history"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 29324
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        29324
                    ]
                },
                {
                    "name": "connection_history",
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
        "operationId": "Streaming/videoIntegrationCode",
        "functionName": "streamingVideointegrationcode",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/integrations",
        "summary": "Integration code",
        "description": "This implies manual integration between the broadcast source and the broadcast method.",
        "tags": [
            "Integrations"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/integrations",
            "operationId": "Streaming/videoIntegrationCode",
            "summary": "Integration code",
            "categoryPath": [
                "Streaming video",
                "Integrations"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55017
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55017
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoResumeTheLive",
        "functionName": "streamingVideoresumethelive",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/live/start",
        "summary": "Resume the live",
        "description": "Attempt to resume the live if interrupted or does nothing otherwise.",
        "tags": [
            "Live"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/live/start",
            "operationId": "Streaming/videoResumeTheLive",
            "summary": "Resume the live",
            "categoryPath": [
                "Streaming video",
                "Live"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 44373
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        44373
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
                            "consumption",
                            "default_options",
                            "live",
                            "machines",
                            "options",
                            "options_orders",
                            "real_type",
                            "recording_status",
                            "restriction",
                            "streams",
                            "status",
                            "players",
                            "tags",
                            "rights",
                            "order",
                            "account",
                            "pool",
                            "transcoders"
                        ]
                    },
                    "enumValues": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
                    ],
                    "values": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoInterruptTheLive",
        "functionName": "streamingVideointerruptthelive",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/live/stop",
        "summary": "Interrupt the live",
        "description": "Attempt to interrupt the live if not already interrupted or does nothing otherwise.",
        "tags": [
            "Live"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/live/stop",
            "operationId": "Streaming/videoInterruptTheLive",
            "summary": "Interrupt the live",
            "categoryPath": [
                "Streaming video",
                "Live"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 57564
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        57564
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
                        "example": "restriction",
                        "enum": [
                            "consumption",
                            "default_options",
                            "live",
                            "machines",
                            "options",
                            "options_orders",
                            "real_type",
                            "recording_status",
                            "restriction",
                            "streams",
                            "status",
                            "players",
                            "tags",
                            "rights",
                            "order",
                            "account",
                            "pool",
                            "transcoders"
                        ]
                    },
                    "enumValues": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
                    ],
                    "values": [
                        "consumption",
                        "default_options",
                        "live",
                        "machines",
                        "options",
                        "options_orders",
                        "real_type",
                        "recording_status",
                        "restriction",
                        "streams",
                        "status",
                        "players",
                        "tags",
                        "rights",
                        "order",
                        "account",
                        "pool",
                        "transcoders"
                    ],
                    "examples": [
                        "restriction"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoListOption",
        "functionName": "streamingVideolistoption",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/options",
        "summary": "List option",
        "description": "This endpoint allows you to retrieve to see all option of the  channel.",
        "tags": [
            "Option"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/options",
            "operationId": "Streaming/videoListOption",
            "summary": "List option",
            "categoryPath": [
                "Streaming video",
                "Option"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 38105
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        38105
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnOption",
        "functionName": "streamingVideoreturnoption",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/options/{video_option}",
        "summary": "Return option",
        "description": "This endpoint allows you to retrieve option.",
        "tags": [
            "Option"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "video_option",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/options/%7Bvideo_option%7D",
            "operationId": "Streaming/videoReturnOption",
            "summary": "Return option",
            "categoryPath": [
                "Streaming video",
                "Option"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 6316
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        6316
                    ]
                },
                {
                    "name": "video_option",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUndertakeOption",
        "functionName": "streamingVideoundertakeoption",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/options/{video_option}/recommit",
        "summary": "Undertake option",
        "description": "This WILL NOT restore an option effectively terminated, regardless of whether the option has been\ninstantly terminated or its termination date has been reached.\n\nIf the given option has already been marked for termination for the given channel\nthen this won't do anything.",
        "tags": [
            "Option"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "video_option",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/options/%7Bvideo_option%7D/recommit",
            "operationId": "Streaming/videoUndertakeOption",
            "summary": "Undertake option",
            "categoryPath": [
                "Streaming video",
                "Option"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 538
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        538
                    ]
                },
                {
                    "name": "video_option",
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
        "operationId": "Streaming/videoTerminateOption",
        "functionName": "streamingVideoterminateoption",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}/options/{video_option}/terminate",
        "summary": "Terminate option",
        "description": "This endpoint allows you to retrieve to terminate the option.",
        "tags": [
            "Option"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "video_option",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D/options/%7Bvideo_option%7D/terminate",
            "operationId": "Streaming/videoTerminateOption",
            "summary": "Terminate option",
            "categoryPath": [
                "Streaming video",
                "Option"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 19619
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        19619
                    ]
                },
                {
                    "name": "video_option",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoShowAStorageConfig",
        "functionName": "streamingVideoshowastorageconfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/options/recording",
        "summary": "show a storage config",
        "description": "This endpoint allows you to retrieve to get the recording config.\n\nCreate a channel from the given request for the order identified byt hte given ID.\n\nNOTE: the current user must already have the video product\nadded to his account. Otherwise, this will fail.",
        "tags": [
            "Option > Record"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/options/recording",
            "operationId": "Streaming/videoShowAStorageConfig",
            "summary": "show a storage config",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 64671
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        64671
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoCreateRecordingConfig",
        "functionName": "streamingVideocreaterecordingconfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/options/recording",
        "summary": "Create recording config",
        "description": "This endpoint allows you to retrieve to update a Recording config.",
        "tags": [
            "Option > Record"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/options/recording",
            "operationId": "Streaming/videoCreateRecordingConfig",
            "summary": "Create recording config",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11945
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11945
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateRecordingConfig",
        "functionName": "streamingVideoupdaterecordingconfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/options/recording",
        "summary": "Update recording config",
        "description": "This endpoint allows you to retrieve to update a Recording config.",
        "tags": [
            "Option > Record"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/options/recording",
            "operationId": "Streaming/videoUpdateRecordingConfig",
            "summary": "Update recording config",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 92181
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        92181
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/videoStopARecord",
        "functionName": "streamingVideostoparecord",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}/options/recording/instant",
        "summary": "Stop a record",
        "description": "Try to stop the instant record identified of the channel identified\nby the given channel ID.\nIf no such record exists for the channel or that the recording already stopped,\nthis will throw an error.\n\nNOTES:\n- it is possible to stop a recording even if the option has expired.\n- at the moment a channel may only have one instant record at a time, so this will use the first found",
        "tags": [
            "Option > Record > Instant"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D/options/recording/instant",
            "operationId": "Streaming/videoStopARecord",
            "summary": "Stop a record",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Instant"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51574
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51574
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoStartARecord",
        "functionName": "streamingVideostartarecord",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/options/recording/instant",
        "summary": "Start a record",
        "description": "Try to instantly start a recording of the first stream meant to be recorded,\non the first given storage machine.\n\nNOTE: this process is oversimplified.\nIt assumes that only the best quality stream is meant to be recorded\nand that it will be sent to the first given storage machine only.",
        "tags": [
            "Option > Record > Instant"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/options/recording/instant",
            "operationId": "Streaming/videoStartARecord",
            "summary": "Start a record",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Instant"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48378
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48378
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "Streaming/videoListsAllStorageMachine",
        "functionName": "streamingVideolistsallstoragemachine",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/options/recording/storage",
        "summary": "Lists all storage machine",
        "description": "This endpoint allows you to retrieve all storage machine.",
        "tags": [
            "Option > Record > Storage"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/options/recording/storage",
            "operationId": "Streaming/videoListsAllStorageMachine",
            "summary": "Lists all storage machine",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Storage"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 45704
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        45704
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnAStorageMachine",
        "functionName": "streamingVideoreturnastoragemachine",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/options/recording/storage",
        "summary": "Return a storage machine",
        "description": "This endpoint allows you to create a new storage machine.",
        "tags": [
            "Option > Record > Storage"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/options/recording/storage",
            "operationId": "Streaming/videoReturnAStorageMachine",
            "summary": "Return a storage machine",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Storage"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 73838
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        73838
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "delete_1_videos_channel_options_recording_storage_storage_machine",
        "functionName": "delete1VideosChannelOptionsRecordingStorageStorageMachine",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}/options/recording/storage/{storage_machine}",
        "summary": "Update a storage machine",
        "description": "This endpoint allows you to delete a storage machine.",
        "tags": [
            "Option > Record > Storage"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "storage_machine",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D/options/recording/storage/%7Bstorage_machine%7D",
            "operationId": null,
            "summary": "Update a storage machine",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Storage"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 25142
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        25142
                    ]
                },
                {
                    "name": "storage_machine",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoCreateAStorageMachine",
        "functionName": "streamingVideocreateastoragemachine",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/options/recording/storage/{storage_machine}",
        "summary": "Create a storage machine",
        "description": "This endpoint allows you to retrieve a storage machine.",
        "tags": [
            "Option > Record > Storage"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "storage_machine",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/options/recording/storage/%7Bstorage_machine%7D",
            "operationId": "Streaming/videoCreateAStorageMachine",
            "summary": "Create a storage machine",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Storage"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59389
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59389
                    ]
                },
                {
                    "name": "storage_machine",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "put_1_videos_channel_options_recording_storage_storage_machine",
        "functionName": "put1VideosChannelOptionsRecordingStorageStorageMachine",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/options/recording/storage/{storage_machine}",
        "summary": "Update a storage machine",
        "description": "This endpoint allows you to update a storage machine.",
        "tags": [
            "Option > Record > Storage"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "storage_machine",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/options/recording/storage/%7Bstorage_machine%7D",
            "operationId": null,
            "summary": "Update a storage machine",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Storage"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 83296
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        83296
                    ]
                },
                {
                    "name": "storage_machine",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateAStorageMachine",
        "functionName": "streamingVideoupdateastoragemachine",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/options/recording/storage/test",
        "summary": "Update a storage machine",
        "description": "This method is used to test the connection to an FTP server to verify\nwhether the provided credentials and parameters allow for a successful connection.\nIt also performs a write test by attempting to create a temporary file\non the server to ensure that write permissions are properly configured.",
        "tags": [
            "Option > Record > Storage"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/options/recording/storage/test",
            "operationId": "Streaming/videoUpdateAStorageMachine",
            "summary": "Update a storage machine",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Record",
                "Storage"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 47183
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        47183
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnTimeshiftConfig",
        "functionName": "streamingVideoreturntimeshiftconfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/options/timeshift",
        "summary": "Return timeshift config",
        "description": "This endpoint allows you to retrieve to get a timeshift config.",
        "tags": [
            "Option > Timeshift"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/options/timeshift",
            "operationId": "Streaming/videoReturnTimeshiftConfig",
            "summary": "Return timeshift config",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Timeshift"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 11674
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        11674
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoCreateATimeshiftConfig",
        "functionName": "streamingVideocreateatimeshiftconfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/options/timeshift",
        "summary": "Create a timeshift config.",
        "description": "This endpoint allows you to retrieve to create a timeshift config.",
        "tags": [
            "Option > Timeshift"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/options/timeshift",
            "operationId": "Streaming/videoCreateATimeshiftConfig",
            "summary": "Create a timeshift config",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Timeshift"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 71206
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        71206
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateATimeshiftConfig",
        "functionName": "streamingVideoupdateatimeshiftconfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/options/timeshift",
        "summary": "Update a timeshift config",
        "description": "This endpoint allows you to retrieve to update a timeshift config.",
        "tags": [
            "Option > Timeshift"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/options/timeshift",
            "operationId": "Streaming/videoUpdateATimeshiftConfig",
            "summary": "Update a timeshift config",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Timeshift"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 64063
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        64063
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnWatermark",
        "functionName": "streamingVideoreturnwatermark",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/options/watermark",
        "summary": "Return watermark",
        "description": "This endpoint allows you to retrieve to get the watermark.",
        "tags": [
            "Option > Watermarking"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/options/watermark",
            "operationId": "Streaming/videoReturnWatermark",
            "summary": "Return watermark",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Watermarking"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 65558
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        65558
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
                        "example": "preset",
                        "enum": [
                            "image_base64",
                            "preset"
                        ]
                    },
                    "enumValues": [
                        "image_base64",
                        "preset"
                    ],
                    "values": [
                        "image_base64",
                        "preset"
                    ],
                    "examples": [
                        "preset"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateWatermark",
        "functionName": "streamingVideoupdatewatermark",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/options/watermark",
        "summary": "Update watermark",
        "description": "This endpoint allows you to retrieve to update or create the watermark.",
        "tags": [
            "Option > Watermarking"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/options/watermark",
            "operationId": "Streaming/videoUpdateWatermark",
            "summary": "Update watermark",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Watermarking"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 54305
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        54305
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
                        "example": "image_base64",
                        "enum": [
                            "image_base64",
                            "preset"
                        ]
                    },
                    "enumValues": [
                        "image_base64",
                        "preset"
                    ],
                    "values": [
                        "image_base64",
                        "preset"
                    ],
                    "examples": [
                        "image_base64"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/videoDisableWatermark",
        "functionName": "streamingVideodisablewatermark",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/options/watermark/disable",
        "summary": "Disable watermark",
        "description": "This endpoint allows you to retrieve to enable the watermark.",
        "tags": [
            "Option > Watermarking"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/options/watermark/disable",
            "operationId": "Streaming/videoDisableWatermark",
            "summary": "Disable watermark",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Watermarking"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 55721
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        55721
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
                        "example": "preset",
                        "enum": [
                            "image_base64",
                            "preset"
                        ]
                    },
                    "enumValues": [
                        "image_base64",
                        "preset"
                    ],
                    "values": [
                        "image_base64",
                        "preset"
                    ],
                    "examples": [
                        "preset"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoEnabledWatermark",
        "functionName": "streamingVideoenabledwatermark",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/options/watermark/enable",
        "summary": "Enabled watermark",
        "description": "This endpoint allows you to retrieve to enable the watermark.",
        "tags": [
            "Option > Watermarking"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/options/watermark/enable",
            "operationId": "Streaming/videoEnabledWatermark",
            "summary": "Enabled watermark",
            "categoryPath": [
                "Streaming video",
                "Option",
                "Watermarking"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 82795
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        82795
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
                        "example": "preset",
                        "enum": [
                            "image_base64",
                            "preset"
                        ]
                    },
                    "enumValues": [
                        "image_base64",
                        "preset"
                    ],
                    "values": [
                        "image_base64",
                        "preset"
                    ],
                    "examples": [
                        "preset"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoListsAllPlayers",
        "functionName": "streamingVideolistsallplayers",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/players",
        "summary": "Lists all players",
        "description": "This endpoint allows you to retrieve all players.",
        "tags": [
            "Players"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/players",
            "operationId": "Streaming/videoListsAllPlayers",
            "summary": "Lists all players",
            "categoryPath": [
                "Streaming video",
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 47109
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        47109
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
                        "example": "thumbnail_url",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "thumbnail_url"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
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
                        "example": 46437
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        46437
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
                        "example": 53330
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2,
                        53330
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
                        "example": 48659
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        48659
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
                        "example": 68120
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        68120
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
                            "created_at",
                            "updated_at"
                        ]
                    },
                    "enumValues": [
                        "name",
                        "created_at",
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
        "operationId": "Streaming/videoCreateAPlayer",
        "functionName": "streamingVideocreateaplayer",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/players",
        "summary": "Create a player",
        "description": "This endpoint allows you to create a new player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/players",
            "operationId": "Streaming/videoCreateAPlayer",
            "summary": "Create a player",
            "categoryPath": [
                "Streaming video",
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 33055
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        33055
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
                        "example": "interrupted",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "interrupted"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "Streaming/videoDeleteAPlayer",
        "functionName": "streamingVideodeleteaplayer",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}/players/{player}",
        "summary": "Delete a player",
        "description": "This endpoint allows you to delete a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D/players/%7Bplayer%7D",
            "operationId": "Streaming/videoDeleteAPlayer",
            "summary": "Delete a player",
            "categoryPath": [
                "Streaming video",
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 6470
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        6470
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 82803
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        82803
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
                        "example": "restrictions",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "restrictions"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnAPlayer",
        "functionName": "streamingVideoreturnaplayer",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/players/{player}",
        "summary": "Return a player",
        "description": "This endpoint allows you to retrieve a player.",
        "tags": [
            "Players"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/players/%7Bplayer%7D",
            "operationId": "Streaming/videoReturnAPlayer",
            "summary": "Return a player",
            "categoryPath": [
                "Streaming video",
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 39762
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        39762
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 14922
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        14922
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
                        "example": "integrations",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "integrations"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoCopyAPlayer",
        "functionName": "streamingVideocopyaplayer",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/players/{player}",
        "summary": "Copy a player",
        "description": "This endpoint allows you to copy a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/players/%7Bplayer%7D",
            "operationId": "Streaming/videoCopyAPlayer",
            "summary": "Copy a player",
            "categoryPath": [
                "Streaming video",
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 64966
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        64966
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 21210
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        21210
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
                        "example": "ads",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "ads"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateAPlayer",
        "functionName": "streamingVideoupdateaplayer",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/players/{player}",
        "summary": "Update a player",
        "description": "This endpoint allows you to update a player.",
        "tags": [
            "Players"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/players/%7Bplayer%7D",
            "operationId": "Streaming/videoUpdateAPlayer",
            "summary": "Update a player",
            "categoryPath": [
                "Streaming video",
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 99657
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        99657
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 44136
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        44136
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
                        "example": "integrations",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "integrations"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "422",
                "500"
            ]
        }
    },
    {
        "operationId": "Streaming/videoListAllAds",
        "functionName": "streamingVideolistallads",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/players/{player}/ads",
        "summary": "List all ads",
        "description": "This endpoint allows you to retrieve all Ads.",
        "tags": [
            "Players > Ads"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/ads",
            "operationId": "Streaming/videoListAllAds",
            "summary": "List all ads",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Ads"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98051
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98051
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 40862
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        40862
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
                        "example": "integrations",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "integrations"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoCreateAnAds",
        "functionName": "streamingVideocreateanads",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/players/{player}/ads",
        "summary": "Create an ads",
        "description": "This endpoint allows you to create a new Ads.",
        "tags": [
            "Players > Ads"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/ads",
            "operationId": "Streaming/videoCreateAnAds",
            "summary": "Create an ads",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Ads"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37616
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37616
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48001
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48001
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
                        "example": "interrupted",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "interrupted"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "Streaming/videoDeleteAnAds",
        "functionName": "streamingVideodeleteanads",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}/players/{player}/ads/{ads}",
        "summary": "Delete an ads",
        "description": "This endpoint allows you to create an Ads.",
        "tags": [
            "Players > Ads"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
                "in": "path",
                "required": true
            },
            {
                "name": "ads",
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/ads/%7Bads%7D",
            "operationId": "Streaming/videoDeleteAnAds",
            "summary": "Delete an ads",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Ads"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 31166
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        31166
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59188
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59188
                    ]
                },
                {
                    "name": "ads",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the ads to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 10997
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10997
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
                        "example": "interrupted",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "interrupted"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnAnAds",
        "functionName": "streamingVideoreturnanads",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/players/{player}/ads/{ads}",
        "summary": "Return an ads",
        "description": "This endpoint allows you to retrieve an Ads.",
        "tags": [
            "Players > Ads"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
                "in": "path",
                "required": true
            },
            {
                "name": "ads",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/ads/%7Bads%7D",
            "operationId": "Streaming/videoReturnAnAds",
            "summary": "Return an ads",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Ads"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 29334
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        29334
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 98194
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        98194
                    ]
                },
                {
                    "name": "ads",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the ads to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 567
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        567
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
                        "example": "integrations",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "integrations"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateAnAds",
        "functionName": "streamingVideoupdateanads",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/players/{player}/ads/{ads}",
        "summary": "Update an ads",
        "description": "This endpoint allows you to update an Ads.",
        "tags": [
            "Players > Ads"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
                "in": "path",
                "required": true
            },
            {
                "name": "ads",
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
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/ads/%7Bads%7D",
            "operationId": "Streaming/videoUpdateAnAds",
            "summary": "Update an ads",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Ads"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79330
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79330
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 45297
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        45297
                    ]
                },
                {
                    "name": "ads",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the ads to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 44228
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        44228
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
                        "example": "integrations",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "integrations"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
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
        "operationId": "Streaming/videoCopyAnAds",
        "functionName": "streamingVideocopyanads",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/players/{player}/ads/duplicate",
        "summary": "Copy an ads",
        "description": "This endpoint allows you to copy an Ads.",
        "tags": [
            "Players > Ads"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/ads/duplicate",
            "operationId": "Streaming/videoCopyAnAds",
            "summary": "Copy an ads",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Ads"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 78559
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        78559
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 35045
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        35045
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
                        "example": "restrictions",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "restrictions"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_players_player_embed",
        "functionName": "get1VideosChannelPlayersPlayerEmbed",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/players/{player}/embed",
        "summary": "Integration code",
        "description": "Integrate the player into your site by cutting / pasting the HTML5 code below.",
        "tags": [
            "Players > Embeds"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/embed",
            "operationId": null,
            "summary": "Integration code",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Embeds"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 77437
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        77437
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 34699
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        34699
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
                        "example": "thumbnail_url",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "thumbnail_url"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoIntegrationUrl",
        "functionName": "streamingVideointegrationurl",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/players/{player}/embed/url",
        "summary": "Integration url",
        "description": "Try to retrieve the parameters needed to construct an iframe for the player identified by the given\nplayer ID for the given channel, or for the last updated player of the channel, if any.\nIf the channels hasn't any player and that no player ID is provided,\nit will return parameters for a default player.\n\nIf the channels doesn't exist or that the player isn't linked to the channel,\nor that the channel is badly configured, this will throw an error.",
        "tags": [
            "Players > Embeds"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/embed/url",
            "operationId": "Streaming/videoIntegrationUrl",
            "summary": "Integration url",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Embeds"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51210
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51210
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 69161
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        69161
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
                        "example": "countdown_stops_at",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "countdown_stops_at"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_players_player_thumbnail_thumbnail",
        "functionName": "get1VideosChannelPlayersPlayerThumbnailThumbnail",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/players/{player}/thumbnail/{thumbnail}",
        "summary": "Show picture",
        "description": "This endpoint allows you to retrieve a Vignette for the player.",
        "tags": [
            "Players > Pictures"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "player",
                "in": "path",
                "required": true
            },
            {
                "name": "thumbnail",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/players/%7Bplayer%7D/thumbnail/%7Bthumbnail%7D",
            "operationId": null,
            "summary": "Show picture",
            "categoryPath": [
                "Streaming video",
                "Players",
                "Pictures"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 48798
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        48798
                    ]
                },
                {
                    "name": "player",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the player to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 25924
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        25924
                    ]
                },
                {
                    "name": "thumbnail",
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
                        "example": "ads",
                        "enum": [
                            "channel",
                            "interrupted",
                            "channel.pool",
                            "integrations",
                            "countdown_stops_at",
                            "thumbnail_url",
                            "restrictions",
                            "ads"
                        ]
                    },
                    "enumValues": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "values": [
                        "channel",
                        "interrupted",
                        "channel.pool",
                        "integrations",
                        "countdown_stops_at",
                        "thumbnail_url",
                        "restrictions",
                        "ads"
                    ],
                    "examples": [
                        "ads"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoShowRestriction",
        "functionName": "streamingVideoshowrestriction",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/restrictions",
        "summary": "show restriction",
        "description": "This endpoint allows you to retrieve the restriction for the channels.",
        "tags": [
            "Restrictions"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/restrictions",
            "operationId": "Streaming/videoShowRestriction",
            "summary": "show restriction",
            "categoryPath": [
                "Streaming video",
                "Restrictions"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 35386
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        35386
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateChannels",
        "functionName": "streamingVideoupdatechannels",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/restrictions",
        "summary": "update channels",
        "description": "This endpoint allows you to update a restriction channel.",
        "tags": [
            "Restrictions"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/restrictions",
            "operationId": "Streaming/videoUpdateChannels",
            "summary": "update channels",
            "categoryPath": [
                "Streaming video",
                "Restrictions"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 39992
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        39992
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoRetrievesTheGeographicalRestrictionsApplicableToAChannelOverAGivenPeriod",
        "functionName": "streamingVideoretrievesthegeographicalrestrictionsapplicabletoachanneloveragivenperiod",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/restrictions/geographical",
        "summary": "Retrieves the geographical restrictions applicable to a channel over a given period.",
        "description": "This method:\n- Sets a default period of 30 days back if no 'start' parameter is provided.\n- Sets the end date to \"now\" if no 'end' parameter is provided.\n- Query the service to obtain the corresponding geographical restrictions.\n- Returns restrictions in the form of an indexed table via a dedicated Resource.",
        "tags": [
            "Restrictions"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/restrictions/geographical",
            "operationId": "Streaming/videoRetrievesTheGeographicalRestrictionsApplicableToAChannelOverAGivenPeriod",
            "summary": "Retrieves the geographical restrictions applicable to a channel over a given period",
            "categoryPath": [
                "Streaming video",
                "Restrictions"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 64216
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        64216
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "from",
                        "type": "integer",
                        "description": "Specify the starting date to get Consumption",
                        "nullable": true,
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to",
                        "type": "integer",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateRestrictionPassword",
        "functionName": "streamingVideoupdaterestrictionpassword",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/restrictions/password",
        "summary": "update restriction password",
        "description": "This endpoint allows you to update a restriction password channel.",
        "tags": [
            "Restrictions"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/restrictions/password",
            "operationId": "Streaming/videoUpdateRestrictionPassword",
            "summary": "update restriction password",
            "categoryPath": [
                "Streaming video",
                "Restrictions"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 68842
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        68842
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoListsAllSimulcastConfig",
        "functionName": "streamingVideolistsallsimulcastconfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/simulcasts",
        "summary": "Lists all simulcast config",
        "description": "This endpoint allows you to retrieve to get the simulcast.",
        "tags": [
            "Option > simulcast"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/simulcasts",
            "operationId": "Streaming/videoListsAllSimulcastConfig",
            "summary": "Lists all simulcast config",
            "categoryPath": [
                "Streaming video",
                "Option",
                "simulcast"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 72670
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        72670
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnSimulcast",
        "functionName": "streamingVideoreturnsimulcast",
        "originalOperationId": null,
        "domain": "video",
        "method": "POST",
        "path": "/1/videos/{channel}/simulcasts/{simulcast_platform}",
        "summary": "Return simulcast",
        "description": "This endpoint allows you to retrieve to create the simulcast.",
        "tags": [
            "Option > simulcast"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_platform",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/videos/%7Bchannel%7D/simulcasts/%7Bsimulcast_platform%7D",
            "operationId": "Streaming/videoReturnSimulcast",
            "summary": "Return simulcast",
            "categoryPath": [
                "Streaming video",
                "Option",
                "simulcast"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 27688
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        27688
                    ]
                },
                {
                    "name": "simulcast_platform",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "201"
            ]
        }
    },
    {
        "operationId": "delete_1_videos_channel_simulcasts_simulcast_platform_simulcast_config",
        "functionName": "delete1VideosChannelSimulcastsSimulcastPlatformSimulcastConfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "DELETE",
        "path": "/1/videos/{channel}/simulcasts/{simulcast_platform}/{simulcast_config}",
        "summary": "Delete a player",
        "description": "This endpoint allows you to retrieve to delete the player.",
        "tags": [
            "Option > simulcast"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_platform",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_config",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/delete/1/videos/%7Bchannel%7D/simulcasts/%7Bsimulcast_platform%7D/%7Bsimulcast_config%7D",
            "operationId": null,
            "summary": "Delete a player",
            "categoryPath": [
                "Streaming video",
                "Option",
                "simulcast"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37456
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37456
                    ]
                },
                {
                    "name": "simulcast_platform",
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
                    "name": "simulcast_config",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_simulcasts_simulcast_platform_simulcast_config",
        "functionName": "get1VideosChannelSimulcastsSimulcastPlatformSimulcastConfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/simulcasts/{simulcast_platform}/{simulcast_config}",
        "summary": "Return simulcast",
        "description": "This endpoint allows you to retrieve to get the simulcast.",
        "tags": [
            "Option > simulcast"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_platform",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_config",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/simulcasts/%7Bsimulcast_platform%7D/%7Bsimulcast_config%7D",
            "operationId": null,
            "summary": "Return simulcast",
            "categoryPath": [
                "Streaming video",
                "Option",
                "simulcast"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 95594
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        95594
                    ]
                },
                {
                    "name": "simulcast_platform",
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
                    "name": "simulcast_config",
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
        "operationId": "put_1_videos_channel_simulcasts_simulcast_platform_simulcast_config",
        "functionName": "put1VideosChannelSimulcastsSimulcastPlatformSimulcastConfig",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/simulcasts/{simulcast_platform}/{simulcast_config}",
        "summary": "Return simulcast",
        "description": "This endpoint allows you to retrieve to update the simulcast.",
        "tags": [
            "Option > simulcast"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_platform",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_config",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/simulcasts/%7Bsimulcast_platform%7D/%7Bsimulcast_config%7D",
            "operationId": null,
            "summary": "Return simulcast",
            "categoryPath": [
                "Streaming video",
                "Option",
                "simulcast"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 51620
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        51620
                    ]
                },
                {
                    "name": "simulcast_platform",
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
                    "name": "simulcast_config",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "put_1_videos_channel_simulcasts_simulcast_platform_simulcast_config_disable",
        "functionName": "put1VideosChannelSimulcastsSimulcastPlatformSimulcastConfigDisable",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/simulcasts/{simulcast_platform}/{simulcast_config}/disable",
        "summary": "Disable simulcast",
        "description": "This endpoint allows you to retrieve to disable the simulcast.",
        "tags": [
            "Option > simulcast"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_platform",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_config",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/simulcasts/%7Bsimulcast_platform%7D/%7Bsimulcast_config%7D/disable",
            "operationId": null,
            "summary": "Disable simulcast",
            "categoryPath": [
                "Streaming video",
                "Option",
                "simulcast"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 79914
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        79914
                    ]
                },
                {
                    "name": "simulcast_platform",
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
                    "name": "simulcast_config",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoDisableSimulcast",
        "functionName": "streamingVideodisablesimulcast",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/{channel}/simulcasts/{simulcast_platform}/{simulcast_config}/enable",
        "summary": "Disable simulcast",
        "description": "This endpoint allows you to retrieve to enable the simulcast.",
        "tags": [
            "Option > simulcast"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_platform",
                "in": "path",
                "required": true
            },
            {
                "name": "simulcast_config",
                "in": "path",
                "required": true
            }
        ],
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/%7Bchannel%7D/simulcasts/%7Bsimulcast_platform%7D/%7Bsimulcast_config%7D/enable",
            "operationId": "Streaming/videoDisableSimulcast",
            "summary": "Disable simulcast",
            "categoryPath": [
                "Streaming video",
                "Option",
                "simulcast"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 3458
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        3458
                    ]
                },
                {
                    "name": "simulcast_platform",
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
                    "name": "simulcast_config",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_stats_consumption",
        "functionName": "get1VideosChannelStatsConsumption",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/consumption",
        "summary": "Consumption",
        "description": "This endpoint allows you to retrieve channel consumption stats.",
        "tags": [
            "Stats > Channel > Consumption"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/consumption",
            "operationId": null,
            "summary": "Consumption",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Consumption"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 2562
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        2562
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoConsumptionPerResolution",
        "functionName": "streamingVideoconsumptionperresolution",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/consumption/resolutions/histogram",
        "summary": "Consumption Per resolution",
        "description": "This endpoint allows you to retrieve consumption Per resolution histogram.",
        "tags": [
            "Stats > Channel > Consumption"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/consumption/resolutions/histogram",
            "operationId": "Streaming/videoConsumptionPerResolution",
            "summary": "Consumption Per resolution",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Consumption"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 66877
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        66877
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnTextcsv",
        "functionName": "streamingVideoreturntextcsv",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/export_csv/{statistics}",
        "summary": "Return text/csv",
        "description": "This endpoint allows you to export stream stats.",
        "tags": [
            "Stats > Channel > Export stats"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
                "in": "path",
                "required": true
            },
            {
                "name": "statistics",
                "in": "path",
                "required": true
            }
        ],
        "queryParameters": [
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "per",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/export_csv/%7Bstatistics%7D",
            "operationId": "Streaming/videoReturnTextcsv",
            "summary": "Return text/csv",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Export stats"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 87761
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        87761
                    ]
                },
                {
                    "name": "statistics",
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "from",
                        "type": "integer",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to",
                        "type": "integer",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_stats_geolocation_clusters",
        "functionName": "get1VideosChannelStatsGeolocationClusters",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/geolocation/clusters",
        "summary": "Clusters",
        "description": "This endpoint allows you to retrieve get clusters.",
        "tags": [
            "Stats > Channel > Geolocation"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/geolocation/clusters",
            "operationId": null,
            "summary": "Clusters",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Geolocation"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 15329
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        15329
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_stats_geolocation_countries",
        "functionName": "get1VideosChannelStatsGeolocationCountries",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/geolocation/countries",
        "summary": "Countries",
        "description": "This endpoint allows you to retrieve get countries.",
        "tags": [
            "Stats > Channel > Geolocation"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/geolocation/countries",
            "operationId": null,
            "summary": "Countries",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Geolocation"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 21816
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        21816
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoBrowsersShare",
        "functionName": "streamingVideobrowsersshare",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/technologies/browsers/shares",
        "summary": "Browsers share",
        "description": "This endpoint allows you to retrieve get browsers share.",
        "tags": [
            "Stats > Channel > Technologies"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/technologies/browsers/shares",
            "operationId": "Streaming/videoBrowsersShare",
            "summary": "Browsers share",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Technologies"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 52137
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        52137
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoOSShare",
        "functionName": "streamingVideoosshare",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/technologies/os/shares",
        "summary": "OS share",
        "description": "This endpoint allows you to retrieve get OS share.",
        "tags": [
            "Stats > Channel > Technologies"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/technologies/os/shares",
            "operationId": "Streaming/videoOSShare",
            "summary": "OS share",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Technologies"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 13477
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        13477
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoPlayerShare",
        "functionName": "streamingVideoplayershare",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/technologies/players/shares",
        "summary": "Player share",
        "description": "This endpoint allows you to retrieve get player share.",
        "tags": [
            "Stats > Channel > Technologies"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/technologies/players/shares",
            "operationId": "Streaming/videoPlayerShare",
            "summary": "Player share",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Technologies"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37687
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37687
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewersShare",
        "functionName": "streamingVideoviewersshare",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/viewers",
        "summary": "Viewers share",
        "description": "This endpoint allows you to retrieve get viewers share.",
        "tags": [
            "Stats > Channel > Viewers"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/viewers",
            "operationId": "Streaming/videoViewersShare",
            "summary": "Viewers share",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Viewers"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 59295
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        59295
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewersHistogramShare",
        "functionName": "streamingVideoviewershistogramshare",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/viewers/histogram",
        "summary": "Viewers Histogram share",
        "description": "This endpoint allows you to retrieve get viewers Histogram share.",
        "tags": [
            "Stats > Channel > Viewers"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/viewers/histogram",
            "operationId": "Streaming/videoViewersHistogramShare",
            "summary": "Viewers Histogram share",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Viewers"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 1209
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        1209
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewersPerResolutionHistogram",
        "functionName": "streamingVideoviewersperresolutionhistogram",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/viewers/resolutions/histogram",
        "summary": "Viewers per resolution histogram.",
        "description": "This endpoint allows you to retrieve get viewers per resolution histogram.",
        "tags": [
            "Stats > Channel > Viewers"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/viewers/resolutions/histogram",
            "operationId": "Streaming/videoViewersPerResolutionHistogram",
            "summary": "Viewers per resolution histogram",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Viewers"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 31427
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        31427
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewersPerResolutionShare",
        "functionName": "streamingVideoviewersperresolutionshare",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/viewers/resolutions/shares",
        "summary": "Viewers per resolution share.",
        "description": "This endpoint allows you to retrieve get viewers per resolution share.",
        "tags": [
            "Stats > Channel > Viewers"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/viewers/resolutions/shares",
            "operationId": "Streaming/videoViewersPerResolutionShare",
            "summary": "Viewers per resolution share",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Viewers"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 84644
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        84644
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_stats_viewers_uniques",
        "functionName": "get1VideosChannelStatsViewersUniques",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/viewers/uniques",
        "summary": "Unique viewers.",
        "description": "This endpoint allows you to retrieve get unique viewers.",
        "tags": [
            "Stats > Channel > Viewers"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/viewers/uniques",
            "operationId": null,
            "summary": "Unique viewers",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Viewers"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 70226
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        70226
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_stats_viewing",
        "functionName": "get1VideosChannelStatsViewing",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/viewing",
        "summary": "Viewing time",
        "description": "This endpoint allows you to retrieve Global Viewing histogram per channel.",
        "tags": [
            "Stats > Channel > Viewing"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/viewing",
            "operationId": null,
            "summary": "Viewing time",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Viewing"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 14058
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        14058
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "get_1_videos_channel_stats_viewing_resolutions_histogram",
        "functionName": "get1VideosChannelStatsViewingResolutionsHistogram",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/stats/viewing/resolutions/histogram",
        "summary": "Viewing histogram par channel",
        "description": "This endpoint allows you to retrieve Global Viewing histogram per channel.",
        "tags": [
            "Stats > Channel > Viewing"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/stats/viewing/resolutions/histogram",
            "operationId": null,
            "summary": "Viewing histogram par channel",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Channel",
                "Viewing"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the Pack order to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 37488
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        37488
                    ]
                },
                {
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoShowPicture",
        "functionName": "streamingVideoshowpicture",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/{channel}/thumbnail",
        "summary": "Show picture",
        "description": "This endpoint allows you to retrieve a Thumbnail in live on the steaming video.",
        "tags": [
            "Thumbnail"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "channel",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/%7Bchannel%7D/thumbnail",
            "operationId": "Streaming/videoShowPicture",
            "summary": "Show picture",
            "categoryPath": [
                "Streaming video",
                "Thumbnail"
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
                    "name": "channel",
                    "in": "path",
                    "required": true,
                    "description": "The unique identifier (ID) of the channel to request.",
                    "style": "simple",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "type": "integer",
                        "example": 76439
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        76439
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoListCountries",
        "functionName": "streamingVideolistcountries",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/countries",
        "summary": "List countries",
        "description": "List all the countries available for anything as Code => Name.",
        "tags": [
            "Misc > Countries"
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/countries",
            "operationId": "Streaming/videoListCountries",
            "summary": "List countries",
            "categoryPath": [
                "Streaming video",
                "Misc",
                "Countries"
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
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming_videoReturnsAPackOrder_get_1_videos_order",
        "functionName": "streamingVideoreturnsapackorderGet1VideosOrder",
        "originalOperationId": "Streaming/videoReturnsAPackOrder",
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/order",
        "summary": "Returns a pack order",
        "description": "Retrieve all info about the pack currently used by the account from\nwhich the request was made. This includes pricing and excess data.\nIf the account has no active offer, this will throw an error.",
        "tags": [
            "order"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "order",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/order",
            "operationId": "Streaming/videoReturnsAPackOrder",
            "summary": "Returns a pack order",
            "categoryPath": [
                "Streaming video",
                "order"
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
                    "name": "order",
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
                        "example": "channel.options",
                        "enum": [
                            "account",
                            "channel",
                            "channel.options",
                            "channel.options_orders",
                            "consumption",
                            "pack",
                            "vod",
                            "right",
                            "prices"
                        ]
                    },
                    "enumValues": [
                        "account",
                        "channel",
                        "channel.options",
                        "channel.options_orders",
                        "consumption",
                        "pack",
                        "vod",
                        "right",
                        "prices"
                    ],
                    "values": [
                        "account",
                        "channel",
                        "channel.options",
                        "channel.options_orders",
                        "consumption",
                        "pack",
                        "vod",
                        "right",
                        "prices"
                    ],
                    "examples": [
                        "channel.options"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUpdateAPack",
        "functionName": "streamingVideoupdateapack",
        "originalOperationId": null,
        "domain": "video",
        "method": "PUT",
        "path": "/1/videos/order",
        "summary": "Update a pack",
        "description": "This endpoint allows you to update a Pack order.",
        "tags": [
            "order"
        ],
        "mutating": true,
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/videos/order",
            "operationId": "Streaming/videoUpdateAPack",
            "summary": "Update a pack",
            "categoryPath": [
                "Streaming video",
                "order"
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "vod",
                        "enum": [
                            "account",
                            "channel",
                            "channel.options",
                            "channel.options_orders",
                            "consumption",
                            "pack",
                            "vod",
                            "right",
                            "prices"
                        ]
                    },
                    "enumValues": [
                        "account",
                        "channel",
                        "channel.options",
                        "channel.options_orders",
                        "consumption",
                        "pack",
                        "vod",
                        "right",
                        "prices"
                    ],
                    "values": [
                        "account",
                        "channel",
                        "channel.options",
                        "channel.options_orders",
                        "consumption",
                        "pack",
                        "vod",
                        "right",
                        "prices"
                    ],
                    "examples": [
                        "vod"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoReturnsAPackOrder",
        "functionName": "streamingVideoreturnsapackorder",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/order/{order}",
        "summary": "Returns a pack order",
        "description": "Retrieve all info about the pack currently used by the account from\nwhich the request was made. This includes pricing and excess data.\nIf the account has no active offer, this will throw an error.",
        "tags": [
            "order"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "order",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/order/%7Border%7D",
            "operationId": "Streaming/videoReturnsAPackOrder",
            "summary": "Returns a pack order",
            "categoryPath": [
                "Streaming video",
                "order"
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
                    "name": "order",
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
                        "example": "channel",
                        "enum": [
                            "account",
                            "channel",
                            "channel.options",
                            "channel.options_orders",
                            "consumption",
                            "pack",
                            "vod",
                            "right",
                            "prices"
                        ]
                    },
                    "enumValues": [
                        "account",
                        "channel",
                        "channel.options",
                        "channel.options_orders",
                        "consumption",
                        "pack",
                        "vod",
                        "right",
                        "prices"
                    ],
                    "values": [
                        "account",
                        "channel",
                        "channel.options",
                        "channel.options_orders",
                        "consumption",
                        "pack",
                        "vod",
                        "right",
                        "prices"
                    ],
                    "examples": [
                        "channel"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoGenerateStreamKey",
        "functionName": "streamingVideogeneratestreamkey",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/password",
        "summary": "Generate stream key",
        "description": "Generate a random password string in base 52 (0-9a-zA-Z minus aeiouAEIOU).\nThe first 5 vowels have been removed to avoid bad luck passwords\n(1fUcky0u for example).",
        "tags": [
            "Misc > stream"
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/password",
            "operationId": "Streaming/videoGenerateStreamKey",
            "summary": "Generate stream key",
            "categoryPath": [
                "Streaming video",
                "Misc",
                "stream"
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
        "operationId": "Streaming/videoGetDescription",
        "functionName": "streamingVideogetdescription",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/shop/descriptions",
        "summary": "Get description",
        "description": "This endpoint allows you to retrieve get the description on the pack order.",
        "tags": [
            "Prices"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/shop/descriptions",
            "operationId": "Streaming/videoGetDescription",
            "summary": "Get description",
            "categoryPath": [
                "Streaming video",
                "Prices"
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
        "operationId": "Streaming/videoGetPrice",
        "functionName": "streamingVideogetprice",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/shop/prices",
        "summary": "Get price",
        "description": "This endpoint allows you to retrieve get the price on the pack order.",
        "tags": [
            "Prices"
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/shop/prices",
            "operationId": "Streaming/videoGetPrice",
            "summary": "Get price",
            "categoryPath": [
                "Streaming video",
                "Prices"
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
        "operationId": "Streaming/videoConsumption",
        "functionName": "streamingVideoconsumption",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/consumption",
        "summary": "Consumption",
        "description": "This endpoint allows you to retrieve Global consumption all channel on the pack order.",
        "tags": [
            "Stats > Globals > Consumption"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "per",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/consumption",
            "operationId": "Streaming/videoConsumption",
            "summary": "Consumption",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Consumption"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to",
                        "type": "integer",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoConsumptionPerChannelHistogram",
        "functionName": "streamingVideoconsumptionperchannelhistogram",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/consumption/channels/histogram",
        "summary": "Consumption per Channel histogram",
        "description": "This endpoint allows you to retrieve Global Histogram per channel on the pack order.",
        "tags": [
            "Stats > Globals > Consumption"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "per",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/consumption/channels/histogram",
            "operationId": "Streaming/videoConsumptionPerChannelHistogram",
            "summary": "Consumption per Channel histogram",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Consumption"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to",
                        "type": "integer",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoClusters",
        "functionName": "streamingVideoclusters",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/geolocation/clusters",
        "summary": "Clusters",
        "description": "This endpoint allows you to retrieve Global unique viewers on the pack order.",
        "tags": [
            "Stats > Globals > Geolocation"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "per",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/geolocation/clusters",
            "operationId": "Streaming/videoClusters",
            "summary": "Clusters",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Geolocation"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to",
                        "type": "integer",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoCountries",
        "functionName": "streamingVideocountries",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/geolocation/countries",
        "summary": "Countries",
        "description": "This endpoint allows you to retrieve Global all countries on the pack order.",
        "tags": [
            "Stats > Globals > Geolocation"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "per",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/geolocation/countries",
            "operationId": "Streaming/videoCountries",
            "summary": "Countries",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Geolocation"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to",
                        "type": "integer",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewers",
        "functionName": "streamingVideoviewers",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/viewers",
        "summary": "Viewers",
        "description": "This endpoint allows you to retrieve Global viewers on the pack order.",
        "tags": [
            "Stats > Globals > Viewers"
        ],
        "mutating": false,
        "pathParameters": [],
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/viewers",
            "operationId": "Streaming/videoViewers",
            "summary": "Viewers",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Viewers"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewersPerChannelHistogram",
        "functionName": "streamingVideoviewersperchannelhistogram",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/viewers/channels/histogram",
        "summary": "Viewers per channel histogram",
        "description": "This endpoint allows you to retrieve Global viewers histogram per channel.",
        "tags": [
            "Stats > Globals > Viewers"
        ],
        "mutating": false,
        "pathParameters": [],
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/viewers/channels/histogram",
            "operationId": "Streaming/videoViewersPerChannelHistogram",
            "summary": "Viewers per channel histogram",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Viewers"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewersPerChannelShare",
        "functionName": "streamingVideoviewersperchannelshare",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/viewers/channels/shares",
        "summary": "Viewers per channel share",
        "description": "This endpoint allows you to retrieve Global viewers histogram share per channel.",
        "tags": [
            "Stats > Globals > Viewers"
        ],
        "mutating": false,
        "pathParameters": [],
        "queryParameters": [
            {
                "name": "from",
                "in": "query",
                "required": true
            },
            {
                "name": "account_id",
                "in": "query",
                "required": true
            },
            {
                "name": "per",
                "in": "query",
                "required": false
            },
            {
                "name": "to",
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/viewers/channels/shares",
            "operationId": "Streaming/videoViewersPerChannelShare",
            "summary": "Viewers per channel share",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Viewers"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "integer",
                    "schema": {
                        "title": "to",
                        "type": "integer",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewersHistogram",
        "functionName": "streamingVideoviewershistogram",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/viewers/histogram",
        "summary": "Viewers Histogram",
        "description": "This endpoint allows you to retrieve Global unique viewers histogram on the pack order.",
        "tags": [
            "Stats > Globals > Viewers"
        ],
        "mutating": false,
        "pathParameters": [],
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/viewers/histogram",
            "operationId": "Streaming/videoViewersHistogram",
            "summary": "Viewers Histogram",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Viewers"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoUniqueViewers",
        "functionName": "streamingVideouniqueviewers",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/viewers/uniques",
        "summary": "Unique Viewers",
        "description": "This endpoint allows you to retrieve Global unique viewers on the pack order.",
        "tags": [
            "Stats > Globals > Viewers"
        ],
        "mutating": false,
        "pathParameters": [],
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/viewers/uniques",
            "operationId": "Streaming/videoUniqueViewers",
            "summary": "Unique Viewers",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Viewers"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewingTime",
        "functionName": "streamingVideoviewingtime",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/viewing",
        "summary": "Viewing time",
        "description": "This endpoint allows you to retrieve Global Viewing histogram per channel.",
        "tags": [
            "Stats > Globals > Viewing"
        ],
        "mutating": false,
        "pathParameters": [],
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/viewing",
            "operationId": "Streaming/videoViewingTime",
            "summary": "Viewing time",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Viewing"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoViewingHistogramParChannel",
        "functionName": "streamingVideoviewinghistogramparchannel",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/stats/viewing/channels/histogram",
        "summary": "Viewing histogram par channel",
        "description": "This endpoint allows you to retrieve Global Viewing histogram per channel.",
        "tags": [
            "Stats > Globals > Viewing"
        ],
        "mutating": false,
        "pathParameters": [],
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
                "name": "per",
                "in": "query",
                "required": true
            },
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
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/stats/viewing/channels/histogram",
            "operationId": "Streaming/videoViewingHistogramParChannel",
            "summary": "Viewing histogram par channel",
            "categoryPath": [
                "Streaming video",
                "Stats",
                "Globals",
                "Viewing"
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
                    "name": "from",
                    "in": "query",
                    "required": true,
                    "description": "Specify the starting date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "from",
                        "type": "string",
                        "description": "Specify the starting date to get Consumption",
                        "example": "1640995200"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1640995200"
                    ]
                },
                {
                    "name": "to",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "to",
                        "type": "string",
                        "description": "Specify the ending date to get Consumption",
                        "nullable": true,
                        "example": "1672444800"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "1672444800"
                    ]
                },
                {
                    "name": "per",
                    "in": "query",
                    "required": true,
                    "description": "Specify the ending date to get Consumption",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "per",
                        "enum": [
                            "day",
                            "hour",
                            "minute",
                            "month",
                            "quarter",
                            "week",
                            "year"
                        ],
                        "type": "string",
                        "description": "Specify",
                        "example": "\"toto\""
                    },
                    "enumValues": [
                        "day",
                        "hour",
                        "minute",
                        "month",
                        "quarter",
                        "week",
                        "year"
                    ],
                    "values": [],
                    "examples": [
                        "\"toto\""
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
                        "description": "Account identifier",
                        "example": "42000"
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        "42000"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "Streaming/videoListTimezones",
        "functionName": "streamingVideolisttimezones",
        "originalOperationId": null,
        "domain": "video",
        "method": "GET",
        "path": "/1/videos/timezones",
        "summary": "List timezones",
        "description": "List all the timezones available for  \"America/Asuncion\": \"(GMT-03:00) Asuncion\",.",
        "tags": [
            "Misc > Countries"
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/videos/timezones",
            "operationId": "Streaming/videoListTimezones",
            "summary": "List timezones",
            "categoryPath": [
                "Streaming video",
                "Misc",
                "Countries"
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
                "200"
            ]
        }
    }
];
//# sourceMappingURL=video.js.map