import { useState } from 'react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`sidebar bg-gray-800 text-white ${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-500 ease-in-out overflow-hidden`}>
        <div className="flex justify-between items-center p-4">
          {sidebarOpen ? (
            <h2 className="text-lg font-semibold">Sidebar</h2>
          ) : (
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span className="text-lg font-semibold">Sidebar</span>
            </div>
          )}
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="py-4">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Users</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Projects</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Events</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Preferences</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Feedback</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Suggestions</li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-200">
        <div className="p-6">
          <button onClick={toggleSidebar} className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none">Toggle Sidebar</button>
        </div>
        <div className="p-6">Dashboard Content</div>
      </div>
    </div>
  );
}
