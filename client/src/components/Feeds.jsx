import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { useLocation, useNavigate } from 'react-router-dom'
import CreatePost from '../Pages/CreatePost.jsx'
import UpdateProfile from '../Pages/UpdateProfile.jsx'
import { usePosts } from '../contexts/PostsContext.jsx'
import { useUser } from '../contexts/AuthContexts.jsx'
import { LogOut } from 'lucide-react'
import toast from 'react-hot-toast'

const Feeds = () => {
  const logoutFuntionity = async()=>{
    const res = await fetch("https://samolink-1.onrender.com/api/user/logout",{
      method:"POST",
      credentials:"include"
    })
    const data = await res.json();
    toast.success(data.message)
    window.location.reload()
  }
  const { posts } = usePosts()
  const {user} = useUser()

  const [createPostModel,setCreatePostModel] = useState(false) 
  const [updateModel,setUpdateModel] = useState(false)

  return (
    <div className='flex w-full max-w-2xl  flex-col items-start  overflow-y-auto  ml-5 mt-2  justify-center'>
     <button onClick={logoutFuntionity} className='bg-red-500 flex space-x-2 mt-4 text-white px-4 py-2 rounded'> <LogOut/> Logout</button>
       <div className='flex justify-between min-w-96 ml-5 bg-white border-b py-5 '>
        <img src="/Sam.png" className='w-26 h-26' alt="" />
        <div className='flex flex-col space-y-3'>
        <img onClick={()=>setUpdateModel(true)} src={user?.profileImage} alt="" className="w-10 h-10 rounded-full"/>
        <button onClick={()=>setCreatePostModel(true)} className='bg-cyan-600 px-2 py-1 rounded text-white'>Create New Post</button>
        </div>
      </div> 
     

      {
        createPostModel &&
        <CreatePost setCreatePostModel={setCreatePostModel}/>
      }

      {
        updateModel && 
        <UpdateProfile setUpdateModel={setUpdateModel}/>
      }
    {
      !createPostModel || !updateModel &&

      posts?.length > 0 ?  
      posts.map((post,index)=>(
        <PostCard data={post} key={index}/>
      )) 
      :
      <p>there's no Posts now</p>
    } 
    </div>
  )
}

export default Feeds