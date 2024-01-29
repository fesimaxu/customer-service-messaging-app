import { sendErrorResponse } from "../utils/response";

// error handling
const errorHandler = (err: any, req: any, res: any, next: any) => {
  sendErrorResponse(res, 500, err);
};

export default errorHandler;