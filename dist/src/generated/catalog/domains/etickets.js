export const eticketsOperations = [
    {
        "operationId": "EticketsListAddressesV2",
        "functionName": "eticketslistaddressesv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/address",
        "summary": "List Addresses",
        "description": "This endpoint allows you to retrieve all address of a group",
        "tags": [
            "Address"
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
                "name": "filters",
                "in": "query",
                "required": false
            },
            {
                "name": "order_for",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/address",
            "operationId": "EticketsListAddressesV2",
            "summary": "List Addresses",
            "categoryPath": [
                "Etickets",
                "Address"
            ],
            "staff": false,
            "beta": false,
            "publicCloud": false,
            "paginable": null,
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
                    "name": "with",
                    "in": "query",
                    "required": false,
                    "description": "*Optional* : Allows loading additional data about a resource, which may include related resources.",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "type": "string",
                        "example": "",
                        "enum": [
                            ""
                        ]
                    },
                    "enumValues": [
                        ""
                    ],
                    "values": [
                        ""
                    ],
                    "examples": [
                        ""
                    ]
                },
                {
                    "name": "filters",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "filters",
                        "type": "object",
                        "properties": {
                            "date_ids": {
                                "title": "date_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "event_ids": {
                                "title": "event_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "ids": {
                                "title": "ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "period_ids": {
                                "title": "period_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "search": {
                                "title": "search",
                                "pattern": "^[\\p{L}\\p{N}\\p{P}\\p{Zs}]{1,255}$",
                                "type": "string",
                                "nullable": true
                            },
                            "with_on_sales_date": {
                                "title": "with_on_sales_date",
                                "type": "boolean",
                                "nullable": true
                            }
                        },
                        "nullable": true,
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "order_for",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "order_for",
                        "type": "object",
                        "properties": {
                            "designation": {
                                "title": "designation",
                                "enum": [
                                    "\"asc\"",
                                    "\"desc\""
                                ],
                                "type": "string"
                            },
                            "id": {
                                "title": "id",
                                "enum": [
                                    "\"asc\"",
                                    "\"desc\""
                                ],
                                "type": "string",
                                "description": "Unique identifier of the resource `{name}`"
                            }
                        },
                        "nullable": true,
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
                        "type": "integer",
                        "example": 77945
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        5,
                        77945
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
                        "type": "integer",
                        "example": 76909
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        10,
                        76909
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "EticketsListCustomerEmailLogsV2",
        "functionName": "eticketslistcustomeremaillogsv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/customers/{customer_id}/logs",
        "summary": "List customer email logs",
        "description": "This endpoint list customer email logs",
        "tags": [
            "Customer"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "customer_id",
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
                "name": "order_for",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/customers/%7Bcustomer_id%7D/logs",
            "operationId": "EticketsListCustomerEmailLogsV2",
            "summary": "List customer email logs",
            "categoryPath": [
                "Etickets",
                "Customer"
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
                    "name": "customer_id",
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
                        "example": "",
                        "enum": [
                            ""
                        ]
                    },
                    "enumValues": [
                        ""
                    ],
                    "values": [
                        ""
                    ],
                    "examples": [
                        ""
                    ]
                },
                {
                    "name": "order_for",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "order_for",
                        "type": "object",
                        "properties": {
                            "action": {
                                "title": "action",
                                "enum": [
                                    "\"asc\"",
                                    "\"desc\""
                                ],
                                "type": "string"
                            },
                            "author": {
                                "title": "author",
                                "enum": [
                                    "\"asc\"",
                                    "\"desc\""
                                ],
                                "type": "string"
                            },
                            "date": {
                                "title": "date",
                                "enum": [
                                    "\"asc\"",
                                    "\"desc\""
                                ],
                                "type": "string"
                            },
                            "message": {
                                "title": "message",
                                "enum": [
                                    "\"asc\"",
                                    "\"desc\""
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
                "200",
                "404",
                "422"
            ]
        }
    },
    {
        "operationId": "EticketsListDatesV2",
        "functionName": "eticketslistdatesv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/date",
        "summary": "List Dates",
        "description": "This endpoint allows you to retrieve all dates of a period",
        "tags": [
            "Date"
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
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/date",
            "operationId": "EticketsListDatesV2",
            "summary": "List Dates",
            "categoryPath": [
                "Etickets",
                "Date"
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
                        "example": "paid_tickets_count",
                        "enum": [
                            "address",
                            "period",
                            "period.language",
                            "event",
                            "event.language",
                            "event.image",
                            "event.image_horizontal",
                            "event.image_url_hint",
                            "zones",
                            "zones.language",
                            "zones.tariffs",
                            "zones.tariffs.language",
                            "valid_tickets_count",
                            "paid_tickets_count",
                            "booked_tickets_count",
                            "scanned_tickets_count",
                            "quota",
                            "quota_remaining",
                            "default_quota",
                            "customer_reserve_seat"
                        ]
                    },
                    "enumValues": [
                        "address",
                        "period",
                        "period.language",
                        "event",
                        "event.language",
                        "event.image",
                        "event.image_horizontal",
                        "event.image_url_hint",
                        "zones",
                        "zones.language",
                        "zones.tariffs",
                        "zones.tariffs.language",
                        "valid_tickets_count",
                        "paid_tickets_count",
                        "booked_tickets_count",
                        "scanned_tickets_count",
                        "quota",
                        "quota_remaining",
                        "default_quota",
                        "customer_reserve_seat"
                    ],
                    "values": [
                        "address",
                        "period",
                        "period.language",
                        "event",
                        "event.language",
                        "event.image",
                        "event.image_horizontal",
                        "event.image_url_hint",
                        "zones",
                        "zones.language",
                        "zones.tariffs",
                        "zones.tariffs.language",
                        "valid_tickets_count",
                        "paid_tickets_count",
                        "booked_tickets_count",
                        "scanned_tickets_count",
                        "quota",
                        "quota_remaining",
                        "default_quota",
                        "customer_reserve_seat"
                    ],
                    "examples": [
                        "paid_tickets_count"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "EticketsListDatesCustomPropertiesV2",
        "functionName": "eticketslistdatescustompropertiesv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/dates/custom-properties",
        "summary": "List Dates Custom Properties",
        "description": "This endpoint allows you to retrieve all date custom properties\n\nCustom properties are key-value pairs that can be associated with dates to store additional information.\nThey can be used to filter, sort, and group dates based on their values.",
        "tags": [
            "Date"
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
                "name": "filters",
                "in": "query",
                "required": false
            },
            {
                "name": "group_by",
                "in": "query",
                "required": false
            },
            {
                "name": "order_for",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/dates/custom-properties",
            "operationId": "EticketsListDatesCustomPropertiesV2",
            "summary": "List Dates Custom Properties",
            "categoryPath": [
                "Etickets",
                "Date"
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
                        "example": "",
                        "enum": [
                            ""
                        ]
                    },
                    "enumValues": [
                        ""
                    ],
                    "values": [
                        ""
                    ],
                    "examples": [
                        ""
                    ]
                },
                {
                    "name": "filters",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "filters",
                        "type": "object",
                        "properties": {
                            "ids": {
                                "title": "ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "name_values": {
                                "title": "name_values",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "string"
                                },
                                "nullable": true
                            },
                            "period_ids": {
                                "title": "period_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "search": {
                                "title": "search",
                                "type": "string",
                                "nullable": true
                            }
                        },
                        "nullable": true,
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
                    ]
                },
                {
                    "name": "group_by",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "string",
                    "schema": {
                        "title": "group_by",
                        "enum": [
                            "\"name\"",
                            "\"name_value\"",
                            "\"value\""
                        ],
                        "type": "string",
                        "nullable": true,
                        "example": "\"value\""
                    },
                    "enumValues": [
                        "\"name\"",
                        "\"name_value\"",
                        "\"value\""
                    ],
                    "values": [],
                    "examples": [
                        "\"value\""
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
                                "\"asc\"",
                                "\"desc\""
                            ],
                            "type": "string"
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
        "operationId": "EticketsGetReservationV2",
        "functionName": "eticketsgetreservationv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/reservation/{reservation_id}",
        "summary": "Get Reservation",
        "description": "This endpoint allows you to retrieve a reservation of a period allowed for user",
        "tags": [
            "Reservation"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "reservation_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/reservation/%7Breservation_id%7D",
            "operationId": "EticketsGetReservationV2",
            "summary": "Get Reservation",
            "categoryPath": [
                "Etickets",
                "Reservation"
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
                    "name": "reservation_id",
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
                        "example": "donations",
                        "enum": [
                            "total",
                            "total_discount",
                            "total_remaining",
                            "total_paid",
                            "total_pending",
                            "total_refund",
                            "total_refundable",
                            "total_being_refunded",
                            "supplement",
                            "total_paid_by_gifts",
                            "total_paid_by_credits",
                            "customer",
                            "customer.country",
                            "customer_group",
                            "tickets",
                            "tickets.date",
                            "tickets.date.event",
                            "tickets.date.event.image",
                            "tickets.date.event.image_horizontal",
                            "tickets.date.event.language",
                            "tickets.zone",
                            "tickets.zone.language",
                            "tickets.tariff",
                            "tickets.tariff.language",
                            "passes",
                            "passes.category",
                            "passes.category.language",
                            "passes.price",
                            "passes_direct",
                            "passes_direct.category",
                            "passes_direct.category.language",
                            "passes_direct.price",
                            "products",
                            "products.meta_product",
                            "products.meta_product.language",
                            "products.price",
                            "products.pickup_place",
                            "products.pickup_date",
                            "products.values",
                            "products.values.language",
                            "products.values.languages",
                            "gifts",
                            "gifts.price",
                            "gifts.price.gift",
                            "gifts.price.gift.language",
                            "operations",
                            "operations.user",
                            "operations.payment_mode",
                            "operations.payment_mode.group_mode",
                            "operations.payment_mode.group_mode.language",
                            "operations_count",
                            "tickets_count",
                            "passes_count",
                            "passes_direct_count",
                            "gifts_count",
                            "donations_count",
                            "products_count",
                            "tickets_price_sum",
                            "passes_direct_price_sum",
                            "gifts_price_sum",
                            "donations_price_sum",
                            "products_price_sum",
                            "user",
                            "period",
                            "period.language",
                            "promo_code",
                            "promo_code.promotion",
                            "note",
                            "donations",
                            "donations.price",
                            "donations.price.gift",
                            "donations.price.gift.language",
                            "meta_reservation",
                            "meta_reservation.user_level",
                            "sales_device",
                            "sales_device.sales_office",
                            "is_content_editable",
                            "can_add_operation",
                            "insurance_fees",
                            "shipping_fees"
                        ]
                    },
                    "enumValues": [
                        "total",
                        "total_discount",
                        "total_remaining",
                        "total_paid",
                        "total_pending",
                        "total_refund",
                        "total_refundable",
                        "total_being_refunded",
                        "supplement",
                        "total_paid_by_gifts",
                        "total_paid_by_credits",
                        "customer",
                        "customer.country",
                        "customer_group",
                        "tickets",
                        "tickets.date",
                        "tickets.date.event",
                        "tickets.date.event.image",
                        "tickets.date.event.image_horizontal",
                        "tickets.date.event.language",
                        "tickets.zone",
                        "tickets.zone.language",
                        "tickets.tariff",
                        "tickets.tariff.language",
                        "passes",
                        "passes.category",
                        "passes.category.language",
                        "passes.price",
                        "passes_direct",
                        "passes_direct.category",
                        "passes_direct.category.language",
                        "passes_direct.price",
                        "products",
                        "products.meta_product",
                        "products.meta_product.language",
                        "products.price",
                        "products.pickup_place",
                        "products.pickup_date",
                        "products.values",
                        "products.values.language",
                        "products.values.languages",
                        "gifts",
                        "gifts.price",
                        "gifts.price.gift",
                        "gifts.price.gift.language",
                        "operations",
                        "operations.user",
                        "operations.payment_mode",
                        "operations.payment_mode.group_mode",
                        "operations.payment_mode.group_mode.language",
                        "operations_count",
                        "tickets_count",
                        "passes_count",
                        "passes_direct_count",
                        "gifts_count",
                        "donations_count",
                        "products_count",
                        "tickets_price_sum",
                        "passes_direct_price_sum",
                        "gifts_price_sum",
                        "donations_price_sum",
                        "products_price_sum",
                        "user",
                        "period",
                        "period.language",
                        "promo_code",
                        "promo_code.promotion",
                        "note",
                        "donations",
                        "donations.price",
                        "donations.price.gift",
                        "donations.price.gift.language",
                        "meta_reservation",
                        "meta_reservation.user_level",
                        "sales_device",
                        "sales_device.sales_office",
                        "is_content_editable",
                        "can_add_operation",
                        "insurance_fees",
                        "shipping_fees"
                    ],
                    "values": [
                        "total",
                        "total_discount",
                        "total_remaining",
                        "total_paid",
                        "total_pending",
                        "total_refund",
                        "total_refundable",
                        "total_being_refunded",
                        "supplement",
                        "total_paid_by_gifts",
                        "total_paid_by_credits",
                        "customer",
                        "customer.country",
                        "customer_group",
                        "tickets",
                        "tickets.date",
                        "tickets.date.event",
                        "tickets.date.event.image",
                        "tickets.date.event.image_horizontal",
                        "tickets.date.event.language",
                        "tickets.zone",
                        "tickets.zone.language",
                        "tickets.tariff",
                        "tickets.tariff.language",
                        "passes",
                        "passes.category",
                        "passes.category.language",
                        "passes.price",
                        "passes_direct",
                        "passes_direct.category",
                        "passes_direct.category.language",
                        "passes_direct.price",
                        "products",
                        "products.meta_product",
                        "products.meta_product.language",
                        "products.price",
                        "products.pickup_place",
                        "products.pickup_date",
                        "products.values",
                        "products.values.language",
                        "products.values.languages",
                        "gifts",
                        "gifts.price",
                        "gifts.price.gift",
                        "gifts.price.gift.language",
                        "operations",
                        "operations.user",
                        "operations.payment_mode",
                        "operations.payment_mode.group_mode",
                        "operations.payment_mode.group_mode.language",
                        "operations_count",
                        "tickets_count",
                        "passes_count",
                        "passes_direct_count",
                        "gifts_count",
                        "donations_count",
                        "products_count",
                        "tickets_price_sum",
                        "passes_direct_price_sum",
                        "gifts_price_sum",
                        "donations_price_sum",
                        "products_price_sum",
                        "user",
                        "period",
                        "period.language",
                        "promo_code",
                        "promo_code.promotion",
                        "note",
                        "donations",
                        "donations.price",
                        "donations.price.gift",
                        "donations.price.gift.language",
                        "meta_reservation",
                        "meta_reservation.user_level",
                        "sales_device",
                        "sales_device.sales_office",
                        "is_content_editable",
                        "can_add_operation",
                        "insurance_fees",
                        "shipping_fees"
                    ],
                    "examples": [
                        "donations"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "403",
                "404",
                "422"
            ]
        }
    },
    {
        "operationId": "EticketsGetReservationV2_get_2_etickets_reservation_reservation_uuid",
        "functionName": "eticketsgetreservationv2Get2EticketsReservationReservationUuid",
        "originalOperationId": "EticketsGetReservationV2",
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/reservation/{reservation_uuid}",
        "summary": "Get Reservation",
        "description": "This endpoint allows you to retrieve a reservation of a period allowed for user",
        "tags": [
            "Reservation"
        ],
        "mutating": false,
        "pathParameters": [
            {
                "name": "reservation_id",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/reservation/%7Breservation_uuid%7D",
            "operationId": "EticketsGetReservationV2",
            "summary": "Get Reservation",
            "categoryPath": [
                "Etickets",
                "Reservation"
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
                    "name": "reservation_id",
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
                        "example": "gifts.price",
                        "enum": [
                            "total",
                            "total_discount",
                            "total_remaining",
                            "total_paid",
                            "total_pending",
                            "total_refund",
                            "total_refundable",
                            "total_being_refunded",
                            "supplement",
                            "total_paid_by_gifts",
                            "total_paid_by_credits",
                            "customer",
                            "customer.country",
                            "customer_group",
                            "tickets",
                            "tickets.date",
                            "tickets.date.event",
                            "tickets.date.event.image",
                            "tickets.date.event.image_horizontal",
                            "tickets.date.event.language",
                            "tickets.zone",
                            "tickets.zone.language",
                            "tickets.tariff",
                            "tickets.tariff.language",
                            "passes",
                            "passes.category",
                            "passes.category.language",
                            "passes.price",
                            "passes_direct",
                            "passes_direct.category",
                            "passes_direct.category.language",
                            "passes_direct.price",
                            "products",
                            "products.meta_product",
                            "products.meta_product.language",
                            "products.price",
                            "products.pickup_place",
                            "products.pickup_date",
                            "products.values",
                            "products.values.language",
                            "products.values.languages",
                            "gifts",
                            "gifts.price",
                            "gifts.price.gift",
                            "gifts.price.gift.language",
                            "operations",
                            "operations.user",
                            "operations.payment_mode",
                            "operations.payment_mode.group_mode",
                            "operations.payment_mode.group_mode.language",
                            "operations_count",
                            "tickets_count",
                            "passes_count",
                            "passes_direct_count",
                            "gifts_count",
                            "donations_count",
                            "products_count",
                            "tickets_price_sum",
                            "passes_direct_price_sum",
                            "gifts_price_sum",
                            "donations_price_sum",
                            "products_price_sum",
                            "user",
                            "period",
                            "period.language",
                            "promo_code",
                            "promo_code.promotion",
                            "note",
                            "donations",
                            "donations.price",
                            "donations.price.gift",
                            "donations.price.gift.language",
                            "meta_reservation",
                            "meta_reservation.user_level",
                            "sales_device",
                            "sales_device.sales_office",
                            "is_content_editable",
                            "can_add_operation",
                            "insurance_fees",
                            "shipping_fees"
                        ]
                    },
                    "enumValues": [
                        "total",
                        "total_discount",
                        "total_remaining",
                        "total_paid",
                        "total_pending",
                        "total_refund",
                        "total_refundable",
                        "total_being_refunded",
                        "supplement",
                        "total_paid_by_gifts",
                        "total_paid_by_credits",
                        "customer",
                        "customer.country",
                        "customer_group",
                        "tickets",
                        "tickets.date",
                        "tickets.date.event",
                        "tickets.date.event.image",
                        "tickets.date.event.image_horizontal",
                        "tickets.date.event.language",
                        "tickets.zone",
                        "tickets.zone.language",
                        "tickets.tariff",
                        "tickets.tariff.language",
                        "passes",
                        "passes.category",
                        "passes.category.language",
                        "passes.price",
                        "passes_direct",
                        "passes_direct.category",
                        "passes_direct.category.language",
                        "passes_direct.price",
                        "products",
                        "products.meta_product",
                        "products.meta_product.language",
                        "products.price",
                        "products.pickup_place",
                        "products.pickup_date",
                        "products.values",
                        "products.values.language",
                        "products.values.languages",
                        "gifts",
                        "gifts.price",
                        "gifts.price.gift",
                        "gifts.price.gift.language",
                        "operations",
                        "operations.user",
                        "operations.payment_mode",
                        "operations.payment_mode.group_mode",
                        "operations.payment_mode.group_mode.language",
                        "operations_count",
                        "tickets_count",
                        "passes_count",
                        "passes_direct_count",
                        "gifts_count",
                        "donations_count",
                        "products_count",
                        "tickets_price_sum",
                        "passes_direct_price_sum",
                        "gifts_price_sum",
                        "donations_price_sum",
                        "products_price_sum",
                        "user",
                        "period",
                        "period.language",
                        "promo_code",
                        "promo_code.promotion",
                        "note",
                        "donations",
                        "donations.price",
                        "donations.price.gift",
                        "donations.price.gift.language",
                        "meta_reservation",
                        "meta_reservation.user_level",
                        "sales_device",
                        "sales_device.sales_office",
                        "is_content_editable",
                        "can_add_operation",
                        "insurance_fees",
                        "shipping_fees"
                    ],
                    "values": [
                        "total",
                        "total_discount",
                        "total_remaining",
                        "total_paid",
                        "total_pending",
                        "total_refund",
                        "total_refundable",
                        "total_being_refunded",
                        "supplement",
                        "total_paid_by_gifts",
                        "total_paid_by_credits",
                        "customer",
                        "customer.country",
                        "customer_group",
                        "tickets",
                        "tickets.date",
                        "tickets.date.event",
                        "tickets.date.event.image",
                        "tickets.date.event.image_horizontal",
                        "tickets.date.event.language",
                        "tickets.zone",
                        "tickets.zone.language",
                        "tickets.tariff",
                        "tickets.tariff.language",
                        "passes",
                        "passes.category",
                        "passes.category.language",
                        "passes.price",
                        "passes_direct",
                        "passes_direct.category",
                        "passes_direct.category.language",
                        "passes_direct.price",
                        "products",
                        "products.meta_product",
                        "products.meta_product.language",
                        "products.price",
                        "products.pickup_place",
                        "products.pickup_date",
                        "products.values",
                        "products.values.language",
                        "products.values.languages",
                        "gifts",
                        "gifts.price",
                        "gifts.price.gift",
                        "gifts.price.gift.language",
                        "operations",
                        "operations.user",
                        "operations.payment_mode",
                        "operations.payment_mode.group_mode",
                        "operations.payment_mode.group_mode.language",
                        "operations_count",
                        "tickets_count",
                        "passes_count",
                        "passes_direct_count",
                        "gifts_count",
                        "donations_count",
                        "products_count",
                        "tickets_price_sum",
                        "passes_direct_price_sum",
                        "gifts_price_sum",
                        "donations_price_sum",
                        "products_price_sum",
                        "user",
                        "period",
                        "period.language",
                        "promo_code",
                        "promo_code.promotion",
                        "note",
                        "donations",
                        "donations.price",
                        "donations.price.gift",
                        "donations.price.gift.language",
                        "meta_reservation",
                        "meta_reservation.user_level",
                        "sales_device",
                        "sales_device.sales_office",
                        "is_content_editable",
                        "can_add_operation",
                        "insurance_fees",
                        "shipping_fees"
                    ],
                    "examples": [
                        "gifts.price"
                    ]
                }
            ],
            "responseStatuses": [
                "200",
                "403",
                "404",
                "422"
            ]
        }
    },
    {
        "operationId": "EticketsListSurveyV2",
        "functionName": "eticketslistsurveyv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/surveys",
        "summary": "List Survey",
        "description": "This endpoint allows you to retrieve surveys",
        "tags": [
            "Survey"
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
                "name": "filters",
                "in": "query",
                "required": false
            },
            {
                "name": "order_for",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/surveys",
            "operationId": "EticketsListSurveyV2",
            "summary": "List Survey",
            "categoryPath": [
                "Etickets",
                "Survey"
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
                        "example": "language",
                        "enum": [
                            "fields",
                            "fields.conditions",
                            "fields.language",
                            "language"
                        ]
                    },
                    "enumValues": [
                        "fields",
                        "fields.conditions",
                        "fields.language",
                        "language"
                    ],
                    "values": [
                        "fields",
                        "fields.conditions",
                        "fields.language",
                        "language"
                    ],
                    "examples": [
                        "language"
                    ]
                },
                {
                    "name": "filters",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "filters",
                        "type": "object",
                        "properties": {
                            "ids": {
                                "title": "ids",
                                "type": "array",
                                "nullable": true
                            },
                            "only_with_fields": {
                                "title": "only_with_fields",
                                "type": "boolean"
                            },
                            "pass_ids": {
                                "title": "pass_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                }
                            },
                            "protopass_ids": {
                                "title": "protopass_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                }
                            },
                            "tariff_ids": {
                                "title": "tariff_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                }
                            },
                            "ticket_ids": {
                                "title": "ticket_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                }
                            }
                        },
                        "nullable": true,
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                                "\"asc\"",
                                "\"desc\""
                            ],
                            "type": "string"
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
        "operationId": "EticketsListSurveyPassAnswersV2",
        "functionName": "eticketslistsurveypassanswersv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/surveys/answers/passes",
        "summary": "List Survey Pass Answers",
        "description": "This endpoint allows you to retrieve pass survey answers",
        "tags": [
            "Survey"
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
                "name": "filters",
                "in": "query",
                "required": false
            },
            {
                "name": "order_for",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/surveys/answers/passes",
            "operationId": "EticketsListSurveyPassAnswersV2",
            "summary": "List Survey Pass Answers",
            "categoryPath": [
                "Etickets",
                "Survey"
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
                        "example": "survey_field",
                        "enum": [
                            "survey_field"
                        ]
                    },
                    "enumValues": [
                        "survey_field"
                    ],
                    "values": [
                        "survey_field"
                    ],
                    "examples": [
                        "survey_field"
                    ]
                },
                {
                    "name": "filters",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "filters",
                        "type": "object",
                        "properties": {
                            "ids": {
                                "title": "ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "pass_ids": {
                                "title": "pass_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "survey_field_ids": {
                                "title": "survey_field_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "survey_ids": {
                                "title": "survey_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            }
                        },
                        "nullable": true,
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                                "\"asc\"",
                                "\"desc\""
                            ],
                            "type": "string"
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
        "operationId": "patch_2_etickets_surveys_answers_passes",
        "functionName": "patch2EticketsSurveysAnswersPasses",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "PATCH",
        "path": "/2/etickets/surveys/answers/passes",
        "summary": "Patch Survey Ticket Answers",
        "description": "This endpoint allows you to create update or empty pass survey answers",
        "tags": [
            "Survey"
        ],
        "mutating": true,
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
        "requestContentTypes": [
            "application/json"
        ],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/patch/2/etickets/surveys/answers/passes",
            "operationId": null,
            "summary": "Patch Survey Ticket Answers",
            "categoryPath": [
                "Etickets",
                "Survey"
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
                        "example": "survey_field",
                        "enum": [
                            "survey_field"
                        ]
                    },
                    "enumValues": [
                        "survey_field"
                    ],
                    "values": [
                        "survey_field"
                    ],
                    "examples": [
                        "survey_field"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "EticketsListSurveyTicketAnswersV2",
        "functionName": "eticketslistsurveyticketanswersv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "GET",
        "path": "/2/etickets/surveys/answers/tickets",
        "summary": "List Survey Ticket Answers",
        "description": "This endpoint allows you to retrieve ticket survey answers",
        "tags": [
            "Survey"
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
                "name": "filters",
                "in": "query",
                "required": false
            },
            {
                "name": "order_for",
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
            "url": "https://developer.infomaniak.com/docs/api/get/2/etickets/surveys/answers/tickets",
            "operationId": "EticketsListSurveyTicketAnswersV2",
            "summary": "List Survey Ticket Answers",
            "categoryPath": [
                "Etickets",
                "Survey"
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
                        "example": "survey_field",
                        "enum": [
                            "survey_field"
                        ]
                    },
                    "enumValues": [
                        "survey_field"
                    ],
                    "values": [
                        "survey_field"
                    ],
                    "examples": [
                        "survey_field"
                    ]
                },
                {
                    "name": "filters",
                    "in": "query",
                    "required": false,
                    "description": "",
                    "style": "form",
                    "explode": true,
                    "schemaType": "object",
                    "schema": {
                        "title": "filters",
                        "type": "object",
                        "properties": {
                            "ids": {
                                "title": "ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "survey_field_ids": {
                                "title": "survey_field_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "survey_ids": {
                                "title": "survey_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            },
                            "ticket_ids": {
                                "title": "ticket_ids",
                                "type": "array",
                                "items": {
                                    "title": "item",
                                    "type": "integer"
                                },
                                "nullable": true
                            }
                        },
                        "nullable": true,
                        "example": []
                    },
                    "enumValues": [],
                    "values": [],
                    "examples": [
                        []
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
                                "\"asc\"",
                                "\"desc\""
                            ],
                            "type": "string"
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
        "operationId": "EticketsPatchSurveyTicketAnswersV2",
        "functionName": "eticketspatchsurveyticketanswersv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "PATCH",
        "path": "/2/etickets/surveys/answers/tickets",
        "summary": "Patch Survey Ticket Answers",
        "description": "This endpoint allows you to create update or empty ticket survey answers",
        "tags": [
            "Survey"
        ],
        "mutating": true,
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
        "requestContentTypes": [
            "application/json"
        ],
        "responseContentTypes": [
            "application/json"
        ],
        "deprecated": false,
        "auth": [],
        "docs": {
            "url": "https://developer.infomaniak.com/docs/api/patch/2/etickets/surveys/answers/tickets",
            "operationId": "EticketsPatchSurveyTicketAnswersV2",
            "summary": "Patch Survey Ticket Answers",
            "categoryPath": [
                "Etickets",
                "Survey"
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
                        "example": "survey_field",
                        "enum": [
                            "survey_field"
                        ]
                    },
                    "enumValues": [
                        "survey_field"
                    ],
                    "values": [
                        "survey_field"
                    ],
                    "examples": [
                        "survey_field"
                    ]
                }
            ],
            "responseStatuses": [
                "200"
            ]
        }
    },
    {
        "operationId": "EticketsEditTicketV2",
        "functionName": "eticketseditticketv2",
        "originalOperationId": null,
        "domain": "etickets",
        "method": "PATCH",
        "path": "/2/etickets/ticket",
        "summary": "Edit ticket",
        "description": "This endpoint allow you to edit ticket information",
        "tags": [
            "Ticket"
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
            "url": "https://developer.infomaniak.com/docs/api/patch/2/etickets/ticket",
            "operationId": "EticketsEditTicketV2",
            "summary": "Edit ticket",
            "categoryPath": [
                "Etickets",
                "Ticket"
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
    }
];
//# sourceMappingURL=etickets.js.map