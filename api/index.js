import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB OK"))
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internval server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => console.log("Server OK"));

// GbesrntzVG0oC2Bi
