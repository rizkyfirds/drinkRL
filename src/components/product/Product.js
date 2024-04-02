import React from "react";
import PerProduct from "./PerProduct";
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";

export default function Product() {
  return (
    <div className="h-screen w-full">
      <div className="h-1/2 text-[#FCF6EE]">
        <p className="font-black text-xxl">PRODUCT</p>
      </div>
      <div className="h-1/2 w-full overflow-x-auto snap-x flex">
        <PerProduct drink={red} bgColor={"#9F1835"} text={"POWER FULL RED"} />
        <PerProduct drink={green} bgColor={"#B2D24A"} text={"POWER FULL RED"} />
        <PerProduct drink={purple} bgColor={"#9935D7"} text={"POWER FULL RED"} />
      </div>
    </div>
  );
}
