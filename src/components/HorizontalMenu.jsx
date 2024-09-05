// src/components/HorizontalMenu.js
import React from 'react';

const HorizontalMenu = () => {
  return (
    <nav className="bg-gray-800 text-white py-2">
      <ul className="flex justify-around">
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Home</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">About</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Services</li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
