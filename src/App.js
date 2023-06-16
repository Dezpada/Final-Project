import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DetailPenerbangan from "./pages/DetailPenerbangan";
import ResetPass from "./pages/ResetPass";
import Otp from "./pages/Otp";
import Countdown from "./pages/Countdown";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-penerbangan" element={<DetailPenerbangan />} />
        <Route path="/reset-pass" element={<ResetPass />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
