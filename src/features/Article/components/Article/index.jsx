import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

function Article({ article }) {
  // console.log(article)
  return (
    <div className="article">
      <div className="article__thumbnail">
        <img src={article.imageUrl} alt={article.name} />
        <HighlightOffIcon
          className="delete-icon"
        // onClick={() => handleDelete(index)}
        />
      </div>
      <p className="article__name">{article.name}</p>
    </div>
  );
}

export default Article;
