import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-white p-4 flex justify-between items-center bg-gray-800">
      <div className="logo">
        <img src="logo.svg" alt="itel Logo" className="w-24" />
      </div>
      <input
        type="text"
        className="bg-gray-700 text-white rounded-xl w-[400px] px-4 py-2"
        placeholder="What are you looking for?"
      />
      {/* Flex container for the number and Nearby Stores */}
      <div className="hidden md:flex space-x-4">
        <a href="tel:18004190525" className="hover:text-red-500">Customer Care: 1800-4190-525</a>
        <a href="#" className="hover:text-red-500">Nearby Stores</a>
      </div>
    </nav>
  );
};

export default Navbar;
