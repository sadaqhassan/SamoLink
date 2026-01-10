import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const {currentUser} = useSelector((state)=>state.userData);
  const dispatch = useDispatch()
  return (
    <div>
     welcome Mr _{
      currentUser?.name
     }
    </div>
  )
}

export default Home
