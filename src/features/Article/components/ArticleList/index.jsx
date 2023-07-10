import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Article from "../Article";
import { GrPrevious, GrNext } from "react-icons/gr";



ArticleList.propTypes = {
  articleList: PropTypes.array.isRequired,
};

function ArticleList({ articleList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articleList.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(articleList.length / articlesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };





  return (
    <div className="article-list">
      <div className="article-list_product">
        {currentArticles.map((article, index) => (
            <Article article={article} />
        ))}
      </div>
      <br />
      <div className="pagination">
        <button
          className="btn-grprevious"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <GrPrevious />
        </button>
        {Array.from({
          length: Math.ceil(articleList.length / articlesPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1 ? "active" : ""
            } paging-spct`}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn-grnext"
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(articleList.length / articlesPerPage)
          }
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default ArticleList;
