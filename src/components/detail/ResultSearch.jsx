import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Modal, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFoundSearch from "../../pages/NotFoundSearch";

import "./detailPagestyle.css";

const ResultSearch = ({
  selectedDate,
  total_passenger,
  flight_id,
  return_flight_id,
  is_roundtrip,
}) => {
  // convert time to number
  const convertTime = (time) => {
    const timeParts = time.split(":");
    const hour = parseInt(timeParts[0], 10);
    const minute = parseInt(timeParts[1], 10);
    const timeInNumber = hour + minute / 60;
    return timeInNumber;
  };
  // formatter rupiah
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  // prop data dari dashboard
  const location = useLocation();
  const [error, setError] = useState(null);
  const { apiEndpoint, requestBody } = location.state;
  const updateBody =
    requestBody.tripType === "oneway"
      ? { ...requestBody, flight_date: selectedDate }
      : { ...requestBody, departure_date: selectedDate };
  // set data api
  const [data, setData] = useState([]);
  const [returnFlight, setReturnFlight] = useState([]);
  // fetch api
  const fetchData = async () => {
    try {
      const response = await axios.post(apiEndpoint, updateBody);
      if (updateBody.tripType === "oneway") {
        setData(response.data.data);
      } else {
        setData(response.data.data.departureFlights);
        console.log(response.data.data);
        setReturnFlight(response.data.data.returnFlights);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(<NotFoundSearch />);
      } else {
        setError(<NotFoundSearch />);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const [show, setShow] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleFilter();
  }, [data, returnFlight]);
  console.log(data);

  // filter data
  const handleFilter = () => {
    let sortedFlights = [...data, ...returnFlight];
    switch (selectedFilter) {
      case "lowPrice":
        sortedFlights.sort((a, b) => a.price - b.price);
        break;
      case "lowDuration":
        sortedFlights.sort((a, b) => a.flight_duration - b.flight_duration);
        break;
      case "earlyDepart":
        sortedFlights.sort(
          (a, b) =>
            convertTime(a.departure_time) - convertTime(b.departure_time)
        );
        break;
      case "lateDepart":
        sortedFlights.sort(
          (a, b) =>
            convertTime(b.departure_time) - convertTime(a.departure_time)
        );
        break;
      case "earlyArrival":
        sortedFlights.sort(
          (a, b) => convertTime(a.arrival_time) - convertTime(b.arrival_time)
        );
        break;
      case "lateArrival":
        sortedFlights.sort(
          (a, b) => convertTime(b.arrival_time) - convertTime(a.arrival_time)
        );
        break;
      default:
        break;
    }
    setFilteredFlights(sortedFlights);
    setShow(false);
  };

  const navigate = useNavigate();

  // set id ke page checkout
  const [id, setId] = useState();
  const token = localStorage.getItem("Authorization");

  const handleClickId = (id) => {
    if (!token) {
      navigate("/login");
    } else {
      setId(id);
      navigate(`/checkout/${id}`, {
        state: {
          total_passenger: requestBody.total_passenger,
          flight_id: id,
          is_roundtrip: false,
        },
      });
    }
  };

  //prop data ke CO

  return (
    // modal
    <div>
      <div className="d-flex justify-content-end">
        <button
          onClick={handleShow}
          className=" border rounded-4  py-2 px-3 d-flex align-items-center"
        >
          <img src="/img/arrow-filter.svg" alt="" />
          <h6 className="my-auto text-purple">Filter</h6>
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <Form.Group>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="lowPrice"
                    name="filterOption"
                    value="lowPrice"
                    checked={selectedFilter === "lowPrice"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="py-2 text-center rounded-3 my-1"
                    htmlFor="lowPrice"
                    onClick={() => setSelectedFilter("lowPrice")}
                  >
                    Harga - Termurah
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="lowDuration"
                    name="filterOption"
                    value="lowDuration"
                    checked={selectedFilter === "lowDuration"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="py-2 text-center rounded-3 my-1"
                    htmlFor="lowDuration"
                    onClick={() => setSelectedFilter("lowDuration")}
                  >
                    Durasi - Terpendek
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="earlyDepart"
                    name="filterOption"
                    value="earlyDepart"
                    checked={selectedFilter === "earlyDepart"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="py-2 text-center rounded-3 my-1"
                    htmlFor="earlyDepart"
                    onClick={() => setSelectedFilter("earlyDepart")}
                  >
                    Keberangkatan -Paling Awal
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="lateDepart"
                    name="filterOption"
                    value="lateDepart"
                    checked={selectedFilter === "lateDepart"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="py-2 text-center rounded-3 my-1"
                    htmlFor="lateDepart"
                    onClick={() => setSelectedFilter("lateDepart")}
                  >
                    Keberangkatan -Paling Akhir
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="earlyArrival"
                    name="filterOption"
                    value="earlyArrival"
                    checked={selectedFilter === "earlyArrival"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="py-2 text-center rounded-3 my-1"
                    htmlFor=""
                    onClick={() => setSelectedFilter("earlyArrival")}
                  >
                    Kedatangan - Paling Awal
                  </label>
                </div>
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="lateArrival"
                    name="filterOption"
                    value="lateArrival"
                    checked={selectedFilter === "lateArrival"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label
                    className="py-2 text-center rounded-3 my-1"
                    htmlFor="lateArrival"
                    onClick={() => setSelectedFilter("lateArrival")}
                  >
                    Kedatangan - Paling Akhir
                  </label>
                </div>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleFilter}
            className="border rounded-4  py-2 px-5 bg-purple"
          >
            <h6 className="my-auto text-white">Pilih</h6>
          </button>
        </Modal.Footer>
      </Modal>
      {/* Accordion detail flight */}
      {error && <p>{error}</p>}
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight) => (
          <Accordion className="my-3" key={flight.id}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div>
                  <div className="d-flex flex-row">
                    <img
                      src={flight.airplane.airline.icon_url}
                      alt=""
                      style={{ width: "20px" }}
                    />
                    <h6 className="fw-semibold fs-12 my-auto ms-2">
                      {flight.flight_number}
                    </h6>
                    <h6 className="fw-semibold fs-12 my-auto mx-2">-</h6>
                    <h6 className="fw-semibold fs-12 my-auto ">
                      {flight.class}
                    </h6>
                  </div>
                  <div className="d-flex">
                    <div className="my-auto">
                      <h6 className="fw-semibold fs-14 ">
                        {flight.departure_time}
                      </h6>
                      <h6 className="fw-semibold fs-12 ">
                        {flight.departureAirport.iata_code}
                      </h6>
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="fs-12 mx-auto">
                        {flight.flight_duration} m
                      </h6>
                      <img src="/img/Arrow.svg" alt="" />
                      <h6 className="fs-12 mt-2 mx-auto">Direct</h6>
                    </div>
                    <div className="my-auto">
                      <h6 className="fw-semibold fs-14 ">
                        {flight.arrival_time}
                      </h6>
                      <h6 className="fw-semibold fs-12 ">
                        {flight.arrivalAirport.iata_code}
                      </h6>
                    </div>
                    <div className="d-flex">
                      <div className=" my-auto mx-5">
                        <img src="/img/baggage.svg" alt="" />
                      </div>
                      <div className="d-flex flex-column">
                        <h5 className="text-purple fw-semibold">
                          {formatter.format(flight.price)}
                        </h5>
                        <div className="bg-purple rounded-4 py-2 text-white fw-semibold text-center">
                          Pilih
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <h6 className="text-purple fw-semibold fs-14">
                      Detail Penerbangan
                    </h6>
                    <h6 className="fw-bold fs-16">{flight.departure_time}</h6>
                    <h6 className="fw-normal fs-14">{flight.flight_date}</h6>
                    <div className="d-flex">
                      <h6 className="fw-semibold fs-14">
                        {flight.departureAirport.name}
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
                    <img
                      src={flight.airplane.airline.icon_url}
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <div className="d-flex">
                        <h6 className="fw-bold fs-14">
                          {flight.airplane.airline.name}
                        </h6>
                        <h6 className="fw-bold fs-14 mx-2">-</h6>
                        <h6 className="fw-bold fs-14">{flight.class}</h6>
                      </div>
                      <div className="d-flex">
                        <h6 className="fw-bold fs-14">
                          {flight.flight_number}
                        </h6>
                      </div>
                    </div>
                    <h6 className="fw-bold fs-14 mt-2">Informasi:</h6>
                    <h6 className="fw-normal fs-14">
                      free baggage: {flight.free_baggage}
                    </h6>
                    <h6 className="fw-normal fs-14">
                      cabin baggage: {flight.cabin_baggage}
                    </h6>
                    <h6 className="fw-normal fs-14">in Flight Entertainment</h6>
                  </div>
                </div>
                <div className="border-bottom w-50 mx-auto my-2"></div>
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <h6 className="fw-bold fs-14">{flight.arrival_time}</h6>
                    <h6 className="fw-normal fs-14">{flight.flight_date}</h6>
                    <h6 className="fw-semibold fs-14">
                      {flight.arrivalAirport.name}
                    </h6>
                  </div>
                  <h6 className="ms-auto my-auto fw-bold fs-12 text-purple">
                    Kedatangan
                  </h6>
                </div>
                <div className=" mx-auto ">
                  <button
                    onClick={() => handleClickId(flight.id)}
                    className="w-100 bg-purple rounded-4 px-5 py-1 text-white fw-semibold"
                  >
                    Pilih
                  </button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ResultSearch;
