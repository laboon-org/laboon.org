
import '../../App.css'

import React from 'react'
import Header from './../../components/Header';

// import blockchainifyfull1 from '../../img/'
import logo21 from '../../img/logo21.png'



import backgroundBlockchinHome from '../../img/backgroundBlockchain.png'


import card1 from '../../img/card1.png'
import card2 from '../../img/card2.png'
import card3 from '../../img/card3.png'

import card4 from '../../img/card4.png'

import about1 from '../../img/about1.png'
import vector2 from '../../img/Vector2.png'
import aboutline from '../../img/aboutline.png'
import line2 from '../../img/line2.png'
import newproductlist from '../../img/newproductlist.png'

import ourpatner1 from '../../img/ourpatner1.png'
import ourpatner2 from '../../img/ourpatner2.png'
import ourpatner3 from '../../img/ourpatner3.png'
import ourpatner4 from '../../img/ourpatner4.png'
import ourpatner5 from '../../img/ourpatner5.png'
import ourpatner6 from '../../img/ourpatner6.png'
import productlist from '../../img/productlist.png'
import productlist1 from '../../img/productlist1.png'
import productlist2 from '../../img/productlist2.png'
import productlist3 from '../../img/productlist3.png'
import productlist4 from '../../img/productlist4.png'
import productlist5 from '../../img/productlist5.png'
import productlist6 from '../../img/productlist6.png'
import productlist7 from '../../img/productlist7.png'


import makeGroupf1 from '../../img/makeGroupf1.png'
import makeGroupf2 from '../../img/makeGroupf2.png'
import makeGroupf3 from '../../img/makeGroupf3.png'
import makeGroupf4 from '../../img/makeGroupf4.png'
import makeGroupf5 from '../../img/makeGroupf5.png'
import makeGroupf6 from '../../img/makeGroupf6.png'
import makeGroupf7 from '../../img/makeGroupf7.png'




import Groudabout2 from '../../img/Groupabout2.png'

import Groudaboutus from '../../img/GroupAboutus.png'
import dotabout from '../../img/dot2.png'
import lineabout from '../../img/lineabout.png'
import lineabout1 from '../../img/lineabout1.png'
import lineabout3 from '../../img/lineabout2.png'
import GroudaboutusDot from '../../img/Groupdotabout.png'
import Footer from './../../components/Footer';

// 

import ourproductv3 from "../../img/ourproductv3.png"


import itemourproduct6 from "../../img/itemourproduct6.png"

import backgroundElipItem from "../../img/backgroundElipitem.png" 

import mallItem1 from "../../img/mallItem1.png" 
import mallItem2 from "../../img/mallItem2.png" 
import mallItem3 from "../../img/mallItem3.png" 
import mallItem4 from "../../img/mallItem4.png" 
import mallItem5 from "../../img/mallItem5.png" 
import mallhover from "../../img/mallhover.png" 


import productitem1 from "../../img/productitem1.png" 

import ItemProduct from './ItemProduct';

import itemMall from "../../img/itemMall.png" 
import itemMall2 from "../../img/itemMall2.png" 
import itemMall3 from "../../img/itemMall3.png" 
import itemMall4 from "../../img/itemMall4.png" 


import hypermon from "../../img/hypermon.png" 

import sung from "../../img/sung.png"

