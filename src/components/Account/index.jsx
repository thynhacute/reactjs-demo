import React, { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import "./styles.scss";
import { useState } from "react";
import saveProfileIcon from "../../assets/images/save-profile.png";
import axios from "axios";

const Account = () => {
  const { logOut, user, userProfile } = UserAuth();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || "");
      setPhoneNumber(userProfile.phone || "");
      setAddress(userProfile.address || "");
    }
  }, [userProfile]);

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
  };

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    const filteredValue = inputValue.replace(/[^0-9+]/g, "");
    setPhoneNumber(filteredValue);
  };

  const handleAddressChange = (event) => {
    const inputValue = event.target.value;
    setAddress(inputValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const accessToken = JSON.parse(localStorage.getItem("access_token"));
      const response = await axios.put(
        "https://2hand.monoinfinity.net/api/v1.0/users",
        {
          name: name,
          phone: phoneNumber,
          address: address,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken?.token}`,
          },
        }
      );

      if (response && response.data) {
        console.log("Response:", response.data);
        window.location.reload();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Error:", error.response.data);
      }
    }
  };

  return (
    <header className="custom-account">
      <div>
        <div className="profile-detail">
          <p className="space-account">&nbsp;</p>
          <div className="title-profile">
            <h1 className="name-profile">Hồ sơ của tôi</h1>
          </div>
          <div>
            <img
              className="avatar"
              src="https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w"
              alt="Avatar"
            />
          </div>
          <div className="shop-info">
            <p className="shop-name">CỬA HÀNG CỦA:</p>
            <input
              className="name-pf"
              type="name"
              id="inputName"
              value={name.toUpperCase()}
              placeholder="Nhập số điện thoại"
              onChange={handleNameChange}
            />
          </div>

          <div className="phone">
            <label htmlFor="inputPhone" className="bio-title">
              Số điện thoại:
            </label>
            <input
              className="biography"
              type="tel"
              id="inputPhone"
              value={phoneNumber}
              placeholder="Nhập số điện thoại"
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="address-profile-nt">
            <label htmlFor="inputAddress" className="address-title">
              Địa chỉ:
            </label>
            <div className="address-content">
              <textarea
                className="address"
                id="inputAddress"
                value={address}
                placeholder="S201. Vinhomes Grand Park. Nguyễn Xiển. Phường Long Thạnh Mỹ. Quận 9. Tp Hồ Chí Minh. Trường Đại Học FPT"
                onChange={handleAddressChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="save-btn-container">
          <button className="save-btn" onClick={handleSubmit}>
            <img
              src={saveProfileIcon}
              alt="Save Profile"
              className="save-profile-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Account;
