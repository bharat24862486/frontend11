import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const Private = ({children}) => {
    // let navigate = useNavigate
    let token = localStorage.getItem('token')
  if(!token){
    return <Navigate to={'/login'}/>
  }

  return children
}

export default Private
