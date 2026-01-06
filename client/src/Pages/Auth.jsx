import React from 'react'
import { useState } from 'react'

const Auth = () => {
  const [state,setState]= useState('login')
  return (
    <div className='flex flex-col justify-center items-center fixed top-10 z-10'>
      <form className='flex flex-col space-y-3' action="">
        <h1>{state === 'register' ? "Register" : "Login"}</h1>
        <input type="text" name='name' placeholder='first_name'/>
        {
          state === 'register' && <input type="email" name='email' placeholder='email'/>
        }
        <input type="password" name='password' placeholder='password'/>
        
        <input type="submit" value={state === 'register' ? "Register" : "login"}/>

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
