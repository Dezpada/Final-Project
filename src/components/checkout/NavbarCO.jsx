import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavbarCO = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Mengatur tautan yang sedang aktif berdasarkan path lokasi saat ini
    setActiveLink(location.pathname);
  }, [location]);

  const isPaymentSuccessPage =
    activeLink === "/payment-success" ||
    activeLink.startsWith("/payment-success/");

  return (
    <Container className="container-fluid my-5" width="100%">
      <p style={{ fontWeight: "bold" }}>
        <Link
          to="/checkout"
          style={{
            textDecoration: "none",
            color: activeLink === "/checkout" ? "black" : "inherit",
          }}
        >
          Isi Data Diri
        </Link>
        {"  >  "}
        <Link
          to="/page-payment"
          style={{
            textDecoration: "none",
            color:
              activeLink === "/page-payment" || isPaymentSuccessPage
                ? "black"
                : "#8A8A8A",
          }}
        >
          Bayar
        </Link>
        {"  >  "}
        <Link
          to="/payment-success"
          style={{
            textDecoration: "none",
            color: activeLink.startsWith("/payment-success")
              ? "black"
              : "#8A8A8A",
          }}
        >
          Selesai
        </Link>
      </p>
      {isLoggedIn ? <></> : <></>}
    </Container>
  );
};

export default NavbarCO;
import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const NavbarCO = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Container className="container-fluid my-3" width="100%">
      <p style={{ fontWeight: "bold" }}>
        <a href="?" style={{ textDecoration: "none", color: "black" }}>
          Isi Data Diri
        </a>
        {"  >  "}
        <a href="?" style={{ textDecoration: "none", color: "#8A8A8A" }}>
          Bayar
        </a>
        {"  >  "}
        <a href="?" style={{ textDecoration: "none", color: "#8A8A8A" }}>
          Selesai
        </a>
      </p>
      {isLoggedIn ? <></> : <></>}
    </Container>
  );
};

export default NavbarCO;
