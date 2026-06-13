export const urlShortenerOperations = [
    {
        "operationId": "get_1_url_shortener",
        "functionName": "get1UrlShortener",
        "originalOperationId": null,
        "domain": "urlShortener",
        "method": "GET",
        "path": "/1/url-shortener",
        "summary": "List short urls",
        "description": "This endpoint allows you to fetch your short urls.\n",
        "tags": [
            "Short url"
        ],
        "mutating": false,
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
        "deprecated": true,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/url-shortener",
            "operationId": null,
            "summary": "List short urls",
            "categoryPath": [
                "Url shortener",
                "Short url"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": false,
            "sortable": false,
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
        "operationId": "post_1_url_shortener",
        "functionName": "post1UrlShortener",
        "originalOperationId": null,
        "domain": "urlShortener",
        "method": "POST",
        "path": "/1/url-shortener",
        "summary": "Create a short url",
        "description": "This endpoint allows you to create a short url.\n",
        "tags": [
            "Short url"
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
            "url": "https://developer.infomaniak.com/docs/api/post/1/url-shortener",
            "operationId": null,
            "summary": "Create a short url",
            "categoryPath": [
                "Url shortener",
                "Short url"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": false,
            "sortable": false,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "422"
            ]
        }
    },
    {
        "operationId": "put_1_url_shortener_short_url_code",
        "functionName": "put1UrlShortenerShortUrlCode",
        "originalOperationId": null,
        "domain": "urlShortener",
        "method": "PUT",
        "path": "/1/url-shortener/{short_url_code}",
        "summary": "Update a short url",
        "description": "This endpoint allows you to update a short url expiration date.\n",
        "tags": [
            "Short url"
        ],
        "mutating": true,
        "pathParameters": [
            {
                "name": "short_url_code",
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
            "url": "https://developer.infomaniak.com/docs/api/put/1/url-shortener/%7Bshort_url_code%7D",
            "operationId": null,
            "summary": "Update a short url",
            "categoryPath": [
                "Url shortener",
                "Short url"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": false,
            "sortable": false,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [
                {
                    "name": "short_url_code",
                    "in": "path",
                    "required": true,
                    "description": "Short url code",
                    "style": null,
                    "explode": null,
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
        "operationId": "get_1_url_shortener_quota",
        "functionName": "get1UrlShortenerQuota",
        "originalOperationId": null,
        "domain": "urlShortener",
        "method": "GET",
        "path": "/1/url-shortener/quota",
        "summary": "Get short url quota",
        "description": "This endpoint allows you to fetch your short url quota.\n",
        "tags": [
            "Short url"
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
        "deprecated": true,
        "auth": [
            "bearerAuth"
        ],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/1/url-shortener/quota",
            "operationId": null,
            "summary": "Get short url quota",
            "categoryPath": [
                "Url shortener",
                "Short url"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": false,
            "sortable": false,
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
        "operationId": "get_2_url_shortener",
        "functionName": "get2UrlShortener",
        "originalOperationId": null,
        "domain": "urlShortener",
        "method": "GET",
        "path": "/2/url-shortener",
        "summary": "List short urls",
        "description": "This endpoint allows you to fetch your short urls.\n",
        "tags": [
            "Short url"
        ],
        "mutating": false,
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/url-shortener",
            "operationId": null,
            "summary": "List short urls",
            "categoryPath": [
                "Url shortener",
                "Short url"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": false,
            "sortable": false,
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
        "operationId": "post_2_url_shortener",
        "functionName": "post2UrlShortener",
        "originalOperationId": null,
        "domain": "urlShortener",
        "method": "POST",
        "path": "/2/url-shortener",
        "summary": "Create a short url",
        "description": "This endpoint allows you to create a short url.\n",
        "tags": [
            "Short url"
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
            "url": "https://developer.infomaniak.com/docs/api/post/2/url-shortener",
            "operationId": null,
            "summary": "Create a short url",
            "categoryPath": [
                "Url shortener",
                "Short url"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": false,
            "sortable": false,
            "authUser": true,
            "version": 1,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200",
                "422"
            ]
        }
    },
    {
        "operationId": "get_2_url_shortener_quota",
        "functionName": "get2UrlShortenerQuota",
        "originalOperationId": null,
        "domain": "urlShortener",
        "method": "GET",
        "path": "/2/url-shortener/quota",
        "summary": "Get short url quota",
        "description": "This endpoint allows you to fetch your short url quota.\n",
        "tags": [
            "Short url"
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/url-shortener/quota",
            "operationId": null,
            "summary": "Get short url quota",
            "categoryPath": [
                "Url shortener",
                "Short url"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": false,
            "sortable": false,
            "authUser": true,
            "version": 2,
            "capabilities": [],
            "parameters": [],
            "responseStatuses": [
                "200"
            ]
        }
    }
];
//# sourceMappingURL=urlShortener.js.map