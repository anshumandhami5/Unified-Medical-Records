import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Total Doctors</h3>
            <p className="text-2xl mt-2">10</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Active Doctors</h3>
            <p className="text-2xl mt-2">8</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Pending</h3>
            <p className="text-2xl mt-2">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}