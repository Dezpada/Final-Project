import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DetailPenerbangan from "./pages/DetailPenerbangan";
import Riwayat from "./pages/Riwayat";
import User from "./pages/User";
import Notifikasi from "./pages/Notifikasi";
import ResetPass from "./pages/ResetPass";
import Otp from "./pages/Otp";
import PagePayment from "./pages/PagePayment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    //<GoogleOAuthProvider
    //   clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
    // >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-penerbangan" element={<DetailPenerbangan />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/user" element={<User />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/reset-pass" element={<ResetPass />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/page-payment" element={<PagePayment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
      <ToastContainer theme="colored" position="bottom-center" />
    </BrowserRouter>
    // </GoogleOAuthProvider>
  );
}

export default App;
