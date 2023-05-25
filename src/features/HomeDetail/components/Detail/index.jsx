import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

HotProduct.propTypes = {
  hotProduct: PropTypes.object.isRequired,
};

function HotProduct({ hotProduct }) {
  return (
    <div className="hotProduct">
      <div className="hotProduct__thumbnail">
        <img src={hotProduct.thumbnailUrl} alt={hotProduct.name} />
      </div>
      <p className="hotProduct__name">{hotProduct.name}</p>
    </div>
  );
}

export default HotProduct;
