import { Router } from "express";
import { getUser, loginApi, logoutApi, registerApi, updateProfile } from "../Controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const user = Router();

user.post('/register',registerApi);
user.post('/login',loginApi);
user.get('/get-user',isAuth,getUser);
user.put('/update',isAuth,updateProfile);
user.post('/logout',isAuth,logoutApi);

export const userRoute = user;