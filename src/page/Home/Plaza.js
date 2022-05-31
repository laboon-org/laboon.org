import React from 'react'

import IMG_BG from '../../img/plaza-bg.png'
import IMG_LEFT from '../../img/plaza-left.png'
import IMG_RIGHT from '../../img/plaza-right.png'

const Plaza = () => {
    return (
        <div className="product__mall-full grid row">
          <div className='product__mall-background'>
            <img src={IMG_BG} alt="" className="product__mall-itemMall1" />
          </div>
          <div className='product__mall-container'>
            <div className='product__mall-left'>
              <img src={IMG_LEFT} alt="" className="product__mall-itemMall" />
            </div>
            <div className="product__mall-content">
              <div className='product__mall-text'>
                <h2>Plaza</h2>
                <h3>(Marketplace)</h3>
                <div className="product__mall-content-inf">
                  <p>Let’s join the Phantasy Plaza and purchase the rarest and most desirable goods with all other gamers</p>
                </div>
                <div className="wrap__angry-btn-blue">
                  <button>Let’s Exchange</button>
                </div>
              </div>
              
            </div>
            <div className='product__mall-right'>
              <img src={IMG_RIGHT} alt="" className="product__mall-Group375" />
            </div>
          </div>
          
        </div>
    )
}

export default Plaza
