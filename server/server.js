import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
connectDb();

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
