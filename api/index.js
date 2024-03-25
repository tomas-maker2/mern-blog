import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB OK"))
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => console.log("Server OK"));

// GbesrntzVG0oC2Bi
