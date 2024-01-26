import { Request, Response, NextFunction } from "express";
import AgentPortal from "../model/agent";
import { generateAgentId } from "../services";
import { sendErrorResponse, sendSuccessResponse } from "../utils/response";

export const registerAgentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, employmentYear } = req.body;

    const isExistingAgent = await AgentPortal.findOne({
      email: email,
    });

    if (isExistingAgent) {
      sendSuccessResponse(res, 200, "agent already exists");
    }

    const agentUniqueId = generateAgentId(employmentYear);

    const agent = await AgentPortal.create({
      agentId: agentUniqueId,
      name,
      email,
      employmentYear,
    });
    sendSuccessResponse(res, 200, agent);
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};

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
