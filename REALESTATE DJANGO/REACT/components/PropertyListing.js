import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Modal,
  styled
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/PropertyListing.css';

// Styled components for enhanced look
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden', // Ensures no overflow of content
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'left',
  flexGrow: 1, // Ensures content grows to take up available space
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1), // Space between buttons
  padding: theme.spacing(1),
  justifyContent: 'space-between', // Ensure space is distributed between buttons
  position: 'relative',
}));

const GlowingButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  padding: '8px 16px', // Adjust padding to reduce button length
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 20px rgba(255, 105, 135, .5)',
  },
}));

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Replace with your API call
        const response = await axios.get('http://127.0.0.1:8000/api/properties/');
        setProperties([...response.data, ...mockProperties]); // Append mock data
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleAddToCart = async (property) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, property]);
    try {
      await axios.post('http://127.0.0.1:8000/api/cart/', property);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleRemoveFromCart = async (property) => {
    setCartCount(cartCount - 1);
    setCartItems(cartItems.filter(item => item.id !== property.id));
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/${property.id}`);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleToggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleClearCart = async () => {
    const deleteRequests = cartItems.map(item => axios.delete(`http://127.0.0.1:8000/api/cart/${item.id}`));
    try {
      await Promise.all(deleteRequests);
      setCartItems([]);
      setCartCount(0);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  // Mock property data
  const mockProperties = [
    {
      id: 11,
      name: 'Luxury Penthouse',
      address: '456 Luxury St, Luxville',
      price: 2000,
      status: 'For Rent',
      image: 'https://th.bing.com/th/id/OIP.qOhLUJ0bLLTCEk0aOI5IPwHaFj?rs=1&pid=ImgDetMain',
    },
    {
      id: 12,
      name: 'Cozy Cottage',
      address: '789 Cozy Ln, Cottageville',
      price: 1200,
      status: 'For Rent',
      image: 'https://i.pinimg.com/originals/5e/7e/02/5e7e0213077d561bb92381e85ed4d1ae.jpg',
    },
    {
      id: 13,
      name: 'Spacious Villa',
      address: '101 Villa Rd, Villa Town',
      price: 3000,
      status: 'For Sale',
      image: 'https://wallpaperaccess.com/full/4722330.jpg',
    },
    {
      id: 14,
      name: 'Modern Loft',
      address: '202 Modern Blvd, Loft City',
      price: 1500,
      status: 'For Rent',
      image: 'https://i.pinimg.com/originals/9f/40/a0/9f40a0792a41f5ccba905080f2cfcac7.png',
    },
    {
      id: 15,
      name: 'Charming Bungalow',
      address: '303 Bungalow Ave, Bungalow City',
      price: 900,
      status: 'For Sale',
      image: 'https://pinoyhousedesigns.com/wp-content/uploads/2018/03/FEATURED-IMAGE-5.jpg',
    },
  ];
  const handleClick = async (property) => {
    const destination = property.status === 'For Rent' ? '/rent' : '/buy';
    const data = {
        property_id: property.id, // Make sure this field matches the model
        name: property.name,
        address: property.address,
        price: property.price,
        status: property.status,
        image: property.image,
    };

    try {
        await axios.post('http://127.0.0.1:8000/api/property-action/', data);
        navigate(destination);
    } catch (error) {
        console.error('Error saving data:', error);
    }
};

  

  return (
    <div>
      <AppBar position="static" style={{ background: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleOpenCart}>
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="property-listing" style={{ 
        padding: '16px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
        gap: '24px' // Space between grid items
      }}>
        {properties.map((property) => (
          <StyledCard className="property-card" key={property.id}>
            <CardMedia
              component="img"
              image={property.image}
              alt={property.name}
              sx={{ 
                height: 140,
                objectFit: 'cover', // Ensures the image covers the card area
                width: '100%', // Ensures the image takes up the full width of the card
              }}
            />
            <StyledCardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2" component="div" color={property.status === 'For Rent' ? 'orange' : 'green'}>
                  {property.status}
                </Typography>
                <IconButton size="small" onClick={() => handleToggleFavorite(property.id)}>
                  <FavoriteIcon color={favorites.includes(property.id) ? 'error' : 'disabled'} />
                </IconButton>
              </Box>
              <Typography gutterBottom variant="h5" component="div">
                {property.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {property.address}
              </Typography>
              <Typography variant="body1" component="div">
                ${property.price} /sqft
              </Typography>
            </StyledCardContent>
            <StyledCardActions>
              <GlowingButton size="small" variant="contained" onClick={() => handleClick(property)}>
                {property.status === 'For Rent' ? 'Rent' : 'Buy'}
              </GlowingButton>
              <GlowingButton size="small" variant="contained">
                View Details
              </GlowingButton>
              <GlowingButton size="small" variant="contained" onClick={() => handleAddToCart(property)}>
                Add to Cart
              </GlowingButton>
            </StyledCardActions>
          </StyledCard>
        ))}
      </div>
      <Modal open={isCartOpen} onClose={handleCloseCart}>
        <Box className="cart-modal" sx={{ padding: 2, backgroundColor: 'white', maxWidth: 600, margin: 'auto' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cart Items
          </Typography>
          {cartItems.length > 0 && (
            <Button variant="contained" color="secondary" onClick={handleClearCart} sx={{ marginBottom: 2 }}>
              Clear All
            </Button>
          )}
          {cartItems.length === 0 ? (
            <Typography variant="body1" component="div">
              Your cart is empty.
            </Typography>
          ) : (
            cartItems.map((item) => (
              <StyledCard className="cart-item" key={item.id} sx={{ marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                  sx={{ 
                    objectFit: 'cover', // Ensures the image covers the card area
                    width: '100%', // Ensures the image takes up the full width of the card
                  }}
                />
                <StyledCardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </StyledCardContent>
                <StyledCardActions>
                  <GlowingButton size="small" color="secondary" onClick={() => handleRemoveFromCart(item)}>
                    Remove
                  </GlowingButton>
                </StyledCardActions>
              </StyledCard>
            ))
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default PropertyListing;
