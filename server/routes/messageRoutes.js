import epxpress from "express";
import protect from "../middlewares/authMiddleware.js";
import { sendMessage } from "../controllers/messageControllers.js";

const router = epxpress.Router();

router.post("/", protect, sendMessage);

export default router;