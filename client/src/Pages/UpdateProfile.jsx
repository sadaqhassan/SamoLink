import React from 'react'
import { useUser } from '../contexts/AuthContexts'
import { ArrowLeft } from 'lucide-react'

const UpdateProfile = ({setUpdateModel}) => {
    const {user} = useUser()
  return (
    <div className='flex flex-col justify-center items-center fixed inset-0   bg-black/90  z-20'>
        <form action="" className='bg-white p-10  justify-center  items-center  rounded shadow-xl   flex flex-col space-y-4    '>
        <button  onClick={()=>setUpdateModel(false)} className="flex cursor-pointer items-center font-bold "> <ArrowLeft/>Back</button>

            <div className='flex flex-col justify-center items-center'>
                <img src={user?.profieImage} alt="" />
            </div>
            <input type="text" name="" className='bg-gray-200 px-2 py-1 rounded' value={user?.name} id="" />
            <input type="text" name="" className='bg-gray-200 px-2 py-1 rounded' value={user?.email} id="" />
            <input type="text" name="" className='bg-gray-200 px-2 py-1 rounded' value={user?.password} id="" />
            <input type="button" value="Submit" className='bg-cyan-600 px-3 py-1 rounded text-white' />
        </form>
    </div>
  )
}

export default UpdateProfile