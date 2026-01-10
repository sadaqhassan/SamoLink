import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const {currentUser} = useSelector((state)=>state.userData);
  const dispatch = useDispatch()
  return (
    <div>
     {
      currentUser? "Welcome mr _"+currentUser?.name : "Please Login !!" 
     }
    </div>
  )
}

export default Home
