// src/components/ComplaintPage.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

const ComplaintPage = () => {
  const [name, setName] = useState('');
  const [plotNo, setPlotNo] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('plotNo', plotNo);
    formData.append('address', address);

    // For text data
    try {
      const response = await fetch('http://localhost:3001/complaints', {
        method: 'POST',
        body: JSON.stringify({
          name,
          plotNo,
          address,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Complaint submitted successfully!');
      } else {
        const errorText = await response.text();
        alert(`Failed to submit complaint: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Submit a Complaint
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Plot Number"
              variant="outlined"
              fullWidth
              value={plotNo}
              onChange={(e) => setPlotNo(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ComplaintPage;
