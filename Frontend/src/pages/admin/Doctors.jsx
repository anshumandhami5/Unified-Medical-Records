import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 🔥 FETCH DOCTORS
  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/doctors",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDoctors(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // 🔥 ADD DOCTOR
  const handleAddDoctor = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/admin/add-doctor",
        { name, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Doctor added successfully");

      setName("");
      setEmail("");

      fetchDoctors(); // refresh list

    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  // 🔥 DELETE DOCTOR
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/admin/delete-doctor/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchDoctors();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0A0F1C] text-white">
      <Sidebar />

      <div className="flex-1 p-6">

        <h2 className="text-2xl font-semibold mb-6">Manage Doctors</h2>

        {/* Add Doctor Form */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl mb-6">
          <h3 className="text-lg font-semibold mb-4">Add Doctor</h3>

          <input
            type="text"
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-white/20 bg-transparent rounded mb-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-white/20 bg-transparent rounded mb-3 outline-none"
          />

          <button
            onClick={handleAddDoctor}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
          >
            Add Doctor
          </button>
        </div>

        {/* Doctors Table */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
          <h3 className="text-lg font-semibold mb-4">Doctors List</h3>

          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-400">
                    No doctors added yet
                  </td>
                </tr>
              ) : (
                doctors.map((doc) => (
                  <tr key={doc._id} className="text-center border-b border-white/5">
                    <td className="p-2">{doc.name}</td>
                    <td className="p-2">{doc.email}</td>
                    <td className="p-2">
                      {doc.isVerified ? "Active" : "Pending"}
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => handleDelete(doc._id)}
                        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}