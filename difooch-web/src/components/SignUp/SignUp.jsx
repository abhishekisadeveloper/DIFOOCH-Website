import React from "react";
import { Typography } from "../index";
import Logo from "../Logo";

const SignUp = () => {
  return (
    <div className="bg-secondary">
      <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto APP">
        <div className="mx-[29px] mt-[84px] mb-[262px]">
          <Logo />
          <Typography
            className="text-mobile-heading-medium mt-8 mb-3"
            variant="h2"
          >
            Enter your Phone Number
          </Typography>
          <Typography
            className="text-small text-gray2 tracking-[100%] font-normal"
            variant="h2"
          >
            We will send you the <b> 4 digit </b> verification code
          </Typography>
          <div className="w-full flex flex-col items-start mt-8">
            <Typography
              className="text-small text-gray1 tracking-[100%] mb-2 font-normal"
              variant="h3"
            >
              Mobile Number <span className="text-required">*</span>
            </Typography>

            {/* Input container */}
            <span className="w-full h-[48px] border-1 border-gray1 focus-within:border-primary rounded-[16px] flex items-center mb-[82px]">
              <div className="py-[15px] pl-[15px] pr-[7px]">+91</div>
              <img src="/Line2.svg" alt="" className="w-[1px] h-[32px]" />
              <input
                type="text"
                className="w-[100%] h-[48px] border-none py-[15px] px-[7px] focus:outline-none rounded-[16px] border-2 border-gray1"
              />
            </span>

            {/* Button */}
            <div className="w-full flex flex-col items-center justify-center text-center">
              <button className="w-full h-[57px] bg-accent hover:bg-accent2 font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1">
                Generate OTP
              </button>
              <p className="text-mobile-heading-small my-8">Or</p>
              <button
                className="w-full h-[57px] flex gap-[31.38px] bg-white hover:border-[1px] hover:border-primary font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1"
              >
                <img src="/googleIcon.svg" alt="" className="w-[27.9px] h-[30px]" />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
