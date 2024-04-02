import React from "react";
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";

export default function PerProduct({ bgColor, drink, text }) {
  return (
    <div className={`relative flex snap-start h-full min-w-[805px] max-w-full`}>
      <div className={`absolute bg-[${bgColor}] h-5/6 w-full`}></div>
      <div className="flex w-1/2 z-10 h-full">
        <div className="mx-auto relative z-10">
          <img src={drink} alt="" className="h-full" />
        </div>
      </div>
      <div className="w-1/2 relative mt-2 mx-10">
        <p className="text-8xl leading-none text-[#FCF6EE]">{text}</p>
        <div className="w-fit bg-[#FCF6EE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <button className={`text-4xl text-[${bgColor}] leading-none px-2 pt-2`}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
