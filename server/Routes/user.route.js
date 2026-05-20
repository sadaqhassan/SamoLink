import { Router } from "express";
import { getUser, loginApi, registerApi } from "../Controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const user = Router();

user.post('/register',registerApi);
user.post('/login',loginApi);
user.get('/get-user',isAuth,getUser);

export const userRoute = user;