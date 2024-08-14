// src/components/ParentComponent.js
import React from 'react';
import CarouselComponent from './CarouselComponent';
import CardsComponent from './CardsComponent';

const ParentComponent = () => {
  return (
    <div>
      <CarouselComponent />
      <CardsComponent />
    </div>
  );
};

export default ParentComponent;
