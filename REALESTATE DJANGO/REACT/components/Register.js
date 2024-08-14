import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';
import { Container, TextField, Button, Typography, Box, InputAdornment, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { AccountCircle, Lock, Email } from '@mui/icons-material';

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('tenant'); // Default to 'tenant'
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password, role };
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', newUser);
      dispatch(loginSuccess(response.data));
      onRegister();
  
      if (role === 'owner') {
        navigate('/owner-login');
      } else {
        navigate('/tenant-login');
      }
    } catch (error) {
      // Log the error details
      console.error('There was an error registering the user!', error.response ? error.response.data : error);
  
      // Set a user-friendly error message
      if (error.response && error.response.data) {
        setError(`Registration failed: ${error.response.data.detail || 'Please check your inputs and try again.'}`);
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };
  

  return (
    <div className="app1-body">
      <Container component="main" maxWidth="sm" className="register-container">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h4">
            Register
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              sx={{
                fontSize: '1.25rem',
                '& .MuiInputLabel-root': { fontSize: '1.25rem', color: 'black' },
                '& .MuiInputBase-input': { fontSize: '1.25rem', color: 'black' },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              sx={{
                fontSize: '1.25rem',
                '& .MuiInputLabel-root': { fontSize: '1.25rem', color: 'black' },
                '& .MuiInputBase-input': { fontSize: '1.25rem', color: 'black' },
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
                fontSize: '1.25rem',
                '& .MuiInputLabel-root': { fontSize: '1.25rem', color: 'black' },
                '& .MuiInputBase-input': { fontSize: '1.25rem', color: 'black' },
              }}
            />
            <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
              Select Role
            </Typography>
            <RadioGroup
              aria-label="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              sx={{ mt: 1 }}
            >
              <FormControlLabel value="owner" control={<Radio />} label="Owner" />
              <FormControlLabel value="tenant" control={<Radio />} label="Tenant" />
            </RadioGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, py: 2, fontSize: '1.25rem' }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Register;
