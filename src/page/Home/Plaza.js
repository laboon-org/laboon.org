import React from 'react'
import itemMall from "../../img/itemMall.png" 
import itemMall2 from "../../img/itemMall2.png" 
import itemMall3 from "../../img/itemMall3.png" 
import itemMall4 from "../../img/itemMall4.png" 

import itemMal5 from "../../img/itemMall5.png" 
import itemMal6 from "../../img/itemMall6.png" 
import itemMall7 from "../../img/itemMall7.png" 
import itemMall8 from "../../img/itemMall8.png" 

import Group374 from "../../img/Group374.png" 
import Group375 from "../../img/Group375.png" 
const Plaza = () => {
    return (
        <div className="product__mall-full grid">
            <img src={itemMall7} alt="" className="product__mall-itemMall7" />

              <div className="grid wide">
                <div className="product__mall-content">

                  <img src={itemMall2} alt="" className="product__mall-itemMall2" />
                  <img src={itemMall} alt="" className="product__mall-itemMall" />
                  <img src={itemMall4} alt="" className="product__mall-itemMall3" />

                  <img src={itemMall8} alt="" className="product__mall-itemMall8" />
                  <img src={itemMal5} alt="" className="product__mall-itemMall5" />

                  <img src={itemMall3} alt="" className="product__mall-itemMall3" />
                  <img src={Group374} alt="" className="product__mall-Group374" />

                  <h2>Plaza</h2>
                  <h3>( Market Place )</h3>
                  <div className="product__mall-content-inf">
                    <p>Let’s join the Phantasy Plaza and purchase the rarest and most desirable goods with all other gamers</p>
                  </div>

                  <div className="wrap__angry-btn-blue">
                    <button>Let’s Exchange</button>
                  </div>
                <img src={Group375} alt="" className="product__mall-Group375" />

                </div>

              </div>
              <img src={itemMal6} alt="" className="product__mall-itemMall6" />
          </div>
    )
}

export default Plaza
