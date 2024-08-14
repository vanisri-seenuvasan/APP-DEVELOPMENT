import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1)`,
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: `0 8px 20px rgba(0, 0, 0, 0.15)`,
  },
}));

const Media = styled(CardMedia)(({ theme }) => ({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const ContactButton = styled(Button)(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  bottom: '16px',
  left: '80%',
  transform: 'translateX(-50%)',
  backgroundColor: '#808080',
  color: 'white',
  padding: '4px 8px',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#4f4f4f',
  },
}));

const VerifiedBadge = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '8px',
  left: '8px',
  background: 'green',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
}));

const PropertyCard = ({ property, onContactClick }) => {
  return (
    <StyledCard
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('button').style.display = 'block';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('button').style.display = 'none';
      }}
    >
      <Media image={property.image} title={property.title} />
      <VerifiedBadge>VERIFIED</VerifiedBadge>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          For Lease
        </Typography>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          {property.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {property.seats} seats
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Locality: {property.locality}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Posted: {property.postedDate}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Owner: {property.owner}
        </Typography>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          ₹{property.price}
        </Typography>
      </CardContent>
      <ContactButton variant="contained" onClick={onContactClick}>
        Contact Now
      </ContactButton>
    </StyledCard>
  );
};

const Contact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const properties = [
    {
      title: 'Office Space',
      seats: '50 - 71',
      locality: 'Panaiyur',
      postedDate: 'Jul 31, \'24',
      owner: 'Ramya',
      price: '2.7 Lac',
      image: 'https://q-xx.bstatic.com/xdata/images/hotel/max1200/13800549.jpg?k=ff50353d2dd34d4addadf1d09d633282e0a42eac9b6bb4a4930354832bc4d847&o=',
    },
    {
      title: 'Office Space',
      seats: '14 - 20',
      locality: 'Pammal',
      postedDate: 'Jul 31, \'24',
      owner: 'Mahalak',
      price: '65,000',
      image: 'https://thearchitecturedesigns.com/wp-content/uploads/2019/12/9-Corinthia-Hotel-London.jpg',
    },
    {
      title: 'Showroom',
      seats: '6000 sqft',
      locality: 'Triplicane',
      postedDate: 'Aug 04, \'24',
      owner: 'Mahalak',
      price: '3.6 Lac',
      image: 'https://ansainteriors.com/wp-content/uploads/2019/01/4-14.jpg',
    },
    {
      title: 'Shop',
      seats: '1450 sqft',
      locality: 'Madambakkam',
      postedDate: 'Aug 01, \'24',
      owner: 'Rohini',
      price: '55,000',
      image: 'https://wallpapercave.com/wp/wp2352846.jpg',
    },
  ];

  return (
    <Box p={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        Properties by Owners
      </Typography>
      <Grid container spacing={4}>
        {properties.map((property, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <PropertyCard property={property} onContactClick={handleContactClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
