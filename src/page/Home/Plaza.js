import React from 'react'
import itemMall from "../../img/itemMall.png" 

import itemMall1 from "../../img/itemMall6.png" 
import Group375 from "../../img/Group375.png" 
const Plaza = () => {
    return (
        <div className="product__mall-full grid">
          <div className='product__mall-left'>
            <img src={itemMall} alt="" className="product__mall-itemMall" />
            <img src={itemMall1} alt="" className="product__mall-itemMall1" />
          </div>
          <div className="product__mall-content">
            <h2>Plaza</h2>
            <h3>( Market Place )</h3>
            <div className="product__mall-content-inf">
              <p>Let’s join the Phantasy Plaza and purchase the rarest and most desirable goods with all other gamers</p>
            </div>
            <div className="wrap__angry-btn-blue">
              <button>Let’s Exchange</button>
            </div>
          </div>
          <div className='product__mall-right'>
            <img src={Group375} alt="" className="product__mall-Group375" />
          </div>
        </div>
    )
}

export default Plaza
