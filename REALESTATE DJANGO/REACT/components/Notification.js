import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Box, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const [request, setRequest] = useState({
    name: '',
    property_location: '',
    address: '',
    amount_settled: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openProposals, setOpenProposals] = useState(false); // For viewing proposals
  const [proposals, setProposals] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));
  };

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/requests/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setOpenSnackbar(true);
      setRequest({
        name: '',
        property_location: '',
        address: '',
        amount_settled: ''
      });

      // Optionally: refresh proposals
      fetchProposals();

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleViewProposals = () => {
    setOpenProposals(true);
    fetchProposals();
  };

  const handleCloseProposals = () => {
    setOpenProposals(false);
  };

  const fetchProposals = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/requests/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProposals(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url('https://virtual-bg.com/wp-content/uploads/2020/06/professional-2-background-for-zoom-or-teams-unsplash.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '45%',
          height: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: 4,
          borderRadius: 0,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          REQUEST FOR PROPOSAL
        </Typography>
        <form onSubmit={handleSubmitRequest} style={{ width: '100%' }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={request.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Property Location"
            variant="outlined"
            fullWidth
            margin="normal"
            name="property_location"
            value={request.property_location}
            onChange={handleChange}
            required
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address"
            value={request.address}
            onChange={handleChange}
            required
          />
          <TextField
            label="Amount Settled"
            variant="outlined"
            fullWidth
            margin="normal"
            name="amount_settled"
            value={request.amount_settled}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit Request
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, ml: 2 }}
            onClick={handleViewProposals}
          >
            View Proposals
          </Button>
        </form>
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Request submitted successfully!
        </Alert>
      </Snackbar>

      {/* Dialog for viewing proposals */}
      <Dialog open={openProposals} onClose={handleCloseProposals} fullWidth>
        <DialogTitle>Proposals</DialogTitle>
        <DialogContent>
          {proposals.length > 0 ? (
            <Box>
              {proposals.map((proposal, index) => (
                <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
                  <Typography variant="h6">Name: {proposal.name}</Typography>
                  <Typography>Property Location: {proposal.property_location}</Typography>
                  <Typography>Address: {proposal.address}</Typography>
                  <Typography>Amount Settled: {proposal.amount_settled}</Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography>No proposals available</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProposals}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Notification;