const Home = () => {
    return (
        <div>
        <Header active = {"home"} logo={logo21}></Header>
        <div className="container__grid grid">
          <div className="container grid wide">
            
            <section className="blockchainify ">
              <div className="blockchainify__top">
                <h1>Blockchainify</h1>
                <p>Digiverse - Where games become the places that players can create and own their gamified economies.</p> 
              </div>
              <div className="blockchainify__bottom">
              
                <img src={backgroundBlockchinHome} alt="" className="blockchainify__bottom-img blockchainify--img1" />
                <img src={sung} alt="" className="blockchainify__bottom-img blockchainify--img2" />
              </div>
            </section>
          </div>
        </div>
        <div className="ahoutus__container grid">
          <img src={about1} alt="" className="about-img about1" />
          <img src={vector2} alt="" className="about-img about2" />
          <img src={aboutline} alt="" className="about-img aboutline" />
          <img src={line2} alt="" className="about-img line2" />
          {/* <img src={aboutbot1} alt="" className="about-img aboutbot1" /> */}
          <img src={lineabout} alt="" className="about-img lineabout" />
          <img src={lineabout1} alt="" className=" lineabout1" />
          <img src={lineabout3} alt="" className=" lineabout3" />
          <img src={Groudaboutus} alt="" className="about-img Groupabout1" />
          <section className="aboutus grid wide">
            <img src={GroudaboutusDot} alt="" className="about-img Groupaboutdot" />
            <img src={dotabout} alt="" className=" lineabout2" />
            <div className="row">
              <div className="aboutus__left col l-3 c-12">
                <div className="aboutus__left-wrapper">
                  <h1>Our Orientation</h1>
                  <p>Our desire is to build the</p>
                  <p>foundation of the future</p>
                  <p>where both the physical</p>
                  <p>and virtual worlds are one</p>
                </div>
              </div>
              <div className="aboutus__right l-9">
                <div className="row no-gutters">
                  <div className="aboutus__right-1 col l-6 c-12 m-12 ">
                    <div className="aboutus__card aboutus__card-mt col c-12">
                      <img src={card1} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Liberty</span>
                        <p>The patrons will be in the custody of their own data stored in the cloud.</p>
                      </div>
                    </div>
                    <div className="aboutus__card col c-12 m-12">
                      <img src={card2} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Community Driven</span>
                        <p>Our denizens have a genuine stake in the products they utilize. The cohesive psyche of the nest is now unshackled!</p>
                      </div>
                    </div>
                  </div>
                  <div className="aboutus__right-2 col l-6 c-12 m-12">
                    <div className="aboutus__card aboutus__card-mt col c-12">
                      <img src={card3} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Borderless</span>
                        <p>Lean on furthering our targets. Passion is meant for bravo.</p>
                      </div>
                    </div>
                    <div className="aboutus__card col c-12 m-12">
                     
                      <img src={card4} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Synthe</span>
                        <p>Insights on the cutting edge fit great when blended in unusual ways.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
            <img src={Groudabout2} alt="" className="Groupabout2" />
        </div>
        <div className="ourproducts__container grid">
          <section className="ourproducts grid wide">
            <div className="ourproducts__title">
              <h1>Our Products</h1>
              {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
            </div>
            <div className="ourproducts__bottom">
              <div className="row">
                <div className="ourproducts__content col l-12 c-12 m-12"></div>
                  <div className="ourproducts__content-wrap">
                    <img src={ourproductv3} alt="" />

                    <div className="ourproducts__content-infor">
                        <h1>MALL</h1>
                        <p>The chamber of commerce allows players to exchange game items and characters with great qualities</p>
                    </div>
                  </div>
              </div>
            </div>
          </section>
          <div className="grid wide">
            <div className="ourproducts__bottom-line">
              <div className="ourproducts__bottom-line__list">
                <div className="ourproducts__bottom-line__item">

                  <div className="ourproducts__bottom-line__item-wrap">
                    <img src={mallhover} alt="" className ="backgroundElipItem mallhover mallhover1"/>

                    <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap" />
                    <img src={mallItem1} alt="" className ="mallIMain" />
                  </div>
                  <h1>dApp</h1>
                </div>
                <div className="ourproducts__bottom-line__item">
                  <div className="ourproducts__bottom-line__item-wrap">
                    <img src={mallhover} alt="" className ="backgroundElipItem mallhover mallhover2"/>
                    <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap"/>
                    <img src={mallItem2} alt="" className ="mallIMain" />
                  </div>
                  <h1>Game</h1>

                  {/* <img src={itemourproduct2} alt="" /> */}
                </div>
                <div className="ourproducts__bottom-line__item">
                  <div className="ourproducts__bottom-line__item-wrap">

                    <img src={mallhover} alt="" className ="backgroundElipItem mallhover mallhover3"/>

                    <img src={backgroundElipItem} alt="" className=" backgroundElipItem backgroundElipItem-wrap"/>
                    <img src={mallItem3} alt="" className="itemourproduct3main mallIMain" />
                  </div>
                  <h1>Mall</h1>

                  {/* <img src={itemourproduct3} alt="" /> */}

                </div>
                <div className="ourproducts__bottom-line__item">
                  <div className="ourproducts__bottom-line__item-wrap">

                    <img src={mallhover} alt="" className ="backgroundElipItem mallhover mallhover4"/>

                    <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap" />
                    <img src={mallItem4} alt="" className ="mallIMain" />
                  </div>
                  <h1>Wallet</h1>

                  {/* <img src={itemourproduct4} alt="" /> */}
                </div>
                <div className="ourproducts__bottom-line__item">
                  <div className="ourproducts__bottom-line__item-wrap">
                    <img src={mallhover} alt="" className ="backgroundElipItem mallhover mallhover5"/>

                    <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap"/>
                    <img src={mallItem5} alt=""  className ="mallIMain"/>
                  </div>
                  <h1>Coming soon</h1>

                  {/* <img src={itemourproduct5} alt="" /> */}
                </div>
              </div>
              <div className="ourproducts__bottom-line__mid-item">
                  <img src={itemourproduct6} alt=""  />
              </div>
            </div>
          </div>
        </div>
      <section className="productlist grid">
        <img src={productlist} alt="" className="productlist-img productlist-img1" />
        <img src={productlist1} alt="" className="productlist-img productlist1" />
        <img src={productlist2} alt="" className="productlist-img productlist2" />
        <img src={productlist3} alt="" className="productlist-img productlist3" />
        <img src={productlist4} alt="" className="productlist-img productlist4" />
        <img src={productlist5} alt="" className="productlist-img productlist5" />
        <img src={productlist6} alt="" className="productlist-img productlist6" />
        <img src={productlist7} alt="" className="productlist-img productlist7" />
        <div className="grid">
          <div className="product__elu-full grid">
              <div className="grid wide">
                <div className="productlist__title col c-12">
                  <h1>Product list</h1>
                  {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
                </div>
                <div className="angry">
                  <div className="row">
                    <div className="angry__left col l-4 c-12">
                      <img src={newproductlist} alt="" className="angry__left-img1" />
                      {/* <img src={productitem5} alt=""  className="productitem5"/> */}
                    </div>
                    <div className="angry__right roate col l-8 c-12">
                      <h1>Elu Verse</h1>
                      <div className="wrap__angry row">
                        <div className="wrap__angry-wrap-item">
                          <ItemProduct title={"Drop"} img={productitem1}></ItemProduct>
                          <ItemProduct title={"Nest"} img={productitem1}></ItemProduct>
                          <ItemProduct title={"Coming Soon"} img={productitem1}></ItemProduct>
                          <ItemProduct title={"Coming Soon"} img={productitem1}></ItemProduct>
                        </div>
                      </div>
                      <div className="wrap__angry-btn">
                      <a href="https://playelu.io/">
                      <button>Let's explore Elu world</button>  
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="product__mall-full grid">
              <div className="grid wide">
                <div className="product__mall-content">
                  <img src={itemMall} alt="" className="product__mall-itemMall" />
                  <img src={itemMall2} alt="" className="product__mall-itemMall2" />
                  <img src={itemMall4} alt="" className="product__mall-itemMall3" />

                  <img src={itemMall3} alt="" className="product__mall-itemMall3" />
                  <h1>Mall</h1>
                  <div className="product__mall-content-inf">
                    <p>Let’s join the Phantasy Plaza and purchase the rarest and most desirable goods with all other gamers</p>
                    
                  </div>
                  <div className="wrap__angry-btn-blue">
                    <button>Join now</button>
                  </div>
                </div>
              </div>
          </div>

          <div className="product__both grid wide">
            <div className="row ">
              <div className="product__hypermon col l-6 c-12">
                  <div className="product__hypermon-wrap">
                    <h2>Hypermon</h2>
                    <img src={hypermon} alt="" />
                    <div className="product__hypermon-wrap__inf">
                      <p>Plus having fun and making profits, this is an action-adventure game with combat elements. It’s more than simply a game; it's a land where gamers can meet and mingle with one another.</p>
                     
                    </div>
                    <div className="product__both-btn hypermon">
                      <button>Join now</button>
                    </div>
                  </div>
              </div>
              <div className="product__pepeper col l-6 c-12">
                  <div className="product__hypermon-wrap">
                    <h2>Pepper Attack</h2>
                    <img src={hypermon} alt="" />
                    <div className="product__hypermon-wrap__inf">
                      <p>Pepper Attack is a 10,000 NFT collection that comes with an actual play-to-earn game. It is one of those rare community-based projects where players and game developers interact regularly to exchange ideas, give feedback and have fun together.</p>
                    </div>
                    <div className="product__both-btn pepper">
                      <button>Join now</button>
                    </div>
                  </div>
              </div>
            </div>
            <div className="product__seemore">
              {/* <h1>See More</h1> */}
            </div>
            
          </div>
          </div>

        {/* <img src={makeg1} alt="" className="productlist-img makeg1" /> */}
        {/* <img src={makeg2} alt="" className="productlist-img makeg2" /> */}

        <img src={makeGroupf7} alt="" className="productlist-img makeg2 makeGroupf7" />
        <img src={makeGroupf1} alt="" className="productlist-img makeg2 makeGroupf1" />
        <img src={makeGroupf2} alt="" className="productlist-img makeg1 makeGroupf2" />
        <img src={makeGroupf3} alt="" className="productlist-img makeg2 makeGroupf3" />
        <img src={makeGroupf5} alt="" className="productlist-img makeg1 makeGroupf5" />
        <img src={makeGroupf6} alt="" className="productlist-img makeg1 makeGroupf6" />
        <img src={makeGroupf4} alt="" className="productlist-img makeg1 makeGroupf4" />


      </section>
      <section className="ourpatners grid">
        <div className="ourpatners__content grid wide">
          <h1>Our Patners</h1>
          <div className="row ourpatners__items-wrap">
              <div className="ourpatner__item l-2 c-6">
                <img src={ourpatner1} alt="" className=" "/>
              </div>
              <div className="ourpatner__item l-2 c-6">
                <img src={ourpatner2} alt="" className=" "/>
              </div>
              <div className="ourpatner__item pt l-2 c-6">
                <img src={ourpatner3} alt="" className=" "/>
              </div>
              <div className="ourpatner__item l-2 c-6">
                <img src={ourpatner4} alt="" className=" "/>
              </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      </div>
    )
}

export default Home
