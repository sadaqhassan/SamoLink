import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import {Toaster} from 'react-hot-toast'
import { useUser } from './contexts/AuthContexts'
import Feeds from './Pages/Feeds'
const App = () => {
  const {user} = useUser();
  return (
    <div>
      {<Toaster/>}
      <Routes>
        <Route path='/' element={user != null  ? <Feeds/> :  <Login/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App