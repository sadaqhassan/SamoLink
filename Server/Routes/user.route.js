import { Router } from "express";
import { loginApi, registerApi } from "../Controllers/auth.controller.js";

const userRoute = Router();

userRoute.post('/register',registerApi)
userRoute.post('/login',loginApi)

export default userRoute;