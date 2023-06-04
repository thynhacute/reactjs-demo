import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.scss";
import imgQrBanking from "../../../../assets/images/qr-banking.png";
import imgInfoBanking from "../../../../assets/images/info-stk-banking.png";

const BankingFeature = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <header className="custom-banking-page">
      <div className="title-banking-page">Banking</div>
      <div className="content-banking-page">Quét mã thanh toán dưới đây</div>
      <ul className="detail-banking">
        <li className="banking-hehe">
          <div className="img-qr-banking">
            <img
              src={imgQrBanking}
              alt="ImgQRBanking"
              className="qrbanking-img"
            />
          </div>
          <div className="info-banking">
            <img
              src={imgInfoBanking}
              alt="ImgInfoBanking"
              className="info-stk-banking"
            />
          </div>
        </li>
        <li>
          <div className="content-banking-qr">
            Nội dung chuyển khoản theo cú pháp: email - phương thức - số tiền
            <br />
            <div className="ex-content-banking">
              Ví dụ: nhathy07@gmail.com Banking 100.000VND
              <br />
              <br />
              Giá trị quy đổi: 10.000VND = 10 Xu
            </div>
            <br />
            <div className="contact-banking">
              Nếu sau 1 tiếng vẫn chưa thấy tài khoản Nạp Xu,
              <br /> hãy liên hệ với Admin qua trang Liên hệ
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default BankingFeature;
