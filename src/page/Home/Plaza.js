import React from 'react'
import '../../css/Homecss/Home.css'
import ellipse91 from '../../img/ellipse91.png'
import ellipse92 from '../../img/Ellipse92.png'
import ellipse93 from '../../img/ellipse93.png'
import ellipse94 from './ProductEluimg/ellipse94.png'
import itemMall from "../../img/itemMall.png" 
import itemMall2 from "../../img/itemMall2.png" 
import itemMall3 from "../../img/itemMall3.png" 
import itemMall5 from './ProductEluimg/itemMall5.png'

export default function Plaza() {
    return (
        <div className="product__mall-full grid">
            <div className='product__mall-background'>
                  <img src={ellipse91} alt="" className="product__mall-ellipse91" />
                  <img src={ellipse92} alt="" className="product__mall-ellipse92" />
                  <img src={itemMall} alt="" className="product__mall-itemMall" />
                  <img src={itemMall2} alt="" className="product__mall-itemMall2" />
                  {/* <img src={itemMall4} alt="" className="product__mall-itemMall3" /> */}
                  <img src={itemMall3} alt="" className="product__mall-itemMall3" />
                  <img src={ellipse93} alt="" className="product__mall-ellipse93" />
                  <img src={ellipse94} alt="" className="product__mall-ellipse94" />
                  <img src={itemMall5} alt="" className="product__mall-itemMall5" />
            </div>
            <div className="product__mall-content">
                  <div className="product__mall-content-inf">
                    <h1>Plaza</h1>
                    <p>Let’s join the Phantasy Plaza and purchase the rarest and most desirable goods with all other gamers</p>
                    <div className="wrap__angry-btn-blue">
                      <button>Join now</button>
                    </div>
                  </div>
            </div>
          </div>
    )
}
