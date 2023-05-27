import React from "react";
import { UserAuth } from "../../context/AuthContext";
import "./styles.scss";
import { useState } from "react";
import titleAddProductIcon from "../../assets/images/title-add-product.png";
import { BsCamera } from "react-icons/bs";
import saveProductIcon from "../../assets/images/save-product.png";
import { NavLink } from "react-router-dom";

const ProductArticle = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", inputValue);
  };
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
          <div>
            <div className="des-title">Mô tả sản phẩm:</div>
            <div onSubmit={handleSubmit}>
              <div>
                <textarea
                  className="add-product-des"
                  id="addProductField"
                  value={inputValue}
                  placeholder="Áo thun nữ cotton màu đen, Size L vai 40 x ngực 82 x dài 65-70 cho người 47kg Style #unisex"
                  onChange={(e) => setInputValue(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <div className="product-type">Loại sản phẩm:</div>
            <div>
              <select className="type-product-select">
                <option disabled selected value="">
                  Danh mục
                </option>
                <option value="option1">Tùy chọn 1</option>
                <option value="option2">Tùy chọn 2</option>
                <option value="option3">Tùy chọn 3</option>
              </select>
            </div>
          </div>
          <div>
            <div className="product-status">Tình trạng:</div>
            <div>
              <select className="status-product-select">
                <option disabled selected value="">
                  Danh mục
                </option>
                <option value="option1">Tùy chọn 1</option>
                <option value="option2">Tùy chọn 2</option>
                <option value="option3">Tùy chọn 3</option>
              </select>
            </div>
          </div>
          <div>
            <div className="label-amount">Số tiền:</div>
          </div>
          <div>
            <div className="form-amount">
              <div className="input-amount">
                <input
                  className="form-input-amount"
                  type="number"
                  id="amount"
                  name="amount"
                />
                <span className="currency">VND</span>
              </div>
            </div>
          </div>
          <div>
            <div className="label-count">Số lượng:</div>
          </div>
          <div>
            <div className="form-count">
              <div className="input-count">
                <input
                  className="form-input-count"
                  type="number"
                  id="count"
                  name="count"
                />
                <span className="count-product">x</span>
              </div>
            </div>
          </div>
          <div>
            <div className="address-product-title">
              Thông tin liên hệ ( Số điện thoại & Địa chỉ):
            </div>
            <div onSubmit={handleSubmit}></div>
            <div className="address-product-content">
              <textarea
                className="address-product"
                id="inputField"
                value={inputValue}
                placeholder="Tui đi học vào Thứ 2, Thứ 4, Thứ 6 mỗi tuần.
                Số điện thoại: 0819439460"
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div>
            <div className="form-img-product">
              <label className="title-input-img" htmlFor="image">
                Thêm hình ảnh:
              </label>
              <div className="space-input-img">
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
              </div>
              <div className="space-input-img">
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
