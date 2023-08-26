import express from "express";
import { connect } from "mongoose";

const app = express();

export const connectToDb = () => {
  connect("mongodb://127.0.0.1:27017/Users")
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};
