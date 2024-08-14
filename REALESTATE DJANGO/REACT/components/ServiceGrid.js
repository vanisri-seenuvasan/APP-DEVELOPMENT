import React from 'react';
import { Grid, Container } from '@mui/material';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Single-Family',
    icon: 'https://tse1.mm.bing.net/th?id=OIP.i8WuYFmGm8-kidnFxdCxQwHaE7&pid=Api&rs=1&c=1&qlt=95&w=151&h=100',
  },
  {
    title: 'Multifamily',
    icon: 'https://images.squarespace-cdn.com/content/v1/5ce4572fe3d0860001d61740/1558728457501-QESXQQZSJVIWYR1CI6LQ/multi-family+town+house+exterior+rendering',
  },
  {
    title: 'Affordable Housing',
    icon: 'https://www.gannett-cdn.com/presto/2020/07/08/PIND/94a71239-7f7f-4e57-9d62-7c79b8bde2be-GettyImages-184371711.jpg?crop=2124,1195,x0,y105&width=2124&height=1195&format=pjpg&auto=webp',
  },
  {
    title: 'Community Associations',
    icon: 'http://www.communityhouse.com/wp-content/uploads/2022/04/TCH-Exterior-From-Park2-Sml-scaled-e1650397414987.jpg',
  },
  {
    title: 'Student Housing',
    icon: 'https://image.student.com/max_1280x1280/property-47418-ecded2b196b40c241d6d314ca1f9f85a.jpeg',
  },
  {
    title: 'Commercial',
    icon: 'https://wallpaperaccess.com/full/3885499.jpg',
  },
  {
    title: 'Investment Management',
    icon: 'https://bullpropertymanagement.com/wp-content/uploads/2021/01/Is-Rental-Property-a-Good-Investment-for-Building-Wealth.jpg',
  },
  {
    title: 'Luxury Properties',
    icon: 'https://wallpapercave.com/wp/wp3784210.jpg',
  },
  {
    title: 'Vacation Rentals',
    icon: 'https://media.architecturaldigest.com/photos/576d98445ea3e586576ec49a/master/pass/luxury-vacation-rental-sites-03.jpg',
  },
  {
    title: 'Corporate Housing',
    icon: 'http://www.fredlemon.com/images/2016/04/atlanta-corporate-housing-06-b.jpg',
  },
  {
    title: 'Senior Living',
    icon: 'https://d354o3y6yz93dt.cloudfront.net/images/680x454/7995e7942ee4d40868fdab9eba706ae9/houston.png',
  },
  {
    title: 'Military Housing',
    icon: 'https://i.ytimg.com/vi/dMSlCTz80Q0/maxresdefault.jpg',
  },
];

function ServiceGrid() {
  return (
    <Container maxWidth={false} sx={{ mt: 5, p: 0 }}>
      <Grid container spacing={4} justifyContent="space-around">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={service.title}>
            <ServiceCard title={service.title} icon={service.icon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceGrid;
