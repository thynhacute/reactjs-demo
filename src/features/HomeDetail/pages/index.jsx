import React, { useState } from "react";
import PropTypes from "prop-types";
import HotProductList from "../components/DetailList/index";
import logoWelcome from "../../../assets/images/logo-welcome.png";
import welcomeImage from "../../../assets/images/welcome.png";
import moreInfo from "../../../assets/images/more-infor.png";
import nextImage from "../../../assets/images/next.png";
import preImage from "../../../assets/images/previous.png";
import "./styles.scss";
import "../../../App.css";
import { Link } from "react-router-dom";

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
      <p className="caring-product">CÓ THỂ BẠN QUAN TÂM</p>
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
      </div>
    </div>
  );
}

export default HomeDetail;
