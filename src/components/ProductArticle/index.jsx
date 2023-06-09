import React from "react";
import { UserAuth } from "../../context/AuthContext";
import "./styles.scss";
import { useState, useRef, useEffect } from "react";
import titleAddProductIcon from "../../assets/images/title-add-product.png";
import { BsCamera } from "react-icons/bs";
import saveProductIcon from "../../assets/images/save-product.png";
import { NavLink, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, TextField, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { TextareaAutosize } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Dropzone from "react-dropzone";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

// adress
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
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

const ProductArticle = () => {
  //adress
  const [open, setOpen] = React.useState(false);
  //add form post server
  const { category, setCategory, setIsPendingUpdated } = UserAuth();
  const navigate = useNavigate();
  //post form
  const [nameProduct, setNameProduct] = useState([]);
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptonProduct] = useState([]);
  const [addressProduct, setAddressProduct] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState([]);
  const [categoryForm, setCategoryForm] = useState([]);
  const [dataImgProduct, setDataImgProduct] = useState([]);
  const [dataProductBack, setDataProductBack] = useState([]);
  const token = JSON.parse(localStorage.getItem("access_token"));

  //
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");

  const handleCityChange = (event) => {
    const cityId = event.target.value;
    const selectedCity = cities.find((city) => city.Id === cityId);
    setDistricts(selectedCity.Districts);
    setWards([]);
    setSelectedCity(selectedCity.Name);
    setSelectedDistrict("");
    setSelectedWard("");
  };

  const handleDistrictChange = (event) => {
    const districtId = event.target.value;
    const selectedDistrict = districts.find(
      (district) => district.Id === districtId
    );
    setWards(selectedDistrict.Wards);
    setSelectedDistrict(selectedDistrict.Name);
    setSelectedWard("");
  };

  const handleWardChange = (event) => {
    const wardId = event.target.value;
    const selectedWard = wards.find((wards) => wards.Id === wardId);
    setSelectedWard(selectedWard.Name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the selected values (cities, districts, wards)
    console.log("Selected City:", selectedCity);
    console.log("Selected District:", selectedDistrict);
    console.log("Selected Ward:", selectedWard);
    console.log("Địa chỉ cụ thể:", specificAddress);

    const newResult = `${specificAddress}, ${selectedWard}, ${selectedDistrict}, ${selectedCity}`;
    setAddressProduct(newResult);

    handleClose();
  };
  const handleSpecificAddressChange = (event) => {
    // Cập nhật giá trị khi người dùng thay đổi địa chỉ cụ thể
    const address = event.target.value;
    setSpecificAddress(address);
  };
  //upoload image

  const [selectedFiles, setSelectedFiles] = useState([]);
  console.log(selectedFiles);
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  const handleFileChange = (files) => {
    setSelectedFiles([...selectedFiles, ...files]);
    setShowDeleteButtons(true);
  };

  const handleDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    if (updatedFiles.length === 0) {
      setShowDeleteButtons(false);
    }
  };
  const handleSubmitImgProduct = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    axios
      .post(
        "https://2hand.monoinfinity.net/api/v1.0/file/upload-multi",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token?.token}`,
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
        }
      )
      .then((response) => {
        console.log(response?.data);
        const product = response?.data;
        if (product) {
          setDataImgProduct(product);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmitProduct = async (event) => {
    event.preventDefault();
    if (!token) {
      console.log("No access token found.");
      return;
    }
    const payload = {
      price: priceProduct,
      address: addressProduct,
      name: nameProduct,
      description: descriptionProduct,
      quantity: quantityProduct,
      categoryId: categoryForm,
      imageUrls: dataImgProduct,
    };
    axios
      .post("https://2hand.monoinfinity.net/api/v1.0/product", payload, {
        headers: {
          Authorization: `Bearer ${token?.token}`,
          // "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log(response);
        // const product = response?.data;
        if (response?.status === 201) {
          setDataProductBack(response?.data);
          setIsPendingUpdated((prev) => !prev);
          navigate("/products");
        } else {
          alert("login fail");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const formUntil = {
    color: " none !important",
    display: "block",
    padding: "0",
    border: "0",
    "border-radius": "0",
    " box-shadow": "0",
    "margin-left": "0",
    "margin-top": "0",
    "background-color": "#FFFCF2",
  };
  return (
    <header className="custom-add-product">
      {/* <form > */}
      <div>
        <form onSubmit={handleSubmitImgProduct}>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSubmitImgProduct}>Upload</button>
        </form>
      </div>
      <form onSubmit={handleSubmitProduct} style={formUntil}>
        <div className="add-product-detail">
          <div className="title-add-product">
            <div className="name-add-product">
              <img
                src={titleAddProductIcon}
                alt="TitleAddProduct"
                className="title-add-product-icon"
              />
            </div>
          </div>

          <div className="container">
            <div className="left">
              <div>
                <div className="text-left-btn"> Tiêu đề tin đăng:</div>
                <Box className="customBox">
                  <TextField
                    fullWidth
                    size="small"
                    id="fullWidth"
                    className="customTextField"
                    value={nameProduct}
                    onChange={(e) => setNameProduct(e.target.value)}
                  />
                </Box>
              </div>
              <div className="descriptionContainer">
                <div className="text-left-btn"> Mô tả sản phẩm:</div>

                <textarea
                  className="text-area-btn"
                  rows={5}
                  placeholder="- Loại quần áo 
- Nam/nữ 
- Kích cỡ: S,M,L 
- Nhãn hiệu, Xuất xứ, tình trạng hàng hóa/sản phẩm
- Chất liệu, màu sắc 
- Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt
- Chính sách bảo hành, bảo trì, đổi trả hàng hóa/sản phẩm
- Địa chỉ giao nhận, đổi trả hàng hóa/sản phẩm"
                  value={descriptionProduct}
                  onChange={(e) => setDescriptonProduct(e.target.value)}
                />
              </div>
              <div className="imageContainer">
                <div className="text-left-btn">Thêm hình ảnh:</div>
                <div className="minorText">Tối thiểu 1 ảnh:</div>
                <Dropzone onDrop={handleFileChange} accept="image/*">
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <ImageOutlinedIcon />{" "}
                    </div>
                  )}
                </Dropzone>
                {selectedFiles.length > 0 && (
                  <div>
                    {selectedFiles.map((file, index) => (
                      <div key={index}>
                        <img
                          className="rounded-3 shadow"
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          style={{ maxWidth: 153 }}
                        />
                        {showDeleteButtons && (
                          <button onClick={() => handleDelete(index)}>
                            x
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="right">
              <div>
                <div className="text-left-btn"> Loại sản phẩm:</div>
                <FormControl
                  sx={{ m: 1, minWidth: 400, backgroundColor: "#F5F5F5" }}
                  size="small"
                >
                  <Select
                    value={categoryForm}
                    onChange={(e) => setCategoryForm(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    {category.map(
                      (
                        categorys,
                        index // Thêm tham số index vào hàm map
                      ) => (
                        <MenuItem key={index} value={categorys?.id}>
                          {categorys?.name}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
              <div>
                <div className="text-left-btn"> Giá bán:</div>
                <Box sx={{ m: 1, minWidth: 300, backgroundColor: "#F5F5F5" }}>
                  <TextField
                    fullWidth
                    id="outlined-number"
                    type="number"
                    value={priceProduct}
                    onChange={(e) => setPriceProduct(e.target.value)}
                  />
                </Box>
              </div>
              <div>
                <div className="text-left-btn">Số lượng sản phẩm: </div>
                <Box sx={{ m: 1, minWidth: 300, backgroundColor: "#F5F5F5" }}>
                  <TextField
                    fullWidth
                    id="outlined-number"
                    type="number"
                    inputProps={{
                      pattern: "[0-9]*",
                    }}
                    value={quantityProduct}
                    onChange={(e) => setQuantityProduct(e.target.value)}
                  />
                </Box>
              </div>
              <div>
                <div className="text-left-btn"> Địa chỉ:</div>
                <Box
                  onClick={handleClickOpen}
                  sx={{ m: 1, minWidth: 300, backgroundColor: "#F5F5F5" }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    id="address"
                    className="customTextField"
                    value={addressProduct}
                  />
                </Box>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                  >
                    Địa chỉ
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <Typography gutterBottom>
                      <FormControl
                        sx={{ m: 1, minWidth: 400, backgroundColor: "#F5F5F5" }}
                        size="small"
                      >
                        <InputLabel id="district-select-label">
                          Chọn tỉnh thành
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
                    </Typography>
                    <Typography gutterBottom>
                      <FormControl
                        sx={{ m: 1, minWidth: 400, backgroundColor: "#F5F5F5" }}
                        size="small"
                      >
                        <InputLabel id="district-select-label">
                          Chọn quận huyện
                        </InputLabel>
                        <Select
                          className="form-select form-select-sm mb-3"
                          id="district"
                          aria-label=".form-select-sm"
                          onChange={handleDistrictChange}
                          value={selectedDistrict?.Id}
                          labelId="district-select-label"
                          label="Chọn quận huyện"
                        >
                          <MenuItem value="" disabled>
                            Chọn quận huyện
                          </MenuItem>
                          {districts.map((district) => (
                            <MenuItem value={district.Id} key={district.Id}>
                              {district.Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Typography>
                    <Typography gutterBottom>
                      <FormControl
                        sx={{ m: 1, minWidth: 400, backgroundColor: "#F5F5F5" }}
                        size="small"
                      >
                        <InputLabel id="ward-select-label">
                          Chọn phường xã
                        </InputLabel>
                        <Select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm"
                          onChange={handleWardChange}
                          value={selectedWard?.Id}
                          labelId="ward-select-label"
                          label="Chọn phường xã"
                        >
                          <MenuItem value="" disabled>
                            Chọn phường xã
                          </MenuItem>
                          {wards.map((ward) => (
                            <MenuItem value={ward.Id} key={ward.Id}>
                              {ward.Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Typography>
                    <Typography>
                      <Box className="customBox" noValidate autoComplete="off">
                        <TextField
                          fullWidth
                          id="specific-address"
                          label="Địa chỉ cụ thể"
                          variant="outlined"
                          value={specificAddress}
                          onChange={handleSpecificAddressChange}
                        />
                      </Box>
                    </Typography>
                  </DialogContent>
                  <DialogActions className="d-flex justify-content-center">
                    <Button autoFocus onClick={handleSubmit}>
                      Save changes
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="save-product-btn" type="submit">
            {/* <NavLink to="/add-product" activeClassName="active-product"> */}
            <img
              src={saveProductIcon}
              alt="SaveProductCoin"
              className="save-product-icon"
            />
            {/* </NavLink> */}
          </button>
        </div>
      </form>
      {/* </form> */}
    </header>
  );
};

export default ProductArticle;
