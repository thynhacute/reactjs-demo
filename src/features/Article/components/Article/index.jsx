import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./styles.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import DetailsThumb from "../Article/DetailsThumb";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Modal from "@mui/joy/Modal";
import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";


const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
Article.propTypes = {
  article: PropTypes.object.isRequired,
};


function Article({ article }) {
  const elementProduct = article?.imageUrl?.split(",");
  const firstElementProduct = elementProduct[0];

  const [selectedArticle, setSelectedArticle] = useState(null);
  const handleModalClose = () => {
    setSelectedArticle(null);
  };
  const [index, setIndex] = useState(0);
  const myRef = React.useRef(null);
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

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };
  // const timestamp = 1689328226488; // Giá trị timestamp Unix
  // const date = new Date(timestamp); // Tạo đối tượng Date từ timestamp

  // console.log(date);
  const expirationDate = new Date(Number(selectedArticle?.higherRank));
  console.log("date hết hạn:", expirationDate.toLocaleString())

  return (
    // <div className="article">
    <React.Fragment>
      <div key={article.id} onClick={() => handleArticleClick(article)}>
        <div className="article__thumbnail">
          <img src={firstElementProduct} alt={article?.name} />
          <HighlightOffIcon className="delete-icon" onClick={handleDelete} />
        </div>
        <div className="spct-name-price">
          <p className="article__name">{article.name}</p>
          <p className="article__price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(article.price)}
          </p>
        </div>
      </div>
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  {selectedArticle?.higherRank !== null && selectedArticle?.higherRank !== "0" && (
                    <div>
                      Thời gian đẩy bài viết còn tới: {expirationDate.toLocaleString()}
                    </div>
                  )}
                </div>
                <div className="button-push">
                  <Link to={`/push-article/${selectedArticle?.id}`}>
                    <Button variant="contained">
                      Đẩy bài viết
                    </Button>
                  </Link>
                </div>
              </div>
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
                  <button className="cart" onClick={handleDelete}>
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </StyledModal>
      )}
    </React.Fragment>
  );
}

export default Article;
