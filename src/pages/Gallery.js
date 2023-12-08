import React from 'react';
import '../App.css';
import Modal from './modal';
import { useState } from 'react';

function Gallery() {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('./GalleryImages', false, /\.(png|jpe?g|svg|jpg)$/));
  
  const [selectedImage, setSelectedImage] = useState(null);

  

  const closeModal = () => {
    setSelectedImage(null);
  };
    return (
      <div class="home-container">
        <div class="card1">
            <div class="title">Gallery</div>
            <div class="gallery-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${index}`} />
          ))}
        </div>
      {/* Add page content */}
      </div>
      {selectedImage && <Modal imageUrl={`./GalleryImages/${selectedImage}`} onClose={closeModal} />}
    </div>
  );
};

export default Gallery;