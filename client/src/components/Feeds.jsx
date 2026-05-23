import React, { useEffect, useState } from 'react'
import { posts } from '../helpers/data.js'
import PostCard from './PostCard'
import { useLocation, useNavigate } from 'react-router-dom'
import CreatePost from '../Pages/CreatePost.jsx'
import { useUser } from '../contexts/AuthContexts.jsx'
import UpdateProfile from '../Pages/UpdateProfile.jsx'

const Feeds = () => {
  const [createPostModel,setCreatePostModel] = useState(false) 
  const [updateModel,setUpdateModel] = useState(false)
  const {user} = useUser()

  return (
    <div className='flex w-full max-w-2xl  flex-col items-start  overflow-y-auto  ml-5 mt-2  justify-center'> 
    {/* Create Post */}
            <div  className="bg-white md:ml-5 mt-2 rounded-xl md:ml:0 ml-5 shadow  p-4 mb-5 ">
              {
                !createPostModel &&
                <div  className='flex space-x-4 items-center mr-3'>
                <div onClick={()=>setCreatePostModel(true)}  className="flex items-start space-y-3 flex-col gap-3">
                <p className='text-md ml-4'>create post</p>
                <div  className='flex space-x-4 items-center '>
                  <div className="flex flex-col items-center justify-center">
                  <img onClick={(e)=>{setUpdateModel(true); e.stopPropagation()}}
                  src={user?.profieImage}
                  alt=""
                  className="w-10 mb-4 h-10 rounded-full"
                />
                profile 
                  </div>

                <input
                  type="text"
                  placeholder="create post"
                  readOnly
                  className="bg-gray-100 flex-1 rounded-full px-5 py-3 outline-none"
                />
                </div>
              </div>
              {/* //right */}
              <div  className="flex items-start space-y-3 max-w-xl flex-col gap-3">
                
                </div>
              </div>
              
              }
            </div>
    {
      createPostModel ? <CreatePost setCreatePostModel={setCreatePostModel}/> 
      :
      posts.map((post,index)=>(
        <PostCard data={post} key={index}/>
      ))
    }  

    {
      updateModel && <UpdateProfile setUpdateModel={setUpdateModel}/> 
    }  
    </div>
  )
}

export default Feeds