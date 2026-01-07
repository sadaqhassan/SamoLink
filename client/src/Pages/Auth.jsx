import React from 'react'
import { useState } from 'react'

const Auth = () => {
  const handleSubmit = async(e)=>{
    e.preventDefault();
  }
  const [state,setState]= useState('login')
  return (
    <div className='flex flex-col justify-center bg-black/80 items-center fixed z-10 inset-0'>
      <form onSubmit={handleSubmit} className='flex rounded-2xl bg-white p-10 shadow-2xl flex-col space-y-3' action="">
        <h1 className='text-2xl mb-5 text-blue-700 md:text-3xl text-center font-bold'>{state === 'register' ? "Register" : "Login"}</h1>
        <input  className='bg-gray-100 px-2 py-1 rounded' type="text" name='name' placeholder='first_name'/>
        {
          state === 'register' && <input className='bg-gray-100 px-2 py-1 rounded' type="email" name='email' placeholder='email'/>
        }
        <input  className='bg-gray-100 px-2 py-1 rounded'  type="password" name='password' placeholder='password'/>
        
        <input className='bg-blue-600 text-white px-2 py-1 rounded'  type="submit" value={state === 'register' ? "Register" : "login"}/>

        <div>
          {
            state === 'register' ? "Have an account ? "
            : "Don't have an account ?"
          }
          <button onClick={()=>{state === 'register' ? setState('login') : setState('register') }}>{state === 'register' ? "Login" : "Register"}</button>
        </div>
      </form>
    </div>
  )
}

export default Auth
