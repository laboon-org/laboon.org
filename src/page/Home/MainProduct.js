import React from 'react'
import OurCreativity from './OurCreativity';
import Plaza from './Plaza';
import BothProducts from './BothProducts';

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

import makeGroupf1 from '../../img/makeGroupf1.png'
import makeGroupf2 from '../../img/makeGroupf2.png'
import makeGroupf3 from '../../img/makeGroupf3.png'
import makeGroupf4 from '../../img/makeGroupf4.png'
import makeGroupf5 from '../../img/makeGroupf5.png'
import makeGroupf6 from '../../img/makeGroupf6.png'
import makeGroupf7 from '../../img/makeGroupf7.png'
const MainProduct = () => {
    return (
        <section className="productlist grid">
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
        <div className="grid">
          <OurCreativity></OurCreativity>
          <Plaza></Plaza>
          <BothProducts></BothProducts>
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
    )
}

export default MainProduct
