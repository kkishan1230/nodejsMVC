import express from "express";
import "dotenv/config";

const adminAuthRouter = express.Router();

// login
adminAuthRouter.get("/login", (req, res, next) => {
  res.send("please logins");
});
adminAuthRouter.post("/login", () => {});

// register
adminAuthRouter.get("/register", (req, res) => {
  res.send("kishan");
});
adminAuthRouter.post("/register", () => {});

export default adminAuthRouter;
