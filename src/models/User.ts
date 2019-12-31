import mongoose, { Schema, Document } from "mongoose";
import isEmail from 'validator/lib/isEmail';

export interface IUser extends Document {
  email: string,
  fullName: string,
  password: string,
  confirmed: boolean,
  avatar: string,
  confirm_hash: string,
  last_seen: Date
}

const UserSchema = new Schema ({
  email: {
    type: String,
    required: "Email address is required",
    validate: [isEmail, "Invalid email"],
    index: {
      unique: true
    }
  },
  fullName: {
    type: String,
    required: "fullName is required"
  },
  password: {
    type: String,
    required: "password is required"
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  confirmed_hash: String,
  last_seen: Date,
  avatar: String,
}, {
  timestamps: true
});

const UserModel = mongoose.model<IUser>("User", UserSchema)

export default UserModel;
