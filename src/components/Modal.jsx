import React, { useEffect, useRef } from 'react';

const Modal = ({ position, onClose }) => {
  const modalRef = useRef(null);
  console.log({ position });

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      modal.style.transform = `translate(${position.x - 175}px, ${
        position.y - 125
      }px) scale(0)`;
      setTimeout(() => {
        // modal.style.transform = `translate(0px, 0px) scale(1)`;
        // modal.style.transform = `translate(50vw, 50vh) scale(1)`;
        modal.style.transform = `translate(calc(50vw - 175px), calc(50vh - 125px)) scale(1)`;
      }, 0);
    }
  }, [position]);

  const handleClose = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.style.transform = `translate(${position.x - 175}px, ${
        position.y - 125
      }px) scale(0)`;
      setTimeout(() => {
        onClose();
      }, 300); // Match the duration of your scale animation
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        // className="modal-content"
        className="modal-content min-w-[350px] min-h-[250px]"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-body">
          <p className="text-darkprimary">Your modal content here.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
