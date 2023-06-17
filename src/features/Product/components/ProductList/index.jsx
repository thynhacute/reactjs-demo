import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./styles.scss";
import Product from "../Product";
import nextImage from "../../../../assets/images/next.png";
import preImage from "../../../../assets/images/previous.png";
import { TbZoomMoney } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";
import { UserAuth } from "../../../../context/AuthContext";
import Colors from "../Product/Colors";
import DetailsThumb from "../Product/DetailsThumb";
import ModalClose from "@mui/joy/ModalClose";
import Modal from "@mui/joy/Modal";
import { FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { ImFilter } from "react-icons/im";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import axios from "axios";



const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
};

function valuetext(value) {
  return `${value.toLocaleString()} VNĐ`;
}

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
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

  const { category, products } = UserAuth();
  console.log(products);
  const [filterCategory, setFilterCategory] = useState([]);
  const handleNextClick = () => {
    const nextIndex = (startIndex + 1) % products.length;
    setStartIndex(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex =
      (startIndex - 1 + [products].length) % products.length;
    setStartIndex(previousIndex);
  };

  const [filterCategoryId, setFilterCategoryId] = useState(""); // Thêm state filterCategoryId để lưu ID của bộ lọc

  const visibleProducts = [
    ...(filterCategoryId !== "" && filterCategoryId !== "all"
      ? filterCategory
      : products
    ).slice(startIndex),
    ...(filterCategoryId !== "" && filterCategoryId !== "all"
      ? filterCategory
      : products
    ).slice(0, startIndex),
  ].slice(0, 8);

  const [dividedLengthPage, setDividedLengthPage] = useState([]);

  const sourceData =
    filterCategoryId !== "" && filterCategoryId !== "all"
      ? [...filterCategory]
      : [...products];

  const dividedLength = Math.ceil(sourceData?.length / 8);
  useEffect(() => {
    if (dividedLength >= 1) {
      const pageNumbers = [];
      for (let i = 1; i <= dividedLength; i++) {
        pageNumbers.push(i);
      }
      setDividedLengthPage(pageNumbers);
    } else {
      setDividedLengthPage([]);
    }
  }, [dividedLength]);

  const handleButtonClick = (id) => {
    setFilterCategoryId(id); // Lưu ID của bộ lọc vào state filterCategoryId
    if (id === "") {
      setFilterCategory([]);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category.id === id
      );
      setFilterCategory(filteredProducts);
    }
  };

  const handleButtonAll = () => {
    setFilterCategoryId("all"); // Đặt ID của bộ lọc thành "all" để chỉ định hiển thị tất cả sản phẩm
    setFilterCategory([]); // Đặt filterCategory thành mảng rỗng để hiển thị tất cả sản phẩm
  };

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
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const [openPrice, setOpenPrice] = useState(false);

  const handleClickOpen = () => {
    setOpenPrice(true);
  };
  const handleClosePrice = () => {
    setOpenPrice(false);
  };
  const [value, setValue] = React.useState([0, 15000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.children[index].className = "active";
    }
  }, [index]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // call api get city
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");


  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        const data = response.data;
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);
  const handleCityChange = (event) => {
    const cityId = event.target.value;
    const selectedCity = cities.find((city) => city.Id === cityId);
    setSelectedCity(selectedCity.Name);
  };




  return (
    <div className="product-list-wrapper">
      <div>
        <div className="filter-btn">
          <button className="arrange-fiter" onClick={handleClickOpen}>
            <div className="filter-icon">
              <TbZoomMoney />
            </div>
            Giá
          </button>
          <Dialog
            fullWidth
            maxWidth="md"
            onClose={handleClosePrice}
            aria-labelledby="customized-dialog-title"
            open={openPrice}

          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClosePrice}
              style={{ backgroundColor: '#EEEEEE' }}
            >
              Giá
            </BootstrapDialogTitle>

            <DialogContent dividers>
              &ensp;
              <Typography gutterBottom >Giá từ {value[0].toLocaleString('vi-VN')}đ đến {value[1].toLocaleString('vi-VN')}đ</Typography>
              <Typography gutterBottom>
                <Box sx={{ width: 850 }}>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={15000000}
                  />
                </Box>
              </Typography>
            </DialogContent>
            <DialogActions
              className="d-flex justify-content-center"
              style={{ backgroundColor: '#EEEEEE' }}
            >
              <Button autoFocus onClick={handleClosePrice}>
                Áp dụng
              </Button>
            </DialogActions>
          </Dialog>


          {/* <button className="arrange-fiter">
            <div className="filter-icon">
              <ImLocation2 />
            </div>
            Vị trí
          </button> */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth >
              <InputLabel id="district-select-label">
                Vị trí
              </InputLabel>
              <Select
                className="form-select form-select-sm mb-3"
                id="city"
                aria-label=".form-select-sm"
                onChange={handleCityChange}
                value={selectedCity.Id}
                labelId="city-select-label"
                label="Chọn tỉnh thành"
              >
                <MenuItem value="" disabled>
                  Chọn tỉnh thành
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem value={city.Id} key={city.Id}>
                    {city.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <button className="arrange-fiter" onClick={handleButtonAll}>
            <div className="filter-icon">
              <ImFilter />
            </div>
            Tất cả
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
                  {category.map((buttonName, index) => (
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
                              onClick={() => handleButtonClick(buttonName?.id)}
                            >
                              {buttonName?.name}
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
          <li
            className="product-item-list"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <Product product={product} />
          </li>
        ))}

        {selectedProduct && (
          <StyledModal
            open={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
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
                <div className="details-product" key={selectedProduct?.id}>
                  <div className="big-img">
                    <img src={selectedProduct?.imageUrls[index]} alt="" />
                    {/* <img  src={selectedProduct?.imageUrl}/> */}
                  </div>
                  <div className="box-product">
                    <div className="row-product">
                      <h2>{selectedProduct?.name}</h2>
                    </div>
                    <span className="span-price">
                      {selectedProduct?.price.toLocaleString('vi-VN')} VND
                    </span>
                    {/* <Colors colors={selectedProduct?.colors} /> */}
                    <p className="p-cate-name"><CategoryOutlinedIcon className="icon-product-form" />
                      Loại sản phẩm: {selectedProduct?.category?.name}
                    </p>
                    <p className="p-cate-des">{selectedProduct?.description}</p>
                    <DetailsThumb
                      images={selectedProduct?.imageUrls}
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
      </div>
      <div className="custom-next-pre-btn">
        <div className="button-container">
          <button className="btn-previous" onClick={handlePreviousClick}>
            <img src={preImage} alt="Previous" className="previous-button" />
          </button>
        </div>
        {/* <div className="page-btn">
          {dividedLengthPage?.map((page) => (
            <button>{page}</button>
          ))}
        </div> */}
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
