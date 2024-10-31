import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar'; // Import NavBar
import ImageGallery from './components/ImageGallery';
import Quantity from './components/Quantity'; // Import ImageGallery
import './App.css'; // Import any global styles

const App = () => {
  // // // Generate an array of URLs based on predictable naming
  const images = Array.from({ length: 4 }, (_, index) => `/images/ImageGallery/image${index + 1}.png`);

  return (
    <div className="App">
      <NavBar /> {/* Include the NavBar */}
      <main>
        <h1>Products </h1>
        <ImageGallery images={images} /> 
        <div className="quantity">
          <Quantity /> {/* Use QuantitySelector here */}
        </div>
      </main>
    </div>
  );
};

export default App;
