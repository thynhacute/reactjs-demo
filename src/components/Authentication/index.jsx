import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

Authentication.propTypes = {};

function Authentication() {
  return (
    <header className="custom-authen">
      <nav>
        <p></p>
        <ul className="menu-authen">
          <li className="menu-signup">
            <Link to="/signup" className="authen-item">
              Đăng ký
            </Link>
          </li>
          <li className="menu-login">
            <Link to="/login" className="authen-item">
              Đăng nhập
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Authentication;
