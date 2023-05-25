import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Product from "../Product";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
};

function ProductList({ productList }) {
  return (
    <ul className="product-list">
      {productList.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
