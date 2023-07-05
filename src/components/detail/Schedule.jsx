import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./detailPagestyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Schedule = ({ onDateSelect, selectedDate }) => {
  // mengambil data dari flight form
  const location = useLocation();
  const formData = location.state.requestBody;

  // set startdate one way dan twoway
  const startDate =
    formData.tripType === "oneway"
      ? formData.flight_date
      : formData.departure_date;
  // set looping button tanggal 8 kali
  const numberOfDays = 8;
  const getDatesWithDayNames = (startDate, numberOfDays) => {
    const daysOfWeek = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const datesWithDayNames = [];
    const dateObj = new Date(startDate);

    for (let i = 0; i < numberOfDays; i++) {
      const dateString = dateObj.toISOString().slice(0, 10);
      const dayName = daysOfWeek[dateObj.getDay()];
      datesWithDayNames.push({ date: dateString, day: dayName });

      dateObj.setDate(dateObj.getDate() + 1);
    }
    return datesWithDayNames;
  };

  const datesWithDayNames = getDatesWithDayNames(startDate, numberOfDays);
  const [cityFrom, setCityFrom] = useState(null);
  const [cityTo, setCityTo] = useState(null);
  const idFrom = formData.origin_airport;
  const idTo = formData.destination_airport;
  // mengambil data tanggal saat di klik
  const handleDateClick = (date) => {
    onDateSelect(date);
  };
  // fetch data nama kota
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://final-project-production-b6fe.up.railway.app/airports?page=1&per_page=50"
      );
      let newCityFrom = response.data.data.find(
        (cityfromid) => cityfromid.id === Number(idFrom)
      );
      let newCityTo = response.data.data.find(
        (citytoid) => citytoid.id === Number(idTo)
      );

      setCityTo(newCityTo);
      setCityFrom(newCityFrom);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [idFrom, idTo]);

  const navigate = useNavigate();

  return (
    <div className="bg-detail pt-5 pb-4">
      <Container className="">
        <Row>
          <Col sm={2}></Col>
          <Col>
            <h5 className="mb-4">Detail Penerbangan</h5>
            <Row>
              <Col className="rounded-4 my-1 py-2 px-2 bg-purple text-white  ">
                <div className="d-flex ">
                  <div
                    className="mx-2 my-auto"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      localStorage.removeItem("passengers");
                      return navigate("/");
                    }}
                  >
                    <img src="/img/fi_arrow-left.svg" alt="" />
                  </div>
                  <div className=" d-flex ">
                    <h6 className="my-auto fw-semibold">{cityFrom?.city}</h6>
                    <div className="mx-2 my-auto">
                      <img
                        src="/img/fi_arrow-right.png"
                        alt=""
                        style={{ width: "12px" }}
                      />
                    </div>
                    <h6 className="my-auto fw-semibold">{cityTo?.city}</h6>
                    <div className="mx-2 my-auto">
                      <img
                        src="/img/fi_arrow-right.png"
                        alt=""
                        style={{ width: "12px" }}
                      />
                    </div>
                    <h6 className="my-auto fw-semibold">
                      {formData.total_passenger}
                      <span className="my-auto"> Penumpang</span>
                    </h6>
                    <div className="mx-2 my-auto">
                      <img
                        src="/img/fi_arrow-right.png"
                        alt=""
                        style={{ width: "12px" }}
                      />
                    </div>
                    <h6 className="my-auto fw-semibold">{formData.class}</h6>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="d-flex flex-wrap">
              {datesWithDayNames.map((item) => (
                <div
                  key={item.date}
                  className={`mx-auto rounded-3 px-2 py-1 mt-2 border button-schedule text-center ${
                    selectedDate === item.date ? "active-btn" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDateClick(item.date)}
                >
                  <h6 className="fw-semibold">{item.day}</h6>
                  <h6 className="fw-normal fs-12 date">{item.date}</h6>
                </div>
              ))}
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
