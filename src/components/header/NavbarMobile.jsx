import React from "react";
import { AiOutlineProfile, AiOutlineHome } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const NavbarMobile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("Authorization");
    if (!token) {
      navigate("/login");
    } else {
      navigate("/user");
    }
  };
  return (
    <>
      <div className="d-sm-none d-block py-2 bg-white border-top fixed-bottom">
        <div className="d-flex justify-content-evenly">
          <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
            <div className="text-center">
              <AiOutlineHome size={30} />
              <h6>Beranda</h6>
            </div>
          </Link>
          <Link
            to={"/riwayat"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="text-center">
              <AiOutlineProfile size={30} />
              <h6>Riwayat</h6>
            </div>
          </Link>
          <Link
            to={"/notifikasi"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="text-center">
              <IoNotificationsOutline size={30} />
              <h6>Notifikasi</h6>
            </div>
          </Link>
          <div className="text-center" onClick={handleClick}>
            <RiAccountCircleLine size={30} />
            <h6>Akun</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
