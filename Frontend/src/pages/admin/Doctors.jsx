import Sidebar from "../../components/Sidebar";
import { useState } from "react";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Manage Doctors</h2>

        {/* Add Doctor Form */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold mb-4">Add Doctor</h3>

          <input
            type="text"
            placeholder="Doctor Name"
            className="w-full p-3 border rounded mb-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-3"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Add Doctor
          </button>
        </div>

        {/* Doctors Table */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Doctors List</h3>

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No doctors added yet
                  </td>
                </tr>
              ) : (
                doctors.map((doc, index) => (
                  <tr key={index} className="text-center border-t">
                    <td className="p-2">{doc.name}</td>
                    <td className="p-2">{doc.email}</td>
                    <td className="p-2">Active</td>
                    <td className="p-2">
                      <button className="bg-red-500 text-white px-3 py-1 rounded">
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