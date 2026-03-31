import DoctorSidebar from "../../components/DoctorSidebar";
import { useState } from "react";

export default function Dashboard() {
  const [patientId, setPatientId] = useState("");

  return (
    <div className="flex">
      <DoctorSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Doctor Dashboard</h2>

        {/* Search Patient */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Search Patient by ID
          </h3>

          <input
            type="text"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="w-full p-3 border rounded mb-4"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}