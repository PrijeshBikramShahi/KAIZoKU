import * as React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import { FaBars } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className=" nav-bar pt-7 pb-5 bg-[#efefef]">
      <div className="container mx-auto flex justify-between pl-10 pr-10">
        <label className=" logo text-[2rem] cursor-pointer">
          KAIZoKU
        </label>
        <ul className=" align-justify flex gap-16 leading-10 text-[1.1rem]">
          <motion.li
            whileHover={{ scale: 1.5 }}
            className="cursor-pointer hover:text-red-400"
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5 }}
            className="cursor-pointer hover:text-red-400"
          >
            Products
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5 }}
            className="cursor-pointer hover:text-red-400"
          >
            About Us
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5 }}
            className="cursor-pointer hover:text-red-400"
          >
            Contact Us
          </motion.li>
        </ul>
        <div className="leading-10">
          <ul className="flex gap-4">
            <li className="">
              <div className="flex">
                {/* <i className="fa fa-search"></i>
                <input type="text"  name="" id="" /> */}
                <motion.button
                  whileHover={{ scale: 1.5 }}
                  className="p-0 rounded-full"
                >
                  <FaSearch className=" font-bold text-2xl hover:text-red-400" />
                </motion.button>
              </div>
              {/* <input
                  type="text"
                  placeholder="search..."
                  className="ml-8 mr-1 pl-3 pr-3 rounded-3xl  bg-gray-200 hover:bg-red-200 bg-[url(./assets/images/icons/search.png)] bg-no-repeat bg-right bg-[length:30px_30px]"
                /> */}
            </li>
            <li className="">
              <motion.button
                whileHover={{ scale: 1.5 }}
                className="p-0 rounded-full"
              >
                <FaShoppingCart className=" text-2xl hover:text-red-400" />
              </motion.button>
            </li>
            <li className="">
              <motion.button
                whileHover={{ scale: 1.5 }}
                className="p-0 rounded-full"
              >
                <FaBars className=" text-2xl hover:text-red-400" />
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
