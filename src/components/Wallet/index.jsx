import "./styles.scss";
import depositCoinIcon from "../../assets/images/deposit.png";
import { NavLink } from "react-router-dom";

WalletFeature.propTypes = {};

function WalletFeature() {
  return (
    <header className="custom-wallet">
      <p className="space-wallet">&nbsp;</p>
      <div>
        <button className="deposit-btn" type="submit">
          <NavLink to="/home" activeClassName="active-wallet">
            <img
              src={depositCoinIcon}
              alt="DepositCoin"
              className="deposit-coin-icon"
            />
          </NavLink>
        </button>
      </div>
    </header>
  );
}

export default WalletFeature;
