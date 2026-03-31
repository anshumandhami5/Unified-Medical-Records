import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("patient");
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "patient") {
      // OTP flow
      console.log("Sending OTP to:", input);
      navigate("/otp");
    } else if (role === "doctor") {
      console.log("Doctor login:", input, password);
      navigate("/doctor");
    } else {
      console.log("Admin login:", input, password);
      navigate("/admin");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          UMRS Login
        </h2>

        {/* Email / Phone */}
        <input
          type="text"
          placeholder="Enter Email or Phone"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        {/* Password for doctor/admin */}
        {role !== "patient" && (
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
        )}

        {/* Role Selection */}
        <div className="flex justify-between mb-4">
          {["patient", "doctor", "admin"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`w-1/3 p-2 rounded capitalize ${
                role === r
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          {role === "patient" ? "Send OTP" : "Login"}
        </button>
      </div>
    </div>
  );
}