import PatientSidebar from "../../components/PatientSidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <PatientSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Patient Dashboard</h2>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold">Your Info</h3>
          <p>Name: John Doe</p>
          <p>Patient ID: UMRS12345</p>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Total Records</h3>
            <p className="text-2xl mt-2">5</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Last Visit</h3>
            <p className="text-2xl mt-2">12 Feb</p>
          </div>
        </div>
      </div>
    </div>
  );
}