import React from "react";
import ButtonBack from "../fragments/button/ButtonBack";

export default function InterestPage() {
  return (
    <div className=" h-screen w-screen  bg-custom-gradient lg:items-center ">
      <div className="flex justify-between items-center">
        <ButtonBack path="/" />
        <button className="text-[14px] w-[51px] h[17px] pt-[22px] pr-[8-px] bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] bg-clip-text text-transparent">Save</button>
      </div>
    </div>
  );
}
