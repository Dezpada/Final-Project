import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DetailPenerbangan from "./pages/DetailPenerbangan";
import User from "./pages/User";
import Notifikasi from "./pages/Notifikasi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-penerbangan" element={<DetailPenerbangan />} />
        <Route path="/user" element={<User />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
