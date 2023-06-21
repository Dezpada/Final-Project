import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import OtpInput from "react-otp-input";

function Otp1() {
  const [otp, setOtp] = useState("");
  const [num, setNum] = useState(10);

  useEffect(() => {
    if (num === 0) {
      console.log("TIME LEFT IS 0");
      setNum(null);
    }
    if (!num) return;

    const intervalId = setInterval(() => {
      setNum(num - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [num]);

  const handleOnClick = () => {
    setNum(10);
    setTimeout(false);
  };

  return (
    // <OtpInput
    //   value={otp}
    //   onChange={setOtp}
    //   numInputs={4}
    //   renderSeparator={<span>-</span>}
    //   renderInput={(props) => <input {...props} />}
    // />
    <div className="container my-5">
      <div className="d-flex flex-column justify-content-center pt-4 container">
        <Form className="mb-4 mx-5 container">
          <h2 className="fw-bold mb-3 ps-5 pb-3" style={{ fontWeight: "bold" }}>
            Masukkan OTP
          </h2>
          <p className="text-center mt-3">
            Ketik 6 digit kode yang dikirimkan ke{" "}
            <a href="email" style={{ fontWeight: "bold" }}>
              email@gmail.com
            </a>
          </p>
          <div class="margin-top--small">
            <div className="otp">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle="inputStyle"
              />
            </div>
          </div>
          {num ? (
            num && (
              <div className="text-center mt-3">
                Kirim Ulang OTP dalam {num}
              </div>
            )
          ) : (
            <div
              className="text-center mt-3"
              onClick={handleOnClick}
              style={{ color: "red" }}
            >
              Kirim Ulang
            </div>
          )}

          <div className="text-center">
            <Button
              type="submit"
              className="mt-3 btn-ungu mx-auto"
              style={{ width: "700px" }}
            >
              Simpan
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Otp1;
