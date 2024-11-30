"use client";
import React, { useEffect, useState } from "react";
import ButtonBack from "../fragments/button/ButtonBack";
import ButtonEdit from "../fragments/button/ButtonEdit";
import Link from "next/link";
import { BaseUrl } from "@/app/api/api";

interface UserProfile {
  email: string;
  username: string;
  name: string;
  birthday: string; 
  horoscope: string; 
  height: number; 
  weight: number; 
  interests: string[]; 
}

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProfile>();

  const removeToken = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("Token tidak ditemukan. Mengarahkan ke halaman login.");
      window.location.href = "/login";
      return;
    }
    try {
      const response = await fetch(`${BaseUrl}getProfile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (!token) {
        window.location.href = "/login";
      }
    }
  };

useEffect(() => {
  fetchData();
}, []);

  return (
    <div className="h-screen w-screen  bg-[#09141A] lg:items-center">
      <div className="flex justify-between items-center lg:justify-end lg:pr-7 pr-7">
        <ButtonBack path="/profile" />
        <button
          onClick={removeToken}
          className="text-[14px] w-[51px] h[17px] pt-[22px] pr-[8-px] bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] bg-clip-text text-transparent"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-end bg-[#162329] w-[359px] h-[190px] mt-[68px] rounded-[16px] mb-[28px]">
          <h1 className="text-[16px] pl-[27px] mb-[17px] font-bold">
            @ {userData?.name}
          </h1>
        </div>
        <div className="flex flex-col  w-[359px] h-[219px] shadow-md rounded-[14px] space-y-3 bg-[#0E191F] pl-[27px] mb-[18px]">
          <div className="flex justify-between">
            <h2 className="mt-[13px] font-bold">About</h2>
            <Link className="mr-[14px] mt-[8px]" href={"/about"}>
              <ButtonEdit />
            </Link>
          </div>
          {userData ? (
            <>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Birtday : </span>
                <span className="text-[14px]">{userData.birthday}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Horoscope : </span>
                <span className="text-[14px]">{userData.horoscope}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Zodiac : </span>
                <span className="text-[14px]">{userData.horoscope}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Height : </span>
                <span className="text-[14px]">{userData.height}</span>
              </div>
              <div className="text-[13px] flex">
                <span className="text-[#FFFFFF54]">Weight : </span>
                <span className="text-[14px]">{userData.weight}</span>
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
