import express from "express";
import { UserModel } from "../models";

export default (_: express.Request, __: express.Response, next: express.NextFunction) => {
  UserModel.findOneAndUpdate(
    { _id: "5e0a4773899e6a0c98d65393"},
    {last_seen: new Date()},
    {new: true},
    () => {}
  );
  next();
}
