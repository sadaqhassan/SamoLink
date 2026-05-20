import React, { useEffect, useState } from 'react'
import { posts } from '../helpers/data.js'
import PostCard from './PostCard'
import { useLocation, useNavigate } from 'react-router-dom'
import CreatePost from '../Pages/CreatePost.jsx'

const Feeds = () => {
  const [createPostModel,setCreatePostModel] = useState(false) 

  return (
    <div className='flex w-full max-w-2xl  flex-col items-center  overflow-y-auto  justify-center'> 
    {/* Create Post */}
            <div onClick={()=>setCreatePostModel(true)} className="bg-white rounded-xl  shadow  p-4 mb-5 ">
              {
                !createPostModel &&
                <div  className="flex items-start space-y-3 flex-col gap-3">
                <p className='text-md ml-4'>create post</p>
                <div className='flex space-x-4 items-center '>
                  <img
                  src="https://i.pravatar.cc/40"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />

                <input
                  type="text"
                  placeholder="What's on your mind?"
                  readOnly
                  className="bg-gray-100 flex-1 rounded-full px-5 py-3 outline-none"
                />
                </div>
              </div>
              }
            </div>
    {
      createPostModel ? <CreatePost/> 
      :
      posts.map((post,index)=>(
        <PostCard data={post} key={index}/>
      ))
    }  
    </div>
  )
}

export default Feeds