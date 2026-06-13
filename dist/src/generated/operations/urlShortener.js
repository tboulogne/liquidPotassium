export function createUrlshortenerOperations(client) {
    return {
        get1UrlShortener: (request) => client.requestOperation("get_1_url_shortener", request),
        post1UrlShortener: (request) => client.requestOperation("post_1_url_shortener", request),
        put1UrlShortenerShortUrlCode: (request) => client.requestOperation("put_1_url_shortener_short_url_code", request),
        get1UrlShortenerQuota: (request) => client.requestOperation("get_1_url_shortener_quota", request),
        get2UrlShortener: (request) => client.requestOperation("get_2_url_shortener", request),
        post2UrlShortener: (request) => client.requestOperation("post_2_url_shortener", request),
        get2UrlShortenerQuota: (request) => client.requestOperation("get_2_url_shortener_quota", request),
    };
}
//# sourceMappingURL=urlShortener.js.map