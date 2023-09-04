import * as React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="container mx-auto bg-[#efefef] h-[850px]">
      <div className="flex ml-10 mr-10  bg-red-200 h-[850px]">
        <div className="bg-blue-200 w-[50%] h-[850px]">
          <motion.h1 className="ml-3 mt-4 text-9xl">CHECK THIS OUT</motion.h1>
          <p></p>
        </div>
        <div className="bg-green-200 w-[50%] h-[850px ]">
          <h1 className=" text-center">IMAGE GOES HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
