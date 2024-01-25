import { Request, Response, NextFunction } from "express";
import fs from "fs";
import parse  from "csv-parser";
import { sendErrorResponse, sendSuccessResponse } from "../utils/response";
import MessagePortal from "../model";

export const sendMessageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user, message } = req.body;

    const userMessages = await MessagePortal.create({
      user,
      message,
    });

    sendSuccessResponse(res, 200, userMessages);
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};


export const getStoredMessages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const instantMessages = await MessagePortal.find();

    if(!instantMessages){
      sendErrorResponse(res, 404, "No instant message found")
    }

    sendSuccessResponse(res, 200, instantMessages);

  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
}