import bcrypt from 'bcryptjs'
import { User } from '../Model/user.schema.js';
import jwt from 'jsonwebtoken'
//register


export const registerApi = async (req,res)=>{
    const {email,password,role,name} = req.body

    if(!email || !password || !name){
        return res.status(400).json({success:false,message:"fill all inputs"})
    }

    try {
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({success:false,message:"this user is alrady exist"})
        }

        let role ;

        if(email === process.env.email){
            role = "admin"
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser =  new User({
            name,
            email,
            password:hashPassword,
            role
        });

        await newUser.save();

        return res.status(201).json({success:true ,message:"register successfully"});

    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


//login

export const loginApi = async (req,res)=>{
    const {email,password} = req.body
    
    if(!email || !password){
        return res.status(400).json({success:false,message:"fill all inputs"})
    }
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({success:false,message:"invalid credentials"})
        }
        const isCompare = await bcrypt.compare(password,user.password);

        if(!isCompare){
            return res.status(401).json({success:false,message:"invalid credentials"})
        }
        
        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"});

        const {password:pass,...userData} = user._doc

        res.cookie("token",token).status(200).json({success:true,message:"welcome back",userData:userData})
    }catch(error){
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


//geetUserProfile

export const getUser = async (req,res) => {
    const { userId } = req
    console.log(userId)
    try {
        const user = await User.findById(userId).select("-password")
        if(!user){
        return res.status(404).json({success:false, message:"user not found"});
        }
        res.status(200).json({success:true, userData:user});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


//update

export const updateProfile = async (req,res) => {
    const {userId} = req
    const {name,email,profileImage} = req.body
    try {
        const user   = await User.findByIdAndUpdate(userId,{
            name,email,profileImage
        },{
            new:true
        });
        if(!user) return res.status(400).json({success:false , message:"update failed"});

        return res.status(201).json({success:true,message:"update successFully"});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


//logout


export const logoutApi = async (req,res) => {
    res.clearCookie("token").status(200).json({success:true,message:"logout successfully"})
}