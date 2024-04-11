import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function BannerSecond() {
  return (
    <div>
      <div className="px-8 py-2 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex items-center mx-auto container justify-between md:justify-between py-2">
          <div>
            <ul className="flex sm:text-sm">
              <li className="cursor-pointer transition duration-300 ease-in-out  mx-4 transform hover:scale-105">
                <Link to="/track" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:underline bg-gray-200 hover:bg-gray-300 rounded-md">Track Order</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out mx-4 transform hover:scale-105">
                <Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:underline bg-gray-200 hover:bg-gray-300 rounded-md">About Us</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out  mx-4 transform hover:scale-105">
                <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:underline bg-gray-200 hover:bg-gray-300 rounded-md">Blog</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out mx-4 transform hover:scale-105">
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:underline bg-gray-200 hover:bg-gray-300 rounded-md">Contact Us</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out mx-4 transform hover:scale-105">
                <Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:underline bg-gray-200 hover:bg-gray-300 rounded-md">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="flex">
            <FaFacebook className="mx-2 text-blue-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
            <FaTwitter className="mx-2 text-blue-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
            <FaInstagram className="mx-2 text-pink-600 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
}
