import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, YouTube, Instagram } from '@mui/icons-material';

const Tfooter = () => {
  return (
    <Box sx={{
      backgroundColor: '#f0f0f0', // Light grey background
      color: '#333', // Darker text color for better readability
      padding: '40px 0',
      borderTop: '1px solid #ddd',
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* First Row */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000' }}>About Magicbricks</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555' }}>
              As the largest platform connecting property buyers and sellers, ... <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Read more</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000' }}>More from our Network</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555' }}>
              <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Times of India</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Economic Times</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Navbharat Times</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>India Times</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Filmfare</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>MensXP</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>iDiva</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>TimesJobs</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Gadgets Now</Link>
            </Typography>
          </Grid>
          {/* Second Row */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000' }}>Properties in India</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555' }}>
              <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in New Delhi</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in Mumbai</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in Chennai</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in Pune</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in Noida</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in Gurgaon</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in Bangalore</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>Property in Ahmedabad</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000' }}>New Projects in India</Typography>
            <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555' }}>
              <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in New Delhi</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in Mumbai</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in Chennai</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in Pune</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in Noida</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in Gurgaon</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in Bangalore</Link> | <Link href="#" sx={{ color: '#007bff', fontWeight: 'bold' }}>New Projects in Ahmedabad</Link>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between', // Space around social icons
          alignItems: 'center',
          marginTop: '20px',
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box component="a" href="#" sx={{ margin: '0 10px', color: '#333', '&:hover': { color: '#007bff' } }}><Facebook fontSize="large" /></Box>
            <Box component="a" href="#" sx={{ margin: '0 10px', color: '#333', '&:hover': { color: '#007bff' } }}><Twitter fontSize="large" /></Box>
            <Box component="a" href="#" sx={{ margin: '0 10px', color: '#333', '&:hover': { color: '#007bff' } }}><LinkedIn fontSize="large" /></Box>
            <Box component="a" href="#" sx={{ margin: '0 10px', color: '#333', '&:hover': { color: '#007bff' } }}><YouTube fontSize="large" /></Box>
            <Box component="a" href="#" sx={{ margin: '0 10px', color: '#333', '&:hover': { color: '#007bff' } }}><Instagram fontSize="large" /></Box>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '20px', flexGrow: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555' }}>&copy; {new Date().getFullYear()} Magicbricks. All Rights Reserved.</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Tfooter;
