import React from 'react'
import LogoHeader from './img/LogoHeader.png'
const Header = () => {
    return (
        <>
        <div className="header">
                <div className="grid wide">
                    <div className="header__top">
                        <div className="header__top-left">
                            <div className="header__hotline">
                                Hotline: 0123.456.789
                            </div>
                            <div className="header__social">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                            </div>
                            <div className="header__social">
                                <a href=""><i className="fab fa-telegram"></i></a>
                            </div>
                            <div className="header__social">
                                <a href=""> <i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="header__top-mid">
                            <a href="#"><img src={LogoHeader} alt="Logo"></img></a>
                        </div>
                        <div className="header__top-right">
                            <div className="header__search">
                                <input type="text" placeholder="Search..."></input>
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        
                    </div>
                    <div className="header__bottom">
                        <div className="header__bottom-navbar">
                            <ul>
                                <li className="header__nav-item active">
                                    <a href="/">HOME</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/">ABOUT US</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/">TOCKENOMIC</a>

                                </li>
                                <li className="header__nav-item">
                                    <a href="/">PROJECTS</a>

                                </li>
                                <li className="header__nav-item">
                                    <a href="/">OUR TEAM</a>

                                </li>
                                <li className="header__nav-item">
                                    <a href="/">JOIN OUR COMMUNITY</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
