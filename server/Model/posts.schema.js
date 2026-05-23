import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
},{
    timestamps:true
});

export default mongoose.model("Post",postSchema)