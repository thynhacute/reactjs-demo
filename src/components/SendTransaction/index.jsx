import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";
import { BsHearts } from "react-icons/bs";
import { Margin } from "@mui/icons-material";
import "./styles.scss";

const SendTransaction = () => {
  const form = useRef();
  const { user } = UserAuth();
  const heartIconStyle = {
    color: "red",
  };

  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const accessToken = JSON.parse(localStorage.getItem("access_token"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const accessToken = JSON.parse(localStorage.getItem("access_token"));
      const response = await axios.post(
        "https://2hand.monoinfinity.net/api/v1.0/wallet/me/deposit",
        { amount: parseInt(amount) },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken?.token}`,
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Error:", error.response.data);
      }
    }
  };

  return (
    <header className="custom-request-page">
      <div className="title-request-page">Request Form</div>
      <div className="content-request-page">
        Nhập số tiền bạn đã Nạp <br /> Admin sẽ check và nạp tiền cho bạn trong
        thời gian sớm nhất
        <BsHearts style={heartIconStyle} />
      </div>

      <form ref={form} onSubmit={handleSubmit} className="fm-amout-dps">
        <label htmlFor="amount" className="title-amount-dps">
          Số tiền nạp:{" "}
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          className="ip-amount-dps"
          placeholder="Ví dụ: 100000"
        />
        <br />
        <button type="submit" className="sm-amount-dps">
          Xác nhận
        </button>
      </form>
    </header>
  );
};

export default SendTransaction;
