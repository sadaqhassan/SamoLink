import express from 'express'
import cookieParser  from "cookie-parser";
import cors from 'cors'
import 'dotenv/config'

export const config = (app)=>{
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
};
