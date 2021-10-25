import React from 'react'
import '../../css/Homecss/Home.css'
import ourproductv3 from "../../img/ourproductv3.png"
import itemourproduct6 from "../../img/itemourproduct6.png"
import backgroundElipItem from "../../img/backgroundElipitem.png" 
import mallItem1 from "../../img/mallItem1.png" 
import mallItem2 from "../../img/mallItem2.png" 
import mallItem3 from "../../img/mallItem3.png" 
import mallItem4 from "../../img/mallItem4.png" 
import mallItem5 from "../../img/mallItem5.png" 
import mallhover from "../../img/mallhover.png" 

export default function Ourproduct() {
    return (
        <div className="ourproducts__container grid">
            <section className="ourproducts grid">
              <div className="ourproducts__title">
                <h1>Our Products</h1>
                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
              </div>
              <div className='ourproducts__contents row'>
              <div className='ourproducts__contents-left col l-4 c-12 m-12'>
                <img src={ourproductv3} alt="" />
              </div>
              <div className='ourproducts__contents-right col l-8 c-12 m-12'>
                  <div className="ourproducts__content-infor">
                    <h1>Plaza</h1>
                    <p>The chamber of commerce allows players to exchange game items and characters with great qualities</p>
                  </div>
                  
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
            </section>
          </div>
    )
}
