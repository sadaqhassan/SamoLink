import cookieParser from"cookie-parser";
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const configApp = async(app)=>{
    dotenv.config();
    app.use(express.json());
    app.use(cors({
        origin:["http://localhost:5173",  //development
        "https://samo-link.vercel.app","https://samo-link-9uz7cgzy6-sadaqxasans-projects.vercel.app"], // production
        credentials:true
    }))
    app.use(cookieParser());
    const port = process.env.PORT
    app.listen(port,()=>console.log("http://localhost:"+port))
}


export default configApp;