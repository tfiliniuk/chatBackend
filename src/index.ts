import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

// import { UserModel } from "./models";
import { UserController, DialogController, MessageController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController();
const Message = new MessageController();

mongoose.connect('mongodb://localhost:27017/chat', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});

app.get("/user/:id", User.index);
app.post('/user/create', User.create);
app.delete('/user/:id', User.delete);

app.get("/dialogs", Dialog.index);
app.post("/dialogs", Dialog.create);
app.delete('/dialogs/:id', Dialog.delete);

app.get("/messages", Message.index);
app.post("/messages", Message.create);
app.delete('/messages/:id', Message.delete);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
