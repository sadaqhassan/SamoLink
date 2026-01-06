import { Router } from "express";
import { registerApi } from "../Controllers/auth.controller.js";

const userRoute = Router();

userRoute.post('/register',registerApi)

export default userRoute;