import React, { useEffect } from 'react'
import PageLayout from '../App/PageLayout'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedLayout() {

  const navigate  = useNavigate()
    const auth = useSelector((store)=>store.authReducer)


  return (
    <div>
        
            <PageLayout Outlet={<Outlet />} />
              
      
    </div>
  )
}
