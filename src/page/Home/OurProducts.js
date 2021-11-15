import React from 'react'

import ourproductv3 from "../../img/ourproductv3.png"
import itemourproduct6 from "../../img/itemourproduct6.png"
import backgroundElipItem from "../../img/backgroundElipitem.png" 

const OurProducts = () => {
    return (
        <div className="ourproducts__container grid">
          <section className="ourproducts">
            <div className="ourproducts__title">
              <h1>Our Products</h1>
              {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
            </div>
            <div className="ourproducts__bottom">
              <div className="row">
                <div className="ourproducts__bottom-img col l-5 l0-12 c-12">
                  <img src={ourproductv3} alt="" />
                </div>
                <div className="ourproducts__bottom-inf col l-7 l0-12 c-12">
                  <div className="ourproducts__bottom-inf-wrap">
                    <h2>PLAZA</h2>
                    <div className="ourproducts__bottom-inf-p">
                      <p>The chamber of commerce allows players to exchange game items and characters with great qualities</p>
                    </div>
                  </div>
                  <div className="ourproducts__bottom-line">
                    <div className="ourproducts__bottom-line__list">
                      <div className="ourproducts__bottom-line__item">
                        <div className="ourproducts__bottom-line__item-wrap">
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallhover.png" alt="" className ="backgroundElipItem mallhover mallhover1"/>
                          <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap" />
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallItem1.png" alt="" className ="mallIMain" />
                        </div>
                        <h1>dApps</h1>
                      </div>
                      <div className="ourproducts__bottom-line__item">
                        <div className="ourproducts__bottom-line__item-wrap">
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallhover.png" alt="" className ="backgroundElipItem mallhover mallhover2"/>
                          <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap"/>
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallItem2.png" alt="" className ="mallIMain" />
                        </div>
                        <h1>Games</h1>
                      </div>
                      <div className="ourproducts__bottom-line__item">
                        <div className="ourproducts__bottom-line__item-wrap">
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallhover.png" alt="" className ="backgroundElipItem mallhover mallhover3"/>
                          <img src={backgroundElipItem} alt="" className=" backgroundElipItem backgroundElipItem-wrap"/>
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallItem3.png" alt="" className="itemourproduct3main mallIMain" />
                        </div>
                        <h1>Plaza</h1>
                      </div>
                      <div className="ourproducts__bottom-line__item">
                        <div className="ourproducts__bottom-line__item-wrap">
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallhover.png" alt="" className ="backgroundElipItem mallhover mallhover4"/>
                          <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap" />
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallItem4.png" alt="" className ="mallIMain" />
                        </div>
                        <h1>Wallet</h1>
                      </div>
                      <div className="ourproducts__bottom-line__item">
                        <div className="ourproducts__bottom-line__item-wrap">
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallhover.png" alt="" className ="backgroundElipItem mallhover mallhover5"/>
                          <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap"/>
                          <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallItem5.png" alt=""  className ="mallIMain"/>
                        </div>
                        <h1>Coming soon</h1>
                    </div>
                    <div className="ourproducts__bottom-line__mid-item">
                      <img src={itemourproduct6} alt=""  />
                    </div>
                  </div>
            </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default OurProducts
