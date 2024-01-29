import { Router } from "express";
import { endpoints } from "../utils/endpoints";
import {
  getAgentsController,
  registerAgentController,
} from "../controller/agent";
import { validate, validateAgent } from "../middleware/validator";

const router = Router();


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
router.post(endpoints.registerAgent, validateAgent, validate, registerAgentController);

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
router.get(endpoints.getAgents, getAgentsController);

export default router;
