import PatientSidebar from "../../components/PatientSidebar";

export default function Profile() {
  return (
    <div className="flex">
      <PatientSidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@gmail.com</p>
          <p><strong>Phone:</strong> 9876543210</p>
          <p><strong>Patient ID:</strong> UMRS12345</p>
        </div>
      </div>
    </div>
  );
}