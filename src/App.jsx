import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appoimtment from "./pages/Appoimtment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-y-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appoimtment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
