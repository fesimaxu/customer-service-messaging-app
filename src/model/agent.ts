import { Schema, model } from "mongoose";
import { IAgentPortal } from "../interface";

const AgentPortalSchema = new Schema<IAgentPortal>(
  {
    agentId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true
    },
    employmentYear: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

const AgentPortal = model("AgentPortal", AgentPortalSchema);
export default AgentPortal;
