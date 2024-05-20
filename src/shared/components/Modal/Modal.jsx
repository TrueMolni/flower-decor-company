import React, { useEffect } from 'react';

import css from './modal.module.css';
import { IoClose } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(
    () => {
      const handleKeyPress = event => {
        event.key === 'Escape' && handleClose();
      };

      const handleClickOutside = event => {
        event.target.className === 'backdrop' && handleClose();
      };

      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleClickOutside);
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyPress);
        document.removeEventListener('click', handleClickOutside);
      };
    }
    //  , [isOpen]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={css.backdrop} onClick={handleClose}></div>
      <div id='modal' className={css.modal}>
        <div className={css.modalContent}>
          <IoClose
            type="button"
            className={css.closeButton}
            onClick={handleClose}
          />
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
