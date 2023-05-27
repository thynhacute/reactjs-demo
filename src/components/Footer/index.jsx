import "./styles.scss";
import logoImage from "../../assets/images/logo.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbMail } from "react-icons/tb";
Footer.propTypes = {};

function Footer() {
  return (
    <header className="custom-footer">
      <div className="logo-img-footer">
        <img className="image-logo-footer" src={logoImage} alt="Logo" />
      </div>
      <div className="footer-li">
        <ul>
          <li>&nbsp;</li>
          <li>
            <AiOutlineInstagram className="item-icon-footer" />
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram.vn
            </a>
          </li>
          <li>
            <RiFacebookCircleLine className="item-icon-footer" />
            <a
              href="https://www.facebook.com/profile.php?id=100092877995770"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook.vn
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
