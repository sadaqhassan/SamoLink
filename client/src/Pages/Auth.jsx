import React from 'react'
import { useState } from 'react'

const Auth = () => {
  const [state,setState]= useState('login')
  return (
    <div className='flex flex-col justify-center items-center fixed top-10 z-10'>
      <form className='flex flex-col space-y-3' action="">
        <input type="text" name='name' placeholder='first_name'/>
        {
          state === 'register' && <input type="email" name='email' placeholder='email'/>
        }
        <input type="password" name='password' placeholder='passord'/>
      </form>
    </div>
  )
}

export default Auth
