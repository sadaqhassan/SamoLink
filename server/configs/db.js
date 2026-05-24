import mongoose from "mongoose"

const connectiondb = async ()=>{
    const url = process.env.DB_URL
    await mongoose.connect(url).then(()=>console.log("connected to the db")).catch((err)=>console.log(err));
};

export default connectiondb;

