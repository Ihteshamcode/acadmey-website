import React from "react";
import Navbar from "./Navbar";
import Typed from "react-typed";

const Header = () => {
  return (
    <>
      <div className="bg-[#2699fb]">
        <Navbar />
      </div>
      <div className="bg-[#2699fb] h-[300px] md:h-[500px] pt-16 flex items-center">
        <div className="max-w-[500px] mx-auto text-center space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">Learn with us</h1>
          <h1 className="text-4xl md:text-[70px] text-white">Grow with us</h1>
          <h1 className="text-white text-2xl md:text-3xl">
            Learn
            <Typed
              className="pl-4 font-bold"
              strings={[
                "Ethical Hacking",
                "Web Development",
                "Mobile Application",
                "Digital Marketing",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </h1>
          <button className="bg-black text-white p-3 rounded-md w-[160px] mt-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
