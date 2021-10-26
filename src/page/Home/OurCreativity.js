import React from 'react'

import productitem1 from "../../img/productitem1.png" 
import productitem2 from "../../img/productitem2.png" 
import productitem3 from "../../img/productitem3.png" 
import productitem4 from "../../img/productitem4.png" 
import productitem5 from "../../img/productitem5.png" 
import newproductlist from '../../img/newproductlist.png'

import ItemProduct from './ItemProduct';
const OurCreativity = () => {
    return (
        <div className="product__elu-full grid">
              <div className="grid wide">
                <div className="productlist__title col c-12">
                  <h1>Our Creativity</h1>
                  {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
                </div>
                <div className="angry">
                  <div className="row">
                    <div className="angry__left col l-1 c-12">
                      <img src={newproductlist} alt="" className="angry__left-img1" />
                      {/* <img src={productitem5} alt=""  className="productitem5"/> */}
                    </div>
                    <div className="angry__right roate col l-11 c-12">
                      <div className="wrap__angry">
                        <div className="wrap__angry-wrap-item row">
                          <ItemProduct title={"Drop"} img={productitem1}></ItemProduct>
                          <ItemProduct title={"Nest"} img={productitem2}></ItemProduct>
                          <ItemProduct title={"Coming Soon"} img={productitem3}></ItemProduct>
                          <ItemProduct title={"Coming Soon"} img={productitem4}></ItemProduct>
                        </div>
                      </div>
                      <div className="wrap__angry-btn">
                        <img src={productitem5} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    )
}

export default OurCreativity
