import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-4">
          <Outlet /> {/* Routed content will be rendered here */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProtectedLayout;
