import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Dashboard = () => {
  const { isHamburgerToggled } = useOutletContext();
  return (
    <div
      style={{
        width: isHamburgerToggled
          ? 'calc(100vw - 95px)'
          : 'calc(100vw - 240px)',
      }}
      className={`transition-all duration-300 ease-in-out bg-darkprimary p-5 w-[calc(100vw - 207px)] ${
        isHamburgerToggled ? 'ml-[80px]' : 'ml-[225px]'
      } h-screen mt-[96px] text-white`}
    >
      Dashboard
    </div>
  );
};

export default Dashboard;
