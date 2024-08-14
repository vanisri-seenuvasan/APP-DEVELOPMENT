import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Import Link
import Prop from './Prop';
import CarouselComponent from './CarouselComponent';
import { Container } from 'react-bootstrap';

// Data for Ownercard
const cardsData = [
  {
    title: "Work with best agents in Chennai",
    imageUrl: "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/commercial/work-with-best-agents-commercial.jpg",
  },
  {
    title: "Office Spaces on Lease",
    imageUrl: "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/commercial/office-spaces-on-lease.jpg",
  },
  {
    title: "Shops & Showrooms on Lease under ₹80 K",
    imageUrl: "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/commercial/shops-showrooms-on-lease.jpg",
  },
  {
    title: "Coworking Space",
    imageUrl: "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/commercial/co-working-space.jpg",
  },
];

// Styled components
const Overlay = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const OwnerCardImage = styled('div')({
  position: 'relative',
  height: 400,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const HoverCard = styled(Card)({
  width: 450, // Desired width
  height: 'auto', // Auto height to maintain aspect ratio
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
});

const Ownercard = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        One Stop Destination For Commercial Properties in Chennai
      </Typography>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardActionArea>
                <OwnerCardImage style={{ backgroundImage: `url(${card.imageUrl})` }}>
                  <Overlay>
                    <Typography variant="h6">{card.title}</Typography>
                    <Link to="/explore" style={{ textDecoration: 'none', color: 'white' }}>
                      <Typography>Explore →</Typography>
                    </Link>
                  </Overlay>
                </OwnerCardImage>
                <CardContent>
                  {/* Additional card content can go here if needed */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Ownercards = () => (
  <div>
    <Ownercard />
    <CarouselComponent/>
    
  </div>
);

export default Ownercards;
