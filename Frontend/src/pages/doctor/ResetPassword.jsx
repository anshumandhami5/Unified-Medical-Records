import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post(
        `http://localhost:5000/api/doctor/reset-password/${token}`,
        { password }
      );

      alert("Password set successfully");
      navigate("/login/doctor");

    } catch (err) {
      alert("Invalid or expired link");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1C] text-white">

      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-md">

        <h2 className="text-xl mb-4">Set New Password</h2>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-transparent border border-white/20 rounded"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 rounded"
        >
          Set Password
        </button>

      </div>

    </div>
  );
}