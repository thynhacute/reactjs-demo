import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook-logo.png";
import googleIcon from "../../assets/images/google-logo.png";
import { UserAuth } from "../../context/AuthContext";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import signInIcon from "../../assets/images/signin-btn.png";
import orIcon from "../../assets/images/or-detail.png";
import axios from "axios";

LoginFeature.propTypes = {};

function LoginFeature() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { setIsPendingUpdated } = UserAuth();

  const signIn = (event) => {
    // signInWithEmailAndPassword(auth, email, password)
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://2hand.monoinfinity.net/api/v1.0/auth/login", payload)
      .then((userCredential) => {
        if ((userCredential.status = 201)) {
          localStorage.setItem(
            "access_token",
            JSON.stringify(userCredential.data)
          );
          setIsPendingUpdated((prev) => !prev);
          navigate("/home");
        } else {
          alert("login fail");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const auth = getAuth();
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (user != null) {
  //     navigate("/home");
  //   }
  // }, [user]);
  // const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const signInWithFacebook = () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((re) => {
  //       console.log(re);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  if (localStorage.getItem("access_token")) {
    // Chuyển hướng đến trang "/login-success"
    navigate("/login-success");
  }
  return (
    <header className="custom-login">
      <div className="hehe">
        <form action="" className="form-login" onSubmit={signIn}>
          <div className="login-mail-pass">
            <div className="login-app">
              <input
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="input-login-email"
                style={{ paddingLeft: "10px" }}
              />
              <input
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-login-password"
                style={{ paddingLeft: "10px" }}
              />
              <button type="submit" className="btn-signin-submit">
                <img src={signInIcon} alt="SignInBtn" className="signin-icon" />
              </button>
            </div>
          </div>
        </form>
        {/* <div>
          <img src={orIcon} alt="OrDetail" className="or-detail-icon" />
        </div>
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
        </nav> */}
      </div>
    </header>
  );
}

export default LoginFeature;
