import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function BannerSecond() {
  return (
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

        <div className="flex space-x-2">
          <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110" />
          <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110" />
          <FaInstagram className="text-pink-600 cursor-pointer hover:scale-110" />
        </div>
      </div>
    </div>
  );
}
