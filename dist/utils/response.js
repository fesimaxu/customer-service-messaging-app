"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = exports.sendSuccessResponse = void 0;
const sendSuccessResponse = (res, statusCode, data, message = "successful") => res.status(statusCode).json({
    message: message,
    status: statusCode,
    data: data,
    success: true,
});
exports.sendSuccessResponse = sendSuccessResponse;
const sendErrorResponse = (res, statusCode = 500, data, message = "error! request failed") => {
    if (data.code === 11000) {
        const field = Object.keys(data.keyPattern)[0];
        const value = data.keyValue[field];
        const message = `Duplicate key error: ${field} with value ${value} already exists.`;
        return res.status(statusCode).json({
            message: message,
            status: statusCode,
            data: data,
            error: true,
        });
    }
    else {
        // Handle other errors
        return res.status(statusCode).json({
            message: message,
            status: statusCode,
            data: data,
            error: true,
        });
    }
};
exports.sendErrorResponse = sendErrorResponse;
