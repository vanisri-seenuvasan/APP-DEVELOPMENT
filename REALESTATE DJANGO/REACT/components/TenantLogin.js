import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, InputAdornment } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function TenantLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/?username=${email}&password=${password}&role=tenant`);
      if (response.data.length > 0) {
        navigate('/tenant-dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      setError('There was an error logging in');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
          Welcome to the Tenant Portal
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            name="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            sx={{
              fontSize: '1.5rem',
              '& .MuiInputLabel-root': { fontSize: '1.5rem', color: 'black' },
              '& .MuiInputBase-input': { fontSize: '1.5rem', color: 'black' },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
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
            Login
          </Button>
          <Button onClick={handleForgotPassword} color="primary" sx={{ mt: 2 }}>
            Forgot your password?
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default TenantLogin;
