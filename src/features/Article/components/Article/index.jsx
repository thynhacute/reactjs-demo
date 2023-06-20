import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./styles.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

function Article({ article }) {
  const elementProduct = article?.imageUrl?.split(",");
  const firstElementProduct = elementProduct[0];

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    const productId = article.id;
    const accessToken = JSON.parse(localStorage.getItem("access_token"));
    const apiUrl = `https://2hand.monoinfinity.net/api/v1.0/product/post/${productId}`;

    axios
      .delete(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken?.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsDeleted(true);
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = () => {
    axios
      .get("https://2hand.monoinfinity.net/api/v1.0/products")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  if (isDeleted) {
    return null;
  }

  return (
    <div className="article">
      <div className="article__thumbnail">
        <img src={firstElementProduct} alt={article?.name} />
        <HighlightOffIcon className="delete-icon" onClick={handleDelete} />
      </div>
      <div className="spct-name-price">
        <p className="article__name">{article.name}</p>
        <p className="article__price">{article.price} VND</p>
      </div>
    </div>
  );
}

export default Article;
