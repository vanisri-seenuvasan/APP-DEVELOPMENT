import React, { useState } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'owner') {
      navigate('/owner-login');
    } else if (selectedRole === 'tenant') {
      navigate('/tenant-login');
    }
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
          Choose Your Login Type
        </Typography>
        <Box sx={{ width: '100%', mt: 1 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, py: 2, fontSize: '1.25rem' }}
            onClick={() => handleRoleSelection('owner')}
          >
            Owner Login
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 2, py: 2, fontSize: '1.25rem' }}
            onClick={() => handleRoleSelection('tenant')}
          >
            Tenant Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
