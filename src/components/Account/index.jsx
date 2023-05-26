import React from "react";
import { UserAuth } from "../../context/AuthContext";
import "./styles.scss";
import { useState } from "react";
import saveProfileIcon from "../../assets/images/save-profile.png";

const Account = () => {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", inputValue);
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
            <img className="avatar" src={user.photoURL} alt="Avatar" />
          </div>
          <div>
            <p className="shop-name">CỬA HÀNG CỦA: {user?.displayName}</p>
          </div>
          <div>
            <div className="bio-title">Bio:</div>
            <div onSubmit={handleSubmit}>
              <div>
                <textarea
                  className="biography"
                  id="inputField"
                  value={inputValue}
                  placeholder="Tui là K18, vì đú trend nên dứt hết đống đồ về nhà, mà mặc mới 1 lần cái hok muốn mặc nữa pùn ghia"
                  onChange={(e) => setInputValue(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <div className="address-title">Địa chỉ:</div>
            <div onSubmit={handleSubmit}></div>
            <div className="address-content">
              <textarea
                className="address"
                id="inputField"
                value={inputValue}
                placeholder="S201. Vinhomes Grand Park. Nguyễn Xiển. Phường Long Thạnh Mỹ. Quận 9. Tp Hồ Chí Minh.
                Trường Đại Học FPT"
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <button className="save-btn" type="submit">
            <img
              src={saveProfileIcon}
              alt="SaveProfile"
              className="save-profile-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Account;
