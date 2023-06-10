import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ArticleList from "../components/ArticleList";
import { NavLink } from "react-router-dom";
import addProductIcon from "../../../assets/images/add-product.png";
import { UserAuth } from "../../../context/AuthContext";
import axios from "axios";

ArticleFeature.propTypes = {};

function ArticleFeature(props) {
  const articleList = [
    {
      id: 1,
      name: "NaaTy",
      thumbnailUrl:
        "https://alibu.com.vn/wp-content/uploads/2020/10/neu-co-dieu-kien-ve-kinh-te-cac-ban-nen-mua-hang-chinh-hang-1.jpg",
    },
    {
      id: 2,
      name: "Min",
      thumbnailUrl:
        "https://s1.storage.5giay.vn/image/2017/12/20171229_7b7022c89f7c85a18be6c83e58810669_1514513104.JPG",
    },
    {
      id: 3,
      name: "Min",
      thumbnailUrl:
        "https://s1.storage.5giay.vn/image/2017/12/20171229_7b7022c89f7c85a18be6c83e58810669_1514513104.JPG",
    },
    {
      id: 4,
      name: "Amee",
      thumbnailUrl:
        "https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23",
    },
    {
      id: 5,
      name: "NaaTy",
      thumbnailUrl:
        "https://alibu.com.vn/wp-content/uploads/2020/10/neu-co-dieu-kien-ve-kinh-te-cac-ban-nen-mua-hang-chinh-hang-1.jpg",
    },
  ];
  const { category, setCategory, setIsPendingUpdated } = UserAuth();
  const [productMe, setProductMe] = useState([])
  // console.log(productMe)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = JSON.parse(localStorage.getItem("access_token"));
        if (accessToken) {
          const responseProductMe = await axios.get(
            "https://2hand.monoinfinity.net/api/v1.0/product/me",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.token}`,
              },
            }
          );
              setProductMe(responseProductMe?.data?.data)
        } else {
          console.log("Access token not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Article List</h2>
      <div>
        <button className="deposit-btn" type="submit">
          <NavLink to="/add-product" activeClassName="active-wallet">
            <img
              src={addProductIcon}
              alt="AddProduct"
              className="add-product-icon"
            />
          </NavLink>
        </button>
      </div>
      <ArticleList articleList={productMe} />
    </div>
  );
}

export default ArticleFeature;
