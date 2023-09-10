import epxpress from "express";
import protect from "../middlewares/authMiddleware.js";
import { createChat } from "../controllers/chatControllers.js";

const router = epxpress.Router();

router.post("/create", protect, createChat);

export default router;