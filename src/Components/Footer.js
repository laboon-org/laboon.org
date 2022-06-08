import React from "react";
import "../css/footer.css";
import "../css/responsive/responsive.css";
import "../grid.css";
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr'


const Footer = () => {
  return (
    <section className="footer grid">
      <div className="grid wide">
        <div className="footer__content">
          <div className=" footer__content-wrap row">
            <div className="footer__logo col l-3 c-12">
              <img src="https://media.graphassets.com/J3GacXeQUOX6tZNmF5Bw" alt="Laboon" />
            </div>
            <div className="footer__about col l-3 c-12 ">
              <h4>Address</h4>
              <div className="footer__about-address">
                <i className="fas fa-map-marker-alt"></i>
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
              <i className="footer__icon-connect"><GrFacebook /></i>
            </a>
            <a href="https://www.linkedin.com/in/laboon-ltd-pte-8a6553223">
              <i className="footer__icon-connect"><GrLinkedin /></i>
            </a>
            <a href="https://twitter.com/laboon_org">
            <i className="footer__icon-connect"><GrTwitter /></i>
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
