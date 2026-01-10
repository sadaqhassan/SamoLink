import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{LogInIcon, LogOut, MenuIcon, MoonIcon, Sun, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import {LogoutFunction} from '../Store/user/userSlice'

const Nav = () => {
    const [mode,setMode] = useState('light')
    const {currentUser} = useSelector((state)=>state.userData);
    const [menuOpen,setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
    <main>
      {/* //deskttop/ */}
      <div className={`md:flex hidden items-center justify-between ${mode === 'light' ?  'bg-white px-2 py-2 text-black' :'bg-gray-700 px-2 py-2 text-white'} px-4 py-4 items-center shadow-2xl`}>
        <p className='text-xl md:text-2xl font-bold'>SamoLink</p>
        <div className='flex space-x-3'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/projects'}>Projects</Link>
        </div>
        <div className={`flex items-center border pl-4 gap-2  h-[46px] rounded-full overflow-hidden max-w-md w-full ${mode === 'dark' ? "border-gray-100" : "border"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
            </svg>
            <input type="text" placeholder="Search" className={`w-full h-full outline-none text-gray-500 bg-transparent ${mode === 'dark' ? "placeholder-gray-100" :"placeholder-gray-500"}  text-sm`} />
        </div>
        <div className='flex space-x-4'>
            <button className='mt-1.5' onClick={()=>{mode === 'dark' ? setMode('light') : setMode('dark')}} >{mode === 'light' ? <MoonIcon/> : <Sun/>}</button>
            {!currentUser ? 
            <button onClick={()=>navigate('/auth')} className='px-3 py-1 rounded bg-green-600 text-white'>Login</button>
            :
            <div className='group relative mr-16'>
               <p className='h-8 w-8 rounded-full  absolute bg-gray-700 text-white text-center justify-center flex items-center'>{currentUser.name.slice(0,1).toUpperCase()}</p>
               <div className='fixed top-14 gap-3 space-y-1 cursor-pointer right-10 hidden  group-hover:block bg-gray-200 px-4 py-2 rounded shadow-2xl'> 
                <p to={'/profile'}>Profile</p>
                <p onClick={()=>dispatch(LogoutFunction())} className='flex space-x-2 items-center'><LogInIcon size={20}/> Logout</p>
               </div>
            </div>
            }
        </div>
      </div>


      {/* //mobile */}
      
      <div className={`flex md:hidden justify-between ${mode === 'light' ? 'bg-gray-700 text-white px-2 py-2' : 'bg-white text-black px-2 py-2'} px-4 py-2 border-b-1 shadow-2xl`}>
        <p className='text-xl md:text-2xl font-bold'>SamoLink</p>
       
        <div className='flex space-x-4'>
            <button onClick={()=>{mode === 'dark' ? setMode('light') : setMode('dark')}} >{mode === 'dark' ? <MoonIcon/> : <Sun/>}</button>
            <button onClick={()=>setMenuOpen(!menuOpen)}>{!menuOpen ? <MenuIcon/> : <p className='h-8 w-8 rounded-full  bg-gray-100 text-gray-700 text-center justify-center flex items-center'>{currentUser?currentUser.name.slice(0,1).toUpperCase() : <X/>}</p>}</button>
        </div>
      </div>

{
    menuOpen &&
     <div className={`flex  md:hidden flex-col space-y-3 pl-5 py-4 ${mode === 'light' ? ' bg-gray-600 text-white' : ' bg-white text-black'}`}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/projects'}>Projects</Link>
        {
            currentUser ? 
            <button onClick={()=>dispatch(LogoutFunction())} className='px-3 py-1 flex mr-10 rounded bg-green-600 text-white'><LogOut/> Logout</button>
            :
            <button onClick={()=>navigate('/auth')} className='px-3 py-1 rounded bg-green-600 text-white'>Login</button>

        }
    </div>
}

    </main>
  )
}

export default Nav
