import epxpress from "express";
import protect from "../middlewares/authMiddleware.js";
import { fetchMessages, sendMessage } from "../controllers/messageControllers.js";

const router = epxpress.Router();

router.post("/", protect, sendMessage);
router.get("/:chatId", protect, fetchMessages);

export default router;