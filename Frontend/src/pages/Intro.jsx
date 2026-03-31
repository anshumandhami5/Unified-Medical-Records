// src/pages/Intro.jsx

import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="text-xl font-bold">UMRS</h1>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-16">
        
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Unified Medical Records
          <br />
          <span className="text-blue-200">One ID. Lifetime Health Data.</span>
        </h1>

        <p className="max-w-2xl text-lg text-blue-100 mb-8">
          Securely store and access your complete medical history anytime,
          anywhere. Doctors upload records, patients access them instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 px-10 mt-20 pb-20">
        
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">🔐 Secure Access</h3>
          <p className="text-blue-100">
            Only authorized doctors and patients can access records.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">🧾 Lifetime Records</h3>
          <p className="text-blue-100">
            All your medical history stored under one unique ID.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">⚡ Instant Access</h3>
          <p className="text-blue-100">
            Access reports anytime, anywhere with OTP login.
          </p>
        </div>
      </div>

    </div>
  );
}