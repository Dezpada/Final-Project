import React from "react";
import NavbarOtp from "../components/Otp/NavbarOtp";
import Otp1 from "../components/Otp/Otp1";

function Otp() {
  return (
    <>
      <NavbarOtp />
      <div className="d-flex flex-column mt-5">
        <img
          src="../../../img/success_otp.svg"
          alt="?"
          className=" mx-5"
          style={{ alignSelf: "center" }}
          width={250}
          height={250}
        />

        <Otp1 />
      </div>
    </>
  );
}

export default Otp;
