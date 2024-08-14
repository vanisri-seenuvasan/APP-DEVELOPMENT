import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, MenuItem, Select, FormGroup, Box, Typography } from '@mui/material';
import axios from 'axios';

const ContactOwnerForm = () => {
  const [country_code, setCountryCode] = React.useState('CHN +86');
  const [get_options, setGetOptions] = React.useState(true);
  const [agree, setAgree] = React.useState(false);
  const [name, setName] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      name,
      mobile,
      email,
      country_code,
      get_options,
      agree
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contacts/', contactData);
      const message = response.data.message || 'Response Submitted'; // Default message if not provided
    alert(message);
      // Optionally, clear the form
      setName('');
      setMobile('');
      setEmail('');
      setGetOptions(true);
      setAgree(false);
    } catch (error) {
      console.error('There was an error saving the contact details!', error);
      alert('There was an error saving the contact details.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://img.freepik.com/premium-photo/communication-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email-address-website-page-contact-us-email-marketing-contact-us-customer-support-concept_162459-2947.jpg?w=1060)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          padding: 4,
          maxWidth: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Increased opacity for better contrast
          borderRadius: 2,
          boxShadow: 1,
          width: '100%',
          position: 'relative',
          top:'-200px',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Contact Owner
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box display="flex" alignItems="center" margin="normal">
            <Select
              value={country_code}
              onChange={handleCountryCodeChange}
              variant="outlined"
              sx={{ minWidth: 100, marginRight: 2 }}
            >
              <MenuItem value="CHN +86">CHN +86</MenuItem>
              {/* Add other country codes here */}
            </Select>
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Box>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={get_options} onChange={() => setGetOptions(!get_options)} />}
              label="Get more options. Allow other advertisers with similar properties to contact you."
            />
            <FormControlLabel
              control={<Checkbox checked={agree} onChange={() => setAgree(!agree)} />}
              label="I Agree to MagicBricks' T&C, Privacy Policy & Cookie Policy"
            />
          </FormGroup>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Contact Owner
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactOwnerForm;
