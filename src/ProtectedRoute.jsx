import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Admin/Login/Login'

function ProtectedRoute({open}) {

  return (
    <>
      {
        open ? <Outlet/> :  <Navigate to={'/login'} />
      }


    </>
  )
}

export default ProtectedRoute
