import React, { useState } from 'react';
import { Container, Typography, Box, Button, IconButton, Menu, MenuItem, Card, CardContent, CardMedia } from '@mui/material';
import { AccountCircle, Menu as MenuIcon, Home as HomeIcon, BusinessCenter as BusinessCenterIcon, Room as RoomIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions'; // Assuming you have a logout action
import Footer from './Footer';

const CombinedComponent = () => {
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElFinancial, setAnchorElFinancial] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Set initial state to false
  const openProfileMenu = Boolean(anchorElProfile);
  const openFinancialMenu = Boolean(anchorElFinancial);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Adjust according to your state structure

  const handleLogout = () => {
    dispatch(logout());
    setAnchorElProfile(null);
    navigate('/');
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleFinancialMenuOpen = (event) => {
    setAnchorElFinancial(event.currentTarget);
  };

  const handleFinancialMenuClose = () => {
    setAnchorElFinancial(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          bgcolor: '#1976d2',
          color: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <IconButton onClick={toggleSidebar} color="inherit" sx={{ fontSize: '2rem', mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flex: 1 }}>
          {user ? `Welcome, ${user.username}` : 'Dashboard'}
        </Typography>
        <IconButton onClick={handleProfileMenuOpen} color="inherit" sx={{ fontSize: '2rem' }}>
          <AccountCircle sx={{ fontSize: '2.5rem' }} /> {/* Increase icon size */}
        </IconButton>
        <Menu
          anchorEl={anchorElProfile}
          open={openProfileMenu}
          onClose={handleProfileMenuClose}
          PaperProps={{
            sx: {
              width: '200px',
              '& .MuiMenuItem-root': {
                fontSize: '1.2rem', // Increase font size of menu items
              },
            },
          }}
        >
          <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </Box>

      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: sidebarOpen ? '250px' : '0px', // Adjust width based on sidebarOpen state
            bgcolor: '#f0f0f0',
            p: sidebarOpen ? 2 : 0, // Adjust padding based on sidebarOpen state
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'width 0.3s ease',
            position: 'relative',
          }}
        >
          {sidebarOpen && (
            <>
              <Typography variant="h6" gutterBottom>
                Dashboard
              </Typography>
              <Button component={Link} to="/Analytics" sx={{ mb: 2 }}>
                Property Analytics
              </Button>
              <Button component={Link} to="/faq" sx={{ mb: 2 }}>
               FAQ
              </Button>
              <Button component={Link} to="/ownprop" sx={{ mb: 2 }}>
               Available Properties
              </Button>
              <Button component={Link} to="/notifications" sx={{ mb: 2 }}>
                Notifications
              </Button>
              {/* Financial Management Dropdown */}
              <Button
                component={Link} to="/reports"
                sx={{ mb: 2 }}
                onClick={handleFinancialMenuOpen} // Open the menu on click
              >
                Financial Management
              </Button>
              <Menu
                id="financial-management-menu"
                anchorEl={anchorElFinancial}
                open={Boolean(anchorElFinancial)}
                onClose={handleFinancialMenuClose}
                PaperProps={{
                  sx: {
                    width: '200px',
                    '& .MuiMenuItem-root': {
                      fontSize: '1.2rem', // Increase font size of menu items
                    },
                  },
                }}
              >
                {/* Add menu items here */}
              </Menu>
            </>
          )}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
          }}
        >
          {/* Home */}
          <Box
            sx={{
              mb: 4,
              width: '100%',
              backgroundImage: 'url(https://img.freepik.com/free-photo/japandi-living-room-interior-design_53876-145502.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: 8, // Adjust the padding as needed
            }}
          >
            <Card
              sx={{
                textAlign: 'left', // Align text to the left
                p: 4, // Increase padding for more space inside the card
                width: '90%',
                maxWidth: '1200px',
                bgcolor: 'rgba(255, 255, 255, 0.3)', // Slightly more opaque for better visibility
                display: 'flex', // Use flexbox for layout
                flexDirection: 'column',
                alignItems: 'flex-start', // Align items to the start (left)
                position: 'relative',
                left: 0, // Move content to the left edge
              }}
            >
              <CardContent>
                <Typography
                  variant="h3" // Increase font size for the heading
                  gutterBottom
                  sx={{
                    color: '#333',
                    fontWeight: 'bold',
                    textAlign: 'left', // Align text to the left
                    mb: 2,
                  }}
                >
                  Welcome back
                </Typography>
                <Typography
                  variant="h5" // Increase font size for the subheading
                  gutterBottom
                  sx={{
                    color: '#007BFF',
                    fontWeight: 'bold',
                    textAlign: 'left', // Align text to the left
                    fontSize: '1.75rem', // Increase font size
                    letterSpacing: '1.5px',
                    transition: 'color 0.3s ease',
                    mb: 3,
                    '&:hover': {
                      color: '#0056b3',
                    },
                  }}
                >
                  Unlock the Door to Your Perfect Home!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#333',
                    fontSize: '1.875rem', // Increase font size
                    lineHeight: '1.6',
                    mb: 3,
                  }}
                >
                  Discover the home where your dreams come alive. Explore a range of stunning properties that perfectly fit your lifestyle and needs. Unlock the door to your ideal living space today and start a new chapter in your life!
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Services */}
          <Box sx={{ mb: 4, width: '100%', textAlign: 'center' }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#333',
                mb: 4,
              }}
            >
              Our Services
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 26, // Space between cards
                flexWrap: 'wrap',
                px: 2, // Padding on the sides
              }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: '8px',
                  bgcolor: '#f0f0f0',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  maxWidth: '300px',
                  flex: '1 1 300px',
                  m: 2, // Margin around each card
                }}
              >
                <HomeIcon sx={{ fontSize: 80, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  Property Management
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  Expert management services to keep your property in top shape.
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: '8px',
                  bgcolor: '#f0f0f0',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  maxWidth: '300px',
                  flex: '1 1 300px',
                  m: 2, // Margin around each card
                }}
              >
                <BusinessCenterIcon sx={{ fontSize: 80, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  Real Estate Consultancy
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  Professional advice to help you make informed property decisions.
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: '8px',
                  bgcolor: '#f0f0f0',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  maxWidth: '300px',
                  flex: '1 1 300px',
                  m: 2, // Margin around each card
                }}
              >
                <RoomIcon sx={{ fontSize: 80, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  Property Listings
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  A wide selection of properties to fit every need and budget.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default CombinedComponent;
