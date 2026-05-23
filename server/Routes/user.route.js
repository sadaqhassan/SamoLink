import { Router } from "express";
import { getUser, loginApi, registerApi, updateProfile } from "../Controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const user = Router();

user.post('/register',registerApi);
user.post('/login',loginApi);
user.get('/get-user',isAuth,getUser);
user.put('/update',isAuth,updateProfile);

export const userRoute = user;