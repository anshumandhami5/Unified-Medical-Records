import PatientSidebar from "../../components/PatientSidebar";

export default function Records() {
  const records = [
    {
      date: "10 Feb 2026",
      doctor: "Dr. Sharma",
      diagnosis: "Fever",
    },
    {
      date: "20 Jan 2026",
      doctor: "Dr. Mehta",
      diagnosis: "Cold",
    },
  ];

  return (
    <div className="flex">
      <PatientSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">My Medical Records</h2>

        {records.map((rec, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
            <p><strong>Date:</strong> {rec.date}</p>
            <p><strong>Doctor:</strong> {rec.doctor}</p>
            <p><strong>Diagnosis:</strong> {rec.diagnosis}</p>

            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
              View Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}