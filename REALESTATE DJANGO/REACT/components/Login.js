import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';
import { Container, TextField, Button, Typography, Box, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users/');
      const users = response.data;

      const userExists = users.find(
        (user) => user.username === username && user.password === password
      );

      if (userExists) {
        dispatch(loginSuccess(userExists));
        onLogin();
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('There was an error logging in the user!', error);
      setError('There was an error logging in the user');
    }
  };

  return (
    <div className="app-body">
      <Container component="main" maxWidth="sm" className="login-container">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                fontSize: '1.5rem', // Increase font size of input text
                '& .MuiInputLabel-root': { // Increase font size of label
                  fontSize: '1.5rem',
                  color: 'black',
                },
                '& .MuiInputBase-input': { // Increase font size of input text
                  fontSize: '1.5rem',
                  color: 'black',
                },
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
                fontSize: '1.5rem', // Increase font size of input text
                '& .MuiInputLabel-root': { // Increase font size of label
                  fontSize: '1.5rem',
                  color: 'black',
                },
                '& .MuiInputBase-input': { // Increase font size of input text
                  fontSize: '1.5rem',
                  color: 'black',
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, py: 2, fontSize: '1.25rem' }} // Increase padding and font size
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
