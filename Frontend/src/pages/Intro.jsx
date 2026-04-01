import React from 'react';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      
      {/* NAVBAR */}
      <nav className="w-full px-8 py-6 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">
              Unified Medical Record System
            </span>
          </div>

          {/* 🔥 ADMIN LOGIN BUTTON */}
          <button
            onClick={() => navigate("/admin/login")}
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition"
          >
            Admin
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="w-full px-8 pt-20 pb-32 text-center bg-slate-950">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
          One Patient. One Record.<br />Universal Access.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          The next generation of Unified Medical Record systems. Secure, decentralized, and accessible for both healthcare providers and patients.
        </p>

        {/* LOGIN CARDS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">

          {/* PATIENT */}
          <button
            onClick={() => navigate("/patient/login")}
            className="group relative w-full md:w-96 p-10 bg-white rounded-3xl border border-slate-200 shadow-xl hover:shadow-blue-900/30 hover:border-blue-300 transition-all duration-300 text-left"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              👤
            </div>

            <h3 className="text-2xl font-bold mb-3 text-slate-950">For Patients</h3>
            <p className="text-slate-600 text-base mb-6">
              Access your records, history, and prescriptions instantly.
            </p>

            <span className="text-blue-600 font-semibold text-base">
              Login to Portal →
            </span>
          </button>

          {/* DOCTOR */}
          <button
            onClick={() => navigate("/doctor/login")}
            className="group relative w-full md:w-96 p-10 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl hover:shadow-blue-900/20 hover:border-blue-700 transition-all duration-300 text-left"
          >
            <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 border border-blue-900">
              🧑‍⚕️
            </div>

            <h3 className="text-2xl font-bold mb-3 text-white">For Doctors</h3>
            <p className="text-slate-400 text-base mb-6">
              Review patient data and manage clinical documentation.
            </p>

            <span className="text-blue-400 font-semibold text-base">
              Provider Access →
            </span>
          </button>

        </div>
      </header>

      {/* FOOTER */}
      <footer className="w-full py-16 px-8 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Unified Medical Record System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;