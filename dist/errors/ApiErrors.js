"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApiError = void 0;
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}
const handleApiError = (statusCode) => {
    switch (statusCode) {
        case 400:
            return new ApiError(400, 'Bad Request -- Your request is invalid.');
        case 404:
            return new ApiError(404, 'Not Found -- The specified item could not be found.');
        case 429:
            return new ApiError(429, "Too Many Requests -- You're requesting too many items! Slow down!");
        case 500:
            return new ApiError(500, 'Internal Server Error -- We had a problem with our server. Try again later.');
        case 503:
            return new ApiError(503, "Service Unavailable -- We're temporarily offline for maintenance. Please try again later.");
        default:
            return new ApiError(statusCode, 'An unexpected error occurred.');
    }
};
exports.handleApiError = handleApiError;
//# sourceMappingURL=ApiErrors.js.map