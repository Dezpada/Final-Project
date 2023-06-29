import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

function Otp1() {
  const [num, setNum] = useState(10);

  useEffect(() => {
    if (num === 0) {
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
    window.location.href = "/login";
  };

  return (
    <div className="container my-5">
      <div className="d-flex flex-column justify-content-center pt-4 container">
        <Form className="mb-4 mx-5 container">
          <p className="text-center mt-3 fw-bold">
            Akun anda berhasil di aktifkan
          </p>

          {num ? (
            num && (
              <div className="text-center mt-3">
                Anda akan menuju ke halaman login secara otomatis dalam {num}
              </div>
            )
          ) : (
            <div className="text-center mt-3">
              Tidak pindah secara otomatis?{" "}
              <a
                href="/login"
                className="text-center mt-3"
                onClick={handleOnClick}
              >
                Klik disini
              </a>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Otp1;
