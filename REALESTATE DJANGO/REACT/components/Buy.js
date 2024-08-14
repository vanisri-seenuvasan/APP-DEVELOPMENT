import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, MenuItem, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Buy = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    card_number: '',
    exp_month: '',
    exp_year: '',
    cvv: ''
  });
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/payments/', formData); // Make sure to set up the correct endpoint for db.json
      alert('Payment details saved successfully');
      navigate('/orderdetails');
    } catch (error) {
      console.error('Error saving payment details:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Apply transparency to the background color
        backgroundImage: 'url(https://wallpaperaccess.com/full/10839228.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9,
        color: '#fff',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={4} sx={{ backgroundColor: '#fff', color: '#000', borderRadius: '8px', p: 4, opacity: 0.7 }}>
            
            {/* Billing Address Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Billing Address
              </Typography>
              <TextField
                fullWidth
                label="Full name"
                name="full_name"
                margin="normal"
                variant="outlined"
                value={formData.full_name}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the input text
                      fontWeight: 'bold', // Makes the input text bold
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the label text
                    },
                  }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the input text
                      fontWeight: 'bold', // Makes the input text bold
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the label text
                    },
                  }}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                margin="normal"
                variant="outlined"
                value={formData.address}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the input text
                      fontWeight: 'bold', // Makes the input text bold
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the label text
                    },
                  }}
              />
              <TextField
                fullWidth
                label="City"
                name="city"
                margin="normal"
                variant="outlined"
                value={formData.city}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the input text
                      fontWeight: 'bold', // Makes the input text bold
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the label text
                    },
                  }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    select
                    label="State"
                    name="state"
                    margin="normal"
                    variant="outlined"
                    value={formData.state}
                    onChange={handleInputChange}
                    InputProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the input text
                          fontWeight: 'bold', // Makes the input text bold
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the label text
                        },
                      }}
                  >
                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                    <MenuItem value="Kerala">Kerala</MenuItem>
                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                    <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Zip code"
                    name="zip_code"
                    margin="normal"
                    variant="outlined"
                    value={formData.zip_code}
                    onChange={handleInputChange}
                    InputProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the input text
                          fontWeight: 'bold', // Makes the input text bold
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the label text
                        },
                      }}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Payment Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Payment
              </Typography>
              <Box sx={{ mb: 2 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                  style={{ width: '60px', marginRight: '10px' }}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                  alt="Mastercard"
                  style={{ width: '60px', marginRight: '10px' }}
                />
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.hu6dlYaBnXpoD4tGh961vgHaEy&pid=Api&P=0&h=180"
                  alt="Discover"
                  style={{ width: '60px' }}
                />
              </Box>
              <TextField
                fullWidth
                label="Credit Card Number"
                name="card_number"
                margin="normal"
                variant="outlined"
                value={formData.card_number}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the input text
                      fontWeight: 'bold', // Makes the input text bold
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the label text
                    },
                  }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Exp Month"
                    name="exp_month"
                    margin="normal"
                    variant="outlined"
                    value={formData.exp_month}
                    onChange={handleInputChange}
                    InputProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the input text
                          fontWeight: 'bold', // Makes the input text bold
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the label text
                        },
                      }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    select
                    label="Exp Year"
                    name="exp_year"
                    margin="normal"
                    variant="outlined"
                    value={formData.exp_year}
                    onChange={handleInputChange}
                    InputProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the input text
                          fontWeight: 'bold', // Makes the input text bold
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: '20px', // Adjust this value to your desired font size for the label text
                        },
                      }}
                  >
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2025">2025</MenuItem>
                    <MenuItem value="2026">2026</MenuItem>
                    <MenuItem value="2027">2027</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="CVV"
                name="cvv"
                margin="normal"
                variant="outlined"
                value={formData.cvv}
                onChange={handleInputChange}
                InputProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the input text
                      fontWeight: 'bold', // Makes the input text bold
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: '20px', // Adjust this value to your desired font size for the label text
                    },
                  }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Buy;
