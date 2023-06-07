import React from "react";
import { Navbar, Container, Form, Nav, Button } from "react-bootstrap";
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
            <Button variant="transparent" className="icon-search">
              <img src="../../../img/search-ikon.svg" alt="search" />
            </Button>
          </Form>
        </Nav>
        <Button variant="transparent" as={Link} to={"/login"}>
          <img src="../../../img/masuk.svg" alt="Logo" />
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
