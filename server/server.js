import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
connectDb();

app.use("/api/v1/user", userRoutes);

//Error Middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
