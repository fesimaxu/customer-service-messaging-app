"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * @swagger
 * components:
 *  schemas:
 *    MessageInput:
 *      type: object
 *      required: true
 *        - userId
 *        - message
 *      properties:
 *        userId:
 *          type: string
 *          default: 208
 *        message:
 *          type: string
 *          default: hello world
 *
 *    MessageResponse:
 *      type: Object
 *      properties:
 *        _id:
 *          type: string
 *        userId:
 *          type: string
 *        message:
 *          type: string
 *        timestamp:
 *          type: string
 *
 *
 */
// message model
const MessagePortalSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true
    }
});
const MessagePortal = (0, mongoose_1.model)("MessagePortal", MessagePortalSchema);
exports.default = MessagePortal;
