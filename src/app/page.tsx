import Button from "@/components/button/Button";
import React from "react";

export default function Home() {
  return (
    <>
      <div className=" h-screen w-screen  bg-custom-gradient lg:items-center -z-10">
        <Button />
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="h-[51px] w-[327px] rounded-[9px] mt-[212px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] placeholder:pl-[17px] "
            placeholder="Enter Username/Email"
          />
          <input
            type="text"
            className="mt-[15px] h-[51px] w-[327px] rounded-[9px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] placeholder:pl-[17px] "
            placeholder="Masukkan Email"
          />
          <button className="w-[331px] h-[48px] mt-[25px] rounded-[8px] bg-gradient-to-r from-[#62CDCB] to-[#4599DB] text-white font-semibold shadow-lg">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
