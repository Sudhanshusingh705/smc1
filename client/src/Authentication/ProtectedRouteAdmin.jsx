import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {useSelector } from 'react-redux';

const ProtectedRouteAdmin = () => {
  
  const auth = useSelector((state) => state.authReducer)
  const navigate= useNavigate()
  
  useEffect(() => {
    
    try{
        if(!auth.token){
        navigate("/login");
          
        }
    
    }
    catch(err){

    }
   
    
  });

  return <Outlet />;
};

export default ProtectedRouteAdmin;