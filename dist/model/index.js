"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessagePortalSchema = new mongoose_1.Schema({
    user: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const MessagePortal = (0, mongoose_1.model)("MessagePortal", MessagePortalSchema);
exports.default = MessagePortal;
