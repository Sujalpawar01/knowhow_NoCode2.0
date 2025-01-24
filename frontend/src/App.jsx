import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import BookAppointment  from "./pages/BookAppointment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<BookAppointment />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
