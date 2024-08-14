import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    '& .action-buttons': {
      opacity: 1,
    },
  },
}));

const TitleOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: theme.palette.common.white,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const ActionButtons = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  opacity: 0,
  transition: 'opacity 0.3s ease',
  zIndex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
}));

const ServiceCard = ({ title, icon }) => (
  <StyledCard style={{ backgroundImage: `url(${icon})` }}>
    <TitleOverlay>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
    </TitleOverlay>
    <ActionButtons className="action-buttons">
      <IconButton
        sx={{ color: 'white', borderColor: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}
        variant="outlined"
      >
        Rent
      </IconButton>
      <IconButton
        sx={{ color: 'white', borderColor: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}
        variant="outlined"
      >
        Buy
      </IconButton>
    </ActionButtons>
  </StyledCard>
);

export default ServiceCard;
