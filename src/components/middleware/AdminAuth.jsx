import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { messageToastError } from '../../handlers/messageToast';
import Loading from '../Loading';

const AdminAuthMiddleware = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    const checkToken = async () => {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/admin/auth/login');
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/_t/${ token }`);
        console.log(response.data);
        
        if (!response.data.success) {
          localStorage.removeItem('token');
          // messageToastError("Something went wrong! Please login Again To Continue")
            navigate('/admin/auth/login');
        }
        
        if(response.data.success){
          console.log(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        localStorage.removeItem('token');
        // messageToastError("Something went wrong! Please login Again To Continue")
        navigate('/admin/auth/login');
      }
    };

    checkToken();
  }, [navigate]);

  if(isLoading){
    return <Loading/>
  }else{
    
    return children;
  }

};

export default AdminAuthMiddleware;