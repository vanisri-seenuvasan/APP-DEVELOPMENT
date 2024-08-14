import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer 
      sx={{
        backgroundColor: '#ffffff',
        padding: '40px',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Contact Info Column */}
        <Box 
          sx={{
            flex: 1,
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>Contact Info</Typography>
          <Link href="tel:1234567890" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', mb: 1 }}>
            <FaPhone sx={{ mr: 1, fontSize: '1.5rem' }} />
            <Typography variant="body1" component="span" sx={{ fontSize: '1rem' }}>123456789</Typography>
          </Link>
          <Link href="tel:1112223333" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', mb: 1 }}>
            <FaPhone sx={{ mr: 1, fontSize: '1.5rem' }} />
            <Typography variant="body1" component="span" sx={{ fontSize: '1rem' }}>1112223333</Typography>
          </Link>
          <Link href="mailto:shaikhanas@gmail.com" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', mb: 1 }}>
            <FaEnvelope sx={{ mr: 1, fontSize: '1.5rem' }} />
            <Typography variant="body1" component="span" sx={{ fontSize: '1rem' }}>shaikhanas@gmail.com</Typography>
          </Link>
          <Link href="#" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', mb: 1 }}>
            <FaMapMarkerAlt sx={{ mr: 1, fontSize: '1.5rem' }} />
            <Typography variant="body1" component="span" sx={{ fontSize: '1rem' }}>Mumbai, India - 400104</Typography>
          </Link>
        </Box>

        {/* Navigation Column */}
        <Box 
          sx={{
            flex: 1,
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>Navigation</Typography>
          <Link href="home.html" sx={{ display: 'block', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>Home</Link>
          <Link href="about.html" sx={{ display: 'block', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>About</Link>
          <Link href="contact.html" sx={{ display: 'block', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>Contact</Link>
          <Link href="listings.html" sx={{ display: 'block', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>All Listings</Link>
          <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>Saved Properties</Link>
        </Box>

        {/* Social Media Column */}
        <Box 
          sx={{
            flex: 1,
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>Follow Us</Typography>
          <Link href="#" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
            Facebook <FaFacebookF sx={{ ml: 1, fontSize: '1.5rem' }} />
          </Link>
          <Link href="#" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
            Twitter <FaTwitter sx={{ ml: 1, fontSize: '1.5rem' }} />
          </Link>
          <Link href="#" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
            LinkedIn <FaLinkedinIn sx={{ ml: 1, fontSize: '1.5rem' }} />
          </Link>
          <Link href="#" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#555', mb: 1, fontSize: '1rem', fontWeight: '600', transition: 'color 0.3s', '&:hover': { color: '#007bff' } }}>
            Instagram <FaInstagram sx={{ ml: 1, fontSize: '1.5rem' }} />
          </Link>
        </Box>

        {/* Business Hours Column */}
        <Box 
          sx={{
            flex: 1,
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>Business Hours</Typography>
          <Typography variant="body2" component="p" sx={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
            Mon - Fri: 8:00 am - 5:00 pm<br />
            Saturday: Appointment Only<br />
            Sunday: Closed
          </Typography>
        </Box>

        {/* Contact Numbers Column */}
        <Box 
          sx={{
            flex: 1,
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>Contact Numbers</Typography>
          <Typography variant="body2" component="p" sx={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
            O: (888) 344-4246<br />
            F: (888) 920-7881
          </Typography>
        </Box>

        {/* Mailing Address Column */}
        <Box 
          sx={{
            flex: 1,
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>Mailing Address</Typography>
          <Typography variant="body2" component="p" sx={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
            PO Box 7734<br />
            Hilton Head Island, SC 29938
          </Typography>
        </Box>

        {/* Corporate Office Column */}
        <Box 
          sx={{
            flex: 1,
            padding: '10px',
            minWidth: '200px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>Corporate Office</Typography>
          <Typography variant="body2" component="p" sx={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
            1323 May River Road, Suite 101<br />
            Bluffton, SC 29910
          </Typography>
        </Box>
      </Box>

      <div 
        sx={{
          mt: 2,
          fontSize: '1.5rem',
          color: '#777',
        }}
      >
        &copy; {new Date().getFullYear()} by <span sx={{ fontWeight: 'bold' }}>Mr. Web Designer</span> | All rights reserved!
      </div>
    </footer>
  );
};

export default Footer;
