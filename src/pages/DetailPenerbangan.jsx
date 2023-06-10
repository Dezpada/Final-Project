import React from "react";
import Navbar1 from "../components/header/Navbar1";
import Schedule from "../components/detail/Schedule";
import ResultSearch from "../components/detail/ResultSearch";
import ModalFilter from "../components/detail/ModalFilter";

const DetailPenerbangan = () => {
  return (
    <>
      <Navbar1 />
      <Schedule />
      <ModalFilter />
      <ResultSearch />
    </>
  );
};

export default DetailPenerbangan;
