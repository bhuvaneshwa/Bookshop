import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="dark:bg-[#606c38] dark:text-white">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img
                src="/Logo-V9.svg"
                alt=""
                className="h-10 w-24 rounded-full"
              />
            </Link>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {/* Navigation Links */}
            <ul className="items-stretch hidden space-x-3 lg:flex">
              {/* Example: */}
              <li className="flex">
                <Link
                  to="/"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1"
                >
                  Home
                </Link>
              </li>
              <li className="flex relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center px-4 -mb-1 focus:outline-none"
                >
                  Books
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 ml-1 transition-transform duration-300 transform ${isMenuOpen ? "rotate-180" : ""
                      }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <ul className="absolute z-10 w-[10rem] left-0 mt-10 py-2 bg-white border rounded-lg shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      >
                        General Books
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      >
                        Premium Books
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      >
                        New Books
                      </a>
                    </li>
                    {/* Add more categories here */}
                  </ul>
                )}
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1"
                >
                  Membership
                </a>
              </li>
              <li className="flex" href="#reviews">
                <a
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1"
                >
                  Reviews
                </a>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </div>
          <div className="items-center mx-2 gap-3 flex-shrink-0 hidden lg:flex">
            {/* Profile Button */}

            <Link to="/register/login">
              <button className="bg-white text-black px-4 py-2 rounded-sm">Login</button>{" "}
            </Link>
            <Link to="/register">
              <button className="bg-white text-black px-4 py-2 rounded-sm">Sign up</button>
            </Link>
            {/* <button to className="px-4 py-2 font-semibold dark:bg-white rounded-full dark:text-black">
              <FaUser className="w-6 h-6" />
            </button> */}
            {/* Shopping Cart Button */}
            <button className="px-4 py-2 font-semibold rounded dark:bg-white dark:text-black">
              <FaShoppingCart className="w-6 h-6" />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            {/* Example: */}
            <li>
              <Link
                to="/"
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                New Books
              </a>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </div>
      )}
      <Outlet />
    </div>
  );
}
