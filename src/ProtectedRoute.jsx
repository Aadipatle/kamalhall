import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Admin/Login/Login'

function ProtectedRoute({open}) {
    // const navigate = Navigate()
// const [open,setOpen] = useState(true)

  return (
    <>
      {
        open ? <Outlet/> :  <Navigate to={'/login'} />
      }


    </>
  )
}

export default ProtectedRoute
