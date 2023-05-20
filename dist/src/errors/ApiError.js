"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.ApiError = void 0;
const StatusCodes = {
    BAD_REQUEST: 400,
};
class ApiError extends Error {
    constructor(statusCode, message, rawErrors) {
        super(message);
        this.rawErrors = [];
        this.statusCode = statusCode;
        if (rawErrors)
            this.rawErrors = rawErrors;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ApiError = ApiError;
// new optional class for bad requests
class BadRequestError extends ApiError {
    constructor(message, errors) {
        super(StatusCodes.BAD_REQUEST, message, errors);
    }
}
exports.BadRequestError = BadRequestError;
