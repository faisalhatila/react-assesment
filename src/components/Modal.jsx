import React, { useEffect, useRef, useState } from 'react';
import ThemedText from './ui-elements/ThemedText';
import ThemedInput from './ui-elements/ThemedInput';

const Modal = ({ position, onClose, data, updateData, notify, deleteData }) => {
  const modalRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalData, setModalData] = useState(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const modal = modalRef.current;
    const width = window.innerWidth;
    console.log({ width });
    if (modal) {
      modal.style.transform = `translate(${position.x - 225}px, ${
        position.y - 125
      }px) scale(0)`;
      setTimeout(() => {
        if (width < 786) {
          modal.style.transform = `translate(0px, 0px) scale(1)`;
        } else {
          modal.style.transform = `translate(calc(50vw - 175px), calc(50vh - 125px)) scale(1)`;
        }
      }, 0);
    }
  }, [position]);

  const handleClose = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.style.transform = `translate(${position.x - 225}px, ${
        position.y - 125
      }px) scale(0)`;
      setTimeout(() => onClose(), 300);
    }
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <>
          <div className="flex items-center border-b border-b-border">
            <div className="px-5 py-2">
              <ThemedText className="font-urbanist font-bold text-2xl">
                Update Student
              </ThemedText>
            </div>
          </div>
          <div className="p-5">
            <div className="flex">
              {/* <div className="w-[55px] h-[55px] border-2 border-secondary flex justify-center items-center rounded-full overflow-hidden">
                <img
                  src={data?.imageUrl}
                  className="max-w-[80%] rounded-full"
                />
              </div> */}
              <div className="flex flex-col md:flex-row flex-1">
                <div className="flex flex-col ml-5 flex-1">
                  {['name', 'section', 'majorSubject', 'city'].map((field) => (
                    <div className="flex items-center mb-2" key={field}>
                      <ThemedInput
                        onChange={handleChange}
                        name={field}
                        value={modalData?.[field]}
                        placeholder={capitalizeFirstLetter(field)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col ml-5 flex-1">
                  {['class', 'enrollmentNumber', 'attendance', 'country'].map(
                    (field) => (
                      <div className="flex items-center mb-2" key={field}>
                        <ThemedInput
                          onChange={handleChange}
                          name={field}
                          value={modalData?.[field]}
                          placeholder={capitalizeFirstLetter(field)}
                        />
                      </div>
                    )
                  )}
                </div>
                <div className="flex flex-col ml-5 flex-1">
                  {['name', 'section', 'majorSubject', 'city'].map((field) => (
                    <div className="flex items-center mb-2" key={field}>
                      <ThemedInput
                        onChange={handleChange}
                        name={field}
                        value={modalData?.[field]}
                        placeholder={capitalizeFirstLetter(field)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col ml-5 flex-1">
                  {['class', 'enrollmentNumber', 'attendance', 'country'].map(
                    (field) => (
                      <div className="flex items-center mb-2" key={field}>
                        <ThemedInput
                          onChange={handleChange}
                          name={field}
                          value={modalData?.[field]}
                          placeholder={capitalizeFirstLetter(field)}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <button
                onClick={() => {
                  updateData(modalData);
                  setModalData(null);
                  setIsEditing(false);
                  notify('Data Updated Successfully');
                  handleClose();
                }}
                className="px-5 py-2 rounded bg-secondary border-secondary flex-1"
              >
                <ThemedText className="font-urbanist text-20 text-white">
                  Save
                </ThemedText>
              </button>
              <button
                onClick={() => {
                  setModalData(null);
                  setIsEditing(false);
                }}
                className="px-5 py-2 rounded bg-border border-gray-300 flex-1"
              >
                <ThemedText className="font-urbanist text-20 text-white">
                  Cancel
                </ThemedText>
              </button>
            </div>
          </div>
        </>
      );
    }

    if (isDeleting) {
      return (
        <>
          <div className="flex items-center border-b border-b-border">
            <div className="px-5 py-2">
              <ThemedText className="font-urbanist font-bold text-2xl">
                Delete Data
              </ThemedText>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center min-h-[100px] justify-center">
              <ThemedText className="text-14 font-urbanist">
                Are you sure you want to delete? Action is not reversible.
              </ThemedText>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <button
                onClick={() => {
                  setModalData(null);
                  setIsDeleting(false);
                }}
                className="px-5 py-2 rounded bg-border border-gray-300 flex-1"
              >
                <ThemedText className="font-urbanist text-20 text-white">
                  Cancel
                </ThemedText>
              </button>
              <button
                onClick={() => {
                  deleteData(data?.id);
                  handleClose();
                }}
                className="px-5 py-2 rounded bg-[red] border-[red] flex-1"
              >
                <ThemedText className="font-urbanist text-20 text-white">
                  Delete
                </ThemedText>
              </button>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="flex items-center border-b border-b-border">
          <div className="px-5 py-2">
            <ThemedText className="font-urbanist font-bold text-2xl">
              Student Details
            </ThemedText>
          </div>
        </div>
        <div className="p-5">
          <div className="flex">
            <div className="w-[55px] h-[55px] border-2 border-secondary flex justify-center items-center rounded-full overflow-hidden">
              <img src={data?.imageUrl} className="max-w-[80%] rounded-full" />
            </div>
            <div className="flex flex-col md:flex-row flex-1">
              <div className="flex flex-col ml-5 flex-1">
                {['name', 'section', 'majorSubject', 'city'].map((field) => (
                  <div className="flex items-center mb-2" key={field}>
                    <ThemedText className="text-14 font-urbanist">
                      {capitalizeFirstLetter(field)}:
                    </ThemedText>
                    <ThemedText className="text-14 font-urbanist font-medium ml-2">
                      {data?.[field]}
                    </ThemedText>
                  </div>
                ))}
              </div>
              <div className="flex flex-col ml-5 flex-1">
                {['class', 'enrollmentNumber', 'attendance', 'country'].map(
                  (field) => (
                    <div className="flex items-center mb-2" key={field}>
                      <ThemedText className="text-14 font-urbanist">
                        {capitalizeFirstLetter(field)}:
                      </ThemedText>
                      <ThemedText className="text-14 font-urbanist font-medium ml-2">
                        {field === 'attendance'
                          ? `${data?.[field]}%`
                          : data?.[field]}
                      </ThemedText>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={() => {
                setModalData(data);
                setIsEditing(true);
              }}
              className="px-5 py-2 rounded bg-secondary border-secondary flex-1"
            >
              <ThemedText className="font-urbanist text-20 text-white">
                Edit
              </ThemedText>
            </button>
            <button
              onClick={() => setIsDeleting(true)}
              className="px-5 py-2 rounded bg-[red] border-[red] flex-1"
            >
              <ThemedText className="font-urbanist text-20 text-white">
                Delete
              </ThemedText>
            </button>
          </div>
        </div>
      </>
    );
  };

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div
      className="modal-overlay flex items-center justify-center md:block"
      onClick={handleClose}
    >
      <div
        className="modal-content max-h-[100vh] overflow-y-auto bg-darkprimary h-auto w-auto !md:min-w-[450px] !md:min-h-[250px]"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;
