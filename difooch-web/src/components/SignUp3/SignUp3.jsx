import React from "react";
import Logo from "../Logo";
import { Typography } from "../index";
const SignUp3 = () => {
  return (
    <div className="bg-secondary">
      <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto APP">
        <div className="w-full mt-[84px] mb-[262px]">
          <div className="mx-[62px]">
          <div className="w-full flex flex-col items-center">
            <Logo />
            <img className="w-[106px] h-[106px] mt-[177px] mb-[40.64px]" src="/success.svg" alt="" />
            <Typography
              className="text-mobile-heading-medium font-bold mb-3"
              variant="h2">
              Success!
            </Typography>
            <Typography className="text-small font-normal text-gray2" variant="h2">
              Congratulations! Your account has been successfully verified.
            </Typography>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
