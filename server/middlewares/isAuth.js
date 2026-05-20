import jwt from 'jsonwebtoken'

export const isAuth = async (req,res,next) => {
  const token = req.cookies.token

  if(!token){
    return res.status(403).json({success:false ,message:"please login"})
  }

  const verify = await jwt.verify(token,process.env.JWT_SECRET);

  if(!verify){
    return res.status(403).json({success:false ,message:"please are not authed"})
  }

  req.userId = verify.id;

  next();
}