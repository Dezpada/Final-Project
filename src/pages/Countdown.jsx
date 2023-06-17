import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Countdown() {
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
    <div>
      <div>
        {num ? (
          num && <>{num}</>
        ) : (
          <Button onClick={handleOnClick}>Reset</Button>
        )}
      </div>
    </div>
  );
}
