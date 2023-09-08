import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDb();

app.get("/", (req, res) => {
  res.send("Api Running Successfully!");
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
