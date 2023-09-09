import epxpress from "express";
import { login, registerUser } from "../controllers/userControllers.js";

const router = epxpress.Router();

router.post("/", registerUser);
router.post("/login", login);

export default router;
