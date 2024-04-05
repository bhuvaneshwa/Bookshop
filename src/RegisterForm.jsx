import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="container mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="hidden md:block">
          {/* SVG Animation */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            className="w-full h-auto"
          >
            {/* Your SVG Animation Code Goes Here */}
            {/* For example: */}
            <circle cx="200" cy="200" r="150" fill="blue" />
          </svg>
        </div>
        <div className="md:col-span-1 flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="bg-[#606c38] shadow-sm p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
              <form className="mt-4">
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md placeholder-white focus:outline-none focus:border-[#606c38]"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-md placeholder-white focus:outline-none focus:border-[#606c38]"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <input
                    type="password"
                    className="w-full px-4 py-3 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    {/* Eye icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {/* Eye icon SVG code */}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12c3.786 5.194 9.164 8 12 8s8-2.806 12-8m-6 0s-3.215-3.4-6-5.5c-2.786 2.1-6 5.5-6 5.5z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mb-4 relative">
                  <input
                    type="password"
                    className="w-full px-4 py-3 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Confirm Password"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    {/* Eye icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {/* Eye icon SVG code */}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12c3.786 5.194 9.164 8 12 8s8-2.806 12-8m-6 0s-3.215-3.4-6-5.5c-2.786 2.1-6 5.5-6 5.5z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-center">
                  <button
                    className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <p className="mt-3">
                    Already have an account?{" "}
                    <Link
                      to="/register/login"
                      className="text-blue-500 hover:underline"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
