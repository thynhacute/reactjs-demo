import React from "react";
import PropTypes from "prop-types";
import ProductList from "../components/ProductList";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const productList = [
    {
      id: 1,
      name: "NaaTy",
      thumbnailUrl:
        "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-meo-cute.jpg",
    },
    {
      id: 2,
      name: "Min",
      thumbnailUrl:
        "https://c3kienthuyhp.edu.vn/wp-content/uploads/2023/01/1672719948_357_Anh-Meo-Cute-De-Thuong-Dang-Yeu-Den-Ngan-Ngo.jpg",
    },
    {
      id: 3,
      name: "Amee",
      thumbnailUrl:
        "https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-41.jpg",
    },
  ];
  return (
    <div>
      <h2>Meo Meo Meo Meo tra lai tam tri tui day</h2>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductFeature;
