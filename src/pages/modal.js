// Modal.js
import React from 'react';
import '../App.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div class="modal-overlay" onClick={onClose}>
      <div class="modal-content">
        <img src={imageUrl} alt="Full-size" />
      </div>
    </div>
  );
};

export default Modal;
