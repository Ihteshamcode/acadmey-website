import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] w-full h-[400px] md:h-[250px] grid grid-cols-1 md:grid-cols-2 mt-4 items-center">
      <div className="mx-14">
        <h1 className="text-white font-bold text-2xl">
          Want to learn latest IT skills ?
        </h1>
        <p className="text-white  md:mt-2">
          Sign up to our news letter and stay up to date
        </p>
      </div>
      <div className="mx-14">
        <input
          type="text"
          className="p-3 w-full md:w-[300px] text-slate-600 outline-none"
          placeholder="Email"
        />
        <button className="bg-black text-white p-3  md:mx-2 rounded-md w-[100px] mt-2">
          Notify Me
        </button>
        <br />
        <p className="text-white mt-4">
          We care about the protection of your data read our{" "}
          <a href="#" className="text-blue-900">
            privacy and policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
