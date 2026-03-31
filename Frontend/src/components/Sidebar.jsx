import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Doctors", path: "/admin/doctors" },
  ];

  return (
    <div className="w-64 h-screen bg-blue-600 text-white p-5">
      <h1 className="text-xl font-bold mb-8">Admin Panel</h1>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block p-2 rounded mb-2 ${
            location.pathname === item.path
              ? "bg-blue-800"
              : "hover:bg-blue-500"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}