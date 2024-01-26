import { Router } from "express";
import { endpoints } from "../utils/endpoints";
import { getAgentsController, registerAgentController } from "../controller/agent";


const router = Router();


router.post(endpoints.registerAgent, registerAgentController);

router.get(endpoints.getAgents, getAgentsController);


export default router;