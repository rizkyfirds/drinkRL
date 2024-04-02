import React from "react";
import PerProduct from "./PerProduct";
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";
import Desc from "./Desc";

export default function Product() {
  return (
    <div className="h-full w-full">
      <div className="h-screen">
        <div className="h-1/2 text-[#FCF6EE]">
          <p className="font-black text-xxl">PRODUCT</p>
        </div>
        <div className="h-1/2 w-full overflow-x-auto snap-x flex">
          <PerProduct drink={red} bgColor="#9F1835" text={"POWER FULL RED"} />
          <PerProduct
            drink={green}
            bgColor={"#B2D24A"}
            text={"POWER FULL RED"}
          />
          <PerProduct
            drink={purple}
            bgColor={"#9935D7"}
            text={"POWER FULL RED"}
          />
        </div>
      </div>
      <div className="h-full">
        <Desc
          title={"POWER FULL RED"}
          drink={red}
          bgColor={"#9F1835"}
          sugar={"0.5%"}
          flavor={"STRAWBERRY"}
          flavorPercent={"0.5%"}
          soda={"0.5%"}
        />
        <Desc
          title={"FRESH GREEN"}
          drink={green}
          bgColor={"#B2D24A"}
          sugar={"0.5%"}
          flavor={"APPLE"}
          flavorPercent={"0.5%"}
          soda={"0.5%"}
        />
        <Desc
          title={"RELEXING PURPLE"}
          drink={purple}
          bgColor={"#9935D7"}
          sugar={"0.5%"}
          flavor={"GRAPE"}
          flavorPercent={"85%"}
          soda={"0.5%"}
        />
      </div>
    </div>
  );
}
