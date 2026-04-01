import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PatientLogin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/patient/send-otp",
        { email }
      );

      navigate("/otp", { state: { email } });

    } catch (err) {
      alert(err.response?.data?.msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1C] text-white">
      <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-2xl">

        <h2 className="text-xl mb-4 text-center">Patient Login</h2>

        <input
          type="text"
          placeholder="Email or Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-transparent border border-white/20 rounded"
        />

        <button
          onClick={handleSendOTP}
          className="w-full py-2 bg-blue-600 rounded"
        >
          Send OTP
        </button>

      </div>
    </div>
  );
}