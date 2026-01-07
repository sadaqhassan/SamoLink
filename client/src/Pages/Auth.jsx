import React ,{ useState } from 'react'

import toast from 'react-hot-toast'

const Auth = () => {
  const [userData , setUserData] = useState({})
  const [state,setState]= useState('login')

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUserData((prev)=>({
      ...prev,
      [name]:value
    }));
  }

  const handleSubmit = async(e)=>{
    console.log(userData)
    e.preventDefault();
    //register
    if(state === 'register'){
      try {
        const res = await fetch('http://localhost:4000/api/auth/register/',{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(userData)
      });
      const data = await res.json();
      if(!data.success){
        return toast.error(data.message)
      }
      if(data.success){
        toast.success(data.message);
      }
      } catch (error) {
        toast.error(error.message);
      }
    }else{
       //login..
      try {
        const res = await fetch('http://localhost:4000/api/auth/login/',{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(userData)
      });
      const data = await res.json();
      if(!data.success){
        return toast.error(data.message)
      }
      if(data.success){
        toast.success(data.message);
      }
      } catch (error) {
        toast.error(error.message);
      }
    }

   
  }
  return (
    <div className='flex flex-col justify-center bg-black/80 items-center fixed z-10 inset-0'>
      <form onSubmit={handleSubmit} className='flex rounded-2xl bg-white p-10 shadow-2xl flex-col space-y-3' action="">
        <h1 className='text-2xl mb-5 text-blue-700 md:text-3xl text-center font-bold'>{state === 'register' ? "Register" : "Login"}</h1>
        
        {
          state === 'register' && <input value={userData?.name || ""} onChange={handleChange}  className='bg-gray-100 px-2 py-1 rounded' type="text" name='name' placeholder='first_name'/>
        }
        <input  value={userData?.email || ""} onChange={handleChange} className='bg-gray-100 px-2 py-1 rounded' type="email" name='email' placeholder='email'/>
        <input value={userData?.password || ""} onChange={handleChange}  className='bg-gray-100 px-2 py-1 rounded'  type="password" name='password' placeholder='password'/>
        
        <input className='bg-blue-600 text-white px-2 py-1 rounded'  type="submit" value={state === 'register' ? "Register" : "Login"}/>

        <div>
          {
            state === 'register' ? "Have an account ? "
            : "Don't have an account ?"
          }
          <button type='button' onClick={()=>{state === 'register' ? setState('login') : setState('register'); setUserData({}) }}>{state === 'register' ? "Login" : "Register"}</button>
        </div>
        <button type='button' className='outline-blue-600 outline-1 px-2 py-1 rounded-xl'>Continue to Google</button>

      </form>
    </div>
  )
}

export default Auth
