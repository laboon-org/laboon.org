import "../../App.css";
import '../../css/responsive/homeMobile.css'

import React from "react";
import Header from "../../components/Header";

// import blockchainifyfull1 from '../../img/'
import logo21 from "../../img/logo21.png";

import backgroundBlockchinHome from "../../img/backgroundBlockchain.png";

import Footer from "../../components/Footer";
//

import sung from "../../img/sung.png";
import BlockChainify from "./Blockchainify";
import Ourorientation from "./OurOrientation";
import OurProducts from "./OurProducts";

import OurPathners from "./OurPathners";
import MainProduct from "./MainProduct";
import OurCreativity from "./OurCreativity";
import Plaza from "./Plaza";
import BothProducts from "./BothProducts";

const Home = () => {
  return (
    <div>
      <Header active={"home"} logo={logo21}></Header>
      <BlockChainify img1={backgroundBlockchinHome} img2={sung} />
      <Ourorientation />
      <OurProducts />
      <OurCreativity />
      <Plaza />
      <BothProducts />
      <OurPathners />
      <Footer></Footer>
    </div>
  );
};

export default Home;
