import express from "express";
import "dotenv/config";

const consumerAuthRouter = express.Router();

// login
consumerAuthRouter.get("/login", (req, res) => {
  res.send("please logins");
});
consumerAuthRouter.post("/login", () => {});

// register
consumerAuthRouter.get("/register", (req, res) => {
  res.send("register");
});
consumerAuthRouter.post("/register", () => {});

export default consumerAuthRouter;
