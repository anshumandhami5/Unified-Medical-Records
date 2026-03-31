import { Link, useLocation } from "react-router-dom";

export default function DoctorSidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/doctor" },
    { name: "Add Patient", path: "/doctor/add-patient" },
    { name: "Upload Record", path: "/doctor/upload-record" },
  ];

  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-5">
      <h1 className="text-xl font-bold mb-8">Doctor Panel</h1>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block p-2 rounded mb-2 ${
            location.pathname === item.path
              ? "bg-blue-900"
              : "hover:bg-blue-600"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}