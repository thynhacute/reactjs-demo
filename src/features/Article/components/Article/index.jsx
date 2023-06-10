import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

function Article({ article }) {
  return (
    <div className="article">
      <div className="article__thumbnail">
        <img src={article.imageUrl} alt={article.name} />
      </div>
      <p className="article__name">{article.name}</p>
    </div>
  );
}

export default Article;
