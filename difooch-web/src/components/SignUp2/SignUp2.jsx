import React, { useState } from "react";
import { Typography } from "../index";
import Logo from "../Logo";
import { useNavigate, NavLink } from "react-router";
const SignUp2 = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", ""]);

  return (
    <div className="bg-secondary">
      <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto APP">
        <div className="w-full mt-[84px] mb-[262px]">
            <div className="mx-[29px]">
          <Logo />
          <Typography
            className="text-mobile-heading-medium mt-8 mb-3"
            variant="h2"
          >
            OTP Verification
          </Typography>
          <Typography
            className="text-small flex justify-center tracking-[0.01em] text-gray2 font-normal"
            variant="h2"
          >
            Enter the OTP sent to <span className="text-gray1 flex items-center ml-[3px]">+91 9908678621 <img className="ml-2 cursor-pointer hover:opacity-80 w-[16px] h-[16px] transition-all" src="/pencil.svg" onClick={() => {navigate("/sign-up")}} alt="" /></span>
          </Typography>
          <div className="w-full flex flex-col justify-center items-center mt-8">

            {/* Input container */}
            <div className="mb-[82px]">
            <span className="w-full h-[48px] gap-[18.64px] mb-8 justify-center rounded-[16px] flex items-center">
              {otp.map((item, index) => (
                <input
                  key={index}
                  type="number"
                  className="w-[48px] h-[48px] py-[15px] px-[7px] focus:outline-none focus-within:border-primary rounded-[16px] border-[#B7BCCA99] border-[1.07px] text-center"
                  value={item}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    newOtp[index] = e.target.value;
                    setOtp(newOtp);
                  }}
                />
              ))}
            </span>
            <Typography
              className="text-small text-gray2 tracking-[0.01em] mb-2 font-normal"
              variant="h3"
            >
              Didn’t recieve OTP ? <span className="text-required">Resend</span>
            </Typography>
            </div>

            {/* Button */}
            <div className="md:max-w-[70%] w-full flex flex-col items-center justify-center text-center">
                <NavLink className="w-full" to="/sign-up-3">
              <button className="w-full h-[57px] bg-accent hover:bg-accent2 font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1">
                Verify
              </button>
              </NavLink>
              <p className="text-mobile-heading-small my-8">Or</p>
              <button className="w-full h-[57px] flex gap-[31.38px] bg-white hover:border-[1px] hover:border-primary font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1">
                <img
                  src="/googleIcon.svg"
                  alt=""
                  className="w-[27.9px] h-[30px]"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
