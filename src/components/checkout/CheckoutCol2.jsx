import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
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
  const [passenger, setPassenger] = useState(0);
  const [adultPassenger, setAdultPassenger] = useState();
  const [childPassenger, setChildPassenger] = useState();
  const [babyPassenger, setBabyPassenger] = useState();
  const [price, setPrice] = useState(0);
  const [adultPrice, setAdultPrice] = useState();
  const [childPrice, setChildPrice] = useState();
  const [babyPrice, setBabyPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const params = useParams();

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const location = useLocation();

  function calculatePricePassengers() {
    try {
      const { total_passenger, adults, child, baby } = location.state;
      setAdultPassenger(adults);
      setChildPassenger(child);
      setBabyPassenger(baby);
      setPassenger(+adults + child);
      if (!isNaN(flight.price)) {
        setAdultPrice(+adultPassenger * +flight.price);
        setChildPrice(+childPassenger * +flight.price);
        setBabyPrice(0);
        setPrice(+passenger * +flight.price);
      } else {
        setPrice(30);
      }
    } catch (error) {
      alert(error);
    }
  }

  function calculatePriceTotal() {
    try {
      //console.log(typeof +price + 300000, "ini hasil price");
      if (!isNaN(price)) {
        setTotalPrice(+price + 300000);
      } else {
        setTotalPrice(20);
      }
    } catch (error) {
      alert(error);
    }
  }

  async function fetchPost() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/flight/${params.id}`
      );
      setFlight(response.data.data);
      setDepartureAirport(response.data.data.departureAirport);
      setArrivalAirport(response.data.data.arrivalAirport);
      setAirplane(response.data.data.airplane);
      setAirline(response.data.data.airplane.airline);
      //console.log(flight.price);
      calculatePricePassengers();
      calculatePriceTotal();
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (price === undefined) {
      if (params?.id) {
        fetchPost();
      }
    } else {
      if (params?.id) {
        fetchPost();
      }
    }
  }, [params, price]);

  return (
    <Container className="my-3 mx-auto">
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
          {adultPassenger ? (
            <h6 className="fw-normal fs-14 ">{adultPassenger} Adult</h6>
          ) : null}
          {childPassenger ? (
            <h6 className="fw-normal fs-14 ">{childPassenger} Child</h6>
          ) : null}
          {babyPassenger ? (
            <h6 className="fw-normal fs-14 ">{babyPassenger} Baby</h6>
          ) : null}
          <h6 className="fw-normal fs-14">Tax</h6>
        </div>
        <div className="d-flex flex-column">
          {adultPassenger ? (
            <h6 className="fw-normal fs-14 text-end">
              {formatter.format(adultPrice)}
            </h6>
          ) : null}
          {childPassenger ? (
            <h6 className="fw-normal fs-14 text-end">
              {formatter.format(childPrice)}
            </h6>
          ) : null}
          {babyPassenger ? (
            <h6 className="fw-normal fs-14 text-end">
              {formatter.format(babyPrice)}
            </h6>
          ) : null}
          <h6 className="fw-normal fs-14 text-end">Rp 300.000</h6>
        </div>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <div className="d-flex mb-3">
        <div className="d-flex flex-column">
          <h6 className="fw-bold fs-20">Total</h6>
        </div>
        <h6 className="ms-auto my-auto fw-bold fs-20 text-purple">
          {formatter.format(totalPrice)}
        </h6>
      </div>
    </Container>
  );
}

export default CheckoutCol2;
