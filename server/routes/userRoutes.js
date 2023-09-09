import epxpress from "express";
import { getUsers, login, registerUser } from "../controllers/userControllers.js";
import protect from "../middlewares/authMiddleware.js";

const router = epxpress.Router();

router.post("/", registerUser);
router.post("/login", login);
router.get("/", protect, getUsers);

export default router;
