// src/components/HamburgerMenu.js
import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-white bg-blue-500 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">About</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer relative">
            Services
            <ul className="absolute top-0 right-48 bg-gray-200 shadow-lg rounded-md">
              <li className="p-2 hover:bg-gray-100">Sub-Service 1</li>
              <li className="p-2 hover:bg-gray-100">Sub-Service 2</li>
            </ul>
          </li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Contact</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
