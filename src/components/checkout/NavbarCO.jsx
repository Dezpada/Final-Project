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
