import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-3 md:gap-0">
        
        {/* Logo */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600">DesiNews</h3>
        </div>

        {/* Search Box */}
        <div className="flex items-center w-full md:w-auto gap-2">
          <input 
            type="text" 
            id="searchText"
            name="searchText"
            placeholder="Search news by title..."
            className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 outline-none cursor-pointer text-white rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
