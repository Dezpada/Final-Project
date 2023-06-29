import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import NotFoundSearch from "../../pages/NotFoundSearch";

const ResultSearch = () => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const location = useLocation();
  const formData = location.state;
  console.log(formData.formData);

  const url =
    "https://final-project-production-b6fe.up.railway.app/flight/search/oneWay";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url, formData.formData);
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [formData.formData]);

  return (
    <div>
      {data === null ? (
        <NotFoundSearch />
      ) : data.length === 0 ? (
        <NotFoundSearch />
      ) : (
        data?.map((flight) => (
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
                  <Link to={"/checkout"}>
                    <button className="w-100 bg-purple rounded-4 px-5 py-1 text-white fw-semibold">
                      Pilih
                    </button>
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))
      )}
    </div>
  );
};

export default ResultSearch;
