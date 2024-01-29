import { Schema, model } from "mongoose";
import { IAgentPortal } from "../interface";


/**
 * @swagger
 * components:
 *  schemas:
 *    AgentInput:
 *      type: object
 *      required: true
 *        - username
 *        - email
 *        - employmentYear
 *      properties:
 *        username:
 *          type: string
 *          default: uchenna
 *        email:
 *          type: string
 *          default: fesimax68@gmail.com
 *        employmentYear:
 *          type: string
 *          default: 2024
 *
 *    AgentResponse:
 *      type: Object
 *      properties:
 *        _id:
 *          type: string
 *        agentId:
 *          type: string
 *        username:
 *          type: string
 *        email:
 *          type: string
 *        employmentYear:
 *          type: string
 *
 *
 */

// agent model
const AgentPortalSchema = new Schema<IAgentPortal>(
  {
    agentId: {
      type: String,
      required: true,
    },
    username: {
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
