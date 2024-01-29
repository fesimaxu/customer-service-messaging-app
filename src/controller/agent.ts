import { Request, Response, NextFunction } from "express";
import AgentPortal from "../model/agent";
import { generateAgentId } from "../services";
import { sendErrorResponse, sendSuccessResponse } from "../utils/response";

// to register agents
export const registerAgentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, username, employmentYear } = req.body;

    const isExistingAgent = await AgentPortal.findOne({
      email: email,
    });

    if (isExistingAgent) {
      sendSuccessResponse(res, 200, "agent already exists");
    } else {
      const agentUniqueId = generateAgentId(employmentYear);

      const agent = await AgentPortal.create({
        agentId: agentUniqueId,
        username,
        email,
        employmentYear,
      });

      const agentData = {
        agentId: agent.agentId,
        username: agent.username,
        email: agent.email,
        employmentYear: agent.employmentYear,
      };

      sendSuccessResponse(res, 200, agentData);
    }
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};

// get registered agents
export const getAgentsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const agents = await AgentPortal.find();

    if (!agents) {
      sendErrorResponse(res, 404, "not found any agent");
    }

    sendSuccessResponse(res, 200, agents);
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};
