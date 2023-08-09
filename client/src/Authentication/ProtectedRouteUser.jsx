import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';


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