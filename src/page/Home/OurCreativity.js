import React from 'react'
import productlist from '../../img/productlist.png'
import productlist1 from '../../img/productlist1.png'
import productlist2 from '../../img/productlist2.png'
import productlist3 from '../../img/productlist3.png'
import productlist4 from '../../img/productlist4.png'
import productlist5 from '../../img/productlist5.png'
import productlist6 from '../../img/productlist6.png'
import productlist7 from '../../img/productlist7.png'
import productlist8 from '../../img/x.png'
import productlist9 from '../../img/x.png'

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
              <div className='product__elu-background'>
                <img src={productlist} alt="" className="productlist-img productlist-img1" />
                <img src={productlist1} alt="" className="productlist-img productlist1" />
                <img src={productlist2} alt="" className="productlist-img productlist2" />
                <img src={productlist3} alt="" className="productlist-img productlist3" />
                <img src={productlist4} alt="" className="productlist-img productlist4" />
                <img src={productlist5} alt="" className="productlist-img productlist5" />
                <img src={productlist6} alt="" className="productlist-img productlist6" />
                <img src={productlist7} alt="" className="productlist-img productlist7" />
                <img src={productlist8} alt="" className="productlist-img productlistx" />
                <img src={productlist9} alt="" className="productlist-img productlistxleft" />
              </div>
              <div className="product__elu-content">
                <div className="productlist__title col c-12">
                  <h1>Our Creativity</h1>
                  {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
                </div>
                <div className="angry">
                  <div className="row">
                    <div className="angry__left col l-4 c-12">
                      <img src={newproductlist} alt="" className="angry__left-img1" />
                      {/* <img src={productitem5} alt=""  className="productitem5"/> */}
                    </div>
                    <div className="angry__right col l-8 c-12">
                      <div className="wrap__angry">
                        <div className="wrap__angry-wrap-item row">
                          <ItemProduct title={"Drop"} img={productitem1}></ItemProduct>
                          <ItemProduct title={"Nest"} img={productitem2}></ItemProduct>
                          <ItemProduct title={"Coming Soon"} img={productitem3}></ItemProduct>
                          <ItemProduct title={"Coming Soon"} img={productitem4}></ItemProduct>
                        </div>
                        <div className="wrap__angry-btn">
                          <img src={productitem5} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    )
}

export default OurCreativity
