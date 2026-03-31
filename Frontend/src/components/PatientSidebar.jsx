import { Link, useLocation } from "react-router-dom";

export default function PatientSidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/patient" },
    { name: "My Records", path: "/patient/records" },
    { name: "Profile", path: "/patient/profile" },
  ];

  return (
    <div className="w-64 h-screen bg-green-600 text-white p-5">
      <h1 className="text-xl font-bold mb-8">Patient Panel</h1>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block p-2 rounded mb-2 ${
            location.pathname === item.path
              ? "bg-green-800"
              : "hover:bg-green-500"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}