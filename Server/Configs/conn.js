import mongoose from "mongoose";

export const connectionTodb = async()=>{
    const uri  = process.env.DBURI;
    
   await mongoose.connect(uri).then(()=>console.log('server connected to the Database'))
};
