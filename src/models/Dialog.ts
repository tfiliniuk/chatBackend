import mongoose, { Schema, Document } from "mongoose";
import isEmail from 'validator/lib/isEmail';

export interface IDialog extends Document {
  partner: {
    type: Schema.Types.ObjectId,
    ref: string,
    require: true
  };
  author: {
    type: Schema.Types.ObjectId,
    ref: string,
    require: true
  };
  message: [{
    type: Schema.Types.ObjectId,
    ref: string
  }];
}

const DialogSchema = new Schema ({
  partner: {type: Schema.Types.ObjectId, ref: "User"},
  author: {type: Schema.Types.ObjectId, ref: "User"},
  lastMessage: {type: Schema.Types.ObjectId, ref: "Message"},
}, {
  timestamps: true
});

// new DialogModel({
//   partner: partner_id,
//   author: author_id
// })

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema)

export default DialogModel;
