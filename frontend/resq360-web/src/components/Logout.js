import React from 'react';
import { useAuth } from '../AuthContext';
import { Button } from '@mui/material';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to login page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
  );
};

export default Logout;