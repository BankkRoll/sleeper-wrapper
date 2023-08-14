class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const handleApiError = (statusCode: number): ApiError => {
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
