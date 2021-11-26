import React from 'react'
 
const Plaza = () => {
    return (
        <div className="product__mall-full grid row">
          <div className='product__mall-background'>
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-Plaza/itemMal6.webp" alt="" className="product__mall-itemMall1" />
          </div>
          <div className='product__mall-container'>
            <div className='product__mall-left'>
              <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-Plaza/itemMall.webp" alt="" className="product__mall-itemMall" />
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
              <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-Plaza/laboon_image-Home-Plaza_Group375.webp" alt="" className="product__mall-Group375" />
            </div>
          </div>
          
        </div>
    )
}

export default Plaza
