import epxpress from "express";
import protect from "../middlewares/authMiddleware.js";
import { createChat, fetchChat } from "../controllers/chatControllers.js";

const router = epxpress.Router();

router.post("/create", protect, createChat);
router.get("/fetch", protect, fetchChat);

export default router;