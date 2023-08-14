declare class ApiError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string);
}
export declare const handleApiError: (statusCode: number) => ApiError;
export {};
