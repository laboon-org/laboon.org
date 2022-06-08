import React from "react";
import "../css/header.css";
import "../grid.css";
import { Link } from "react-router-dom";

const navSilde = () => {
  const bars = document.querySelector(".header__bars");
  const navbar = document.querySelector(".header__nav");
  bars.addEventListener("click", () => {
    navbar.classList.toggle("nav_active");
  });
};
window.addEventListener("click", (event) => {
  navSilde();
});

const Header = ({ active }) => {
  return (
    <>
      <div className="grid">
        <section className="header">
          <div className="grid wide">
            <div className="row header__wrapper">
              <div className="header__logo col l-7 l0-7 c-11">
              <Link to="/"><img src="https://media.graphassets.com/BKYMf3aYTA677cyTS7pd" alt="Laboon"/></Link>
              </div>
              <div className="header__nav col l-5 l0-5">
                <ul>
                  <li className={`header__nav-item ${ active === "home" && "active" }`} >
                    <Link to="/">Home</Link>
                  </li>
                  <li className={`header__nav-item ${ active === "product" && "active" }`} >
                    <Link to="/product">Product</Link>
                  </li>
                  <li className={`header__nav-item ${ active === "crew" && "active" }`} >
                    <Link to="/crew">Crew</Link>
                  </li>
                  <li  className={`header__nav-item ${  active === "blog" && "active" } `} >
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="header__bars c-1">
                <i className="nav__bar-icon fas fa-bars"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
