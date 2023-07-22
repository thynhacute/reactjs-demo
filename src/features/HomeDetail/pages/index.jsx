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
import { BsFire } from "react-icons/bs";

HomeDetail.propTypes = {};

function HomeDetail(props) {
  const [hotProductList, setHotProductList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://2hand.monoinfinity.net/api/v1.0/product/post?pageSize=1000"
        );
        const data = response.data.data;
        setHotProductList(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotProductList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + hotProductList.length) % hotProductList.length
    );
  };

  const firstProduct = hotProductList[0];
  const firstElementProduct = firstProduct?.imageUrl;
  // const isVideo = firstElementProduct.endsWith(".mp4");
  if (!hotProductList || hotProductList.length === 0) {
    return <div>Đang tải...</div>;
  }
  const getDisplayedHotProducts = () => {
    const displayedHotProducts = [];
    if (hotProductList) {
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % hotProductList.length;
        const product = hotProductList[index];
        const elementProduct = product?.imageUrl?.split(",");
        const firstElementProduct = elementProduct ? elementProduct[0] : null;
        const isVideo =
          typeof firstElementProduct === "string" &&
          firstElementProduct?.endsWith(".mp4");

        displayedHotProducts.push({
          ...product,
          isVideo,
          imageUrl: firstElementProduct,
        });
      }
    }
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
      <div style={{ backgroundColor: "#FFFCF2", paddingBottom: 50 }}>
        <p className="caring-product" style={{ marginTop: 200 }}>
          CÁC SẢN PHẨM ĐANG HOT
        </p>
        <div
          className="hot-products-container"
          style={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <button onClick={handlePrevious} className="btn-pre">
            <img src={preImage} alt="Previous" className="pre-button" />
          </button>
          {getDisplayedHotProducts().map((product) => {
            const firstImageUrl = Array.isArray(product.imageUrl)
              ? product.imageUrl[0]
              : product.imageUrl;
            const isVideo = firstImageUrl?.endsWith(".mp4");
            return (
              <div
                key={product.id}
                style={{
                  margin: "5px",
                  textAlign: "center",
                }}
              >
                {isVideo ? (
                  <video
                    width="300px"
                    height="300px"
                    style={{
                      boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.5)",
                    }}
                    controls
                    loop
                  >
                    <source src={firstImageUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={firstImageUrl}
                    alt={product.name}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: 20,
                      boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                )}
                <p
                  className="product_name"
                  style={{
                    fontSize: 18,
                    color: "#6600FF",
                    marginTop: 10,
                    marginBottom: 0,
                    maxWidth: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    marginLeft: 40,
                  }}
                >
                  {product.name.toUpperCase() > 35
                    ? product.name.slice(0, 35) + "..."
                    : product.name.toUpperCase()}
                </p>
                <p
                  style={{
                    color: "red",
                    fontSize: 20,
                    position: "absolute",
                    marginTop: -330,
                    marginLeft: 10,
                  }}
                  className="product-rank"
                >
                  {product.higherRank > 0 ? (
                    <BsFire style={{ fontSize: "1.7em" }} />
                  ) : (
                    <p></p>
                  )}
                </p>
              </div>
            );
          })}
          <button onClick={handleNext} className="btn-next">
            <img src={nextImage} alt="Next" className="next-button" />
          </button>
        </div>
      </div>

      <div className="bd-water" style={{ paddingTop: 100 }}>
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
    </div>
  );
}

export default HomeDetail;
