import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Signup from '../Component/Signup'
import Signin from '../Component/Signin'
import Emi from '../Component/Emi'
import Profile from '../Component/Profile'
import Private from '../Component/Private'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Signup />}/>
        <Route path='/login' element={<Signin />}/>
        <Route path='/EMIcalculate' element={<Private><Emi /></Private>}/>
        <Route path='/profile' element={<Private><Profile /></Private>}/>

      
    </Routes>
  )
}

export default MainRoutes
