import Header from "../../Components/Headerlaboon"; 
import "../../App.css";
import "../../Home.css";
import "../../css/responsive/homeMobile.css";
import React from "react";
import Footer from "../../Components/Footer";
import BlockChainify from "./Blockchainify";
import Ourorientation from "./OurOrientation";
import OurProducts from "./OurProducts";
import OurPathners from "./OurPathners";
import OurCreativity from "./OurCreativity";
import BothProducts from "./BothProducts";
import Plaza from "./Plaza";
import { useEffect, useState } from "react";
import axios from "axios";
import logo21 from "../../img/logo21.png";
import backgroundBlockchinHome from "../../img/backgroundBlockchain.webp";
import sung from "../../img/sung.png";

const apiourpartner ="https://api-ap-northeast-1.graphcms.com/v2/ckx41ssik336s01w89hsk0rf5/master";

const FILMS_QUERY = `{
  partners{
    link  
    position 
    image{
      url  
    }
  }
}
`;
const Home = () => {
  const [ourpartner, setOurpartner] = useState([]);
  useEffect(() => {
    axios({
      url: apiourpartner,
      method: "POST",
      data: {
        query: FILMS_QUERY,
      },
    })
      .then((response) => setOurpartner(response.data.data.partners))
      .catch((err) => console.error(err));
  }, []);
  // console.log(ourpartner);
  return (
    <div>
      <Header active={"home"} logo={logo21}></Header>
      <BlockChainify img1={backgroundBlockchinHome} img2={sung} />
      <Ourorientation />
      <OurProducts />
      <OurCreativity />
      <Plaza />
      <BothProducts />
      <OurPathners ourpartner={ourpartner}></OurPathners>
      <Footer></Footer>
    </div>
  );
};

export default Home;
