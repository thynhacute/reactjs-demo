import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

Authentication.propTypes = {};

function Authentication() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="custom-authen">
      {user?.displayName ? (
        <p></p>
      ) : (
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
      )}
    </header>
  );
}

export default Authentication;
