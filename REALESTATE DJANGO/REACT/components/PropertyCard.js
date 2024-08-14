import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const PropertyCard = ({ image, title, count }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography variant="h5">{count}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary">Explore</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
