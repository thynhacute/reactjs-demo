import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.png";
import cartIcon from "../../assets/images/cart.png";

Header.propTypes = {};

function Header() {
  return (
    <header className="custom-header">
      <nav>
        <p></p>
        <ul className="menu-navbar">
          <li className="logo">
            <img src={logoImage} alt="Logo" />
          </li>
          <li className="home-navbar">
            <Link to="/" className="home-menu">
              Trang chủ
            </Link>
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
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li className="search-menu">
            <div className="search-bar">
              <form>
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="search-input"
                />
                <button type="button">
                  <img src={searchIcon} alt="Search" className="search-icon" />
                </button>
              </form>
            </div>
          </li>
          <li>
            <li className="cart">
              <Link to="/cart" className="cart">
                <img src={cartIcon} alt="Cart" className="cart-icon" />
              </Link>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
