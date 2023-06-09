import React from "react";
import { UserAuth } from "../../context/AuthContext";
import "./styles.scss";
import { useState } from "react";
import saveProfileIcon from "../../assets/images/save-profile.png";

const Account = () => {
  const { logOut, user, userProfile } = UserAuth();
  console.log(userProfile);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [biographyValue, setBiographyValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  const handleBiographyChange = (e) => {
    setBiographyValue(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddressValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Biography Value:", biographyValue);
    console.log("Address Value:", addressValue);
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
          <div>
            <p className="shop-name">CỬA HÀNG CỦA: {userProfile?.name}</p>
          </div>
          <div>
            <div className="bio-title">Bio:</div>
            <div onSubmit={handleSubmit}>
              <div>
                <textarea
                  className="biography"
                  id="inputFieldBio"
                  value={biographyValue}
                  placeholder="Tui là K18, vì đú trend nên dứt hết đống đồ về nhà, mà mặc mới 1 lần cái hok muốn mặc nữa pùn ghia"
                  onChange={handleBiographyChange}
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
                id="inputFieldAddress"
                value={addressValue}
                placeholder="S201. Vinhomes Grand Park. Nguyễn Xiển. Phường Long Thạnh Mỹ. Quận 9. Tp Hồ Chí Minh. Trường Đại Học FPT"
                onChange={handleAddressChange}
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
