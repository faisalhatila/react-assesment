import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../../components/Modal';

const Dashboard = () => {
  const { isHamburgerToggled } = useOutletContext();
  const [expandedTile, setExpandedTile] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const items = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
  const cardsContainer = useRef(null);

  const applyOverlayMask = (e) => {
    const documentTarget = e.currentTarget;

    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    cardsContainer.current.setAttribute(
      'style',
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener('pointermove', applyOverlayMask);

    return () => {
      document.body.removeEventListener('pointermove', applyOverlayMask);
    };
  }, []);

  const handleTileClick = (event, index) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xp = rect.left + rect.width / 2;
    const yp = rect.top + rect.height / 2;
    const x = event.pageX;
    const y = event.pageY;
    console.log({ x, y, xp, yp });

    setModalPosition({ x, y });
    setShowModal(true);
    setExpandedTile(expandedTile === index ? null : index);
  };

  return (
    <div
      style={{
        width: isHamburgerToggled
          ? 'calc(100vw - 95px)'
          : 'calc(100vw - 240px)',
      }}
      className={`transition-all duration-300 ease-in-out bg-darkprimary p-5 ${
        isHamburgerToggled ? 'ml-[80px]' : 'ml-[225px]'
      } min-h-screen mt-[96px] text-white`}
    >
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="relative" ref={cardsContainer}>
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              //   className={`cursor-pointer relative overflow-hidden bg-darkprimary border border-1 border-border text-center rounded-xl transition-transform duration-500 ${
              //     expandedTile === index ? 'scale-150 z-10' : 'scale-100'
              //   }`}
              className={`cursor-pointer relative overflow-hidden bg-darkprimary border border-1 border-border text-center rounded-xl transition-transform duration-500`}
              style={{ aspectRatio: '1 / 1' }}
              onClick={(e) => handleTileClick(e, index)}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                {item}
              </div>
            </div>
          ))}
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4 select-none pointer-events-none absolute inset-0"
          style={{
            opacity: 'var(--opacity, 0)',
            mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
            WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              //   className={`cursor-pointer relative overflow-hidden border border-1 border-secondary text-center rounded-xl transition-transform duration-500
              //   ${
              //     expandedTile === index ? 'scale-150 z-10' : 'scale-100'
              //   }
              //   `}
              className={`cursor-pointer relative overflow-hidden border border-1 border-secondary text-center rounded-xl transition-transform duration-500`}
              style={{ aspectRatio: '1 / 1' }}
              onClick={() => handleTileClick(index)}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal position={modalPosition} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;
