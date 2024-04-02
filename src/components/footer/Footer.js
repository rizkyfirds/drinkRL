import React from "react";
import Logo from "../../assets/logo.svg";
import TextHover from "./TextHover";

export default function Footer() {
  return (
    <div className="h-full flex justify-between mx-10">
      <div className="">
        <img src={Logo} alt="" />
      </div>
      <div className="flex gap-x-16 my-auto ">
        <div className="text-[#FCF6EE] text-3xl">
          <TextHover text={"About"} />
          <TextHover text={"Company"} />
          <TextHover text={"Product"} />
          <TextHover text={"Seller"} />
        </div>
        <div className="text-[#FCF6EE] text-3xl">
          <p className="text-4xl font-bold">Contact :</p>
          <TextHover text={"Email"} />
          <TextHover text={"Phone: 0000000"} />
          <div className="flex gap-x-5">
            <TextHover text={"Instagram"} />
            <TextHover text={"Youtube"} />
            <TextHover text={"Twitter"} />
          </div>
        </div>
      </div>
    </div>
  );
}
