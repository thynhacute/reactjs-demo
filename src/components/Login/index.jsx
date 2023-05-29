import React, { useEffect } from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook-logo.png";
import googleIcon from "../../assets/images/google-logo.png";
import { UserAuth } from "../../context/AuthContext";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

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

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <header className="custom-login">
      <div className="hehe">
        <nav>
          <div className="detail-login">
            <div className="google-login">
              <button onClick={handleGoogleSignIn} className="login-google">
                <img src={googleIcon} alt="Google" className="google-icon" />
                Google
              </button>
            </div>
            <div className="facebook-login">
              <button onClick={signInWithFacebook} className="login-facebook">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="facebook-icon"
                />
                Facebook
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default LoginFeature;
