import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.png";
import cartIcon from "../../assets/images/cart.png";
import dropIcon from "../../assets/images/dropdown.png";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

Header.propTypes = {};

function Header() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: "Chỉnh sửa hồ sơ", path: "/account" },
    { label: "Nạp xu", path: "/wallet" },
    { label: "Sản phẩm của tôi", path: "/my-product" },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuWrapperClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="custom-header">
      <nav>
        <p></p>
        <ul className="menu-navbar">
          <li className="logo">
            <img src={logoImage} alt="Logo" />
          </li>
          <li>
            <NavLink to="/" className="home-menu">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active-members">
              Sản phẩm
            </NavLink>
          </li>
          <li>
            <NavLink to="/members" activeClassName="active-albums">
              Giới thiệu
            </NavLink>
          </li>
          <li>
            <Link to="/contacts">Liên hệ</Link>
          </li>
          {user?.displayName ? (
            <Link className="no-underline">
              <div className="menu-wrapper" onClick={handleMenuWrapperClick}>
                <li className="username">
                  <p>{user?.displayName}</p>
                  <IoMdArrowDropdown />
                </li>
                <li className={`drop-menu ${isMenuOpen ? "clicked" : ""}`}>
                  {isMenuOpen && (
                    <ul className="menu-list">
                      {menuItems.map((item, index) => (
                        <li key={index} className="item-droplist">
                          {typeof item === "string" ? (
                            <Link
                              to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                            >
                              {item}
                            </Link>
                          ) : (
                            <Link to={item.path}>{item.label}</Link>
                          )}
                        </li>
                      ))}
                      <li>
                        <button className="login" onClick={handleSignOut}>
                          Đăng xuất
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              </div>
            </Link>
          ) : (
            <nav className="search-cart-wrapper">
              <li className="search-menu">
                <div className="search-bar">
                  <form>
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      className="search-input"
                    />
                    <button type="button">
                      <img
                        src={searchIcon}
                        alt="Search"
                        className="search-icon"
                      />
                    </button>
                  </form>
                </div>
              </li>
            </nav>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
