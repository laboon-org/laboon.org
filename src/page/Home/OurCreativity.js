import React from 'react'
import '../../css/Homecss/Home.css'

import productlist1 from '../../img/productlist1.png'
import productlist2 from '../../img/productlist2.png'
import productlist3 from '../../img/productlist3.png'
import productlist4 from '../../img/productlist4.png'
import productlist5 from '../../img/productlist5.png'
import productlist6 from '../../img/productlist6.png'
import productlist7 from '../../img/productlist7.png'
import productlist8 from '../../img/x.png'
import newproductlist from '../../img/newproductlist.png'
import productitem1 from "../../img/productitem1.png" 
import productitem2 from "./ProductEluimg/producteluItem2.png" 
import productitem3 from "./ProductEluimg/producteluItem3.png" 
import productitem4 from "./ProductEluimg/producteluItem4.png" 
import ItemProduct from './ItemProduct'
import productElu from './ProductEluimg/productElu1.png'
import producteluButton from './ProductEluimg/producteluButton.png'


export default function OurCreativity() {
    return (
        <section className="productlist grid">
            <div className="product__elu-full grid">
                <div className='product__elu-background'>
                    <img src={productElu} alt="" className="productlist-img productlist-img1" />
                    <img src={productlist1} alt="" className="productlist-img productlist1" />
                    <img src={productlist2} alt="" className="productlist-img productlist2" />
                    <img src={productlist3} alt="" className="productlist-img productlist3" />
                    <img src={productlist4} alt="" className="productlist-img productlist4" />
                    <img src={productlist5} alt="" className="productlist-img productlist5" />
                    <img src={productlist6} alt="" className="productlist-img productlist6" />
                    <img src={productlist7} alt="" className="productlist-img productlist7" />
                    <img src={productlist8} alt="" className="productlist-img productlist8" />
                </div>
                <div className="product__elu-content">
                    <div className="productlist__title col l-12 c-12 m-12">
                    <h1>Our Creativity</h1>
                    {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
                    </div>
                    <div className="angry">
                    <div className="row">
                        <div className="angry__left col l-4 c-12 m-12">
                            <img src={newproductlist} alt="" className="angry__left-img1" />
                        </div>
                        <div className="angry__right col l-8 c-12 m-12">
                            <div className="wrap__angry row">
                                <div className="wrap__angry-wrap-item col">
                                <ItemProduct img={productitem1}></ItemProduct>
                                <ItemProduct img={productitem2}></ItemProduct>
                                <ItemProduct img={productitem3}></ItemProduct>
                                <ItemProduct img={productitem4}></ItemProduct>
                                </div>
                                <div className="wrap__angry-btn">
                                <a href="https://playelu.io/">
                                <img src={producteluButton} /> 
                                </a>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
