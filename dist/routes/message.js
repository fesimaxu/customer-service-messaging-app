"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const endpoints_1 = require("../utils/endpoints");
const messaging_1 = require("../controller/messaging");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/v1/send-message:
 *   post:
 *     tags:
 *       - Message
 *     summary: send an agent message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               message:
 *                 type: string
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: signin successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: interna server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post(endpoints_1.endpoints.sendMessages, messaging_1.sendMessageController);
/**
 * @swagger
 * /api/v1/messages:
 *   get:
 *     tags:
 *       - Message
 *     summary: get all messages
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: successful
 *         content:
 *            application/json:
 *              schema:
 *                #ref: '#/components/schemas/MessageResponse'
 *       500:
 *         description: interna server error
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 */
router.get(endpoints_1.endpoints.userMessages, messaging_1.getStoredMessages);
exports.default = router;
