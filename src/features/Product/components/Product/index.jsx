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
import { BsFire } from "react-icons/bs";

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
            <video width="100%" height="100%" controls loop>
              <source src={firstElementProduct} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={firstElementProduct} alt={product?.name} />
          )}
        </div>
        <p className="product__name">{product.name}</p>
        <p className="product__name">
          {product.higherRank > 0 ? <BsFire /> : <p> </p>}
        </p>
        <p className="product__price">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
}

export default Product;
