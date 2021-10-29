import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../grid.css";
import "./product.scss";
import HeaddingSubPage from "../../components/HeaddingSubPage";
import TitleSubPage from "../../components/TitleSubPage";

// import DappsLogo from "./imgProduct/DappsLogo.png";
// import DappsLogo1 from "./imgProduct/DappsLogo1.png";
// import DappsLogo2 from "./imgProduct/DappsLogo2.png";
// import Logogame from "./imgProduct/Logogame.png";
// import productitem from "./imgProduct/productitem.png";

// import productitemactive1 from "./imgProduct/productitemactive1.png";
// import productitemactive2 from "./imgProduct/productitemactive2.png";
// import arrow from "./imgProduct/arrow.png";

import commingheo from "./imgProduct/Commingheo.png";
import Eluvescomming from "./imgProduct/Eluvescomming.png"
import Hypernoon from "./imgProduct/hyperrnoon.png"

import logo21 from "../../img/logo21.png";
import ProductItems from "./ProductItems";

import ai from "./imgProduct/ai.png";
import dn from "./imgProduct/dn.png";
import xd from "./imgProduct/xd.png";
import ae from "./imgProduct/ae.png";
import fima from "./imgProduct/Figma.png";
import Grap from "./imgProduct/GraphQL.png";
import node from "./imgProduct/NodeJS.png";
import nuxt from "./imgProduct/Nuxjs.png";
import Remo from "./imgProduct/remove.png"
import react from "./imgProduct/react.png";

const Product = () => {
  return (
    <>
      <Header active={"product"} logo={logo21}></Header>
      <HeaddingSubPage
        title={"Products"}
        desp={
          "Make use of these goods to become a citizen of the virtual kingdom."
        }
      ></HeaddingSubPage>
      <div className="grid">
        <div className="products__container">
          <TitleSubPage
            title={"Laboon Products"}
            desp={"Join our digital playground with these products"}
          ></TitleSubPage>

          <div className="grid wide">
            <div className="products__content">
              <div className="products__list-title">
                <span className="active">All</span>
                <span>DApp</span>
                <span>Game</span>
                <span>Mail</span>
              </div>
              <div className="products__list-items row">
                <ProductItems
                  img={commingheo}
                  title={"Web"}
                  mainTitle={"PLAZA"}
                  descp={
                    "Let's all go to the Phantasy Plaza together and obtain the most fabulous treasures there."
                  }
                  icon1={fima}
                  icon2={react}
                  icon3={Grap}
                  icon4={node}
                  icon5={nuxt}
                ></ProductItems>
                <ProductItems
                  img={Eluvescomming}
                  title={"Game"}
                  mainTitle={"ELUVERSE"}
                  descp={"Coming Soon !"}
                  icon1={ai}
                  icon2={xd}
                  icon3={node}
                  icon4={Grap}
                  icon5={Remo}
                ></ProductItems>
                <ProductItems
                  img={Hypernoon}
                  title={"HYPERMON"}
                  mainTitle={"PLAZA"}
                  descp={"Coming Soon !"}
                  icon1={ai}
                  icon2={xd}
                  icon3={node}
                  icon4={Grap}
                  icon5={Remo}
                ></ProductItems>
                <ProductItems
                  img={commingheo}
                  title={"NEED"}
                  mainTitle={"PLAZA"}
                  descp={
                    "Using BLE-Bluetooth Low Energy Technology, users may easily and quickly engage with others in their immediate area."
                  }
                  icon1={fima}
                  icon2={react}        
                  icon3={Grap}
                  icon4={node}
                ></ProductItems>
                <ProductItems
                  img={commingheo}
                  title={"STUTI"}
                  mainTitle={"PLAZA"}
                  descp={
                    "It is now possible for instructors and students to self-manage and to arrange timetables and study programs."
                  }
                  icon1={fima}
                  icon2={react}
                ></ProductItems>
                <ProductItems
                  img={commingheo}
                  title={"Web"}
                  mainTitle={"WALLET"}
                  descp={"Coming Soon !"}
                  icon1={fima}
                  icon2={react}        
                  icon3={Grap}                                                                   
                  icon4={node}
                ></ProductItems>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Product;
