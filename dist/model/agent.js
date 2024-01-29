"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * @swagger
 * components:
 *  schemas:
 *    AgentInput:
 *      type: object
 *      required: true
 *        - username
 *        - email
 *        - employmentYear
 *      properties:
 *        username:
 *          type: string
 *          default: uchenna
 *        email:
 *          type: string
 *          default: fesimax68@gmail.com
 *        employmentYear:
 *          type: string
 *          default: 2024
 *
 *    AgentResponse:
 *      type: Object
 *      properties:
 *        _id:
 *          type: string
 *        agentId:
 *          type: string
 *        username:
 *          type: string
 *        email:
 *          type: string
 *        employmentYear:
 *          type: string
 *
 *
 */
// agent model
const AgentPortalSchema = new mongoose_1.Schema({
    agentId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    employmentYear: {
        type: String,
        required: true
    }
}, { timestamps: true });
const AgentPortal = (0, mongoose_1.model)("AgentPortal", AgentPortalSchema);
exports.default = AgentPortal;
