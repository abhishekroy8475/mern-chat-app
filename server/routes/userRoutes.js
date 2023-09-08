import epxpress from "express";
import { registerUser } from "../controllers/userControllers.js";

const router = epxpress.Router();

router.post("/", registerUser);

export default router;
