import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config();
connectDb();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/chat", chatRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
