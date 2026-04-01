import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/admin/login",
      { email, password }
    );

    localStorage.setItem("token", res.data.token);

    navigate("/admin");

  } catch (err) {
    alert("Invalid credentials");
  }
};

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#0A0F1C] text-white">

      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-transparent border border-white/20 outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-transparent border border-white/20 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Login
        </button>

      </div>

    </div>
  );
}