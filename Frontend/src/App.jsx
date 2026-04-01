import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";

/* ================= AUTH ================= */
import DoctorLogin from "./pages/auth/DoctorLogin";
import OTP from "./pages/auth/OTP";

/* ================= ADMIN ================= */
import AdminDashboard from "./pages/admin/Dashboard";
import Doctors from "./pages/admin/Doctors";
import AdminLogin from "./pages/admin/Login";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

/* ================= PATIENT ================= */
import PatientDashboard from "./pages/patient/Dashboard";
import Records from "./pages/patient/Records";
import Profile from "./pages/patient/Profile";
import PatientLogin from "./pages/auth/PatientLogin";

/* ================= DOCTOR ================= */
import DoctorDashboard from "./pages/doctor/Dashboard";
import AddPatient from "./pages/doctor/AddPatient";
import UploadRecord from "./pages/doctor/UploadRecord";
import ResetPassword from "./pages/doctor/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>

        {/* ================= DEFAULT ================= */}
        <Route path="/" element={<Intro />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/doctors"
          element={
            <ProtectedAdminRoute>
              <Doctors />
            </ProtectedAdminRoute>
          }
        />

        {/* ================= PATIENT ================= */}
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/records" element={<Records />} />
        <Route path="/patient/profile" element={<Profile />} />
        <Route path="/patient/login" element={<PatientLogin />} />

        {/* ================= AUTH ================= */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/otp" element={<OTP />} />

        {/* ================= DOCTOR ================= */}
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/add-patient" element={<AddPatient />} />
        <Route path="/doctor/upload-record" element={<UploadRecord />} />
        <Route path="/doctor/reset-password/:token" element={<ResetPassword />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />

      </Routes>
    </Router>
  );
}

export default App;