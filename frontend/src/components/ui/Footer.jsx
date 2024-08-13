import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Top Section: Logo, Social Media, and Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center mb-6 lg:mb-0">
            <img
              src="/src/assets/gyaanlab_logo.png"
              alt="GyaanLab Logo"
              className="mb-4 h-16 w-16 sm:h-20 sm:w-20"
            />
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-orange-500 hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                <AiFillInstagram />
              </a>
              <a href="#" className="text-orange-500 hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                <AiFillFacebook />
              </a>
              <a href="#" className="text-orange-500 hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                <AiFillTwitterCircle />
              </a>
              <a href="#" className="text-orange-500 hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                <AiFillLinkedin />
              </a>
              <a href="#" className="text-orange-500 hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                <AiFillYoutube />
              </a>
            </div>
          </div>

          {/* GyaanLab and Help Sections */}
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 lg:space-x-16">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold mb-4">GyaanLab</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Customer Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Delivery Details</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms and Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Privacy Policy and Terms */}
        <div className="flex justify-center w-full pt-6 border-t border-gray-700">
          <a href="#" className="text-sm text-orange-500 hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="mx-2 text-gray-500">|</span>
          <a href="#" className="text-sm text-orange-500 hover:text-white transition-colors duration-300">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;