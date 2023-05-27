import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Article from "../Article";

ArticleList.propTypes = {
  articleList: PropTypes.array.isRequired,
};

function ArticleList({ articleList }) {
  return (
    <ul className="article-list">
      {articleList.map((article) => (
        <li key={article.id}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
