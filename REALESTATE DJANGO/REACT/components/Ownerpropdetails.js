// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OwnerCarousel from './OwnerCarousel';
import Ownerexplore from './Ownerexplore';
import { useNavigate } from 'react-router-dom';
const StyledAppBar = {
  backgroundColor: '#fff', /* White background color for the AppBar */
  boxShadow: 'none', /* Remove default shadow */
};

const StyledToolbar = {
  display: 'flex',
  justifyContent: 'space-between', /* Space between logo and profile icon */
  alignItems: 'center',
};

const navLinkStyle = {
  color: '#333', /* Text color */
  textDecoration: 'none', /* Remove underline */
  fontSize: '25px', /* Font size */
  fontFamily: 'Arial, sans-serif', /* Font family */
  padding: '10px 20px', /* Padding to make it look like a button */
  borderRadius: '5px', /* Rounded corners */
  backgroundColor: '#f0f0f0', /* Light background color for button */
  transition: 'background-color 0.3s', /* Smooth transition */
  display: 'inline-block', /* Make it an inline block for padding */
};

const navLinkHoverStyle = {
  backgroundColor: '#FFD700', /* Change background color on hover */
  color: '#fff', /* Change text color on hover */
};

const Ownerpropdetails = () => {
  const handleProfileMenuOpen = () => {
    // Your logic to handle profile menu open
  };
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/complaints'); // Navigate to /owner
  };


  return (
    <AppBar position="static" sx={StyledAppBar}>
      <Toolbar sx={StyledToolbar}>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="https://png.pngtree.com/png-vector/20230408/ourlarge/pngtree-green-house-logo-vector-png-image_6682157.png"
            alt="Home Logo"
            style={{ width: '50px', height: '50px' }} /* Adjust size as needed */
          />
          <Typography
            variant="h4"
            style={{ color: '#333', marginLeft: '10px' }}
          >
            VANI PREMISES
          </Typography>
        </div>
        <IconButton edge="end" color="inherit" onClick={handleProfileMenuOpen}>
          <AccountCircleIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Toolbar>
      <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li style={{ margin: '0 15px' }}>
            <a
              href="#complaints"
              style={navLinkStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}
              onClick={handleClick}
            >
              Complaints
            </a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a
              href="#contacts"
              style={navLinkStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}
            >
              Contacts
            </a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a
              href="#faq"
              style={navLinkStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>
     <OwnerCarousel/> 
   <Ownerexplore/>
    </AppBar>
  );
};

export default Ownerpropdetails;
