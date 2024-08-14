import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import CarouselComponent from './CarouselComponent';

const services = [
  { 
    icon: 'https://www.zameen.com/assets/iconNewProjects_noinline.c448419f3dc92bb4ce9b137fddd7f81c.svg',
    title: "New Projects", 
    description: "The best investment opportunities", 
    bgColor: "#FFF7E6" 
  },
  { 
    icon: 'https://www.kindpng.com/picc/m/111-1110976_blue-home-icon-hd-png-download.png',
    title: "Construction Cost Calculator", 
    description: "Get construction cost estimate", 
    bgColor: "#EBF5FF" 
  },
  { 
    icon: 'https://www.zameen.com/assets/iconHomeLoanCalculator_noinline.9f12f384b9c90ed3f3b9e78e95181af9.svg',
    title: "Home Loan Calculator", 
    description: "Find affordable loan packages", 
    bgColor: "#E6FFFA" 
  },
  { 
    icon: 'https://www.zameen.com/assets/iconAreaGuides_noinline.fcd82b6bd109e8fc806225c05b9a53a9.svg',
    title: "Area Guides", 
    description: "Explore housing societies", 
    bgColor: "#FFE6E6" 
  },
  { 
    icon: 'https://www.zameen.com/assets/iconPlotFinder_noinline.7c0ebe1623b7f913740c87ca1f9364ad.svg',
    title: "Plot Finder", 
    description: "Find plots in any housing society", 
    bgColor: "#E6FFF2" 
  },
  { 
    icon: 'https://www.zameen.com/assets/iconPropertyIndex_noinline.78d602185dc78a5770ab09ad647ffb89.svg',
    title: "Property Index", 
    description: "Track changes in real estate prices", 
    bgColor: "#F0F4FF" 
  },
  { 
    icon: 'https://www.zameen.com/assets/iconAreaUnitConverter_noinline.42ee8c46762067b11ddd5a1cc1944c13.svg',
    title: "Area Unit Converter", 
    description: "Convert any area unit instantly", 
    bgColor: "#E6FFF2" 
  },
  { 
    icon: 'https://www.zameen.com/assets/iconPropertyTrends_noinline.2b81c0992a4197ca4a2eede00bc90a00.svg',
    title: "Property Trends", 
    description: "Find popular areas to buy property", 
    bgColor: "#F0F4FF" 
  },
];

const OwnerExplore = () => {
  return (
    <Box sx={{ padding: '40px 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Explore more on Zameen
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: service.bgColor,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                textAlign: 'center'
              }}
            >
              <CardContent>
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{
                    width: 60,
                    height: 60,
                    marginBottom: 10,
                  }}
                />
                <Typography variant="h6">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    <CarouselComponent/>
    </Box>
  );
};

export default OwnerExplore;
