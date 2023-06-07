import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__thumbnail" >
       <img src={product?.imageUrl} alt={product?.name} />

      </div>
      <p className="product__name">{product.name}</p>
      {/* <p className="product__des">{product.des}</p> */}
      <p className="product__price">{product.price} VND</p>
    </div>
  );
}

export default Product;
