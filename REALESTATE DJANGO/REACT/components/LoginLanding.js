import React from 'react';
import { Container, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginLanding() {
  const navigate = useNavigate();

  const handleOwnerLogin = () => {
    navigate('/owner-login');
  };

  const handleTenantLogin = () => {
    navigate('/tenant-login');
  };

  return (
    <Container component="main" maxWidth="sm" className="login-landing-container">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.5)', 
          borderRadius: 2,
          boxShadow: 3,
          mt: 4,
        }}
      >
        <Typography component="h1" variant="h4">
          Welcome to the Portal
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOwnerLogin}
          sx={{ mt: 3, py: 2, fontSize: '1.25rem' }}
          fullWidth
        >
          Owner Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleTenantLogin}
          sx={{ mt: 3, py: 2, fontSize: '1.25rem' }}
          fullWidth
        >
          Tenant Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginLanding;
