"use client";
import React, { useState } from "react";
import ButtonBack from "../fragments/button/ButtonBack";
import ButtonEdit from "../fragments/button/ButtonEdit";
import Link from "next/link";

export default function ProfilePage() {
  const [isEmpty, setEmpty] = useState(true);
  const data = {
    birtDay: "29-12-200",
    horosCope: "Virgo",
    zodiac: "Pig",
    height: "180 kg",
    weight: "70 kg",
  };
  if (!data) {
    setEmpty(false);
  } 
  return (
    <div className="h-screen w-screen  bg-[#09141A] lg:items-center">
      <ButtonBack path="/profile" />
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-end bg-[#162329] w-[359px] h-[190px] mt-[68px] rounded-[16px] mb-[28px]">
          <h1 className="text-[16px] pl-[27px] mb-[17px] font-bold">Zabzul</h1>
        </div>
        <div className="flex flex-col  w-[359px] h-[219px] shadow-md rounded-[14px] space-y-3 bg-[#0E191F] pl-[27px] mb-[18px]">
          <div className="flex justify-between">
            <h2 className="mt-[13px] font-bold">About</h2>
            <Link className="mr-[14px] mt-[8px]" href={"/about"}>
              <ButtonEdit />
            </Link>
          </div>
          {isEmpty ? (
            <>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Birtday : </span>
                <span className="text-[14px]">{data.birtDay}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Horoscope : </span>
                <span className="text-[14px]">{data.horosCope}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Zodiac : </span>
                <span className="text-[14px]">{data.zodiac}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Height : </span>
                <span className="text-[14px]">{data.height}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Weight : </span>
                <span className="text-[14px]">{data.weight}</span>
              </div>
            </>
          ) : (
            <span>Add in your your to help others know you better</span>
          )}
        </div>
        <div className="flex flex-col justify-between w-[359px] h-[120px] shadow-md rounded-[14px] space-y-3 bg-[#0E191F] pl-[27px]">
          <div className="flex justify-between">
            <h2 className="mt-[13px] font-bold">Interest</h2>
            <Link className="mr-[14px] mt-[8px]" href={"/interest"}>
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
