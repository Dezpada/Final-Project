import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DetailPenerbangan from "./pages/DetailPenerbangan";
import Riwayat from "./pages/Riwayat";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-penerbangan" element={<DetailPenerbangan />} />
        <Route path="/riwayat" element={<Riwayat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
