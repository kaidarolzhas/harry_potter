import React from 'react';
import './Modal.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
     
    </div>
  );
};

export default Modal;