import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Api Running Successfully!");
});

app.listen(5000, () => {
    console.log("Server Running on PORT: 5000")
})
