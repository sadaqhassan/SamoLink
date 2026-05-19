import cookieParser from"cookie-parser";
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const configApp = async(app)=>{
    dotenv.config();
    app.use(express.json());
    app.use(cors())
    app.use(cookieParser());
    const port = process.env.PORT
    app.listen(port,()=>console.log("http://localhost:"+port))
}


export default configApp;