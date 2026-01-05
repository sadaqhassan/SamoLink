import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import{ MoonIcon, Sun } from 'lucide-react'

const Nav = () => {
    const [mode,setMode] = useState('light')
  return (
    <main>
      {/* //deskttop/ */}
      <div className='md:flex hidden justify-between px-4 py-2'>
        <p>SamoLink</p>
        <div className='flex space-x-3'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/projects'}>Projects</Link>
        </div>
        <div>
            <button>{mode === 'light' ? <MoonIcon/> : <Sun/>}</button>
            <button className='px-3 py-1 rounded bg-green-600 '>Login</button>
        </div>
      </div>


    </main>
  )
}

export default Nav
