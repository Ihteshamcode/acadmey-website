import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";

const Navbar = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <div className="flex justify-between items-center p-4 max-w-[1240px] mx-auto">
      <h1 className="text-3xl font-bold">Programming</h1>
      {toggle ? (
        <VscClose
          onClick={() => SetToggle(!toggle)}
          className="text-white text-3xl md:hidden block"
        />
      ) : (
        <RiMenu5Fill
          onClick={() => SetToggle(!toggle)}
          className="text-white text-3xl md:hidden"
        />
      )}

      <ul className=" hidden text-white gap-4 text-xl md:flex ">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* responsive menu */}
      <ul
        className={` duration-500 text-center space-x-5 space-y-5 md:hidden text-white gap-4 text-xl fixed top-[68px] bg-[#2699fb] w-full h-screen 
              ${toggle ? "left-[0]" : "left-[-100%]"} 
            
            `}
      >
        <li></li>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
