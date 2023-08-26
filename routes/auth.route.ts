import express from "express";
import "dotenv/config";
import { authUser } from "../controller/auth/auth.controllar";

const authRouter = express.Router();

// login
authRouter.get("/login", (rq, res, next) => {
  res.send("please login");
});
authRouter.post("/login", authUser.loginUser);

// register
authRouter.get("/register", (req, res) => {
  res.send("kishan");
});
authRouter.post("/register", authUser.registerUser);

export default authRouter;
