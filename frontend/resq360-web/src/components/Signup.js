import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { TextField, Button, Container, Typography } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      // Redirect to home or profile page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">Sign Up</Button>
      </form>
    </Container>
  );
};

export default Signup;