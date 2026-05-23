import postsSchema from "../Model/posts.schema.js"
import { User } from "../Model/user.schema.js"

//post 
export const postApi  = async (req,res) => {
    const {userId} = req
    const {content,image,owner,userProfile} = req.body
    if(!userId) return res.status(400).json({success:false,message:"you can't post "})
    try {
        const user = await User.findById(userId);
        
        const creating = await postsSchema.create({
            content,image,userId,owner:user.name,userProfile:user.profileImage
        });
        return  res.status(201).json({success:true ,message:"successfully posted"});

    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


//get
export const getPostsApi = async (req,res) => {
    try {
        const posts = await postsSchema.find();
        res.status(201).json({success:true,data:posts})
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
};


