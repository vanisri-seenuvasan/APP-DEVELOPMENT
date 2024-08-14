import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API endpoint
      await axios.post('http://localhost:3001/forgot-password', { email });
      setMessage('If this email is registered, you will receive a password reset link.');
    } catch (error) {
      console.error('There was an error sending the password reset email!', error);
      setMessage('There was an error sending the password reset email.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography component="h1" variant="h4">Forgot Password</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            sx={{
              fontSize: '1.5rem',
              '& .MuiInputLabel-root': { fontSize: '1.5rem', color: 'black' },
              '& .MuiInputBase-input': { fontSize: '1.5rem', color: 'black' },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, py: 2, fontSize: '1.25rem' }}
          >
            Send Password Reset Link
          </Button>
          {message && (
            <Typography color="textSecondary" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
