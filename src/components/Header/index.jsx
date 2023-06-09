import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.png";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiPencilSquare } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
Header.propTypes = {};

function Header() {
  const { user, logOut, userProfile, priceUser } = UserAuth();
  console.log(priceUser)
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuResOpen, setIsMenuResOpen] = useState(false);

  const menuItems = [
    { label: "Chỉnh sửa hồ sơ", path: "/account" },
    { label: "Nạp xu", path: "/wallet" },
    { label: "Sản phẩm của tôi", path: "/my-product" },
  ];

  const handleToggleMenu = () => {
    setIsMenuResOpen(!isMenuResOpen);
  };

  const handleMenuWrapperClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="custom-header">
      <nav>
        <ul className="menu-navbar">
          <li className="logo">
            <NavLink to="/" className="home-menu">
              <img src={logoImage} alt="Logo" />
            </NavLink>
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
          {userProfile?.name ? (
            <li>
              <Link className="no-underline">
                <div className="menu-wrapper" onClick={handleMenuWrapperClick}>
                  <li className="username">
                    <p>{userProfile?.name}</p>
                    <IoMdArrowDropdown />
                  </li>
                  <li className={`drop-menu ${isMenuOpen ? "clicked" : ""}`}>
                    {isMenuOpen && (
                      <ul className="menu-list">
                        {menuItems.map((item, index) => (
                          <li key={index} className="item-droplist">
                            {typeof item === "string" ? (
                              <Link
                                to={`/${item
                                  .toLowerCase()
                                  .replace(/\s/g, "-")}`}
                              >
                                {item}
                              </Link>
                            ) : (
                              <Link to={item.path}>{item.label}</Link>
                            )}
                          </li>
                        ))}
                        <li>
                          <NavLink to="/home" activeClassName="logout-user">
                            <button className="login" onClick={handleSignOut}>
                              Đăng xuất
                            </button>
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                </div>
              </Link>
            </li>
          ) : (
            <li className="space-header">&nbsp;</li>
          )}
        </ul>
        <ul className="menu-navbar align-center">
          <li className="search-menu">
            <div className="search-bar">
              <form className="search-form">
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
            <NavLink to="/login" activeClassName="login-user">
              <div className="search-cart-wrapper">
                <HiPencilSquare />
                <p className="post-product"></p>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
