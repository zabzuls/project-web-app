import React from "react";
import ButtonBack from "../fragments/button/ButtonBack";

export default function InterestPage() {
  return (
    <div className=" h-screen w-screen  bg-custom-gradient lg:items-center ">
      <div className="flex justify-between items-center lg:justify-end lg:pr-7">
        <ButtonBack path="/profile" />
        <button className="text-[14px] w-[51px] h[17px] pt-[22px] pr-[8-px] bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] bg-clip-text text-transparent">
          Save
        </button>
      </div>
      <div className="flex pt-[80px] justify-center items-center">
        <div className="w-[327px]">
          <p className="mr-6 text-[14px] bg-gradient-to-r from-[#FFD700] via-[#FFFFFF] to-[#FFB700] text-transparent bg-clip-text">
            Tell everyone about yourself
          </p>
          <p className="text-white text-[20px]">What interest you?</p>
        </div>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          className="h-[51px] w-[327px] rounded-[9px] mt-[35px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] pl-[17px]"
        />
      </div>
    </div>
  );
}
