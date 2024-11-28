import React from "react";
import ButtonBack from "../fragments/button/ButtonBack";
import Link from "next/link";
import ButtonEdit from "../fragments/button/ButtonEdit";
import ButtonPlus from "../fragments/button/ButtonPlus";
export default function AboutPage() {
  return (
    <div className="h-max-screen w-screen  bg-[#09141A] lg:items-center">
      <ButtonBack />
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-end bg-[#162329] w-[359px] h-[190px] mt-[68px] rounded-[16px] mb-[28px]">
          <h1 className="text-[16px] pl-[27px] mb-[17px] font-bold">Zabzul</h1>
        </div>
        <div className="w-[359px] h-[511px] shadow-md rounded-[14px] space-y-3 bg-[#0E191F] pl-[27px]">
          <div className="flex justify-between">
            <h2 className="mt-[13px] font-bold">About</h2>
            <button className="mr-[14px] mt-[8px]">
              <h1 className="bg-gradient-to-r from-[#FFD700] via-[#FFFFFF] to-[#FFB700] text-transparent bg-clip-text">
                save & update
              </h1>
            </button>
          </div>
          <div className="flex items-center space-x-[15px] pb-[28px]">
            <div className="flex justify-center items-center bg-[#FFFFFF14] w-[57px] h-[57px] rounded-[17px]">
              <ButtonPlus/>
            </div>
            <h1 className="text-[14px]">Add Image</h1>
          </div>
          <div className="w-[318px] h-[324px] text-[#FFFFFF54] ">
            <div className="flex justify-between items-center">
              <h1 className="text-[13px] ">Display Name</h1>
              <input
                type="text"
                placeholder="Enter name"
                className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px]"
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-[13px] ">Gender</h1>
              <input
                type="text"
                placeholder="Select Gender"
                className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-[13px] ">Birtday</h1>
              <input
                type="text"
                placeholder="DD MM YY"
                className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-[13px] ">Horoscope</h1>
              <input
                type="text"
                placeholder="- -"
                className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-[13px] ">Zodiac</h1>
              <input
                type="text"
                placeholder="- -"
                className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-[13px] ">Height</h1>
              <input
                type="text"
                placeholder="Add Height"
                className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
              />
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-[13px] ">Weight</h1>
              <input
                type="text"
                placeholder="Add Weight"
                className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[359px] h-[120px] shadow-md rounded-[14px] space-y-3 bg-[#0E191F] pl-[27px] mt-[18px] mb-[60px]">
          <div className="flex justify-between">
            <h2 className="mt-[13px] font-bold">Interest</h2>
            <Link className="mr-[14px] mt-[8px]" href={"/edit-interest"}>
              <ButtonEdit />
            </Link>
          </div>
          <h2 className="pb-[23px] text-[14px]">
            Add in your interest to find a better match
          </h2>
        </div>
      </div>
    </div>
  );
}
