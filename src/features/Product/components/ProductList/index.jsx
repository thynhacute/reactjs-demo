import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./styles.scss";
import Product from "../Product";
import { Link } from "react-router-dom";
import nextImage from "../../../../assets/images/next.png";
import preImage from "../../../../assets/images/previous.png";
import { TbZoomMoney } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
};

function ProductList({ productList }) {
  const [startIndex, setStartIndex] = useState(0);
  const [buttonOrder, setButtonOrder] = useState([
    "Cute Dễ thương",
    "Tiểu thư",
    "Dịu dàng",
    "Xinh đẹp",
    "Nghệ thuật",
    "Cute Dễ thương",
    "Tiểu thư",
    "Dịu dàng",
    "Xinh đẹp",
    "Nghệ thuật",
  ]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    // Hàm gọi API để lấy dữ liệu sản phẩm với phân trang
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://your-api-url/products?page=${currentPage}&pageSize=${pageSize}`
        );
        const data = await response.json();
        setProducts(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [currentPage, pageSize]);

  const handleNextClick = () => {
    const nextIndex = (startIndex + 1) % productList.length;
    setStartIndex(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex =
      (startIndex - 1 + productList.length) % productList.length;
    setStartIndex(previousIndex);
  };

  const visibleProducts = [
    ...productList.slice(startIndex),
    ...productList.slice(0, startIndex),
  ].slice(0, 8);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const reorderedButtons = Array.from(buttonOrder);
    const movedButton = reorderedButtons.splice(source.index, 1)[0];
    reorderedButtons.splice(destination.index, 0, movedButton);

    setButtonOrder(reorderedButtons);
  };

  return (
    <div className="product-list-wrapper">
      <div>
        <div className="filter-btn">
          <button className="arrange-fiter">
            <div className="filter-icon">
              <TbZoomMoney />
            </div>
            Giá
          </button>
          <button className="arrange-fiter">
            <div className="filter-icon">
              <ImLocation2 />
            </div>
            Vị trí
          </button>
        </div>
      </div>
      <div className="sidebar">
        <div className="button-list-wrapper">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="buttons">
              {(provided) => (
                <ul
                  className="button-list"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {buttonOrder.map((buttonName, index) => (
                    <Draggable
                      key={buttonName}
                      draggableId={buttonName}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          className="category-product-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="btn-item-drop">
                            <button
                              className={snapshot.isDragging ? "dragging" : ""}
                            >
                              {buttonName}
                            </button>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      <div className="product-list">
        {visibleProducts.map((product) => (
          <li className="product-item-list" key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </div>
      <div className="custom-next-pre-btn">
        <div className="button-container">
          <button className="btn-previous" onClick={handlePreviousClick}>
            <img src={preImage} alt="Previous" className="previous-button" />
          </button>
        </div>
        <div className="page-btn">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className="button-container">
          <button className="btn-next-to" onClick={handleNextClick}>
            <img src={nextImage} alt="Next" className="next-to-button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
