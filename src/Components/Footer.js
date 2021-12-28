import React from "react";
import "../css/footer.css";
import "../css/responsive/responsive.css";
import "../grid.css";

const Footer = () => {
  return (
    <section className="footer grid">
      <div className="grid wide">
        <div className="footer__content">
          <div className=" footer__content-wrap row">
            <div className="footer__logo col l-3 c-12">
              <img src="https://storage.googleapis.com/laboon-img-storage/laboon/Image-Foodter/Footerlogo.webp" alt="" />
            </div>
            <div className="footer__about col l-3 c-12 ">
              <h4>Address</h4>
              <div className="footer__about-address">
                <i class="fas fa-map-marker-alt"></i>
                <p>68 Upper Serangoon View, Singapore, 533884</p>
              </div>
            </div>
            <div className="footer__about col l-3 c-6 ">
              <h4>About</h4>
              <ul>
                <li>Our Crew</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Term Of use</li>
              </ul>
            </div>
            <div className="footer__about col l-3 c-6 ">
              <h4>Products</h4>
              <ul>
                <li>Elu Verse</li>
                <li>Need</li>
                <li>Plaza (Market Place)</li>
                <li>Wallet</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__infor">
          <div className="footer__social">
            <a href="https://www.facebook.com/Laboon.org">
              <img className="footer__icon-connect" src="https://storage.googleapis.com/laboon-img-storage/laboon/Image-Foodter/facebook-box-fill.webp" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/laboon-ltd-pte-8a6553223">
              <img className="footer__icon-connect" src="https://storage.googleapis.com/laboon-img-storage/laboon/Image-Foodter/linkedin-box-fill.webp" alt="" />
            </a>
            <a href="https://twitter.com/laboon_org">
              <img className="footer__icon-connect" src="https://storage.googleapis.com/laboon-img-storage/laboon/Image-Foodter/twitter-fill.webp" alt="" />
            </a>
          </div>
          <div className="footer_copyright">
            <h3>
              <span>© 2021, Laboon .PTE .LTD, All right reserved</span>Version: v0.6
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
