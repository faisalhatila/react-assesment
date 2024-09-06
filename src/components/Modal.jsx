import React, { useEffect, useRef } from 'react';
import ThemedText from './ui-elements/ThemedText';
import UserAvatar from '../assets/img/User1Avatar.svg';

const Modal = ({ position, onClose }) => {
  const modalRef = useRef(null);
  console.log({ position });

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      modal.style.transform = `translate(${position.x - 225}px, ${
        position.y - 125
      }px) scale(0)`;
      setTimeout(() => {
        modal.style.transform = `translate(calc(50vw - 175px), calc(50vh - 125px)) scale(1)`;
      }, 0);
    }
  }, [position]);

  const handleClose = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.style.transform = `translate(${position.x - 225}px, ${
        position.y - 125
      }px) scale(0)`;
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content bg-darkprimary bg min-w-[450px] min-h-[250px]"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="flex items-center border-b border-b-border">
            <div className="px-5 py-2">
              <ThemedText className="font-urbanist font-bold text-2xl">
                Student Details
              </ThemedText>
            </div>
          </div>
          <div className="p-5">
            <div className="flex">
              <div>
                <img src={UserAvatar} />
              </div>
              <div className="flex flex-1">
                <div className="flex flex-col ml-5 flex-1">
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">Name:</ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      Faisal Hanif
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">Section:</ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      A
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">Major:</ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      Science
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">Address:</ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      Karachi
                    </ThemedText>
                  </div>
                </div>
                <div className="flex flex-col ml-5 flex-1">
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">Class:</ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      10th
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">
                      Identity N0:
                    </ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      4560329
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">
                      Attendance:
                    </ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      95%
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="font-urbanist">Country:</ThemedText>
                    <ThemedText className="font-urbanist font-500 ml-2">
                      Pakistan
                    </ThemedText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
