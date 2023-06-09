import "./styles.scss";
import logoImage from "../../assets/images/logo.png";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { TbMail } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
Footer.propTypes = {};

function Footer() {
  return (
    <header className="custom-footer">
      <div className="logo-container">
        <img className="image-logo-footer" src={logoImage} alt="Logo" />
      </div>
      <div className="footer-li list-container">
        <ul className="horizontal-list">
          <li className="fb-info">
            <RiFacebookFill className="item-icon-footer" />
            <a
              href="https://www.facebook.com/profile.php?id=100092877995770"
              target="_blank"
              rel="noopener noreferrer"
            >
              uni2hand
            </a>
          </li>
          {/* <li>
            <IoLogoTiktok className="item-icon-footer tiktok-icon" />
            <a
              href="https://www.tiktok.com/@uni2handforu"
              target="_blank"
              rel="noopener noreferrer"
            >
              tiktok.vn
            </a>
          </li> */}
          <li>
            <FaInstagram className="item-icon-footer tiktok-icon" />
            <a
              href="https://www.instagram.com/uni2hand_story/"
              target="_blank"
              rel="noopener noreferrer"
            >
              uni2hand_story
            </a>
          </li>
          <li>
            <TbMail className="item-icon-footer" />
            <a
              href="mailto:uni2hand@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              uni2hand@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Footer;
