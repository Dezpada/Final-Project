import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Paymenttest.css";
 
function Paymenttest() {
  const { ticketCode } = useParams();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [payerName, setPayerName] = useState("");
  const [numberPayment, setNumberPayment] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayerNameChange = (event) => {
    setPayerName(event.target.value);
  };

  const handleNumberPaymentChange = (event) => {
    setNumberPayment(event.target.value);
  };

  const handleOnClick = async () => {
    try {
      const payload = JSON.stringify({
        ticket_code: ticketCode,
        payment_method: paymentMethod,
        payer_name: payerName,
        number_payment: numberPayment,
      });
      let token = localStorage.getItem("Authorization");
      console.log(token);
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_API_KEY}/flight/booking/checkout`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        data: payload,
      };

      const response = await axios.request(config);
      // Handle the response or perform any necessary actions after successful payment

      console.log(response.data);

      // Redirect to payment success page
      navigate("/payment-success");
    } catch (error) {
      // Handle the error or display an error message
      console.error(error);
    }
  };

  return (
    <div className="payment-container">
      <h4>Pembayaran</h4>
      <div className="ticket-code">Ticket Code: {ticketCode}</div>
      <div className="form-container">
        <div>
          <label>
            Payment Method:
            <input type="text" value={paymentMethod} onChange={handlePaymentMethodChange} />
          </label>
        </div>
        <div>
          <label>
            Payer Name:
            <input type="text" value={payerName} onChange={handlePayerNameChange} />
          </label>
        </div>
        <div>
          <label>
            Number Payment:
            <input type="text" value={numberPayment} onChange={handleNumberPaymentChange} />
          </label>
        </div>
        <div className="submit-button">
          <button type="button" onClick={handleOnClick}>Submit Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Paymenttest;
