import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.post('http://localhost:8080/logout');
        // Handle successful logout
        navigate('/');
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    handleLogout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;