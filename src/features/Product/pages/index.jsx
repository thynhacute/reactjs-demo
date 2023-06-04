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
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/334605426_507084204923803_3904773069589558435_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=uqYKTpTpg_UAX8T_zCL&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDi7Q5kJfcDSC0dsjF-o0aUkVUNxaYTYFW-dM6FdCqxpw&oe=647C2C37",
      price: "1.000.000.000",
      des: "cutexinkdep",
    },
    {
      id: 2,
      name: "HanaCongChua",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/333546896_534653258798414_2040027534638176698_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=XI5txtNQo64AX__0Fnd&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBfJlHn0kT3e9OzBM6mSaQHBqqehWb3zvB6w2Ygzm5IsQ&oe=647B2CFC",
      price: "1.000.000.000",
      des: "xinkvcl",
    },
    {
      id: 3,
      name: "Orie",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/306096648_1604999956619684_8669495222163111721_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=_6WJ7FC5-6cAX-OtrqA&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC1FmbMYkeXYWJeq0wxYf6QHoGLrlRdVb0y6n2m1WeW-A&oe=647B74CF",
      price: "1.000.000.000",
      des: "zethuongxinkdep",
    },
    {
      id: 4,
      name: "1 mí ghét hành",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/307467313_1604197406699939_3636294870910730438_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=USfFTWVFsY4AX_aPeCN&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfB1JrzQTHaGRRhBvwmPNUHs6XG27sjDzccpYMC73LLg3A&oe=647ADAA7",
      price: "1.000.000.000",
      des: "meomeomeo",
    },
    {
      id: 5,
      name: "Sweetie Hana Bae",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/333034642_687063076527190_970726494461231683_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZkV3Mj3orKkAX_oW4tN&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfB8bEQuhdSBDgmnJ2_gWOU2DZPlzqmh9fo_x4dyeTlivw&oe=647ADCB1",
      price: "1.000.000.000",
      des: "xứng đáng 10 ngiu",
    },
    {
      id: 6,
      name: "Ngo Hoang Nha Thy",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/310545903_1615606238892389_2774507676909795036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=CMJUrt5ftOoAX8tnjXR&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBS5RqtPIgiU0Z45vjLssGO0foxvHcnMnapz4QvxwM3ig&oe=647B2A98",
      price: "1.000.000.000",
      des: "nhỏ nào xinh z",
    },
    {
      id: 7,
      name: "Sweetie Hana Bae",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/333034642_687063076527190_970726494461231683_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZkV3Mj3orKkAX_oW4tN&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfB8bEQuhdSBDgmnJ2_gWOU2DZPlzqmh9fo_x4dyeTlivw&oe=647ADCB1",
      price: "1.000.000.000",
      des: "xứng đáng 10 ngiu",
    },
    {
      id: 8,
      name: "Ngo Hoang Nha Thy",
      thumbnailUrl:
        "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/310545903_1615606238892389_2774507676909795036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=CMJUrt5ftOoAX8tnjXR&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBS5RqtPIgiU0Z45vjLssGO0foxvHcnMnapz4QvxwM3ig&oe=647B2A98",
      price: "1.000.000.000",
      des: "nhỏ nào xinh z",
    },
  ];
  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductFeature;
