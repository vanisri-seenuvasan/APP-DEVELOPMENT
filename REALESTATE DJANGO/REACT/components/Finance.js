import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../styles/Finance.css';

const Finance = () => {
  const cards = [
    {
      title: 'PAY RENT',
      description: 'Securely pay rent online from anywhere. Set up automatic payments so you always pay on time.',
      image: 'https://c0.wallpaperflare.com/preview/731/692/21/apartment-cheap-rent-flat-for-lease.jpg'
    },
    {
      title: 'SUBMIT MAINTENANCE REQUESTS',
      description: 'Quickly submit maintenance requests that go directly to our maintenance queue.',
      image: 'https://www.freeiconspng.com/uploads/maintenance-icon-32.jpg'
    },
    {
      title: 'SEAMLESS COMMUNICATION',
      description: 'Send communications to us at any time.',
      image: 'https://wallpapercave.com/wp/wp2067920.jpg'
    },
    {
      title: 'RENTERS INSURANCE',
      description: 'Easily submit proof of insurance coverage or purchase a policy, right from your portal.',
      image: 'https://www.shineinsurance.com/wp-content/uploads/2016/11/Blog-Cover-Image-Renters-Insurance.png'
    },
    {
        title: 'ONLINE PAYMENTS',
        description: 'Manage and pay all your bills online with ease.',
        image: 'https://www.freepnglogos.com/uploads/credit-card-png/credit-card-png-images-5.png'
      },
      {
        title: 'FLEXIBLE LEASE TERMS',
        description: 'Choose from a range of lease terms that best suit your needs.',
        image: 'https://www.rent.com/blog/wp-content/uploads/2021/01/lease-terms-1024x683.jpg'
      }
  ];

  return (
    <Container sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h4" gutterBottom>
        YOUR ONLINE PORTAL
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your account at your fingertips. Anytime, anywhere.
      </Typography>
      <Box className="cards-container">
        {cards.map((item, index) => (
          <Box
            key={index}
            className="card"
            sx={{
              backgroundImage: `url(${item.image})`,
              height: '400px', // Adjust height as needed
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              textAlign: 'center',
              position: 'relative',
              width: 'calc(25% - 20px)', // 25% width minus some spacing
              margin: '10px' // Add spacing between cards
            }}
          >
            <Box className="card-content">
              <Typography variant="h5" sx={{ color: 'black', mb: 2 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: 'black' }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Finance;
