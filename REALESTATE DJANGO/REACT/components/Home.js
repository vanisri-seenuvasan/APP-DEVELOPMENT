// // src/pages/Home.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { logout } from '../actions/authActions';
// import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Container } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import PolicyIcon from '@mui/icons-material/Policy';

// import 'bootstrap/dist/css/bootstrap.min.css';

// function Home() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div
//       className="home-container"
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//         backgroundImage: 'url(https://wallpaperaccess.com/full/1899390.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: 'white',
//       }}
//     >
//       <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', boxShadow: 'none' }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Home Page
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 5 }}>
//             <Button color="inherit" component={Link} to="/1" startIcon={<HomeIcon sx={{ fontSize: 30 }} />}>
//               Home
//             </Button>
//             <Button color="inherit" component={Link} to="/about" startIcon={<InfoIcon sx={{ fontSize: 30 }} />}>
//               About Us
//             </Button>
//             <Button color="inherit" component={Link} to="/contact" startIcon={<ContactMailIcon sx={{ fontSize: 30 }} />}>
//               Contact
//             </Button>
//             <Button color="inherit" component={Link} to="/services" startIcon={<PolicyIcon sx={{ fontSize: 30 }} />}>
//               Services
//             </Button>
//           </Box>
//           {isAuthenticated ? (
//             <>
//               <IconButton
//                 size="large"
//                 edge="end"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle sx={{ fontSize: 40 }} /> {/* Increase the profile icon size */}
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose} sx={{ fontSize: '1.25rem' }}>{user?.username}</MenuItem> {/* Increase text size */}
//                 <MenuItem onClick={handleLogout} sx={{ fontSize: '1.25rem' }}>Logout</MenuItem> {/* Increase text size */}
//               </Menu>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" component={Link} to="/login">
//                 Login
//               </Button>
//               <Button color="inherit" component={Link} to="/register">
//                 Sign Up
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       <Container sx={{ flexGrow: 1, textAlign: 'center', mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
//       </Container>
//       <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
//         <Typography variant="body1">© 2024 Your Company. All rights reserved.</Typography>
//       </footer>
//     </div>
//   );
// }

// export default Home;
import React, { useState } from 'react';
import { Container, Navbar, Nav, Carousel, Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import '../styles/home.css'; // Import custom CSS for additional styling
import Header from './Header';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({
    image: '',
    ownerContact: '',
    location: '',
  });

  const handleShow = (details) => {
    setPropertyDetails({
      image: details.image,
      ownerContact: details.contact,
      location: details.location,
    });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const properties = [
    {
      image: 'https://www.architectureartdesigns.com/wp-content/uploads/2015/02/930-630x419.jpg',
      title: 'Beautiful Family Home',
      contact: '8056517121',
      location: '123 Main St, Anytown',
      mapImageUrl: 'https://www.google.com/maps/search/Hotels/@10.7832426,79.1466041,12z/data=!3m1!4b1?entry=ttu'
    },
    {
      image: 'https://i.pinimg.com/originals/77/86/2f/77862f7872c18052f0d5d9113ca90ed3.jpg',
      title: 'Modern Apartment',
      contact: '8056517121',
      location: '456 Elm St, Anytown',
      mapImageUrl: 'https://via.placeholder.com/600x300?text=Map+of+456+Elm+St'
    },
    {
      image: 'https://media.architecturaldigest.com/photos/5616f43d6a662058513507ee/master/pass/one57-luxury-new-york-condo-for-sale-02.jpg',
      title: 'Luxury Condo',
      contact: '8056517121',
      location: '789 Oak St, Anytown',
      mapImageUrl: 'https://via.placeholder.com/600x300?text=Map+of+789+Oak+St'
    }
  ];

  const services = [
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.Jv6LiiaRHxJlec8JozfhdwHaEw&pid=Api&P=0&h=180',
      title: 'Service 1'
    },
    {
      image: 'https://tse4.explicit.bing.net/th?id=OIP.O_C4lXiwTwic4FCMcKD3OwHaE8&pid=Api&P=0&h=180',
      title: 'Service 2'
    },
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.zIhdZtScmxdubvrCbji1owHaE_&pid=Api&P=0&h=180',
      title: 'Service 3'
    }
  ];

  return (
    <div>
      <Header/>

      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.yimg.com/uu/api/res/1.2/.XlLq9Zgse3WQ_5i3yLBqg--~B/aD0xMTQwO3c9MTg0MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/elle_decor_817/b73eb223fa1c4c18a6a614de7786bed0"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Find Your Dream Home</h3>
            <p>Discover the best properties tailored to your needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp3784210.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Luxury Living</h3>
            <p>Explore premium listings and upscale living options.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Properties</h2>
        <Row>
          {properties.map((property, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src={property.image} />
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>
                    {property.contact}
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => handleShow(property)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Service Cards */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="border-0">
                <Card.Img variant="top" src={service.image} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Property Details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Property Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={propertyDetails.image} 
            alt="Property" 
            className="img-fluid mb-3"
          />
          <h4>Contact Information</h4>
          <p>Phone: {propertyDetails.ownerContact}</p>
          <h4>Location</h4>
          <p>{propertyDetails.location}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="my-5 contact-section">
        <Row>
          <Col md={6} className="mb-4">
            <h2>Contact Us</h2>
            <ul className="list-unstyled contact-info">
              <li><strong>Email:</strong> contact@realestateportal.com</li>
              <li><strong>Phone:</strong> (123) 456-7890</li>
              <li><strong>Address:</strong> 123 Main St, Anytown, USA</li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h2>Contact Form</h2>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <footer className="text-white text-center py-4 bg-transparent">
        <Container>
          <p>&copy; 2024 Real Estate Portal. All rights reserved.</p>
          <Nav className="justify-content-center">
            <Nav.Link href="#privacy" className="text-dark">Privacy Policy</Nav.Link>
            <Nav.Link href="#contact" className="text-dark">Contact</Nav.Link>
          </Nav>
        </Container>
      </footer>
    </div>
  );
};

export default Home;

