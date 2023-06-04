import "./styles.scss";
import depositCoinIcon from "../../assets/images/deposit.png";
import { NavLink } from "react-router-dom";
import momoImg from "../../assets/images/logo-momo.png";
import vnPayImg from "../../assets/images/logo-vnpay.png";
import zaloPayImg from "../../assets/images/logo-zalopay.png";
import bankImg from "../../assets/images/logo-bank.png";

WalletFeature.propTypes = {};

function WalletFeature() {
  return (
    <header className="custom-wallet">
      <div>
        <div>
          <p className="space-wallet">Nạp Xu</p>
          <p className="choose-option">Chọn phương thức thanh toán</p>
        </div>
        <div>
          <ul className="remove-deco">
            <li className="item-option-coin">
              <NavLink
                to="/wallet/momo"
                activeClassName="active"
                className="nav-link-deposit"
              >
                <ul>
                  <li>
                    <img src={momoImg} alt="MomoImage" className="momo-img" />
                  </li>
                  <li>
                    <p>Momo</p>
                  </li>
                </ul>
              </NavLink>
            </li>
            <li className="item-option-coin">
              <NavLink
                to="/wallet/vnpay"
                activeClassName="active"
                className="nav-link-deposit"
              >
                <ul>
                  <li>
                    <img
                      src={vnPayImg}
                      alt="VNPayImage"
                      className="vnpay-img"
                    />
                  </li>
                  <li>
                    <p>VNPay</p>
                  </li>
                </ul>
              </NavLink>
            </li>
            <li className="item-option-coin">
              <NavLink
                to="/wallet/zalopay"
                activeClassName="active"
                className="nav-link-deposit"
              >
                <ul>
                  <li>
                    <img
                      src={zaloPayImg}
                      alt="ZaloPayImage"
                      className="zalopay-img"
                    />
                  </li>
                  <li>
                    <p>ZaloPay</p>
                  </li>
                </ul>
              </NavLink>
            </li>
            <li className="item-option-coin">
              <NavLink
                to="/wallet/banking"
                activeClassName="active"
                className="nav-link-deposit"
              >
                <ul>
                  <li>
                    <img src={bankImg} alt="BankImage" className="bank-img" />
                  </li>
                  <li>
                    <p>Chuyển khoản</p>
                  </li>
                </ul>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div>
          <button className="deposit-btn" type="submit">
            <NavLink to="/home" activeClassName="active-wallet">
              <img
                src={depositCoinIcon}
                alt="DepositCoin"
                className="deposit-coin-icon"
              />
            </NavLink>
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default WalletFeature;
