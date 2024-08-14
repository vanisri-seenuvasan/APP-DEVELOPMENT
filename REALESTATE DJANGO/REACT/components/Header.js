import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import '../styles/Header.css'; // Adjust path as needed
import CardsComponent from './CardsComponent';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  padding: '0 20px',
});

const StyledIconButton = styled(IconButton)({
  color: '#333',
  '&:hover': {
    color: '#007bff',
  },
});

const Header = () => {
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [username] = useState('John Doe');

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <StyledAppBar position="static">
      <StyledToolbar>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="https://png.pngtree.com/png-vector/20230408/ourlarge/pngtree-green-house-logo-vector-png-image_6682157.png"
            alt="Home Logo"
            className="home-logo"
            style={{ height: 50 }} // Adjust logo size if needed
          />
          <Typography
            variant="h4"
            className="animatedText"
            style={{ color: '#333', marginLeft: '10px' }}
          >
            VANI PREMISES
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button style={{ color: 'black' }}
            color="inherit"
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button style={{ color: 'black' }}
            color="inherit"
            component={Link}
            to="/register"
          >
            Sign Up
          </Button>
          <StyledIconButton edge="end" color="inherit" onClick={handleProfileMenuOpen}>
            <AccountCircleIcon sx={{ fontSize: 50 }} />
          </StyledIconButton>
        </div>
      </StyledToolbar>
    </StyledAppBar>
      <div className="nav-container">
        <div className="nav-items">
          {['Buy', 'Rent', 'Home Loans', 'Help'].map((item) => (
            <div
              key={item}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              {item}
              {openDropdown === item && (
                <div className={`dropdown ${openDropdown === item ? 'show' : ''}`}>
                  {item === 'Rent' && (
                    <div className="dropdown-content">
                      <div className="dropdown-row">
                        <div className="dropdown-column">
                          <h6 >Popular Choices</h6>
                          <hr className="red-hr" />
                          <p>Owner properties</p>
                          <p>Verified properties</p>
                          <p>Furnished homes</p>
                          <p>Bachelor friendly homes</p>
                          <p>Immediately available</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Property Types</h6>
                          <hr className="red-hr" />
                          <p>Flat for rent in Chennai</p>
                          <p>House for rent in Chennai</p>
                          <p>Villa for rent in Chennai</p>
                          <p>PG in Chennai</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Budget</h6>
                          <hr className="red-hr" />
                          <p>Under ₹10,000</p>
                          <p>₹10,000 - ₹15,000</p>
                          <p>₹15,000 - ₹25,000</p>
                          <p>Above ₹25,000</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Explore</h6>
                          <hr className="red-hr" />
                          <p>Localities</p>
                          <p>Buy vs Rent</p>
                          <p>Find an Agent</p>
                          <p>Share Requirement</p>
                          <p>Property Services</p>
                          <p>Rent Agreement</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {item === 'Buy' && (
                    <div className="dropdown-content">
                      <div className="dropdown-row">
                        <div className="dropdown-column">
                          <h6>Popular Choices</h6>
                          <hr className="red-hr" />
                          <p>Newly listed</p>
                          <p>Best deals</p>
                          <p>Luxury properties</p>
                          <p>Investment opportunities</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Property Types</h6>
                          <hr className="red-hr" />
                          <p>Flats</p>
                          <p>Houses</p>
                          <p>Villas</p>
                          <p>Land</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Budget</h6>
                          <hr className="red-hr" />
                          <p>Under ₹10,00,000</p>
                          <p>₹10,00,000 - ₹20,00,000</p>
                          <p>₹20,00,000 - ₹50,00,000</p>
                          <p>Above ₹50,00,000</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {item === 'Home Loans' && (
                    <div className="dropdown-content">
                      <div className="dropdown-row">
                        <div className="dropdown-column">
                          <h6>Loan Types</h6>
                          <hr className="red-hr" />
                          <p>Home Loan</p>
                          <p>Loan Against Property</p>
                          <p>Refinance</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Eligibility</h6>
                          <hr className="red-hr" />
                          <p>Income Criteria</p>
                          <p>Credit Score</p>
                          <p>Employment Status</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Documentation</h6>
                          <hr className="red-hr" />
                          <p>ID Proof</p>
                          <p>Address Proof</p>
                          <p>Income Proof</p>
                          <p>Property Documents</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {item === 'Help' && (
                    <div className="dropdown-content">
                      <div className="dropdown-row">
                        <div className="dropdown-column">
                          <h6>Customer Support</h6>
                          <hr className="red-hr" />
                          <p>Contact Us</p>
                          <p>FAQs</p>
                          <p>Feedback</p>
                        </div>
                        <div className="dropdown-column">
                          <h6>Resources</h6>
                          <hr className="red-hr" />
                          <p>Guides</p>
                          <p>Articles</p>
                          <p>Blog</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
       {/* <CardsComponent/> */}
      </div>
      <Menu
        anchorEl={profileMenuAnchor}
        open={Boolean(profileMenuAnchor)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuClose}>{username}</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
