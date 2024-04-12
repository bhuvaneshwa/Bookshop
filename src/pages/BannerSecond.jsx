import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function BannerSecond() {
  return (
<<<<<<< HEAD
    <div>
      <div className="px-8 py-2 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex items-center mx-auto container justify-between md:justify-between py-2">
          <div>
            <ul className="flex sm:text-sm">
              <li className="cursor-pointer transition duration-300 ease-in-out  mx-4 transform hover:scale-105">
                <Link to="/track" className="block px-4 py-2 text-gray-700 hover:text-blue-400  hover:font-bold text-[15px] rounded-md">Track Order</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out mx-4 transform hover:scale-105">
                <Link to="/about" className="block px-4 py-2 text-gray-700  hover:text-blue-400  hover:font-bold text-[15px] rounded-md">About Us</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out  mx-4 transform hover:scale-105">
                <Link to="/blog" className="block px-4 py-2 text-gray-700  hover:text-blue-400  hover:font-bold text-[15px] rounded-md">Blog</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out mx-4 transform hover:scale-105">
                <Link to="/contact" className="block px-4 py-2 text-gray-700  hover:text-blue-400  hover:font-bold text-[15px] rounded-md">Contact Us</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out mx-4 transform hover:scale-105">
                <Link to="/about" className="block px-4 py-2 text-gray-700  hover:text-blue-400  hover:font-bold text-[15px] rounded-md">FAQ</Link>
              </li>
            </ul>
          </div>
=======
    <div className="bg-gray-50 dark:bg-gray-200 dark:text-gray-200">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <ul className="flex space-x-4 text-sm">
          <li>
            <Link
              to="/track"
              className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline"
            >
              Track Order
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="font-semibold text-gray-700 hover:text-[#606c38] hover:underline"
            >
              FAQ
            </Link>
          </li>
        </ul>
>>>>>>> origin/master

        <div className="flex space-x-2">
          <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110" />
          <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110" />
          <FaInstagram className="text-pink-600 cursor-pointer hover:scale-110" />
        </div>
      </div>
      <hr className=' border-blue-400'></hr>
    </div>
  );
}
