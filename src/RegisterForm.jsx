import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-8">
        <img src="./img/booklogo.png" className="w-8" alt="Logo Barber" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="hidden md:block">
          <img
            src="/blog3.jpg"
            className="w-full"
            alt="Register Image"
          />
        </div>
        <div className="md:col-span-1">
          <div className="bg-white shadow-sm p-6 rounded-lg">
            <h4 className="text-2xl font-bold">Sign Up</h4>
            <p className="text-gray-500">Sign Up for the Best Book!</p>
            <form className="mt-4">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md pr-10"
                  placeholder="Password"
                  required
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  <i className="icon-eye"></i>
                  <i className="icon-eye-off hidden"></i>
                </span>
              </div>
              <div className="mb-4 relative">
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md pr-10"
                  placeholder="Confirm Password"
                  required
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  <i className="icon-eye"></i>
                  <i className="icon-eye-off hidden"></i>
                </span>
              </div>
              <div className="text-center">
                <button
                  className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  type="submit"
                >
                  Sign Up
                </button>
                <p className="mt-3">
                  Already have an account?{' '}
                  <Link to="/register/login">
                  <div className="text-blue-500">
                    Sign In
                  </div>
                  </Link>
                 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
