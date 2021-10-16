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
                        <div className="footer__about col l-4 c-12">
                            <h4>About</h4>
                            <ul>
                                <div className="c-6 l-5">
                                    <li>Our team</li>
                                    <li>Blog</li>
                                </div>
                                <div className="c-6 l-5">
                                    <li>Contact us</li>
                                    <li>Term of use</li>
                                </div>
                            </ul>
                        </div> 
                        <div className="footer__about col l-4 c-12">
                            <h4>Products</h4>
                            <ul >
                                <div className="c-4">
                                    <li>Elu</li>
                                    <li>Need</li>
                                </div>
                                <div className="c-5">
                                    <li>Mall</li>
                                    <li>Wallet</li>
                                </div>
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
                    <p>© All right reserved 2021. Laboon Website Demo by Laboon Designer</p>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer
