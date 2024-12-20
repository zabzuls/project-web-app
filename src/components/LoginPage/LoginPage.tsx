"use client";
import { BaseUrl } from "@/app/api/api";
import ButtonBack from "@/components/fragments/button/ButtonBack";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BaseUrl}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const { access_token } = await response.json();
        localStorage.setItem("authToken", access_token);
        window.location.href = "/profile";
      }
    } catch (error) {
      console.log("Error saat login" + error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" h-screen w-screen  bg-custom-gradient lg:items-center -z-10"
      >
        <ButtonBack path="/" />
        <h1 className="text-white font-bold text-[24px] mt-[158px] absolute ml-[41px] md:ml-[82px] lg:ml-[561px]">
          Login
        </h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="h-[51px] w-[327px] rounded-[9px] mt-[212px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] pl-[17px]"
            placeholder="Enter Email"
            required
          />
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="h-[51px] w-[327px] rounded-[9px] mt-[15px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] pl-[17px]"
            placeholder="Enter Username"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-[15px] h-[51px] w-[327px] rounded-[9px] bg-[#FFFFFF0F] bg-opacity-6 text-[13px] pl-[17px] "
              placeholder="Enter Password"
              required
            />
            {showPassword ? (
              <>
                {/* EyeIcon */}
                <div onClick={handleShowPassword}>
                  <svg
                    className="ml-[290px] top-[34px] absolute"
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4149 8.64587C13.4149 9.1055 13.3387 9.56063 13.1907 9.98527C13.0427 10.4099 12.8258 10.7957 12.5523 11.1207C12.2788 11.4458 11.9541 11.7036 11.5968 11.8795C11.2395 12.0553 10.8565 12.1459 10.4697 12.1459C10.083 12.1459 9.69998 12.0553 9.34265 11.8795C8.98532 11.7036 8.66065 11.4458 8.38716 11.1207C8.11368 10.7957 7.89673 10.4099 7.74873 9.98527C7.60072 9.56063 7.52454 9.1055 7.52454 8.64587C7.52454 7.71762 7.83483 6.82738 8.38716 6.171C8.93949 5.51462 9.68861 5.14587 10.4697 5.14587C11.2508 5.14587 12 5.51462 12.5523 6.171C13.1046 6.82738 13.4149 7.71762 13.4149 8.64587Z"
                      fill="#E7C57D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.4697 0.145844C7.58176 0.145844 5.31564 1.67984 3.69242 3.38584C2.07173 5.09084 1.0569 6.99784 0.649621 7.84784C0.531764 8.09084 0.469727 8.36638 0.469727 8.64684C0.469727 8.92731 0.531764 9.20285 0.649621 9.44584C1.0569 10.2958 2.07173 12.2038 3.69242 13.9058C5.31648 15.6118 7.58176 17.1458 10.4697 17.1458C13.3577 17.1458 15.6238 15.6118 17.247 13.9058C18.8677 12.2018 19.8826 10.2948 20.2898 9.44484C20.4077 9.20185 20.4697 8.92631 20.4697 8.64584C20.4697 8.36538 20.4077 8.08984 20.2898 7.84684C19.8826 6.99684 18.8677 5.08984 17.247 3.38684C15.623 1.67984 13.3577 0.145844 10.4697 0.145844ZM1.74607 8.59084C2.11717 7.81684 3.05121 6.06284 4.52886 4.51084C6.00145 2.95984 7.98314 1.64584 10.4697 1.64584C12.9563 1.64584 14.9372 2.96084 16.4106 4.50984C17.8882 6.06284 18.8223 7.81684 19.1934 8.58984C19.2023 8.60665 19.2072 8.62599 19.2077 8.64584C19.2072 8.66569 19.2023 8.68503 19.1934 8.70184C18.8223 9.47584 17.8882 11.2288 16.4106 12.7818C14.938 14.3308 12.9563 15.6458 10.4697 15.6458C7.98314 15.6458 6.00229 14.3308 4.52886 12.7818C3.05121 11.2288 2.11717 9.47584 1.74607 8.70184C1.73714 8.68505 1.73219 8.6657 1.73177 8.64584C1.73234 8.62633 1.73728 8.60734 1.74607 8.59084Z"
                      fill="#E7C57D"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                {/* EyeOffIcon */}
                <div onClick={handleShowPassword}>
                  <svg
                    className="ml-[290px] top-[34px] absolute"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.59484 0.176057C3.50496 0.0705051 3.37949 0.00739455 3.24602 0.000609393C3.11255 -0.00617576 2.98203 0.0439201 2.88316 0.139877C2.78429 0.235833 2.72517 0.36979 2.71882 0.512279C2.71246 0.654767 2.75939 0.794115 2.84927 0.899667L4.61153 2.98005C1.45979 4.96093 0.104202 8.13577 0.0448949 8.28049C0.0153211 8.3485 0 8.42259 0 8.49757C0 8.57256 0.0153211 8.64664 0.0448949 8.71465C0.0787846 8.78701 0.781996 10.4604 2.35787 12.1337C3.93374 13.8071 6.32297 15.5528 10 15.5528C11.5375 15.5626 13.0584 15.2138 14.4565 14.5307L16.4052 16.8191C16.4518 16.8756 16.5091 16.921 16.5734 16.9522C16.6377 16.9833 16.7074 16.9996 16.7779 17C16.9043 17.0009 17.026 16.949 17.1168 16.8553C17.1673 16.8088 17.2083 16.7518 17.2375 16.6878C17.2667 16.6238 17.2834 16.5542 17.2865 16.4831C17.2897 16.4121 17.2793 16.341 17.256 16.2744C17.2326 16.2078 17.1968 16.1469 17.1507 16.0955L3.59484 0.176057ZM7.72092 6.62523L11.5335 11.1026C10.9612 11.4835 10.2819 11.6379 9.61396 11.5391C8.94598 11.4402 8.33165 11.0943 7.87802 10.5616C7.42439 10.0288 7.16021 9.34308 7.1315 8.62378C7.10279 7.90448 7.31138 7.19722 7.72092 6.62523ZM10 14.4674C7.33966 14.4674 5.01821 13.4362 3.10344 11.4011C2.29604 10.547 1.61345 9.56823 1.07853 8.49757C1.44285 7.75587 2.78149 5.31369 5.31475 3.80315L7.02618 5.81117C6.41824 6.58181 6.09287 7.56178 6.1105 8.56914C6.12812 9.5765 6.48753 10.5428 7.122 11.2887C7.75647 12.0345 8.6229 12.5093 9.56042 12.6248C10.4979 12.7403 11.4429 12.4886 12.2198 11.9166L13.7279 13.6895C12.5462 14.2115 11.2788 14.476 10 14.4674ZM19.9551 8.71465C19.9212 8.8051 19.074 10.795 17.1677 12.6221C17.0741 12.7102 16.9535 12.7585 16.8288 12.7578C16.757 12.7571 16.6862 12.7406 16.6206 12.7095C16.555 12.6784 16.4961 12.6333 16.4475 12.5769C16.4028 12.5236 16.3684 12.4613 16.3463 12.3937C16.3242 12.3261 16.3149 12.2546 16.3188 12.1831C16.3228 12.1116 16.3399 12.0417 16.3693 11.9773C16.3986 11.913 16.4396 11.8555 16.4899 11.8081C17.4747 10.8641 18.2976 9.74376 18.9215 8.49757C18.3866 7.42691 17.704 6.44816 16.8966 5.59409C14.9818 3.55893 12.6603 2.52779 10 2.52779C9.44081 2.52542 8.88244 2.57384 8.33093 2.67251C8.20308 2.68554 8.07535 2.64643 7.97341 2.56303C7.87148 2.47963 7.80288 2.35813 7.78142 2.22295C7.75996 2.08777 7.78722 1.94893 7.85773 1.83432C7.92823 1.71972 8.03675 1.63786 8.16148 1.60519C8.76892 1.49561 9.38396 1.44115 10 1.44237C13.677 1.44237 16.1849 3.29663 17.6421 4.86143C19.0994 6.42624 19.9212 8.20813 19.9551 8.28049C19.9847 8.3485 20 8.42259 20 8.49757C20 8.57256 19.9847 8.64664 19.9551 8.71465ZM10.5422 5.4765C10.4097 5.45011 10.2923 5.36858 10.2161 5.24984C10.1398 5.1311 10.1108 4.98488 10.1356 4.84334C10.1603 4.7018 10.2366 4.57655 10.3479 4.49513C10.4591 4.4137 10.5961 4.38279 10.7286 4.40918C11.5574 4.58053 12.3121 5.03334 12.88 5.70004C13.448 6.36674 13.7989 7.21161 13.8804 8.10863C13.8922 8.25124 13.8507 8.39305 13.765 8.50317C13.6793 8.61329 13.5563 8.6828 13.4229 8.69656H13.372C13.2465 8.69705 13.1254 8.64707 13.0327 8.55657C12.9401 8.46608 12.8828 8.34168 12.8722 8.20813C12.812 7.54531 12.5526 6.92106 12.1327 6.4287C11.7127 5.93633 11.1548 5.60229 10.5422 5.4765Z"
                      fill="url(#paint0_linear_11_2732)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_11_2732"
                        x1="-3.5"
                        y1="14"
                        x2="24.6814"
                        y2="4.54055"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0237305" stopColor="#94783E" />
                        <stop offset="0.216904" stopColor="#F3EDA6" />
                        <stop offset="0.329505" stopColor="#F8FAE5" />
                        <stop offset="0.486109" stopColor="#FFE2BE" />
                        <stop offset="0.723574" stopColor="#D5BE88" />
                        <stop offset="0.809185" stopColor="#F8FAE5" />
                        <stop offset="0.902849" stopColor="#D5BE88" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </>
            )}
          </div>
          <button
            type="submit"
            className="w-[331px] h-[48px] mt-[25px] rounded-[8px] bg-gradient-to-r from-[#62CDCB] to-[#4599DB] text-white font-[16px]  shadow-lg"
          >
            Login
          </button>
          <span className="flex mt-[40px] space-x-1">
            <p>No Account?</p>
            <Link href="/register" className=" text-[#b3a500]">
              Register Here
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}
