import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import HotProduct from "../Detail";

HotProductList.propTypes = {
  hotProductList: PropTypes.array.isRequired,
};

function HotProductList({ hotProductList }) {
  return (
    <ul className="hotProduct-list">
      {hotProductList.map((hotProduct) => (
        <li key={hotProduct.id}>
          <HotProduct hotProduct={hotProduct} />
        </li>
      ))}
    </ul>
  );
}

export default HotProductList;
