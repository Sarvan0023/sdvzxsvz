import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
    
        <div className="text-2xl font-bold">
          <span className="text-black">COLO</span>
          <span className="text-red-500">SHOP</span>
        </div>
  
        <ul className="flex space-x-8 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">HOME</li>
          <li className="hover:text-black cursor-pointer">SHOP</li>
          <li className="hover:text-black cursor-pointer">PROMOTION</li>
          <li className="hover:text-black cursor-pointer">PAGES</li>
          <li className="hover:text-black cursor-pointer">BLOG</li>
          <li className="hover:text-black cursor-pointer"><IoIosSearch /></li>
          <li className="hover:text-black cursor-pointer"><CiHeart /></li>
          <li className="hover:text-black cursor-pointer"><FaShoppingBasket /></li>

        </ul>
  
 
        
      </nav>
    );
  };

export default Navbar