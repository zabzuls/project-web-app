"use client";
import React, { useState } from "react";
import ButtonBack from "../fragments/button/ButtonBack";
import { BaseUrl } from "@/app/api/api";

export default function InterestPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [dataArray, setDataArray] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setDataArray((prevArray) => [...prevArray, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("Token isempty");
      window.location.href = "/login";
      return;
    }
    try {
      const response = await fetch(`${BaseUrl}updateProfile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify({
          name: "Holong Sitanggang",
          birthday: "2000-01-01",
          height: 0,
          weight: 0,
          interests: dataArray,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };

  const handleRemove = (index: number) => {
    setDataArray((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" h-screen w-screen  bg-custom-gradient lg:items-center ">
        <div className="flex justify-between items-center lg:justify-end lg:pr-7">
          <ButtonBack path="/profile" />
          <button
            type="submit"
            className="text-[14px] w-[51px] h[17px] pt-[22px] pr-[8px] bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] bg-clip-text text-transparent"
          >
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
        <div className="flex justify-center flex-col items-center space-y-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-[51px] w-[327px] rounded-[9px] mt-[35px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] pl-[17px]"
          />
          <div className="grid grid-cols-3 gap-2 w-[327px] rounded-[9px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] p-[17px]">
            {dataArray.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#FFFFFF1A] text-white px-2 py-1 rounded-md"
              >
                <span className="inline-block break-words">{item}</span>
                <button onClick={() => handleRemove(index)} className="ml-2">
                  Ⅹ
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
