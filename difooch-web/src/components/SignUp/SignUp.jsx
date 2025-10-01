import React, { useState } from "react";
import { Typography } from "../index";
import Logo from "../Logo";
import { NavLink, useNavigate } from "react-router";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const SignUp = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setError("");
    }
  };

  const handleGenerateOTP = (e) => {
    e.preventDefault();
    
    // Validate phone number
    if (!phoneNumber) {
      setError("Phone number is required");
      return;
    }
    
    if (phoneNumber.length !== 10) {
      setError("Phone number must be 10 digits");
      return;
    }
    
    // If validation passes, navigate to OTP page
    navigate("/sign-up-2", { state: { phoneNumber: `+91 ${phoneNumber}` } });
  };

  return (
      <ScrollAnimation>
    <div className="bg-secondary">
      <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto APP">
        <div className="mx-[29px] mt-[84px] mb-[262px]">
          <NavLink to="/">
          <Logo />
          </NavLink>
          <Typography
            className="text-mobile-heading-medium mt-8 mb-3"
            variant="h2"
          >
          Enter your Phone Number
          </Typography>
          <Typography
            className="text-small text-gray2 font-normal"
            variant="h2"
          >
            We will send you the <span className="text-gray1"> 4 digit </span> verification code
          </Typography>
          <div className="w-full flex flex-col items-start mt-8">
            <Typography
              className="text-small text-gray1 mb-2 font-normal"
              variant="h3"
            >
              Mobile Number <span className="text-required">*</span>
            </Typography>

            {/* Input container */}
            <span className={`w-full h-[48px] border-1 ${error ? 'border-required' : 'border-gray1'} focus-within:border-primary rounded-[16px] flex items-center ${error ? 'mb-2' : 'mb-[82px]'}`}>
              <div className="py-[15px] pl-[15px] pr-[7px]">+91</div>
              <img src="/Line2.svg" alt="" className="w-[1px] h-[32px]" />
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="10"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter 10 digit number"
                className="w-[100%] h-[48px] border-none py-[15px] px-[7px] focus:outline-none rounded-[16px] border-2 border-gray1"
              />
            </span>
            
            {/* Error message */}
            {error && (
              <p className="text-required text-small mb-[111px] text-left">
                {error}
              </p>
            )}

            {/* Button */}
            <div className={`flex flex-col w-full items-center justify-center text-center ${!error && 'mt-[58px]'}`}>
              <button 
                onClick={handleGenerateOTP}
                className="w-full h-[57px] cursor-pointer bg-accent hover:bg-accent2 font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate OTP
              </button>
              <p className="text-mobile-heading-small my-8">Or</p>
              <button
                className="w-full h-[57px] flex gap-[31.38px] bg-white hover:border-[1px] hover:border-primary cursor-pointer font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1"
              >
                <img src="/googleIcon.svg" alt="" className="w-[27.9px] h-[30px]" />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </ScrollAnimation>
  );
};

export default SignUp;
