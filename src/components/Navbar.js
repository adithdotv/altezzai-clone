import React from 'react';
import logo1 from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

function Navbar() {
  return (
    <nav className=" sticky top-0 shadow-sm shadow-black-500/20 bg-white py-4 px-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo2} alt="Logo 2" className="h-14 w-16 object-contain" />
          <img src={logo1} alt="Logo 1" className="h-9 object-contain" />
        </div>
        <div>
          <ul className="flex space-x-11 items-center">
            <li>
              <a href="#home" className="hover:text-hover-blue transition-all ease-in-out duration-700 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-hover-blue transition-all ease-in-out duration-700 font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-hover-blue transition-all ease-in-out duration-700 font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-hover-blue transition-all ease-in-out duration-700 font-medium">
                Our Work
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-hover-blue transition-all ease-in-out duration-700 font-medium">
                Our Team
              </a>
            </li>
            <li>
              <a href="#product" className="hover:text-hover-blue transition-all ease-in-out duration-700 font-medium">
                Our Product
              </a>
            </li>
            <li>
              <button className="bg-black text-white text-sm h-9 w-32 rounded-3xl font-bold mx-2 hover:text-hover-blue hover:scale-110 transition-transform transition-colors ease-in-out duration-500">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
