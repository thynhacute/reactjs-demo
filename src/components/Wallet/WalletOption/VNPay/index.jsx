import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.scss";
import imgQrVNPay from "../../../../assets/images/qr-vnpay.png";
import { NavLink } from "react-router-dom";

const VNPayFeature = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <header className="custom-vnpay-page">
      <div className="title-vnpay-page">VNPay</div>
      <div className="content-vnpay-page">Quét mã thanh toán dưới đây</div>
      <ul className="detail-vnpay">
        <li>
          <div className="img-qr-vnpay">
            <img src={imgQrVNPay} alt="ImgQRVNPay" className="qrvnpay-img" />
          </div>
        </li>
        <li>
          <div className="content-vnpay-qr">
            Nội dung chuyển khoản theo cú pháp: email - phương thức - số tiền
            <br />
            <div className="ex-content-vnpay">
              Ví dụ: nhathy07@gmail.com VNPay 100.000VND
              <br />
              <br />
              Giá trị quy đổi: 10.000VND = 10 Xu
            </div>
            <br />
            <div className="contact-vnpay">
              Nếu sau 1 tiếng vẫn chưa thấy tài khoản Nạp Xu,
              <br /> hãy liên hệ với Admin qua trang Liên hệ
            </div>
            <div className="btn-send-noti-dps">
              <NavLink to="/send-transaction" activeClassName="active">
                <button className="sm-vnpay-page-dps">Xác nhận</button>
              </NavLink>
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default VNPayFeature;
