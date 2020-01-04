import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";
import { updateLastSeen, checkAuth } from "../middlewares";
import { loginValidation } from "../utils/validations";

import { UserCtrl, DialogCtrl, MessageCtrl } from "../controllers";

const createRoutes = (app: express.Express, io: socket.Server) => {
    const UserController = new UserCtrl(io);
    const DialogController = new DialogCtrl(io);
    const MessageController = new MessageCtrl(io);

    app.use(bodyParser.json());
    app.use(updateLastSeen);
    app.use(checkAuth);

    app.get('/user/:id', UserController.index);
    app.get('/user/me', UserController.getMe);
    app.post('/user/registration', UserController.create);
    app.delete('/user/:id', UserController.delete);
    app.post('/user/login', loginValidation, UserController.login);

    app.get('/dialogs', DialogController.index);
    app.post('/dialogs', DialogController.create);
    app.delete('/dialogs/:id', DialogController.delete);

    app.get('/messages', MessageController.index);
    app.post('/messages', MessageController.create);
    app.delete('/messages/:id', MessageController.delete);
};

export default createRoutes;