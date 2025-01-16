import React from "react";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialSkype } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We bring you the latest trends in fashion, lifestyle, and tech. Stay
            updated with our blogs and shop for the best products!
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

  
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
             <FaFacebook/>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <CiTwitter/>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaInstagram/>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
             <TiSocialSkype />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
             <FaPinterest />
            </a>
          </div>
        </div>
      </div>

  
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        © 2025 YourWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
