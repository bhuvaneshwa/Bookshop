import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function BannerSecond() {
  return (
    <div>
      <div className="px-8 py-2 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex items-center mx-auto container justify-between md:justify-between py-2">
          <div>
            <ul className="flex gap-5  sm:text-sm sm:gap-2">
              <li className='cursor-pointer'><Link to="/track">Track Order</Link></li>
              <li className='cursor-pointer'><Link to="/about">About Us</Link></li>
              <li className='cursor-pointer'><Link to="/blog">Blog</Link></li>
              <li className='cursor-pointer'><Link to="/contact">Contact Us</Link></li>
              <li className='cursor-pointer'><Link to="/about">FAQ</Link></li>
            </ul>
          </div>

          <div className='flex '>
            <FaFacebook className="mx-2 text-blue-600 cursor-pointer" />
            <FaTwitter className="mx-2 text-blue-400 cursor-pointer" />
            <FaInstagram className="mx-2 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
