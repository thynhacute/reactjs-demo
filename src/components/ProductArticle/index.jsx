import React from "react";
import { UserAuth } from "../../context/AuthContext";
import "./styles.scss";
import { useState, useRef, useEffect } from "react";
import titleAddProductIcon from "../../assets/images/title-add-product.png";
import { BsCamera } from "react-icons/bs";
import saveProductIcon from "../../assets/images/save-product.png";
import { NavLink } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, TextField, Typography } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { TextareaAutosize } from '@mui/material';
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
import token from "../../components/Login/token.json"
// adress
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
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



const ProductArticle = () => {
  //adress
  const [open, setOpen] = React.useState(false);
//add form post server
  const { category, setCategory } = UserAuth()
  const [ categoryForm , setCategoryForm]=  useState("")

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
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        const data = response.data;
        setCities(data);
        const responseCate = await axios.get('https://2hand.monoinfinity.net/api/v1.0/category/all',
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.token}`,
          },
        });
      const dataCate = responseCate?.data;
      setCategory(dataCate);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

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
    setResult(newResult);

    handleClose();
  };
  const handleSpecificAddressChange = (event) => {
    // Cập nhật giá trị khi người dùng thay đổi địa chỉ cụ thể
    const address = event.target.value;
    setSpecificAddress(address);
  };
  //upoload image
  const [images, setImages] = useState([]);

  const inputRef = useRef(null);

  const handleImageUpload = (event) => {
    const fileList = event.target.files;
    const newImages = [];

    // Loop through the selected files
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const imageUrl = URL.createObjectURL(file);

      // Check if the maximum number of images is reached
      if (images.length + newImages.length < 7) {
        // Add the file and its URL to the images array
        newImages.push({ file, imageUrl });
      }
    }

    // Update the state with the new images
    setImages([...images, ...newImages]);
  };
  const handleImageRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const isUploadDisabled = images.length >= 6; // Check if the maximum number of images is reached

  const handleUploadClick = () => {
    inputRef.current.click(); // Trigger the input file click event
  };

  //
  const handleInputChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, ''); // Loại bỏ các ký tự không phải số
    event.target.value = input;
  };
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <header className="custom-add-product">
      <div>
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
                <div className="text-left-btn" > Tiêu đề tin đăng:</div>
                <Box className="customBox"
                >
                  <TextField fullWidth
                    size="small"
                    id="fullWidth"
                    className="customTextField"
                  />
                </Box>
              </div>
              <div className="descriptionContainer">
                <div className="text-left-btn" > Mô tả sản phẩm:</div>

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
                  onChange={handleChange}
                />
              </div>
              <div className="imageContainer">
                <div className="text-left-btn" >Thêm hình ảnh:</div>
                <div className="minorText">Tối thiểu 1 ảnh:</div>
              </div>
              {/* <div className="space-input-img">
                <label htmlFor="image" className="file-upload">
                  <div className="upload-icon">
                    <BsCamera />
                  </div>
                </label>
                <input
                  className="display-choose-img"
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div> */}
              <div className="image-upload">
                <div className="upload-square" onClick={handleUploadClick}>
                  <div className="upload-placeholder">
                    <BsCamera />
                  </div>
                </div>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  disabled={isUploadDisabled} // Disable the input when the maximum number of images is reached
                />
                <div className="image-preview">
                  {images.map((image, index) => (
                    <div key={index} className="image-item" >
                      <img src={image.imageUrl} alt={`Preview ${index}`} />
                      <button className="delete-button" onClick={() => handleImageRemove(index)}><AiFillCloseCircle /></button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className="right">
              <div>
                <div className="text-left-btn" > Loại sản phẩm:</div>
                <FormControl sx={{ m: 1, minWidth: 400, backgroundColor: "#F5F5F5" }} size="small">
                  <Select
                    value={categoryForm}
                    onChange={(e) => setCategoryForm(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
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
                <div className="text-left-btn" > Tình trạng:</div>
                <FormControl sx={{ m: 1, minWidth: 400, backgroundColor: "#F5F5F5" }} size="small">
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value={4}>Mới</MenuItem>
                    <MenuItem value={5}>Đã sử dụng</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <div className="text-left-btn" > Giá bán:</div>
                <Box sx={{ m: 1, minWidth: 300, backgroundColor: "#F5F5F5" }}>
                  <TextField fullWidth id="outlined-number" type="number" />
                </Box>
              </div>
              <div>
                <div className="text-left-btn" >Số điện thoại :</div>
                <Box sx={{ m: 1, minWidth: 300, backgroundColor: "#F5F5F5" }}>
                  <TextField
                    fullWidth
                    id="outlined-number"
                    type="text"
                    inputProps={{
                      pattern: '[0-9]*',
                    }}
                    onChange={handleInputChange}
                  />
                </Box>
              </div>
              <div>
                <div className="text-left-btn" > Địa chỉ:</div>
                {/* <FormControl sx={{ m: 1, minWidth: 400, backgroundColor: "#F5F5F5" }} size="small">
                  <Select
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                  </Select>
                </FormControl> */}
                <Box
                  onClick={handleClickOpen}

                  sx={{ m: 1, minWidth: 300, backgroundColor: "#F5F5F5" }}
                >
                  <TextField fullWidth
                    size="small"
                    id="address"
                    className="customTextField"
                    value={result}

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
                        <InputLabel id="ward-select-label">Chọn phường xã</InputLabel>
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
                      <Box
                        className="customBox"
                        noValidate
                        autoComplete="off"

                      >
                        <TextField fullWidth
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
            <NavLink to="/home" activeClassName="active-product">
              <img
                src={saveProductIcon}
                alt="SaveProductCoin"
                className="save-product-icon"
              />
            </NavLink>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProductArticle;
