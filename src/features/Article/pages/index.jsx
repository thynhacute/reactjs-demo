import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ArticleList from "../components/ArticleList";
import { NavLink } from "react-router-dom";
import addProductIcon from "../../../assets/images/add-product.png";
import { UserAuth } from "../../../context/AuthContext";
import axios from "axios";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
ArticleFeature.propTypes = {};

function ArticleFeature(props) {

  const { category, setCategory, setIsPendingUpdated } = UserAuth();
  const [productMe, setProductMe] = useState([])
  const [activeTab, setActiveTab] = useState('POST');
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    getProductMe(newValue);

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
              status
            },
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
  // Gọi fetchProducts khi cần thiết trong các sự kiện khác

  const handleOtherAction = () => {
    getProductMe(activeTab);
  };
  // Sử dụng useEffect để gọi fetchProducts ban đầu

  useEffect(() => {
    getProductMe(activeTab);
  }, []);

  return (
    <div>
      <h2>Article List</h2>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="Product status tabs">
          <Tab label="Đang hiển thị" value="POST" />
          <Tab label="Đã bán" value="ACTIVE" />
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
      <ArticleList articleList={productMe} />
    </div>
  );
}

export default ArticleFeature;
