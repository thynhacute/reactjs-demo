import React, { useState } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./styles.scss";
import Product from "../Product";
import { Link } from "react-router-dom";
import nextImage from "../../../../assets/images/next.png";
import preImage from "../../../../assets/images/previous.png";

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
  ]);

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
  ].slice(0, 3);

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
      <div className="sidebar">
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
      <div className="product-list">
        {visibleProducts.map((product) => (
          <li className="product-item-list" key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </div>
      <div className="button-container">
        <button className="btn-previous" onClick={handlePreviousClick}>
          <img src={preImage} alt="Previous" className="previous-button" />
        </button>
      </div>
      <div className="button-container">
        <button className="btn-next-to" onClick={handleNextClick}>
          <img src={nextImage} alt="Next" className="next-to-button" />
        </button>
      </div>
    </div>
  );
}

export default ProductList;
