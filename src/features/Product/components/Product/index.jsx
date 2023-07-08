import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
Product.propTypes = {
  product: PropTypes.object.isRequired,
};
function Product({ product }) {
  const elementProduct = product?.imageUrl?.split(",");
  const firstElementProduct = elementProduct[0];
  const isVideo = firstElementProduct.endsWith(".mp4");

  return (
    <div className="product">
      <div>
        <div className="product__thumbnail">
          {isVideo ? (
            <video width="100%" height="100%" controls autoPlay loop>
              <source src={firstElementProduct} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={firstElementProduct} alt={product?.name} />
          )}
        </div>
        <p className="product__name">{product.name}</p>
        {/* <p className="product__des">{product.des}</p> */}
        <p className="product__price">{product.price} VND</p>
      </div>
    </div>
  );
}

export default Product;
