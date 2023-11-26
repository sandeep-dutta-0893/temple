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
      <div className="home-container">
        <div className="card1">
            <div className="title">Gallery</div>
            <div className="gallery-container">
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