import { useState } from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true); 

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`sidebar bg-gray-800 text-white ${
          sidebarOpen ? "w-55" : "w-16"
        } transition-width duration-500 ease-in-out overflow-hidden`}
      >
        <div className="flex justify-between items-center p-4">
          {sidebarOpen ? (
            <h2 className="text-lg font-semibold">Admin</h2>
          ) : (
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              <span className="text-lg font-semibold">Sidebar</span>
            </div>
          )}
        </div>
        <ul className="py-4">
          <Link to="/">
            {" "}
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Dashboard
            </li>
          </Link>
          <Link to="/">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Sales
            </li>
          </Link>
          <Link to="/">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Users
            </li>
          </Link>
          <Link to="/">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Inventory
            </li>
          </Link>
          <Link to="/">
            {" "}
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Messaging System
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
