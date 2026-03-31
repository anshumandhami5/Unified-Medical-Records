import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    console.log("OTP Entered:", otp);

    // Temporary: direct login
    navigate("/patient");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">

        <h2 className="text-2xl font-bold mb-6">Enter OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 text-center"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Verify
        </button>
      </div>
    </div>
  );
}