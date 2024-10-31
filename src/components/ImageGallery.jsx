import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [currentIdx, setCurrentIdx] = useState(0); // Track current image index

  // Go to the next image
  const nextImage = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  // Set specific image on thumbnail click
  const selectImage = (index) => {
    setCurrentIdx(index);
  };

  return (
    <div className="gallery-container">
      {/* Main Image Display */}
      <div className="main-image">
        <img src={images[currentIdx]} alt={`Product ${currentIdx + 1}`} loading="lazy" />
        <button className="nav left" onClick={prevImage}>
          &#10094;
        </button>
        <button className="nav right" onClick={nextImage}>
          &#10095;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className={idx === currentIdx ? 'active' : ''}
            onClick={() => selectImage(idx)}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
