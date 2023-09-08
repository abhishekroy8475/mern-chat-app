import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import User from "./models/userModel.js";

dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;
connectDb();

app.post("/user", async (req, res) => {
  const { name, email, password, photo } = req.body;

  if (!name || !email || !password) {
    res.send("no data");
  }

  try {
    const newUser = await User.create({ name, email, password, photo });
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
