import React from 'react';
import Header from './Header'; // Adjust the path as needed
import SearchBar from './SearchBar';
import PropertyList from './PropertyList'; // Remove duplicate import
import Container from '@mui/material/Container'; // Example import, adjust as needed
import Contact from './Contact';
import Tfooter from './Tfooter';
import ToolsAndAdvice from './ToolsandAdvice';
import CarouselComponent from './CarouselComponent';

const Newdt = () => {
  return (
    <div>
      <Header />
      <CarouselComponent/>
      <Container>
        <SearchBar />
      
        <PropertyList />
        </Container>
        <ToolsAndAdvice/>
       < Contact/>
      
       <Tfooter/>
    </div>
  );
}

export default Newdt;
