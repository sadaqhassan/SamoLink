import React, { useEffect } from 'react'
import Side from '../components/Side'
import Feeds from '../components/Feeds'
import Right from '../components/Right'
import toast from'react-hot-toast'
import { useUser} from '../contexts/AuthContexts'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const { userApi , user} = useUser();

  return (
    <div className='flex justify-between'>
        <Side/>
        <Feeds/>
        <Right/>
    </div>
  )
}

export default Layout