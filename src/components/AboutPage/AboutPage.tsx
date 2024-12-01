"use client"
import React, { useEffect, useState } from "react";
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
import ButtonBack from "../fragments/button/ButtonBack";
import Link from "next/link";
import ButtonEdit from "../fragments/button/ButtonEdit";
import ButtonPlus from "../fragments/button/ButtonPlus";
import Image from "next/image";
import { BaseUrl } from "@/app/api/api";
export default function AboutPage() {
  const urlImage = "/assets/zabzul-supratman.jpeg";
  const [isImage, setImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [userData, setUserData] = useState<UserProfile>();


  useEffect(() => {
    if (urlImage) {
      setImage(urlImage);
    } else if (!urlImage) {
      setImage(null);
    }
  }, []);

  
  const fetchData = async () => {
    let token = localStorage.getItem("authToken");
    if (token) {
      setTimeout(() => {
        localStorage.removeItem("authToken");
        token = null;
        console.log(
          "authToken telah dihapus dari localStorage dan variabel token."
        );
        window.location.href = "/login";
      }, 3600000);
    }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          name: name,
          birthday: birthday,
          horoscope: horoscope,
          height: height,
          weight: weight,
          interests: userData?.interests,
        }),
      });

      if (response.ok) {
        window.location.href = "/profile";
      }
    } catch (error) {
      console.log("Error saat login" + error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="h-max-screen w-screen  bg-[#09141A] lg:items-center">
        <ButtonBack path="/profile" />
        <div className="flex flex-col items-center">
          <div
            className="flex flex-col justify-end bg-[#162329] w-[359px] h-[190px] mt-[68px] rounded-[16px] mb-[28px] bg-center bg-cover"
            style={{ backgroundImage: `url(${isImage})` }}
          >
            <h1 className="text-[16px] pl-[27px] mb-[17px] font-bold">
              Zabzul
            </h1>
          </div>
          <div className="w-[359px] h-[511px] shadow-md rounded-[14px] space-y-3 bg-[#0E191F] pl-[27px]">
            <div className="flex justify-between">
              <h2 className="mt-[13px] font-bold">About</h2>
              <button
                type="submit"
                className="mr-[14px] mt-[8px] bg-gradient-to-r from-[#FFD700] via-[#FFFFFF] to-[#FFB700] text-transparent bg-clip-text"
              >
                {/* <h1 className=""> */}
                save & update
                {/* </h1> */}
              </button>
            </div>
            <div className="flex items-center space-x-[15px] pb-[28px]">
              <div className="flex justify-center items-center bg-[#FFFFFF14] w-[57px] h-[57px] rounded-[17px] overflow-hidden object-cover">
                {isImage ? (
                  <Image
                    src={isImage}
                    alt={"Image Profile"}
                    width={100}
                    height={100}
                  />
                ) : (
                  <ButtonPlus />
                )}
              </div>
              <h1 className="text-[14px]">Add Image</h1>
            </div>

            <div className="w-[318px] h-[324px] text-[#FFFFFF54] ">
              <div className="flex justify-between items-center">
                <h1 className="text-[13px] ">Display Name</h1>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px]"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[13px] ">Gender</p>
                <input
                  type="text"
                  placeholder="Select Gender"
                  className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[13px] ">Birtday</p>
                <input
                  name="birthday"
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthday}
                  type="text"
                  placeholder="DD MM YY"
                  className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[13px] ">Horoscope</p>
                <input
                  type="text"
                  name="horoscope"
                  onChange={(e) => setHoroscope(e.target.value)}
                  value={horoscope}
                  placeholder="- -"
                  className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
                />
              </div>
              {/* <div className="flex justify-between items-center">
                <p className="text-[13px] ">Zodiac</p>
                <input
                  type="text"
                  name="zodiac"
                  onChange={(e) => setHoroscope(e.target.value)}
                  value={horoscope}
                  placeholder="- -"
                  className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
                />
              </div> */}
              <div className="flex justify-between items-center">
                <p className="text-[13px] ">Height</p>
                <input
                  type="text"
                  name="height"
                  onChange={(e) => setHeight(Number(e.target.value))}
                  value={height}
                  placeholder="Add Height"
                  className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[13px] ">Weight</p>
                <input
                  type="text"
                  name="weight"
                  onChange={(e) => setWeight(Number(e.target.value))}
                  value={weight}
                  placeholder="Add Weight"
                  className="w-[202px] h-[36px] rounded-[8px] bg-[#D9D9D90F] opacity-6 text-[13px] text-end pr-[24px] mt-[12px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[359px] h-[120px] shadow-md rounded-[14px] space-y-3 bg-[#0E191F] pl-[27px] mt-[18px] mb-[60px]">
            <div className="flex justify-between">
              <p className="mt-[13px] font-bold">Interest</p>
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
    </form>
  );
}
