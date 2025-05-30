import { useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 hadow-md px-6 py-4  ">
      <div className="container mx-auto flex items-center justify-between">
       
        <div className="text-2xl font-bold text-gray-800">The Great Indian Kitchen</div>

       
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium  flex items-center justify-between ">
          {/* <li><a href="#"><SearchBar/></a></li> */}
          <li><a href="#">Menu</a></li>
          <li><a href="#">SignIn</a></li>
          <li><a href="#">Cart</a></li>
        </ul>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4 space-y-2 text-gray-700 font-medium px-6">
          {/* <li><a href="#"><SearchBar/></a></li> */}
          <li><a href="#">Menu</a></li>
          <li><a href="#">SignIn</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
