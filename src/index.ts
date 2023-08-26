import { connect } from "mongoose";
import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "../connectToDb";
import authRouter from "../routes/auth.route";
import morgan from "morgan";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
connectToDb();

app.use("/auth", authRouter);

// error 404
app.use((req, res, next) => {
  res.send("Page Not found");
});

// start server
app.listen(3000, () => {
  console.log("server Connected on port 3000");
});
