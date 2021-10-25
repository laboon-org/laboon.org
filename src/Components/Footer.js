import React from 'react'
import '../css/footer.css'
import '../css/responsive/responsive.css'
import '../grid.css'

import footerlogo from '../img/Footerlogo.png';
import facebook from '../img/facebook-box-fill.png';
import linked from '../img/linkedin-box-fill.png';
import tw from '../img/twitter-fill.png';

const Footer = () => {
    return (
        <section className="footer grid">
            <div className="grid wide">
                <div className="footer__content">
                    <div className=" footer__content-wrap row">
                        <div className="footer__logo col l-4 c-12"> 
                              <img src={footerlogo} alt="" />
                        </div>
                        {/* <div className="footer__infor mobile">
                            <p>© All right reserved 2021. </p>
                            <p>Laboon Website Demo by Laboon Designer</p>
                        </div> */}
                        <div className="footer__about col l-4 c-12 ">
                            <h4>Address</h4>
                            <div className="footer__about-address">
                                <i class="fas fa-map-marker-alt"></i><p>68 Upper Serangoon View, Singapore, 533884</p>
                            </div>
                        </div>
                        <div className="footer__about col l-3 c-12 ">
                            <h4>About</h4>
                            <ul>
                                <li>Our team</li>
                                <li>Blog</li>
                                <li>Contact us</li>
                                <li>Term of use</li>
                            </ul>
                        </div> 
                        <div className="footer__about col l-1 c-12 ">
                            <h4>Products</h4>
                            <ul >
                                <li>Elu</li>
                                <li>Need</li>
                                <li>Mall</li>
                                <li>Wallet</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__infor">
                    <div className="footer__social">

                        <img className="footer__icon-connect" src={facebook} alt="" />
                        <img className="footer__icon-connect" src={linked} alt="" />
                        <img className="footer__icon-connect" src={tw} alt="" />

                    </div>
                    <p>© 2021, Laboon. LTD. PTE ver0.5. All right reserved</p>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer
