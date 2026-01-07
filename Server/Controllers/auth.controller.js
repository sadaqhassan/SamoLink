import { User } from "../Models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//signUp
export const registerApi = async(req,res)=>{
    const {email,password,name} = req.body

    if(!email || !password || !name){
       return res.status(400).json({success:false,message:"fill all credentials"})
    };
    try{
        const isUser = await User.findOne({email});
        if(isUser) {
            return res.status(400).json({success:false,message:"This user is exist"})
        }

        const hashPassword = bcrypt.hashSync(password,10);
        
        const newUser =  new User({
            name:name,
            email:email,
            password:hashPassword
        });

        await newUser.save();


        // const token = jwt.sign({id:isUser._id});
        
        // res.cookies(token);

        res.status(200).json({success:false, message:"Resgisteration successFully"})
    }catch(err){
        console.log(err.message)
        res.json({success:false,message:"server error"})
    }
}


//loginApi

export const loginApi = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) {
        return  res.status(400).json({success:false,message:"fill all credentials"})
    };
}