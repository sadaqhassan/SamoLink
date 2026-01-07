import { Router } from "express";
import { loginApi, logoutApi, registerApi } from "../Controllers/auth.controller.js";

const userRoute = Router();

userRoute.post('/register',registerApi)
userRoute.post('/login',loginApi)
userRoute.post('/logout',logoutApi)

export default userRoute;