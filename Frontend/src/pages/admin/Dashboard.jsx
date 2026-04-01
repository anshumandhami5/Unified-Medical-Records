import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    pending: 0,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        // 🔥 Try stats API first
        const res = await axios.get(
          "http://localhost:5000/api/admin/stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);

      } catch (err) {
        console.log("Stats API failed, using fallback...");

        try {
          // 🔥 FALLBACK: fetch doctors manually
          const token = localStorage.getItem("token");

          const res = await axios.get(
            "http://localhost:5000/api/admin/doctors",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const doctors = res.data;

          const total = doctors.length;
          const active = doctors.filter(d => d.isVerified).length;
          const pending = doctors.filter(d => !d.isVerified).length;

          setStats({ total, active, pending });

        } catch (err2) {
          console.log("Fallback also failed:", err2);
        }
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0A0F1C] text-white">
      
      <Sidebar />

      <div className="flex-1 p-6">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
          >
            Logout
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
            <h3 className="text-sm text-gray-400">Total Doctors</h3>
            <p className="text-3xl mt-2 font-semibold">{stats.total}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
            <h3 className="text-sm text-gray-400">Active Doctors</h3>
            <p className="text-3xl mt-2 font-semibold">{stats.active}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
            <h3 className="text-sm text-gray-400">Pending</h3>
            <p className="text-3xl mt-2 font-semibold">{stats.pending}</p>
          </div>

        </div>

      </div>
    </div>
  );
}