import "./styles.scss";
import manImg from "../../assets/images/logo-welcome.png";
import { NavLink } from "react-router-dom";
import firstCloud from "../../assets/images/policy-animation/clouds_1.png";
import secondCloud from "../../assets/images/policy-animation/clouds_2.png";
import leftMountain from "../../assets/images/policy-animation/mountain_left.png";
import rightMountain from "../../assets/images/policy-animation/mountain_right.png";
import bgPolicyImg from "../../assets/images/policy-animation/bg.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

// Khởi tạo ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

PolicyFeature.propTypes = {};

function PolicyFeature() {
  useEffect(() => {
    gsap.to("#bg-policy", { scrollTrigger: { scrub: 1 }, scale: 1.5 });
    gsap.to("#man", { scrollTrigger: { scrub: 1 }, scale: 0.5 });
    gsap.to("#mountain_left", { scrollTrigger: { scrub: 1 }, x: -500 });
    gsap.to("#mountain_right", { scrollTrigger: { scrub: 1 }, x: 500 });
    gsap.to("#clouds_1", { scrollTrigger: { scrub: 1 }, x: 200 });
    gsap.to("#clouds_2", { scrollTrigger: { scrub: 1 }, x: -200 });
    gsap.to("#text-policy", { scrollTrigger: { scrub: 1 }, y: 500 });
  }, []);

  return (
    <header className="custom-policy" style={{ marginTop: "9px" }}>
      <div className="policy-section">
        <section>
          <h2 id="text-policy">Điều khoản</h2>
          <img src={bgPolicyImg} alt="BGPLC" id="bg_policy" />
          <img src={manImg} alt="ManPLC" id="man" />
          <img src={firstCloud} alt="FirstCloud" id="clouds_1" />
          <img src={secondCloud} alt="SecondCloud" id="clouds_2" />
          <img src={leftMountain} alt="LeftMountain" id="mountain_left" />
          <img src={rightMountain} alt="RightMountain" id="mountain_right" />
        </section>
        <div className="sec-policy">
          <h2>ĐIỀU KHOẢN NGƯỜI BÁN</h2>
          <h3>CAM KẾT CHUNG</h3>
          <ul>
            <li>
              Chất lượng sản phẩm: Uni2Hand cam kết cung cấp sản phẩm chất lượng
              cao và đảm bảo tính hoàn chỉnh, chính xác của thông tin liên quan
              đến sản phẩm. Chúng tôi chỉ đăng bán những mặt hàng đáng tin cậy
              và đáp ứng các tiêu chuẩn chất lượng.
            </li>
            <li>
              Giá cả công bằng: Chúng tôi cam kết áp dụng giá cả công bằng và
              minh bạch cho tất cả các sản phẩm. Giá bán đã bao gồm toàn bộ số
              tiền mà Khách hàng cần thanh toán, và không có bất kỳ khoản phụ
              phí nào đòi hỏi từ phía Uni2Hand.
            </li>
            <li>
              Thông tin sản phẩm chính xác: Uni2Hand cam kết cung cấp đầy đủ
              thông tin chi tiết và chính xác về sản phẩm, bao gồm mô tả, hình
              ảnh, kích thước, trạng thái và màu sắc. Chúng tôi sẽ không đăng
              tải thông tin không chính xác hoặc gây nhầm lẫn về sản phẩm.
            </li>
            <li>
              Hỗ trợ khách hàng: Uni2Hand cam kết cung cấp dịch vụ hỗ trợ khách
              hàng chất lượng, nhanh chóng và chuyên nghiệp. Chúng tôi sẽ sẵn
              lòng giải đáp các câu hỏi, xử lý khiếu nại và cung cấp hỗ trợ kỹ
              thuật nếu cần thiết.
            </li>
            <li>
              Bảo mật thông tin: Chúng tôi cam kết bảo vệ thông tin cá nhân và
              tài khoản của Khách hàng. Chúng tôi sẽ không tiết lộ thông tin cá
              nhân của Khách hàng cho bất kỳ bên thứ ba nào mà không có sự đồng
              ý của Khách hàng.
            </li>
          </ul>

          <h3>
            DANH SÁCH CÁC MẶT HÀNG ĐƯỢC VÀ KHÔNG ĐƯỢC PHÉP BÁN TẠI UNI2HAND
          </h3>
          <h3>Các mặt hàng được phép kinh doanh:</h3>
          <ul>
            <li>Quần áo, giày dép và các phụ kiện thời trang</li>
            <li>Đồ điện tử và công nghệ.</li>
            <li>Mỹ phẩm và sản phẩm chăm sóc cá nhân.</li>
            <li>Sách, đĩa CD/DVD, và các sản phẩm văn hóa nghệ thuật.</li>
          </ul>

          <h3>Các mặt hàng không được phép kinh doanh:</h3>
          <ul>
            <li>
              Sản phẩm có nội dung không phù hợp đạo đức và thuần phong mỹ tục.
            </li>
            <li>
              Các sản phẩm hàng hóa không hợp pháp hoặc vi phạm quy định về
              thương mại, bản quyền, hoặc sở hữu trí tuệ.
            </li>
            <li>
              Vật liệu hoặc sản phẩm nguy hiểm, bao gồm hóa chất độc hại, vật
              liệu gây nổ và các sản phẩm gây ô nhiễm môi trường.
            </li>
          </ul>

          <h3>Yêu cầu chất lượng về những mặt hàng đăng bán tại Uni2Hand:</h3>
          <ul>
            <li>
              Tình trạng sản phẩm: Người bán đăng bán những mặt hàng có tình
              trạng tốt, không bị hỏng hóc hoặc có khuyết điểm nghiêm trọng.
              Chúng tôi khuyến khích người bán cung cấp hình ảnh và mô tả chân
              thực, minh bạch về tình trạng của sản phẩm.
            </li>
            <li>
              Đảm bảo thông tin chính xác: Người bán phải cung cấp thông tin
              chính xác và đầy đủ về sản phẩm, bao gồm mô tả, tình trạng, giá cả
              và thông tin liên hệ. Chúng tôi khuyến khích người bán cung cấp
              hình ảnh thực tế và mô tả chi tiết để khách hàng có thể đánh giá
              chính xác sản phẩm.
            </li>
            <li>
              Phản hồi và đánh giá: Chúng tôi khuyến khích khách hàng gửi phản
              hồi và đánh giá về các mặt hàng mà họ đã mua. Điều này giúp cải
              thiện chất lượng và độ tin cậy của các người bán, đồng thời tạo ra
              một môi trường mua bán công bằng và minh bạch.
            </li>
          </ul>

          <p>
            Chúng tôi cam kết thực hiện các yêu cầu chất lượng này để đảm bảo
            rằng mọi mặt hàng đăng bán trên Uni2Hand đều đáp ứng được sự tin
            tưởng và sự hài lòng của khách hàng.
          </p>

          <h3>YÊU CẦU HÌNH ẢNH:</h3>

          <p>
            Hình ảnh chân thực: Người bán phải cung cấp hình ảnh thực tế và rõ
            ràng của sản phẩm. Hình ảnh nên chụp từ nhiều góc độ khác nhau, cho
            phép khách hàng có cái nhìn trực quan về sản phẩm trước khi quyết
            định mua.
          </p>
          <p>
            Chất lượng hình ảnh: Chúng tôi khuyến khích sử dụng hình ảnh chất
            lượng cao, sắc nét và không bị méo mó. Điều này giúp khách hàng có
            thể xem chi tiết sản phẩm một cách rõ ràng và đáng tin cậy.
          </p>
          <p>
            Mô tả hình ảnh: Chúng tôi đề cao sự trung thực và minh bạch trong mô
            tả hình ảnh. Người bán nên cung cấp mô tả chi tiết về sản phẩm, bao
            gồm các đặc điểm, kích thước, màu sắc, vật liệu và bất kỳ thông tin
            quan trọng nào liên quan đến sản phẩm.
          </p>
          <p>
            Số lượng và đa dạng hình ảnh: Chúng tôi khuyến khích người bán cung
            cấp nhiều hình ảnh khác nhau để khách hàng có cái nhìn đa dạng về
            sản phẩm. Hình ảnh từ các góc độ khác nhau, phối cảnh sử dụng thực
            tế hoặc hình ảnh chi tiết giúp khách hàng hiểu rõ hơn về sản phẩm.
          </p>

          <h3>QUY TẮC ỨNG XỬ TRÊN UNI2HAND:</h3>
          <ul>
            <li>
              Tôn trọng và lịch sự với các thành viên khác trong cộng đồng
              Uni2hand.
            </li>
            <li>Giao tiếp một cách hòa nhã và thân thiện.</li>
            <li>Tránh sử dụng ngôn ngữ xúc phạm hoặc không đúng văn hóa.</li>
            <li>Nghiêm cấm mọi hành vi spam.</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default PolicyFeature;
