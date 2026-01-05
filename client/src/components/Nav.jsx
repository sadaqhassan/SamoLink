import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import{ MenuIcon, MoonIcon, Sun } from 'lucide-react'

const Nav = () => {
    const [mode,setMode] = useState('light')
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <main>
      {/* //deskttop/ */}
      <div className={`md:flex hidden justify-between ${mode === 'light' ? 'bg-gray-700 px-2 py-2 text-white' : 'bg-white px-2 py-2 text-black'} px-4 py-2 border-b-1 shadow-2xl`}>
        <p>SamoLink</p>
        <div className='flex space-x-3'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/projects'}>Projects</Link>
        </div>
        <div className='flex space-x-4'>
            <button onClick={()=>{mode === 'dark' ? setMode('light') : setMode('dark')}} >{mode === 'light' ? <MoonIcon/> : <Sun/>}</button>
            <button className='px-3 py-1 rounded bg-green-600 text-white'>Login</button>
        </div>
      </div>


      {/* //mobile */}
      
      <div className={`flex md:hidden justify-between ${mode === 'light' ? 'bg-gray-700 text-white px-2 py-2' : 'bg-white text-black px-2 py-2'} px-4 py-2 border-b-1 shadow-2xl`}>
        <p>SamoLink</p>
       
        <div className='flex space-x-4'>
            <button onClick={()=>setMenuOpen(!menuOpen)}><MenuIcon/></button>
            <button onClick={()=>{mode === 'dark' ? setMode('light') : setMode('dark')}} >{mode === 'dark' ? <MoonIcon/> : <Sun/>}</button>
        </div>
      </div>

{
    menuOpen &&
     <div className={`flex  md:hidden flex-col space-y-3 pl-5 py-4 ${mode === 'light' ? ' bg-gray-600 text-white' : ' bg-white text-black'}`}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/projects'}>Projects</Link>
        <button className='px-3 py-1 rounded bg-green-600 text-white'>Login</button>

    </div>
}

    </main>
  )
}

export default Nav
