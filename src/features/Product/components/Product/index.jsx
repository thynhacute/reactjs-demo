import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__thumbnail">
        <img src={product.thumbnailUrl} alt={product.name} />
      </div>
      <p className="product__name">{product.name}</p>
    </div>
  );
}

export default Product;
