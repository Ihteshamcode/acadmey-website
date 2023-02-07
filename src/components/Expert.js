import React from "react";
// import laptop from "/src/images/laptop.png"

const Expert = () => {
  return (
    <div className="grid md:grid-cols-3 md:max-w-[1200px] mx-auto  items-center">
      <img src="laptop.jpg" alt="img may not found" />
      <div className="md:col-span-2  px-3">
        <h1 className="font-bold text-2xl">Learn From Expert</h1>
        <p>
          Lorem ipsum dolor amet. Id placeat ipsa et veniam omnis et aliquam
          quis sed illo tenetur aut provident architecto et sunt recusandae ut
          perspiciatis saepe. Et nesciunt explicabo aut dignissimos delectus ut
          facilis voluptatibus ab aperiam odit rem provident veniam. Ut
          perferendis totam est cupiditate facilis et numquam reprehenderit ut
          labore tenetur ut repellendus tempore sit natus maxime sit quia
          repudiandae. Ea modi reprehenderit ut reiciendis facilis et voluptas
          voluptas est laborum tenetur et odio illum ut esse sint.
        </p>
        <button className="bg-black text-white p-3 rounded-md w-[160px] mt-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Expert;
