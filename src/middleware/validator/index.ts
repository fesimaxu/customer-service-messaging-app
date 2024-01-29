import { check, validationResult } from "express-validator";
import { sendErrorResponse } from "../../utils/response";
import { Request, Response, NextFunction } from "express";

export const validateAgent = [
    check("username").trim().not().isEmpty().withMessage("Username is missing!"),
    check("email").trim().not().isEmpty().withMessage("Email is missing!"),
    check("email").isEmail().withMessage("Invalid email input"),
    check("employmentYear")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Employment Year is missing!"),
  ];


  export const validate = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req).array();
    if (error.length) {
      return sendErrorResponse(res, 400, { error: error[0].msg });
    }
  
    next();
  };