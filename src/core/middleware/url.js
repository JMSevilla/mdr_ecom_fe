export const baseURLMiddleware = { 
    user_uri : "/api/user"
}

export function baseURLMiddlewareHelper(uri, callback) {
    const setBack = uri;
    return `${setBack}/${callback}`
}