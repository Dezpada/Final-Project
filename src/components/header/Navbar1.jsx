import React from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src="../../../img/logo.svg"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="">
          <Form className="form-search">
            <Form.Control
              type="search"
              placeholder="Cari disini .."
              aria-label="Search"
            />
            <button className="icon-search">
              <img src="../../../img/search-ikon.svg" alt="search" />
            </button>
          </Form>
        </Nav>
        <Link to={"/login"}>
          <button>
            <img src="../../../img/masuk.svg" alt="Logo" />
          </button>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
