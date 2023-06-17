import React, { useRef } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const SendTransaction = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <header className="custom-momo-page">
      <div className="title-momo-page">Momo</div>
      <div className="content-momo-page">Quét mã thanh toán dưới đây</div>
    </header>
  );
};

export default SendTransaction;
