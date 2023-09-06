import { connect } from "mongoose";
import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "../connectToDb";
import morgan from "morgan";
import adminAuthRouter from "../routes/admin/admin.route";
import consumerAuthRouter from "../routes/consumer/consumer.route";
import vendorAuthRouter from "../routes/vendor/vendor.route";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
connectToDb();

app.use("/admin", adminAuthRouter);
app.use("/vendor", vendorAuthRouter);
app.use("/consumer", consumerAuthRouter);

// error 404
app.use((req, res, next) => {
  res.send("Page Not found");
});

// start server
app.listen(3000, () => {
  console.log("server Connected on port 3000");
});
