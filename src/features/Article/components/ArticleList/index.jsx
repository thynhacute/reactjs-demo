import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Article from "../Article";
import { GrPrevious, GrNext } from "react-icons/gr";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { styled } from "@mui/material";
import Modal from "@mui/joy/Modal";
import Box from "@mui/material/Box";
import DetailsThumb from "../Article/DetailsThumb";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

ArticleList.propTypes = {
  articleList: PropTypes.array.isRequired,
};

function ArticleList({ articleList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);
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

  const handleArticleClick = (article) => {
    console.log(selectedArticle);
    setSelectedArticle(article);
  };
  const handleModalClose = () => {
    setSelectedArticle(null);
  };
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);
  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  return (
    <div className="article-list">
      {currentArticles.map((article, index) => (
        <Article
          key={article.id}
          article={article}
          onClick={() => handleArticleClick(article)}
        />
      ))}

      {selectedArticle && (
        <StyledModal
          open={!!selectedArticle}
          onClose={handleModalClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={{
              position: "relative",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px ",
              border: "none",
            }}
            width={1200}
            minHeight={475}
            maxHeight={700}
            bgcolor="white"
            p={3}
            borderRadius={3}
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {/* <ModalClose
                variant="outlined"
                sx={{
                  top: 'calc(-1/4 * var(--IconButton-size))',
                  right: 'calc(-1/4 * var(--IconButton-size))',
                  boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                  borderRadius: '50%',
                  bgcolor: 'background.body',
                }}
              /> */}
            <div className="app-product">
              <div className="details-product" key={selectedArticle?.id}>
                <div className="big-img">
                  <img src={selectedArticle?.imageUrls[index]} alt="" />
                  {/* <img  src={selectedArticle?.imageUrl}/> */}
                </div>
                <div className="box-product">
                  <div className="row-product">
                    <h2>{selectedArticle?.name}</h2>
                  </div>
                  <span className="span-price">
                    {selectedArticle?.price.toLocaleString("vi-VN")} VND
                  </span>
                  {/* <Colors colors={selectedArticle?.colors} /> */}
                  <p className="p-cate-name">
                    <CategoryOutlinedIcon className="icon-product-form" />
                    Loại sản phẩm: {selectedArticle?.category?.name}
                  </p>
                  <p className="p-cate-des">{selectedArticle?.description}</p>
                  <DetailsThumb
                    images={selectedArticle?.imageUrls}
                    tab={handleTab}
                    myRef={myRef}
                  />
                  <button className="cart">Contact seller</button>
                </div>
              </div>
            </div>
          </Box>
        </StyledModal>
      )}
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
            className={`${currentPage === index + 1 ? "active" : ""
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
