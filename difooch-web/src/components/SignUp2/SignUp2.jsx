import React, { useState, useRef } from "react";
import { Typography } from "../index";
import Logo from "../Logo";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import UsePostApiRequest from "../../CustomHooks/UsePostApiRequest";
import { useNavigate, NavLink, useLocation } from "react-router";
const SignUp2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const { sendOtp, verifyOTP, errors } = UsePostApiRequest();
  // Get phone number from previous page
  const phoneNumber = location.state?.phoneNumber;
 const finalOtp = otp.join('');
 console.log(finalOtp, typeof(finalOtp));
 


  // Send data and recive message.
  const handleVerifyOTP = async () => {
    console.log(phoneNumber, finalOtp);
    
    const response = await verifyOTP(phoneNumber, finalOtp);
    
    if (response?.success) {
      alert("OTP Verified ✅");
      return true;
    } else {
      alert(response?.message || "Invalid OTP");
    }
  };

  // For Resending OTP.
  const reSendOtp = async () => {
    const response = await sendOtp(phoneNumber);
    if (response?.success) {
      alert("OTP sent again ✅");
    } else {
      alert(response?.message || "Failed to resend OTP");
    }
  };
  

  // For handling Changes or inputs.
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // For handling BackSpace logic
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle OTP verification
  const handleVerify = async () => {
    // Check if all OTP fields are filled
    if (otp.some((digit) => digit === "")) {
      setError("Please enter complete OTP");
      return;
    }
    if (errors) {
      setError(`API Error: ${errors}`);
      return;
    }
    // Wait for validation
    setError('')
    const isVerified = await handleVerifyOTP();
    if (isVerified) {
      navigate("/sign-up-3");
    }
  };

  return (
    <ScrollAnimation>
      <div className="bg-secondary">
        <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto APP">
          <div className="w-full mt-[84px] mb-[262px]">
            <div className="mx-[29px]">
              <NavLink to="/">
                <Logo />
              </NavLink>
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
                Enter the OTP sent to{" "}
                <span className="text-gray1 flex items-center ml-[3px]">
                  {phoneNumber}{" "}
                  <img
                    className="ml-2 cursor-pointer hover:opacity-80 w-[16px] h-[16px] transition-all"
                    src="/pencil.svg"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                    alt=""
                  />
                </span>
              </Typography>
              <div className="w-full flex flex-col justify-center items-center mt-8">
                {/* Input container */}
                <div className={error ? "mb-[42px]" : "mb-[82px]"}>
                  <span className="w-full h-[48px] gap-[18.64px] mb-8 justify-center rounded-[16px] flex items-center">
                    {otp.map((item, index) => (
                      <input
                        key={index}
                        type="number"
                        className={`w-[48px] h-[48px] py-[15px] px-[7px] focus:outline-none focus-within:border-primary rounded-[16px] ${
                          error ? "border-required" : "border-[#B7BCCA99]"
                        } border-[1.07px] text-center`}
                        onChange={(e) => {
                          handleChange(e.target.value, index);
                          setError("");
                        }}
                        onKeyDown={(e) => handleBackspace(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        value={item}
                      />
                    ))}
                  </span>
                  <Typography
                    className="text-small text-gray2 tracking-[0.01em] mb-2 font-normal"
                    variant="h3"
                  >
                    Didn't recieve OTP ?{" "}
                    <span onClick={reSendOtp} className="text-required cursor-pointer">Resend</span>
                    {error && (
                      <p className="text-required text-small text-center mt-2">
                        {error}
                      </p>
                    )}
                  </Typography>
                </div>

                {/* Button */}
                <div className="md:max-w-[70%] w-full flex flex-col items-center justify-center text-center">
                  <button
                    onClick={handleVerify}
                    className="w-full h-[57px] cursor-pointer bg-accent hover:bg-accent2 font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1"
                  >
                    Verify
                  </button>
                  <p className="text-mobile-heading-small my-8">Or</p>
                  <button className="w-full h-[57px] flex gap-[31.38px] bg-white hover:border-[1px] hover:border-primary cursor-pointer font-semibold text-mobile-heading-small rounded-[16px] justify-center items-center text-black1">
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
    </ScrollAnimation>
  );
};

export default SignUp2;
