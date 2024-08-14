import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CarouselComponent from './CarouselComponent';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const propertyTypes = [
  { label: 'Residential', value: 'residential', options: [
    { label: 'Flat', value: 'flat' },
    { label: 'House/Villa', value: 'house_villa' },
    { label: '1 Bhk', value: '1bhk' },
    { label: '2 Bhk', value: '2bhk' },
    { label: '3 Bhk', value: '3bhk' },
    { label: '4 Bhk', value: '4bhk' },
    { label: '5 Bhk', value: '5bhk' },
    { label: '5+ Bhk', value: '5+bhk' }
  ]},
  { label: 'Commercial', value: 'commercial', options: [
    { label: 'Office Space', value: 'office_space' },
    { label: 'Shop/Showroom', value: 'shop_showroom' },
    { label: 'Commercial Land', value: 'commercial_land' },
    { label: 'Coworking Space', value: 'coworking_space' },
    { label: 'Warehouse/Godown', value: 'warehouse' },
    { label: 'Industrial Building', value: 'industrial_building' },
    { label: 'Industrial Shed', value: 'industrial_shed' }
  ]},
  { label: 'Other', value: 'other', options: [
    { label: 'Agricultural Land', value: 'agricultural_land' },
    { label: 'Farm House', value: 'farm_house' }
  ]}
];

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: '50px',
  margin: '4px 0',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  }
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  animation: `${fadeIn} 1s ease-out`,
}));

const SearchBar = () => {
  const [propertyType, setPropertyType] = useState('residential');
  const [bhk, setBhk] = useState('');
  const [budget, setBudget] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    // Example route to navigate to, adjust as needed
    navigate('/search'); 
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={9} p={6} borderRadius="8px" gap="20px 20px" >
      <WelcomeText variant="h6">Welcome back! Let’s continue your search</WelcomeText>
      <Box display="flex" alignItems="center" flexGrow={1} mb={2} gap="40px 40px">
        
        <TextField
          select
          label="Property Type"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          variant="outlined"
          margin="dense"
          sx={{ width: 150, mx: 2 }}
        >
          {propertyTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Bhk"
          value={bhk}
          onChange={(e) => setBhk(e.target.value)}
          variant="outlined"
          margin="dense"
          sx={{ width: 150, mx: 2 }}
        >
          {propertyTypes.find(pt => pt.value === propertyType)?.options.map((option) => (
            <CustomMenuItem key={option.value} value={option.value}>
              {option.label}
            </CustomMenuItem>
          ))}
        </TextField>
        <TextField
          label="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          variant="outlined"
          margin="dense"
          sx={{ width: 150, mx: 2 }}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ py: 1 }}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      
    </Box>
  );
};

export default SearchBar;
