import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

function Article({ article }) {
  // console.log(article)
  const elementProduct = article?.imageUrl?.split(",");
  const firstElementProduct = elementProduct[0];
  return (
    <div className="article">
      <div className="article__thumbnail">
        <img src={firstElementProduct} alt={article?.name} />
        <HighlightOffIcon className="delete-icon" />
      </div>
      <div className="spct-name-price">
        <p className="article__name">{article.name}</p>
        <p className="article__price">{article.price} VND</p>
      </div>
    </div>
  );
}

export default Article;
