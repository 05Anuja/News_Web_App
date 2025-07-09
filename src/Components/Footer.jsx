import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fdf6ee] text-[#4b2e2e] py-6 px-4 border-t border-orange-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col justify-between items-center text-center md:text-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-blue-700">DesiNews</h3>
          <p className="text-sm mt-1">
            Uncover what's happening across India – right now
          </p>
        </div>
        <div className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} DesiNews. All rights reserved.
          <p className="text-xs text-gray-500">Developed by Anuja Pawar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
