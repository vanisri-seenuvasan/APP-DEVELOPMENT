import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Link } from '@mui/material';
import { fontSize, styled } from '@mui/system';

// Sample data
const cards = [
  {
    title: 'Rates & Trends',
    description: 'Know all about Property Rates & Trends in your city.',
    icon: '📈', // replace with actual icon
    link: '#'
  },
  {
    title: 'EMI Calculator',
    description: 'Quarterly report with insights of Indian real estate market.',
    icon: '📊', // replace with actual icon
    link: '#'
  },
  {
    title: 'Investment',
    fontSize:'50px',
    description: 'Quarterly report with insights of Indian real estate market.',
    icon: '💰', // replace with actual icon
    link: '#'
  },
  {
    title: 'Research',
    description: 'Quarterly report with insights of Indian real estate market.',
    icon: '📋', // replace with actual icon
    link: '#'
  }
];

// Styled Card with enhanced styles
const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 250,
  margin: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 80% opacity
  borderRadius: '12px',
  boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1)`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)', // Solid white background on hover
    boxShadow: `0 8px 20px rgba(0, 0, 0, 0.15)`,
    transform: 'scale(1.05)', // Slightly scale up the card on hover
    cursor: 'pointer',
  }
}));

const ToolsAndAdvice = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Tools & Advice
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <StyledCard>
              <CardContent>
                <Box sx={{ fontSize: '90px', marginBottom: 2 }}>{card.icon}</Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  {card.description}
                </Typography>
                <Link href={card.link} variant="body2" sx={{ display: 'block', color: '#1976d2', textDecoration: 'none', fontWeight: 'bold', '&:hover': { color: '#115293' } }}>
                  Read more →
                </Link>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolsAndAdvice;
