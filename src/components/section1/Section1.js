import React from "react";
import redDrink from "../../assets/red.png";

function Section1() {
  return (
    <div className="flex h-full">
      <div className="flex h-full m-auto text-[#FCF6EE] font-black text-xxl relative z-10">
        <div className="my-auto">
          <div className="w-fit">
            <p className="relative leading-none z-10">STRONG &</p>
          </div>
          <img
            src={redDrink}
            alt=""
            className="h-full absolute top-0 pb-9 pr-2 right-0 transform rotate-12 justify-center"
          />
          <p className="text-[#9F1835] leading-none z-10 -mt-12">POWERFULL</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Section1;
