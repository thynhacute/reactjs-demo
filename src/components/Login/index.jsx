import React, { useEffect } from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook-logo.png";
import googleIcon from "../../assets/images/google-logo.png";
import { UserAuth } from "../../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

LoginFeature.propTypes = {};

function LoginFeature() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/members");
    }
  }, [user]);

  return (
    <header className="custom-login">
      <div className="hehe">
        <nav>
          <p className="login-title">ĐĂNG NHẬP</p>
          <ul className="detail-login">
            <li className="google-login">
              <button onClick={handleGoogleSignIn} className="login-item">
                <img src={googleIcon} alt="Google" className="google-icon" />
                Google
              </button>
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
