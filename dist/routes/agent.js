"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const endpoints_1 = require("../utils/endpoints");
const agent_1 = require("../controller/agent");
const validator_1 = require("../middleware/validator");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/v1/add-agent:
 *   post:
 *     tags:
 *       - Agent
 *     summary: add an agent
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               username:
 *                 type: string
 *               employmentYear:
 *                 type: string
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: agent registered successfully
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
router.post(endpoints_1.endpoints.registerAgent, validator_1.validateAgent, validator_1.validate, agent_1.registerAgentController);
/**
 * @swagger
 * /api/v1/get-agents:
 *   get:
 *     tags:
 *       - Agent
 *     summary: get all agents
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: successful
 *         content:
 *            application/json:
 *              schema:
 *                #ref: '#/components/schemas/AgentResponse'
 *       500:
 *         description: interna server error
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 */
router.get(endpoints_1.endpoints.getAgents, agent_1.getAgentsController);
exports.default = router;
