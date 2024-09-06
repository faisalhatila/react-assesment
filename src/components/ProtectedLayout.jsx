import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  const [isHamburgerToggled, setHamburgerToggled] = useState(true);
  const handleHamburgerClick = () => {
    setHamburgerToggled((prev) => !prev);
  };
  return (
    <div className="flex min-h-screen">
      <Header
        isHamburgerToggled={isHamburgerToggled}
        handleToggle={handleHamburgerClick}
      />
      <div className="flex flex-col flex-grow overflow-x-hidden">
        <Sidebar
          isHamburgerToggled={isHamburgerToggled}
          handleToggle={handleHamburgerClick}
        />
        <main className="flex-grow">
          <Outlet context={{ isHamburgerToggled }} />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
