import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("Authorization");

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
            height={100}
          />
        </Navbar.Brand>
        <Nav className="w-50">
          <Form className="form-search w-100 mx-auto">
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

        {isLoggedIn ? (
          <>
            {/* <button
            // onClick={() => {
            //   localStorage.removeItem("token");
            //   setIsLoggedIn(false);
            //   return navigate("/");
            // }}
            >
              Logout
            </button> */}
            <div className="d-flex">
              <div className="mx-2">
                <Link to={"/riwayat"}>
                  <button>
                    <img src="/img/fi_list.svg" alt="" />
                  </button>
                </Link>
              </div>
              <div className="mx-2">
                <Link to={"/notifikasi"}>
                  <button>
                    <img src="/img/fi_bell.svg" alt="" />
                  </button>
                </Link>
              </div>
              <div className="mx-2">
                <Link to={"/user"}>
                  <button>
                    <img src="/img/fi_user.svg" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button>
                <img src="../../../img/masuk.svg" alt="Logo" />
              </button>
            </Link>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Navbar1;
