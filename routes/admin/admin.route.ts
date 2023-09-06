import express from "express";
import "dotenv/config";
import { registerAdmin } from "../../controller/admin/admin.controller";

const adminAuthRouter = express.Router();

// login
adminAuthRouter.get("/login", (req, res) => {});
adminAuthRouter.post("/login", (req, res) => {
  res.send("working");
});

// register
adminAuthRouter.get("/register", (req, res) => {
  res.send("register");
});
adminAuthRouter.post("/register", registerAdmin);

export default adminAuthRouter;
