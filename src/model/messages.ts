import { Schema, model } from "mongoose";
import { IMessagePortal } from "../interface";

const MessagePortalSchema = new Schema<IMessagePortal>(
  {
    user: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MessagePortal = model("MessagePortal", MessagePortalSchema);
export default MessagePortal;
