import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../firebase";
import "./styles.scss";
import signUpIcon from "../../assets/images/signup-btn.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

SignUpFeature.propTypes = {};

function SignUpFeature(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();
  const { setIsPendingUpdated } = UserAuth();
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(password === newConfirmPassword);
  };

  const signUp = (event) => {
    event.preventDefault();
    const payload = {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios
      .post("https://2hand.monoinfinity.net/api/v1.0/auth/register", payload)
      .then((userCredential) => {
        console.log(userCredential);
        if ((userCredential.status = 201)) {
          localStorage.setItem(
            "access_token",
            JSON.stringify(userCredential.data)
          );
          setIsPendingUpdated((prev) => !prev);
          navigate("/login");
        } else {
          alert("Signup fail");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  useEffect(() => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    setPasswordIsValid(
      passwordRegex.test(password) && password === confirmPassword
    );
  }, [password, confirmPassword]);

  return (
    <div>
      <header className="custom-signup">
        <form className="form-signup" onSubmit={signUp}>
          <div className="signup-mail-pass">
            <div className="signup-app">
              <div className="label-input-signup">
                <label
                  className="label-font-signup"
                  style={{ marginRight: "5px" }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-signup-email"
                  style={{ paddingLeft: "10px" }}
                />
              </div>
              <div className="label-input-signup">
                <label
                  className="label-font-signup"
                  style={{ marginRight: "5px" }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="name-mail-pass input-signup-name"
                  placeholder="Enter your Name"
                  style={{ paddingLeft: "10px" }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="label-input-signup">
                <label
                  className="label-font-signup"
                  style={{ marginRight: "5px" }}
                >
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="input-signup-password"
                  style={{ paddingLeft: "10px" }}
                />
              </div>
              <div className="label-input-signup">
                <label
                  className="label-font-signup"
                  style={{ marginRight: "5px" }}
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  placeholder="Confirm your Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="input-signup-confirm"
                  style={{ paddingLeft: "10px" }}
                />
              </div>
              {!passwordMatch && (
                <p
                  className="message-match-pass"
                  style={{ color: "red", marginLeft: "10px" }}
                >
                  Passwords không trùng nhau!
                </p>
              )}
              {passwordIsValid ? (
                <p></p>
              ) : (
                password.length > 0 && (
                  <p
                    className="message-valid-pass"
                    style={{ color: "red", marginLeft: "10px" }}
                  >
                    Passwords phải bao gồm chữ hoa, chữ thường và số.
                  </p>
                )
              )}
              <button type="submit" className="btn-signup-submit">
                <img src={signUpIcon} alt="SignupBtn" className="signup-icon" />
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default SignUpFeature;
