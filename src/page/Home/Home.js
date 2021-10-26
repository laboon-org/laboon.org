
import '../../App.css'

import React from 'react'
import Header from './../../components/Header';

// import blockchainifyfull1 from '../../img/'
import logo21 from '../../img/logo21.png'



import backgroundBlockchinHome from '../../img/backgroundBlockchain.png'

import Footer from './../../components/Footer';

// 

import sung from "../../img/sung.png"
import BlockChainify from './BlockChainify';
import Ourorientation from './Ourorientation';
import OurProducts from './OurProducts';

import OurPathners from './OurPathners';
import MainProduct from './MainProduct';

const Home = () => {
    return (
      <div>
        <Header active = {"home"} logo={logo21}></Header>
        <BlockChainify img1={backgroundBlockchinHome} img2={sung}></BlockChainify>
        <Ourorientation></Ourorientation>
        <OurProducts></OurProducts>
        <MainProduct></MainProduct>
        <OurPathners></OurPathners>
        <Footer></Footer>
      </div>
    )
}

export default Home
