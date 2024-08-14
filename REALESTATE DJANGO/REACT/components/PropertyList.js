import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const CardRoot = styled(Card)({
  minWidth: 275,
  border: '1px solid #FFEDC2',
  backgroundColor: '#FFF8E1',
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
});

const Title = styled(Typography)({
  fontSize: 24,
  fontWeight: 'bold',
  color: '#FF6F00',
  marginBottom: 10, // Increased space below the title
});

const Subtitle = styled(Typography)({
  fontSize: 18,
  color: '#333',
  marginBottom: 20, // Increased space below the subtitle
});

const ButtonStyled = styled(Button)({
  color: '#D32F2F',
  fontWeight: 'bold',
  fontSize: 16,
  textTransform: 'none', // Remove uppercase transformation
  display: 'flex',
  alignItems: 'center',
});

const Icon = styled('span')({
  marginLeft: 'auto', // Align icon to the right
  fontSize: 40,
  color: '#FFEDC2',
});

const PropertyCards = () => {
  const cardsData = [
    { title: '7K+', subtitle: 'Properties listed for you', buttonText: 'Continue last search', icon: '⏰' },
    { title:'9k+',subtitle: 'Get personalised properties', buttonText: 'See all', icon: '🏡' },
    { title: '100+', subtitle: 'Owner Properties in Chennai', buttonText: 'See all', icon: '🔑' },
    { title: '200+', subtitle: 'Properties in Popular localities', buttonText: 'See all', icon: '📍' },
    { title: '250+', subtitle: 'Owner Properties in Coimbatore', buttonText: 'See all', icon: '🏢' },
    { title: '200+', subtitle: 'Recommeded properties for you', buttonText: 'See all', icon: '⭐' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
       Specialities
        
      </Typography>
      <Grid container spacing={3} gap="40px 40px">
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CardRoot>
              <CardContent>
                <Title>
                  {card.title}
                </Title>
                {card.subtitle && (
                  <Subtitle>
                    {card.subtitle}
                  </Subtitle>
                )}
                <ButtonStyled>
                  {card.buttonText} <Icon>{card.icon}</Icon>
                </ButtonStyled>
              </CardContent>
            </CardRoot>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PropertyCards;
