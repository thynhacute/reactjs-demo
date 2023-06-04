import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.scss";
import imgQrMomo from "../../../../assets/images/qr-momo.png";

const MomoFeature = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <header className="custom-momo-page">
      <div className="title-momo-page">Momo</div>
      <div className="content-momo-page">Quét mã thanh toán dưới đây</div>
      <ul className="detail-momo">
        <li>
          <div className="img-qr-momo">
            <img src={imgQrMomo} alt="ImgQRMomo" className="qrmomo-img" />
          </div>
        </li>
        <li>
          <div className="content-momo-qr">
            Nội dung chuyển khoản theo cú pháp: email - phương thức - số tiền
            <br />
            <div className="ex-content-momo">
              Ví dụ: nhathy07@gmail.com Momo 100.000VND
              <br />
              <br />
              Giá trị quy đổi: 10.000VND = 10 Xu
            </div>
            <br />
            <div className="contact-momo">
              Nếu sau 1 tiếng vẫn chưa thấy tài khoản Nạp Xu,
              <br /> hãy liên hệ với Admin qua trang Liên hệ
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default MomoFeature;
