import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

function CheckoutCol2() {
  const [flight, setFlight] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [airplane, setAirplane] = useState("");
  const [airline, setAirline] = useState("");
  const [adultPassenger, setAdultPassenger] = useState("");
  const [kidPassenger, setKidPassenger] = useState("");
  const [babyPassenger, setBabyPassenger] = useState("");
  const [priceAdults, setPriceAdults] = useState();
  const [priceKids, setPriceKids] = useState();
  const [priceBaby, setPriceBaby] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `https://final-project-production-b6fe.up.railway.app/flight/${params.id}`
        );
        setFlight(response.data.data);
        setDepartureAirport(response.data.data.departureAirport);
        setArrivalAirport(response.data.data.arrivalAirport);
        setAirplane(response.data.data.airplane);
        setAirline(response.data.data.airplane.airline);
      } catch (error) {
        alert(error);
      }
    }

    if (params?.id) {
      fetchPost().then(calculatePricePassengers()).then(calculatePriceTotal());
    }

    async function calculatePricePassengers() {
      await fetchPost();
      const adult = window.localStorage.getItem("adult_passengers");
      setAdultPassenger(adult);
      const kid = window.localStorage.getItem("kid_passengers");
      setKidPassenger(kid);
      const baby = window.localStorage.getItem("baby_passengers");
      setBabyPassenger(baby);

      setPriceAdults(adultPassenger * flight.price);
      setPriceKids(kidPassenger * flight.price);
      setPriceBaby(babyPassenger * 0);
    }
    async function calculatePriceTotal() {
      await fetchPost();
      await calculatePricePassengers();
      setTotalPrice(priceAdults + priceKids + priceBaby + 300000);
    }
  }, [params]);

  return (
    <Container className="my-3">
      <div className="d-flex">
        <div className="d-flex flex-column">
          <h6 className="text-purple fw-semibold fs-14">Detail Penerbangan</h6>
          <h6 className="fw-bold fs-16">{flight.departure_time}</h6>
          <h6 className="fw-normal fs-14">
            {moment(flight.flight_date).format("LL")}
            {/* 3 Maret 2023 */}
          </h6>
          <div className="d-flex">
            <h6 className="fw-semibold fs-14">
              {departureAirport.name}
              {/* Soekarno Hatta */}
            </h6>
            <h6 className="fw-semibold fs-14 mx-2">-</h6>
            <h6 className="fw-semibold fs-14">
              {flight.departure_terminal_name}
              {/* Terminal 1A Domestik */}
            </h6>
          </div>
        </div>
        <h6 className="ms-auto my-auto fw-bold fs-12 text-purple">
          Keberangkatan
        </h6>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <div className="d-flex">
        <div className="me-2 my-auto">
          <img src={airline.icon_url} alt="" width={50} />
          {/* "/img/logo_leaf.svg" */}
        </div>
        <div className="d-flex flex-column">
          <div>
            <div className="d-flex">
              <h6 className="fw-bold fs-14">
                {airline.name}
                {/* Jet Air */}
              </h6>
              <h6 className="fw-bold fs-14 mx-2">-</h6>
              <h6 className="fw-bold fs-14">
                {flight.class}
                {/* Economy */}
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="fw-bold fs-14">
                {flight.flight_number}
                {/* JT */}
              </h6>
              {/* <h6 className="fw-bold fs-14 mx-2">-</h6>
              <h6 className="fw-bold fs-14">203</h6> */}
            </div>
          </div>
          <h6 className="fw-bold fs-14 mt-2">Informasi:</h6>
          <h6 className="fw-normal fs-14">Baggage {flight.free_baggage} Kg</h6>
          <h6 className="fw-normal fs-14">
            Cabin Baggage {flight.cabin_baggage} Kg
          </h6>
          <h6 className="fw-normal fs-14">in Flight Entertainment</h6>
        </div>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <div className="d-flex">
        <div className="d-flex flex-column">
          <h6 className="fw-bold fs-14">
            {flight.arrival_time}
            {/* 07:00 */}
          </h6>
          <h6 className="fw-normal fs-14">
            {moment(flight.flight_date).format("LL")}
            {/* 3 Maret 2023 */}
          </h6>
          <h6 className="fw-semibold fs-14">
            {arrivalAirport.name}
            {/* Melbourne International Airport */}
          </h6>
        </div>
        <h6 className="ms-auto my-auto fw-bold fs-12 text-purple">
          Kedatangan
        </h6>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <h6 className="fw-bold fs-14">Rincian Harga</h6>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
          <h6 className="fw-normal fs-14">{adultPassenger} Adults</h6>
          <h6 className="fw-normal fs-14">{kidPassenger} Kids</h6>
          <h6 className="fw-normal fs-14">{babyPassenger} Baby</h6>
          <h6 className="fw-normal fs-14">Tax</h6>
        </div>
        <div className="d-flex flex-column">
          <h6 className="fw-bold fs-14 text-end"> </h6>
          <h6 className="fw-normal fs-14 text-end">IDR {priceAdults}</h6>
          <h6 className="fw-normal fs-14 text-end">IDR {priceKids}</h6>
          <h6 className="fw-normal fs-14 text-end">IDR {priceBaby}</h6>
          <h6 className="fw-normal fs-14 text-end">IDR 300000</h6>
        </div>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <div className="d-flex mb-3">
        <div className="d-flex flex-column">
          <h6 className="fw-bold fs-20">Total</h6>
        </div>
        <h6 className="ms-auto my-auto fw-bold fs-20 text-purple">
          IDR {totalPrice}
        </h6>
      </div>
      <div className=" mx-auto ">
        <Link to={"/page-payment"}>
          <button className="w-100 btn btn-danger rounded-3 px-5 py-2 text-white fw-normal fs-30">
            Lanjut Bayar
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default CheckoutCol2;
