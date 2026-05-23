import jwt from 'jsonwebtoken'
import { User } from '../Model/user.schema.js';

export const isAuth = async (req,res,next) => {
  const token = req.cookies.token

  if(!token){
    return res.status(403).json({success:false ,message:"please login"})
  }

  const verify = await jwt.verify(token,process.env.JWT_SECRET);

  if(!verify){
    return res.status(403).json({success:false ,message:"please are not authed"})
  }
  
  const user =   await User.findById(verify.id);
  if(!user){
    return res.status(404).json({success:false,message:"user not found"})
  }

  req.userId = verify.id

  next();
}