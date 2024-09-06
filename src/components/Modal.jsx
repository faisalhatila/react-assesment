import React, { useEffect, useRef } from 'react';
import ThemedText from './ui-elements/ThemedText';
import UserAvatar from '../assets/img/User1Avatar.svg';

const Modal = ({ position, onClose, data }) => {
  const modalRef = useRef(null);
  console.log({ position, data });

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
              <div className="w-[55px] h-[55px] border-2 border-secondary flex justify-center items-center rounded-[50%] overflow-hidden">
                <img
                  src={data?.imageUrl}
                  className="max-w-[80%] rounded-[50%]"
                />
              </div>
              <div className="flex flex-1">
                <div className="flex flex-col ml-5 flex-1">
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Name:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      {data?.name}
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Section:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      {data?.section}
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Major:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      {data?.majorSubject}
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Address:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      {data?.city}
                    </ThemedText>
                  </div>
                </div>
                <div className="flex flex-col ml-5 flex-1">
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Class:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      10th
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Identity N0:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      {data?.enrollmentNumber}
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Attendance:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      {`${data?.attendance}%`}
                    </ThemedText>
                  </div>
                  <div className="flex items-center mb-2">
                    <ThemedText className="text-[14px] font-urbanist">
                      Country:
                    </ThemedText>
                    <ThemedText className="text-[14px] font-urbanist font-500 ml-2">
                      {data?.country}
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
