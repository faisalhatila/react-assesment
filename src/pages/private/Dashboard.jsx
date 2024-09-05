import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Dashboard = () => {
  const { isHamburgerToggled } = useOutletContext();
  const items = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);

  return (
    <div
      style={{
        width: isHamburgerToggled
          ? 'calc(100vw - 95px)'
          : 'calc(100vw - 240px)',
      }}
      className={`transition-all duration-300 ease-in-out bg-darkprimary p-5 w-[calc(100vw - 207px)] ${
        isHamburgerToggled ? 'ml-[80px]' : 'ml-[225px]'
      } min-h-screen mt-[96px] text-white`}
    >
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-secondary text-center rounded-lg shadow-md relative w-full"
            style={{ paddingBottom: '100%' }} // This ensures the 1:1 aspect ratio
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
