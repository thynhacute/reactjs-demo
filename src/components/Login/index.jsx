import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook-logo.png";
import googleIcon from "../../assets/images/google-logo.png";

LoginFeature.propTypes = {};

function LoginFeature() {
  return (
    <header className="custom-login">
      <div className="hehe">
        <nav>
          <p className="login-title">ĐĂNG NHẬP</p>
          <ul className="detail-login">
            <li className="google-login">
              <Link to="/signup" className="login-item">
                <img src={googleIcon} alt="Google" className="google-icon" />
                Google
              </Link>
            </li>
            <li className="facebook-login">
              <Link to="/login" className="login-item">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="facebook-icon"
                />
                Facebook
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default LoginFeature;
