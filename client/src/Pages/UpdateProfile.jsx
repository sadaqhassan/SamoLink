import React, { useRef, useState } from 'react'
import { useUser } from '../contexts/AuthContexts'
import { ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

const UpdateProfile = ({setUpdateModel}) => {
    const {user,userApi} = useUser()
    const ref = useRef();
    const [image ,setImage] = useState();
    const [inputData,setInputData] = useState(null)

    const handleFileChange = async(e)=>{
    const file = e.target.files[0];
    
    if (file){
    setImage(URL.createObjectURL(file));
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
      profileImage:datares.secure_url
    }))

    console.log(datares)
    console.log(inputData)
}

const handleChange = (e)=>{
    const {name,value} = e.target
    setInputData((prev)=>({
    ...prev,
    [name]:value
}))}

const handleSubmit = async (e) => {
    toast.loading("saving...",{id:"save"})
    const res = await fetch(`${userApi}/update`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        credentials:"include",
        body:JSON.stringify(inputData)
    })
    const data = await res.json();

    if(!data.success) return toast.error(data.message,{id:"save"});
    toast.success(data.message,{id:"save"});
    setUpdateModel(false)
}


return (
    <div className='flex flex-col justify-center items-center fixed inset-0   bg-black/90  z-20'>
        <div  className='bg-white p-10  justify-center  items-center  rounded shadow-xl   flex flex-col space-y-4    '>
        <button onClick={()=>setUpdateModel(false)} className="flex cursor-pointer items-center font-bold "> <ArrowLeft/>Back</button>

            <div className='flex flex-col justify-center items-center'>
                <img className='w-16 h-16 rounded-full' src={image ? image : user?.profileImage} alt="" />
                <input onChange={handleFileChange} className='hidden' type="file" ref={ref} name="image" id="" />
                <button onClick={(e)=>ref.current.click()} className='bg-gray-600 text-white px-3 py-1 rounded m-4'>change image</button>
            </div>
            <input onChange={handleChange} type="text"  name="name" className='bg-gray-200 px-2 py-1 rounded' value={inputData? inputData.name : user.name} id="" />
            <input onChange={handleChange} type="email" name="email" className='bg-gray-200 px-2 py-1 rounded' value={inputData ? inputData.email : user?.email} id="" />
            <input onChange={handleChange} type="password" name="password" className='bg-gray-200 px-2 py-1 rounded' value={inputData? inputData.password : user?.password} id="" />
            <input onClick={handleSubmit} type="button" value="Save" className='bg-cyan-600 px-3 py-1 rounded text-white' />
        </div>
    </div>
  )
}

export default UpdateProfile