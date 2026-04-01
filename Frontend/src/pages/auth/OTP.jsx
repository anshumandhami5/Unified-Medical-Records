import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.contact;

  const handleVerify = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/patient/verify-otp",
        { email, otp }
      );

      localStorage.setItem("patientToken", res.data.token);

      navigate("/patient");

    } catch (err) {
      alert(err.response?.data?.msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1C] text-white">
      <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-2xl">

        <h2 className="text-xl mb-4 text-center">Enter OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 mb-4 bg-transparent border border-white/20 rounded"
        />

        <button
          onClick={handleVerify}
          className="w-full py-2 bg-blue-600 rounded"
        >
          Verify OTP
        </button>

      </div>
    </div>
  );
}