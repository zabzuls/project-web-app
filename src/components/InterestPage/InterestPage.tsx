import React from "react";
import ButtonBack from "../fragments/button/ButtonBack";

export default function InterestPage() {
  return (
    <div className=" h-screen w-screen  bg-custom-gradient lg:items-center ">
      <div className="flex justify-between items-center">
        <ButtonBack path="/profile" />
        <button className="text-[14px] w-[51px] h[17px] pt-[22px] pr-[8-px] bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] bg-clip-text text-transparent">
          Save
        </button>
      </div>
      <h2 className="pl-[35px] pt-[80px] text-[14px] bg-gradient-to-r from-[#FFD700] via-[#FFFFFF] to-[#FFB700] text-transparent bg-clip-text">
        Tell everyone about yourself
      </h2>
      <h1 className="pl-[35px] text-white text-[20px]">What interest you?</h1>
      <div className="flex justify-center">
      <input
        type="text"
        className="h-[51px] w-[327px] rounded-[9px] mt-[35px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] pl-[17px]"
        />
        </div>
    </div>
  );
}
