import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";

/* ================= AUTH (Future) ================= */
import Login from "./pages/auth/Login";
import OTP from "./pages/auth/OTP";

/* ================= ADMIN ================= */
import AdminDashboard from "./pages/admin/Dashboard";
import Doctors from "./pages/admin/Doctors";

/* ================= PATIENT ================= */
import PatientDashboard from "./pages/patient/Dashboard";
import Records from "./pages/patient/Records";
import Profile from "./pages/patient/Profile";

/* ================= DOCTOR (Future) ================= */
import DoctorDashboard from "./pages/doctor/Dashboard";
import AddPatient from "./pages/doctor/AddPatient";
import UploadRecord from "./pages/doctor/UploadRecord";

function App() {
  return (
    <Router>
      <Routes>

        {/* ================= DEFAULT ================= */}
        <Route path="/" element={<Intro />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/doctors" element={<Doctors />} />

        {/* ================= PATIENT ================= */}
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/records" element={<Records />} />
        <Route path="/patient/profile" element={<Profile />} />

        {/* ================= AUTH (Enable Later) ================= */}
        
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
       

        {/* ================= DOCTOR (Enable Later) ================= */}
        
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/add-patient" element={<AddPatient />} />
        <Route path="/doctor/upload-record" element={<UploadRecord />} />

      </Routes>
    </Router>
  );
}

export default App;