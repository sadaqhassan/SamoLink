import React, { useState } from "react";
import { ArrowLeft, ArrowRightLeft, Image, Smile } from 'lucide-react'
import { useUser } from "../contexts/AuthContexts";
import { usePosts } from "../contexts/PostsContext";
import toast from "react-hot-toast";

const CreatePost = ({setCreatePostModel}) => {
  const [inputData, setInputData] = useState(null);
  const [imageReady, setImageReady] = useState(false);
  const [imageUrl,setImageUrl] = useState("");
 const {postsApi} = usePosts()

  const handleImage = async(e) => {
    let file = e.target.files[0];
    
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    };
    toast.loading("uploading image....",{id:"image"})

    const formatData = new FormData();
    formatData.append("file",file);
    formatData.append("upload_preset","bajajStore")

    const uploadingImg = await fetch("https://api.cloudinary.com/v1_1/dg2unrqee/image/upload",{
      method:"POST",
      body:formatData,
    });

    const datares = await uploadingImg.json();

    if(!datares){
      return toast.error("image",{id:"image"})
    }

    toast.success("updloaded" ,{id:"image"})

    setInputData((prev)=>({
      ...prev,
      image:datares.secure_url
    }))

    console.log(datares)
    console.log(inputData)
    
  };

  const handleChange = (e)=>{
    const {value , name} = e.target

    setInputData((prev)=>({
      ...prev,
      [name]:value
    }))

    console.log(inputData)
  }

const handleSubmit = async(e) => {
    e.preventDefault()
    toast.loading("posting...",{id:"post"})
    const res = await fetch(`${postsApi}/post`,{
      method:"POST",
      headers:{"content-type":"application/json"},
      credentials:"include",
      body : JSON.stringify(inputData),
    });
    const data = await res.json();
    if(!data.success){

      return toast.error(data.message,{id:"post"})
    }

    setImageReady(true)

    toast.success(data.message,{id:"post"})
    
    console.log(data);

};

  const {user} = useUser();
  return (
    <div>
      <button  onClick={()=>setCreatePostModel(false)} className="flex cursor-pointer items-center font-bold "> <ArrowLeft/>Back</button>
    <div className="min-h-screen w-[500px] flex justify-center p-10">
      <div className="w-full  bg-white rounded-2xl shadow-md p-5">
        {/* Header */}
        <div className="flex items-center gap-3 border-b pb-4">
          <img
            src={user.profileImage}
            alt=""
            className="w-14 h-14 rounded-full"
          />

          <div>
            <h2 className="font-semibold text-lg">
              Create Post
            </h2>
            <p className="text-gray-500 text-sm">
              Share something with friends
            </p>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          name="content"
          onChange={handleChange}
          value={inputData?.content}
          placeholder="What's on your mind?"
          className="w-full mt-5 bg-gray-100 rounded-xl p-4 outline-none resize-none h-40"
        />

        {/* Preview Image */}
        {imageUrl && (
          <div className="mt-4">
            <img
              src={imageUrl}
              alt=""
              className="rounded-xl w-full h-[350px] object-cover"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between mt-5 border rounded-xl p-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <Image size={20} />
            <span>Photo</span>

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </label>


          <button className="flex items-center gap-2">
            <Smile size={20} />
            Feeling
          </button>
        </div>

        {/* Post Button */}
        
        <button
          onClick={handleSubmit}
          className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:opacity-90"
        >
          Post
        </button>
        
      </div>
    </div>
    </div>
  );
};

export default CreatePost;