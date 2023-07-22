import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Product from "../Product";
import nextImage from "../../../../assets/images/next.png";
import preImage from "../../../../assets/images/previous.png";
import { TbZoomMoney } from "react-icons/tb";
import { UserAuth, AuthContextProvider } from "../../../../context/AuthContext";
import Colors from "../Product/Colors";
import DetailsThumb from "../Product/DetailsThumb";
import ModalClose from "@mui/joy/ModalClose";
import Modal from "@mui/joy/Modal";
import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import { ImFilter } from "react-icons/im";
import { BsFire } from "react-icons/bs";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
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
            color: (theme) => theme.palette.grey[500],
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
  onClose: PropTypes.func.isRequired,
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
  const [filterCategoryId, setFilterCategoryId] = useState("");
  const { category, products } = UserAuth();
  // console.log("product:", products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const paginateProducts = (products, currentPage, productsPerPage) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const [filterCategory, setFilterCategory] = useState([]);
  const visibleProducts = paginateProducts(
    filterCategoryId !== "" && filterCategoryId !== "all"
      ? filterCategory
      : products,
    currentPage,
    productsPerPage
  );
  const lastPage = Math.ceil(
    (filterCategoryId !== "" && filterCategoryId !== "all"
      ? filterCategory
      : products
    ).length / productsPerPage
  );
  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage === lastPage ? 1 : prevPage + 1));
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? lastPage : prevPage - 1));
  };

  // Thêm state filterCategoryId để lưu ID của bộ lọc

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
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const handleButtonClick = (id) => {
    setFilterCategoryId(id);
    setSelectedCategoryId(id);
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
    setFilterCategoryId("all");
    setFilterCategory([]);
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
  const [openSort, setOpenSort] = useState(false);

  const handleClickOpen = () => {
    setOpenPrice(true);
  };

  const handleClickOpenSort = () => {
    setOpenSort(true);
  };

  const handleSubmitPrice = () => {
    handleClosePrice();
  };
  const handleClosePrice = () => {
    setOpenPrice(false);
  };
  const handleCloseSort = () => {
    setOpenSort(false);
  };
  const [value, setValue] = React.useState([0, 20000000]);

  const handleChangePrice = (event, newValue) => {
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

  // const [filteredProducts, setFilteredProducts] = useState([]);

  const filteredProducts = visibleProducts.filter((product) =>
    product.address.includes(selectedCity.toLowerCase())
  );
  // console.log("productfilter:", filteredProducts);
  // console.log("productfilter:", filteredProducts);
  // sort
  // useEffect(() => {
  //   const filteredProducts = products.filter((product) =>
  //     product.address.includes(selectedCity.toLowerCase())
  //   );
  //   setFilteredProducts(filteredProducts);
  // }, [selectedCity]);
  const [sort, setSort] = useState("createAt");
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const sortProducts = (filteredProducts, sort) => {
    switch (sort) {
      case "ASC":
        return filteredProducts.slice().sort((a, b) => a.price - b.price);
      case "createdAt":
        return filteredProducts
          .slice()
          .sort((a, b) => b.createdAt - a.createdAt);
      // Thêm các trường hợp sắp xếp khác tùy theo nhu cầu của bạn
      default:
        return filteredProducts;
    }
  };
  const sortedProducts = sortProducts(filteredProducts, sort);

  const filteredPriceProducts = sortedProducts.filter((product) => {
    const price = product.price;
    return price >= value[0] && price <= value[1];
  });
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
    setSelectedCity(selectedCity?.Name?.toLowerCase() || "");
  };

  const [address, setAddress] = useState("");
  const { user } = UserAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSellerInfo, setShowSellerInfo] = useState(false);
  const handleContactSeller = () => {
    const userPhoneNumber = selectedProduct.user?.phone;
    const userAddress = selectedProduct?.address;
    if (selectedProduct && userPhoneNumber !== null) {
      setPhoneNumber(userPhoneNumber);
      setAddress(userAddress);
      setShowSellerInfo(true);
    } else {
      setPhoneNumber("");
      setAddress("");
      setShowSellerInfo(false);
    }
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setShowSellerInfo(false);
  };
  const handleChange = (value) => {
    console.log("Selected value:", value);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="product-list-wrapper">
      <div>
        <div className="filter-btn">
          {/* <button className="arrange-fiter" onClick={handleClickOpenSort}>
            <div className="filter-icon">
              <ImFilter />
            </div>
            Lọc
          </button>
          <Dialog
            fullWidth
            maxWidth="xs"
            onClose={handleCloseSort}
            aria-labelledby="customized-dialog-title"
            open={openSort}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleCloseSort}
              style={{ backgroundColor: "#EEEEEE" }}
            >
              Lọc kết quả
            </BootstrapDialogTitle>

            <DialogContent dividers>
              &ensp;
              <Typography gutterBottom>Sắp xếp theo:</Typography>
              <Typography gutterBottom>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="createdAt"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="createdAt"
                      control={<Radio />}
                      label="Tin mới nhất"
                    />
                    <FormControlLabel
                      value="ASC"
                      control={<Radio />}
                      label="Giá tăng dần"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </DialogContent>
            <DialogActions
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              <Button autoFocus onClick={handleCloseSort}>
                Áp dụng
              </Button>
            </DialogActions>
          </Dialog> */}
          <button
            style={{ marginTop: 20 }}
            className="arrange-all-fiter"
            onClick={handleButtonAll}
          >
            <div className="filter-icon">
              <ImFilter />
            </div>
            Tất cả loại sản phẩm
          </button>
          <div style={{ minWidth: 120, marginRight: "10px" }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="district-select-label">Vị trí</InputLabel>
                <Select
                  className="form-select form-select-sm mb-3"
                  id="city"
                  aria-label=".form-select-sm"
                  onChange={handleCityChange}
                  value={selectedCity}
                  labelId="city-select-label"
                  label="Chọn tỉnh thành"
                >
                  <MenuItem value="all">Toàn quốc</MenuItem>
                  {cities.map((city) => (
                    <MenuItem value={city.Id} key={city.Id}>
                      {city.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                className="form-select form-select-sm mb-3"
                aria-label=".form-select-sm"
                onChange={handleChangeSort}
                value={sort}
                displayEmpty
              >
                <MenuItem value="createAt">
                  <em>Tin mới nhất</em>
                </MenuItem>
                <MenuItem value="ASC">Giá thấp nhất</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* <AuthContextProvider selectedCity={selectedCity} /> */}
          <button
            className="arrange-fiter"
            onClick={handleClickOpen}
            style={{
              marginBottom: "25px",
              marginTop: "10px",
              marginLeft: "600px",
            }}
          >
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
              style={{ backgroundColor: "#EEEEEE" }}
            >
              Giá
            </BootstrapDialogTitle>

            <DialogContent dividers>
              &ensp;
              <Typography gutterBottom>
                Giá từ {value[0].toLocaleString("vi-VN")}đ đến{" "}
                {value[1].toLocaleString("vi-VN")}đ
              </Typography>
              <Typography gutterBottom>
                <Box sx={{ width: 850 }}>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={value}
                    onChange={handleChangePrice}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={20000000}
                    step={20000}
                  />
                </Box>
              </Typography>
            </DialogContent>
            <DialogActions
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              <Button autoFocus onClick={handleSubmitPrice}>
                Áp dụng
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      <div style={{ marginTop: 20 }} className="sidebar">
        <div className="button-list-wrapper">
          <ul className="button-list">
            {category.map((buttonName) => (
              <li
                key={buttonName}
                className={`category-product-item ${
                  selectedCategoryId === buttonName.id ? "selected" : ""
                }`}
              >
                <div className="btn-item-drop">
                  <button onClick={() => handleButtonClick(buttonName?.id)}>
                    {capitalizeFirstLetter(buttonName?.name)}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-list">
        {filteredPriceProducts.map((product) => (
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
                <div className="details-product" key={selectedProduct?.id}>
                  <div className="big-img">
                    {selectedProduct?.imageUrls[index].endsWith(".mp4") ? (
                      <video width="100%" height="100%" controls autoPlay loop>
                        <source
                          src={selectedProduct?.imageUrls[index]}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={selectedProduct?.imageUrls[index]} alt="" />
                    )}
                  </div>

                  <div className="box-product">
                    <div className="row-product">
                      <h2>{selectedProduct?.name}</h2>
                    </div>
                    <span className="span-price">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(selectedProduct.price)}
                    </span>
                    {/* <Colors colors={selectedProduct?.colors} /> */}
                    <p className="p-cate-name">
                      <CategoryOutlinedIcon className="icon-product-form" />
                      Loại sản phẩm: {selectedProduct?.category?.name}
                    </p>
                    <p className="p-cate-des">{selectedProduct?.description}</p>
                    <div className="product-details">
                      <div className="details-thumb">
                        <DetailsThumb
                          images={selectedProduct?.imageUrls}
                          tab={handleTab}
                          myRef={myRef}
                        />
                      </div>
                      {/* Loại sản phẩm: {selectedProduct.higherRank} */}
                      <p
                        className="product-higher-rank"
                        style={{ color: "red", fontWeight: "bold" }}
                      >
                        {selectedProduct.higherRank > 0 && (
                          <div>
                            <BsFire /> Đang hot
                          </div>
                        )}
                      </p>
                      <div className="contact-seller">
                        <button className="cart" onClick={handleContactSeller}>
                          Contact seller
                        </button>
                      </div>
                    </div>
                    {showSellerInfo && (
                      <div className="seller-info">
                        <div>
                          <strong>Phone:</strong> {phoneNumber}
                        </div>
                        <div>
                          <strong>Address:</strong> {address}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Box>
          </StyledModal>
        )}
      </div>
      <div
        style={{ position: "absolute", left: "10%", top: "90%" }}
        className="paging-pd-hana"
      >
        <div style={{ marginTop: 50 }} className="pagination">
          <button
            className="btn-previous"
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
          >
            <img src={preImage} alt="Previous" className="previous-button" />
          </button>
          <span style={{ marginLeft: 30 }}>
            Page {currentPage} of {lastPage}
          </span>
          <button
            className="btn-next-to"
            onClick={handleNextClick}
            disabled={currentPage === lastPage}
          >
            <img src={nextImage} alt="Next" className="next-to-button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
