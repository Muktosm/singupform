import { Result } from "postcss";
import React, { useState } from "react";

const From2 = () => {
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");

   const handleChange = (e) => {
     const emailValue =e.target.value;
     setEmail(emailValue);

     // Check if "@" is not present in the email
     if (!emailValue.includes("@")) {
       setError('Email must contain "@" symbol.');
     } else if (emailValue.includes(" ")) {
       setError("Email can't have a space")
     }
     else {
       setError(""); // Clear the error if "@" is present
     }
   };
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen ">
        <form action="">
          <h3 className="font-DMSans font-bold text-[58px] leading -[70px] text-[#1E0E62] text-center pb-[24px]  ">
            Get Started
          </h3>
          <p className="font-Nunito font-light text-[28p] text-[#141414] leading-[38px] text-center  ">
            Lookback is free to try for 14 days
          </p>
          <div className="flex justify-center pt-[47.6px] pb-[20px] min-h-[151.59px]  ">
            <div>
              <input
                onChange={handleChange}
                value={email}
                type="email"
                name=""
                id=""
                placeholder="Your email"
                className=" w-[420px] h-[60px] rounded-[100px] outline-none border-[2px] border-[#EBEAED] pl-[24px]   "
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <button
              type="submit"
              className="w-[120px] h-[60px] rounded-[100px] text-white font-medium font-DMSans text-[20px] leading-[26px] bg-[#25DAC5] ml-[30px] "
            >
              Sign Up
            </button>
          </div>
          <p className="font-DMSans font-normal text-[16px] leading-[26px] text-[rgba(21,20,57,0.38)] text-center   ">
            or check out our pricing plans.
          </p>
        </form>
      </div>
    </>
  );
};

export default From2;
