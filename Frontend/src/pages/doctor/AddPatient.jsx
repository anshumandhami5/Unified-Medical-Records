import DoctorSidebar from "../../components/DoctorSidebar";
import { useState } from "react";

export default function AddPatient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="flex">
      <DoctorSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Add New Patient</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Patient Name"
            className="w-full p-3 border rounded mb-3"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-3"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 border rounded mb-3"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          {/* Future: Camera */}
          <button className="bg-gray-300 px-4 py-2 rounded mb-3">
            Capture Photo (Coming Soon)
          </button>

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Create Patient
          </button>
        </div>
      </div>
    </div>
  );
}