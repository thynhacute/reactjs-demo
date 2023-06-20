import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HotProductList from "../components/DetailList/index";
import logoWelcome from "../../../assets/images/logo-welcome.png";
import welcomeImage from "../../../assets/images/welcome.png";
import moreInfo from "../../../assets/images/more-infor.png";
import nextImage from "../../../assets/images/next.png";
import preImage from "../../../assets/images/previous.png";
import "./styles.scss";
import "../../../App.css";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import axios from "axios";
import token from "../../../../src/components/Login/token.json";
import dkItemImage from "../../../assets/images/dieukhoan-item.png";
import dkContentImage from "../../../assets/images/lotay-dk.png";
import dieukhoanIcon from "../../../assets/images/dieukhoan-icon.png";
import { BsLaptop } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

HomeDetail.propTypes = {};

function HomeDetail(props) {
  const hotProductList = [
    {
      id: 1,
      name: "Hoang",
      thumbnailUrl:
        "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-meo-cute.jpg",
    },
    {
      id: 2,
      name: "Nha",
      thumbnailUrl:
        "https://c3kienthuyhp.edu.vn/wp-content/uploads/2023/01/1672719948_357_Anh-Meo-Cute-De-Thuong-Dang-Yeu-Den-Ngan-Ngo.jpg",
    },
    {
      id: 3,
      name: "Thy",
      thumbnailUrl:
        "https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-41.jpg",
    },
    {
      id: 4,
      name: "Hana",
      thumbnailUrl:
        "https://chungkhoantaichinh.vn/wp-content/uploads/2022/12/avatar-meo-cute-de-thuong-05.jpg",
    },
    {
      id: 5,
      name: "Anya",
      thumbnailUrl:
        "https://news.meeycdn.net/uploads/images/2023/01/13/avatar-cute-meo-21-1673584297.jpg",
    },
    {
      id: 6,
      name: "Cheese",
      thumbnailUrl:
        "https://antimatter.vn/wp-content/uploads/2022/11/hinh-nen-meo-cute-de-thuong-nhat.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPreviousIndex, setCurrentPreviousIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotProductList.length);
    setCurrentPreviousIndex(
      (prevIndex) => (prevIndex + 1) % hotProductList.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + hotProductList.length) % hotProductList.length
    );
    setCurrentPreviousIndex(
      (prevIndex) =>
        (prevIndex - 1 + hotProductList.length) % hotProductList.length
    );
  };

  const getDisplayedHotProducts = () => {
    const previousIndex =
      (currentPreviousIndex - 1 + hotProductList.length) %
      hotProductList.length;

    const displayedHotProducts = [
      hotProductList[previousIndex],
      hotProductList[currentIndex],
      hotProductList[(currentIndex + 1) % hotProductList.length],
    ];

    return displayedHotProducts;
  };

  return (
    <div className="all-detail">
      <div className="contain-detail">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <img src={logoWelcome} alt="LogoWelcome" className="logo-welcome" />
            <p className="fisrt-content">
              Khi những kẻ <strong>&nbsp;“lỡ tay”&nbsp;</strong> va phải nhau
            </p>
            <p className="second-content">
              Chúng tôi ở đây để tạo điều kiện cho sự gặp mặt ấy
            </p>
            <Link to="/products" className="products">
              <img src={moreInfo} alt="MoreInfo" className="more-info" />
            </Link>
          </div>
          <div style={{ flex: "1" }}>
            <img
              src={welcomeImage}
              alt="WelcomeImage"
              className="welcome-img"
            />
          </div>
        </div>
      </div>
      <div className="bd-dk">
        <div className="card-dk">
          <div className="imgBox-dk">
            <img
              src={dkContentImage}
              alt="DKContentImage"
              className="dk-content-img"
            />
            <img src={dkItemImage} alt="DKItemImage" className="dk-item-img" />
          </div>
          <div className="details-dk">
            <div className="content-dk">
              <img
                src={logoWelcome}
                alt="LogoWelcomeDK"
                className="logo-welcome-dk"
              />
              <h2>
                Cùng nhau tìm hiểu quy định bán hàng của nhà Uni2Hand nhé!
              </h2>
              <NavLink to="/policy" className="policy-dk">
                <img
                  src={dieukhoanIcon}
                  alt="DKIconSM"
                  className="dk-icon-sm"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-water">
        <div className="liquid-wt">
          <h2>Uni2Hand</h2>
          <h2>Uni2Hand</h2>
          <h2>Uni2Hand</h2>
          <h2>Uni2Hand</h2>
        </div>
      </div>
      <div className="bd-infor-hp">
        <ul>
          <li style={{ "--i": -2, "--clr": "#1877f2" }} data-test="Facebook">
            <a href="https://www.facebook.com/uni2hand.story">
              <span>
                <FaFacebookF />
              </span>
              Facebook
            </a>
          </li>
          <li style={{ "--i": -1, "--clr": "#7221f3" }} data-test="Instagram">
            <a href="https://www.instagram.com/uni2hand_story/">
              <span>
                <FaInstagram />
              </span>
              Instagram
            </a>
          </li>
          <li style={{ "--i": 0, "--clr": "#ff0000" }} data-test="Tiktok">
            <a href="https://www.tiktok.com/@uni2hand_story">
              <span>
                <FaTiktok />
              </span>
              Tiktok
            </a>
          </li>
          <li style={{ "--i": 1, "--clr": "#c32aa3" }} data-test="Website">
            <a href="https://uni2hand.vercel.app/">
              <span>
                <BsLaptop />
              </span>
              Website
            </a>
          </li>
        </ul>
      </div>

      {/* <p className="caring-product">CÓ THỂ BẠN QUAN TÂM</p>
      <div
        className="hot-products-container"
        style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
      >
        <button onClick={handlePrevious} className="btn-pre">
          <img src={preImage} alt="Previous" className="pre-button" />
        </button>
        <HotProductList hotProductList={getDisplayedHotProducts()} />
        <button onClick={handleNext} className="btn-next">
          <img src={nextImage} alt="Next" className="next-button" />
        </button>
      </div> */}
    </div>
  );
}

export default HomeDetail;
