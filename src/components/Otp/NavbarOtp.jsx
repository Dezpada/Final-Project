import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const NavbarOtp = () => {
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
