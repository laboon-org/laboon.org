import '../../App.css'
import React from 'react'
import Header from '../../components/Header';
import logo21 from '../../img/logo21.png'
import ourpatner1 from '../../img/ourpatner1.png'
import ourpatner2 from '../../img/ourpatner2.png'
import ourpatner3 from '../../img/ourpatner3.png'
import ourpatner4 from '../../img/ourpatner4.png'
import ourpatner5 from '../../img/ourpatner5.png'
import ourpatner6 from '../../img/ourpatner6.png'
import ourpatner7 from '../../img/logoHypermon.png'
import ourpatner8 from '../../img/ourpatner7.png'
import Footer from './../../components/Footer';
import OurCreativity from './OurCreativity';
import Blockchainify from './Blockchainify';
import OurOrientation from './OurOrientation';
import Ourproduct from './Ourproduct';
import Plaza from './Plaza';
import Product__both from './Product__both';

const Home = () => {
    return (
        <div>
        <Header active = {"home"} logo={logo21}></Header>
        <div className='body'>
          <Blockchainify />
          <OurOrientation />
          <Ourproduct />
          <OurCreativity />
          <Plaza />
          <Product__both />
          <section className="ourpatners">
          <div className="ourpatners__content">
            <h1>Our Partners</h1>
            <div className="row ourpatners__items-wrap">
                <div className="ourpatner__item l-1 c-6">
                  <img src={ourpatner1} alt="" className=" "/>
                </div>
                <div className="ourpatner__item l-2 c-6">
                  <img src={ourpatner2} alt="" className=" "/>
                </div>
                <div className="ourpatner__item l-2 c-4 mt">
                  <img src={ourpatner3} alt="" className=" "/>
                </div>
                <div className="ourpatner__item l-2 c-6">
                  <img src={ourpatner4} alt="" className=" "/>
                </div>
                <div className="ourpatner__item l-3 c-6">
                  <img src={ourpatner7} alt="" className=" "/>
                </div>
                <div className="ourpatner__item l-1 c-6">
                  <img src={ourpatner8} alt="" className=" "/>
                </div>
            </div>
          </div>
        </section>
        </div>
      <Footer></Footer>
      </div>
    )
}

export default Home