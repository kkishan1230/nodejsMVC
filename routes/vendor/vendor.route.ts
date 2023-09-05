import express from "express";
import "dotenv/config";

const vendorAuthRouter = express.Router();

// login
vendorAuthRouter.get("/login", (req, res, next) => {
  res.send("please logins");
});
vendorAuthRouter.post("/login", () => {});

// register
vendorAuthRouter.get("/register", (req, res) => {
  res.send("kishan");
});
vendorAuthRouter.post("/register", () => {});

export default vendorAuthRouter;
