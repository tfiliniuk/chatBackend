import express from "express";
import { MessageModel } from "../models";

class MessageController {
  index(req: express.Request, res: express.Response) {
    const dialogId: string = req.query.dialog;
    MessageModel.find({ dialog: dialogId})
    .populate(["dialog"])
    .exec(function(err, message) {
      if(err) {
        return res.status(404).json({
          message: "Messages not found"
        })
      }
      return res.json(message)
    })
  }

  create(req: express.Request, res: express.Response) {
    const userId = "5e0a4752899e6a0c98d65392";
    const postData = {
      text: req.body.text,
      user: userId,
      dialog: req.body.dialog_id,
    };
    const message = new MessageModel(postData);
    message.save().then((obj: any) => {
      res.json(obj)
    })
    .catch(reason => {
      res.json(reason)
    });
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    MessageModel.findOneAndRemove({ _id: id})
      .then(mess => {
        if(mess) {
          res.json({
            message: `Message deleted`
          })
        }
      })
      .catch(err => {
        res.json({
          message: 'Message not found'
        });
      });
  }
}

export default MessageController;
