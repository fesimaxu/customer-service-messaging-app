import { Request, Response, NextFunction } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../utils/response";
import MessagePortal from "../model/messages";

// to receive customer's messages
export const sendMessageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, message } = req.body;

    const userMessageRequest = await MessagePortal.create({
      userId,
      message,
      timestamp: new Date().toISOString(),
    });

    if (!userMessageRequest) {
      sendErrorResponse(res, 404, "failed to send message");
    }

    const userMessage = {
      userId: userMessageRequest.userId,
      message: userMessageRequest.message,
      timestamp: userMessageRequest.timestamp,
    };

    sendSuccessResponse(res, 200, userMessage);
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};

// get customers messages
export const getStoredMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const instantMessages: any = await MessagePortal.find();

    if (!instantMessages) {
      sendErrorResponse(res, 404, "No instant message found");
    }

    const messageData = instantMessages.map(
      (element: { userId: string; message: string; timestamp: string }) => {
        const userMessages = {
          userId: element.userId,
          message: element.message,
          timestamp: element.timestamp,
        };

        return userMessages;
      }
    );

    sendSuccessResponse(res, 200, messageData);
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};
