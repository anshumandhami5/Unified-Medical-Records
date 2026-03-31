import DoctorSidebar from "../../components/DoctorSidebar";

export default function UploadRecord() {
  return (
    <div className="flex">
      <DoctorSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Upload Medical Record</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Patient ID"
            className="w-full p-3 border rounded mb-3"
          />

          <textarea
            placeholder="Diagnosis"
            className="w-full p-3 border rounded mb-3"
          />

          <input
            type="file"
            className="w-full p-3 border rounded mb-3"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}