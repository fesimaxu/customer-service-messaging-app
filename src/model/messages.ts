import { Schema, model } from "mongoose";
import { IMessagePortal } from "../interface";


/**
 * @swagger
 * components:
 *  schemas:
 *    MessageInput:
 *      type: object
 *      required: true
 *        - userId
 *        - message
 *      properties:
 *        userId:
 *          type: string
 *          default: 208
 *        message:
 *          type: string
 *          default: hello world
 *
 *    MessageResponse:
 *      type: Object
 *      properties:
 *        _id:
 *          type: string
 *        userId:
 *          type: string
 *        message:
 *          type: string
 *        timestamp:
 *          type: string
 *
 *
 */

// message model
const MessagePortalSchema = new Schema<IMessagePortal>(
  {
    userId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: String,
      required: true
    }
  },
);

const MessagePortal = model("MessagePortal", MessagePortalSchema);
export default MessagePortal;
