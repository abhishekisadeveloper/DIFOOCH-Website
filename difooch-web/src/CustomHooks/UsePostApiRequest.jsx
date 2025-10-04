import { useState } from "react";
const UsePostApiRequest = () => {
  const [errors, setErrors] = useState(null);

  const url = "https://difooch-backend.onrender.com/api";

  // For sending otp.
  const sendOtp = async (phone) => {
    try {
      setErrors(null);
      const response = await fetch(`${url}/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) throw new Error(data.message || "Failed to send OTP");

      return data;
    } catch (error) {
      setErrors(`API fetching Error: ${error.message}`);
    }
  };

  const verifyOTP = async (phone, otp) => {
    setErrors(null);
    try {
      const response = await fetch(`${url}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();
      console.log(data);
      

      if (!response.ok) throw new Error(data.message || "Invalid OTP");
      return data;
    } catch (error) {
      setErrors(error.message);
      console.log(error.message);
      
      
    }
  };

  return { sendOtp, verifyOTP, errors };
};

export default UsePostApiRequest;
