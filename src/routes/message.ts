import { Router } from "express";
import { endpoints } from "../utils/endpoints";
import { getStoredMessages, sendMessageController } from "../controller/messaging";

const router = Router();



router.post(endpoints.sendMessages, sendMessageController);

router.get(endpoints.responseMessages, getStoredMessages)



export default router;