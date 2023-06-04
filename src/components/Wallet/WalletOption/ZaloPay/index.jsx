import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.scss";
import imgQrZaloPay from "../../../../assets/images/qr-zalopay.png";

const ZaloPayFeature = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <header className="custom-zalopay-page">
      <div className="title-zalopay-page">ZaloPay</div>
      <div className="content-zalopay-page">Quét mã thanh toán dưới đây</div>
      <ul className="detail-zalopay">
        <li>
          <div className="img-qr-zalopay">
            <img
              src={imgQrZaloPay}
              alt="ImgQRZaloPay"
              className="qrzalopay-img"
            />
          </div>
        </li>
        <li>
          <div className="content-zalopay-qr">
            Nội dung chuyển khoản theo cú pháp: email - phương thức - số tiền
            <br />
            <div className="ex-content-zalopay">
              Ví dụ: nhathy07@gmail.com ZaloPay 100.000VND
              <br />
              <br />
              Giá trị quy đổi: 10.000VND = 10 Xu
            </div>
            <br />
            <div className="contact-zalopay">
              Nếu sau 1 tiếng vẫn chưa thấy tài khoản Nạp Xu,
              <br /> hãy liên hệ với Admin qua trang Liên hệ
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default ZaloPayFeature;
