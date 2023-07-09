import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import nguyetAvatar from "../../assets/images/members/nguyet.jpg";
import nhaAvatar from "../../assets/images/members/hoanha.jpg";
import chauAvatar from "../../assets/images/members/hongchau.jpg";
import naatyAvatar from "../../assets/images/members/naaty.jpg";
import minAvatar from "../../assets/images/members/min.jpg";
import pthaiAvatar from "../../assets/images/members/pthai.jpg";
import qthaiAvatar from "../../assets/images/members/qthai.jpg";
import { Link } from "react-router-dom";

MemberTeam.propTypes = {};

function MemberTeam(props) {
  return (
    <div className="header-member">
      <div className="mkt-member-team">
        <div className="wrapper-card">
          <div
            className="card-mb"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          >
            <div className="lines"></div>
            <div className="imgBx">
              <img
                src={nguyetAvatar}
                alt="NguyetAvatar"
                className="nguyet-avatar"
              />
            </div>
            <div className="content">
              <div className="details">
                <h2>
                  Đào Ánh Nguyệt
                  <br />
                  <span>Marketing</span>
                </h2>
                <div className="data">
                  <h3>
                    Marketing
                    <br />
                    <span>Sale, Marketing website và fanpage</span>
                  </h3>
                </div>
                <div className="actionBtn" style={{ marginBottom: "20px" }}>
                  <button>
                    <a
                      href="https://www.facebook.com/anhnguyet060797"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-facebook"
                    >
                      Facebook
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-mb"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          >
            <div className="lines"></div>
            <div className="imgBx">
              <img src={nhaAvatar} alt="NhaAvatar" className="nha-avatar" />
            </div>
            <div className="content">
              <div className="details">
                <h2 style={{}}>
                  Đoàn Hoà Nhã
                  <br />
                  <span>Marketing</span>
                </h2>
                <div className="data">
                  <h3>
                    Truyền thông đa phương tiện
                    <br />
                    <span>Sản xuất, Biên tập tại Công ty Điền Quân</span>
                  </h3>
                </div>
                <div className="actionBtn" style={{ marginBottom: "20px" }}>
                  <button>
                    <a
                      href="https://www.facebook.com/profile.php?id=100007973823355"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-facebook"
                    >
                      Facebook
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-mb"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          >
            <div className="lines"></div>
            <div className="imgBx">
              <img src={chauAvatar} alt="ChauAvatar" className="chau-avatar" />
            </div>
            <div className="content">
              <div className="details">
                <h2 style={{ marginBottom: "-10px" }}>
                  Dương Thị Hồng Châu
                  <br />
                  <span>Marketing</span>
                </h2>
                <div className="data" style={{ marginBottom: "10px" }}>
                  <h3>
                    Marketing
                    <br />
                    <span>Content Digital (Facebook, Youtube, Tiktok)</span>
                  </h3>
                </div>
                <div className="actionBtn" style={{ marginBottom: "20px" }}>
                  <button>
                    <a
                      href="https://www.facebook.com/hongchauduong1503"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-facebook"
                    >
                      Facebook
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="se-member-team">
        <div className="wrapper-card">
          <div
            className="card-mb"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <div className="lines"></div>
            <div className="imgBx">
              <img
                src={naatyAvatar}
                alt="NaaTyAvatar"
                className="naaty-avatar"
              />
            </div>
            <div className="content">
              <div className="details">
                <h2 style={{ marginBottom: "-10px" }}>
                  Hoàng Nhã Thy
                  <br />
                  <span>Front-end</span>
                </h2>
                <div className="data" style={{ marginBottom: "10px" }}>
                  <h3>
                    Kỹ thuật phần mềm
                    <br />
                    <span>
                      Business Analyst, Content Marketing và MC/Host tại Công ty
                      CP Công Nghệ Ufin
                    </span>
                  </h3>
                </div>
                <div className="actionBtn" style={{ marginBottom: "20px" }}>
                  <button>
                    <a
                      href="https://www.facebook.com/OrieSocuteee/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-facebook"
                    >
                      Facebook
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-mb"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <div className="lines"></div>
            <div className="imgBx">
              <img src={minAvatar} alt="MinAvatar" className="min-avatar" />
            </div>
            <div className="content">
              <div className="details">
                <h2>
                  Trần Hồng Minh Nhật
                  <br />
                  <span>Designer</span>
                </h2>
                <div className="data">
                  <h3>
                    Thiết kế đồ họa
                    <br />
                    <span>Thiết kế 2D</span>
                  </h3>
                </div>
                <div className="actionBtn" style={{ marginBottom: "20px" }}>
                  <button>
                    <a
                      href="https://www.facebook.com/solielminn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-facebook"
                    >
                      Facebook
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-mb"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <div className="lines"></div>
            <div className="imgBx">
              <img
                src={pthaiAvatar}
                alt="PThaiAvatar"
                className="pthai-avatar"
              />
            </div>
            <div className="content">
              <div className="details">
                <h2>
                  Trần Phương Thái
                  <br />
                  <span>Front-end</span>
                </h2>
                <div className="data">
                  <h3>
                    Kỹ thuật phần mềm
                    <br />
                    <span>Backend Dev tại FPT Software</span>
                  </h3>
                </div>
                <div className="actionBtn" style={{ marginBottom: "20px" }}>
                  <button>
                    <a
                      href="https://www.facebook.com/tpt0610"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-facebook"
                    >
                      Facebook
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-mb"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <div className="lines"></div>
            <div className="imgBx">
              <img
                src={qthaiAvatar}
                alt="QThaiAvatar"
                className="qthai-avatar"
              />
            </div>
            <div className="content">
              <div className="details">
                <h2>
                  Phan Quốc Thái
                  <br />
                  <span>Back-end</span>
                </h2>
                <div className="data">
                  <h3>
                    Kỹ thuật phần mềm
                    <br />
                    <span>Frontend Dev tại FPT Software</span>
                  </h3>
                </div>
                <div className="actionBtn" style={{ marginBottom: "20px" }}>
                  <button>
                    <a
                      href="https://www.facebook.com/anhnguyet060797"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-facebook"
                    >
                      Facebook
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberTeam;
