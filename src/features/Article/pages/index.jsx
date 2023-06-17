import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ArticleList from "../components/ArticleList";
import { NavLink } from "react-router-dom";
import addProductIcon from "../../../assets/images/add-product.png";
import { UserAuth } from "../../../context/AuthContext";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function ArticleFeature(props) {
  const { category, setCategory, setIsPendingUpdated } = UserAuth();
  const [productMe, setProductMe] = useState([]);
  const [activeTab, setActiveTab] = useState("POST");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getProductMe = async (status) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("access_token"));
      if (accessToken) {
        const responseProductMe = await axios.get(
          "https://2hand.monoinfinity.net/api/v1.0/product/me",
          {
            params: {
              pageSize: 100,
              status,
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken?.token}`,
            },
          }
        );
        setProductMe(responseProductMe?.data?.data);
      } else {
        console.log("Access token not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (article) => {
    try {
      if (article.status === "POST") {
        const accessToken = JSON.parse(localStorage.getItem("access_token"));
        await axios.delete(
          `https://2hand.monoinfinity.net/api/v1.0/product/post/${article.productId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken?.token}`,
            },
          }
        );
        await getProductMe(activeTab);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductMe(activeTab);
  }, [activeTab]);

  return (
    <div>
      <h2>Sản phẩm của tôi</h2>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="Product status tabs"
        >
          <Tab label="Đang hiển thị" value="POST" className="item-displaying" />
          <Tab label="Đã bán" value="ACTIVE" className="item-paid" />
        </Tabs>
      </Box>
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
      <ArticleList articleList={productMe} onDelete={handleDelete} />
    </div>
  );
}

export default ArticleFeature;
