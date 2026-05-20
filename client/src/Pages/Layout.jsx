import React from 'react'
import Side from '../components/Side'
import Feeds from '../components/Feeds'
import Right from '../components/Right'

const Layout = () => {
  return (
    <div className='flex justify-between'>
        <Side/>
        <Feeds/>
        <Right/>
    </div>
  )
}

export default Layout