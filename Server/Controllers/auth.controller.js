import { User } from "../Models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//signUp
export const registerApi = async(req,res)=>{
    const {email,password,name} = req.body

    if(!email || !password || !name){
       return res.status(400).json({success:false,message:"please fill all credentials"})
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

        res.status(200).json({success:true, message:"Resgisteration successFully"})
    }catch(err){
        console.log(err.message)
        res.json({success:false,message:"server error"})
    }
}


//loginApi

export const loginApi = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Fill all credentials"
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Email or Password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Email or Password"
      });
    }

    // JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

   const {password:pass,...rest} = user._doc;



    return res.status(200)
    .cookie('accessToken',token,{httpOnly:true})
    .json({
      success: true,
      message: `Welcome ${user.name}`,
      userData: rest
    })

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
 
// logout
export const logoutApi = async(req,res)=>{
  try{
    const token = cookies.accessToken;
    cookies.clear(token);

  }catch(err){
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
}