"use client";
import { redirect } from "next/navigation";
import React from "react";


interface pathProps{
  path:string;
}
export default function ButtonBack({path}:pathProps) {
  const handleButton = () => {
    redirect(path)
  }
  return (
    <button onClick={handleButton} className="lg:hidden flex items-center space-x-2 w-[51px] h[17px] pt-[22px] ml-[36px]">
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1L2 8L9 15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-white">Back</span>
    </button>
  );
}
