import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const NavbarOtp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src="/img/logo.svg"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarOtp;
