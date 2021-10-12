import React from 'react'
import productitem from './imgProduct/productitem.png'
import arrow from './imgProduct/arrow.png'


import productitemactive1 from './imgProduct/productitemactive1.png'
import productitemactive2 from './imgProduct/productitemactive2.png'

import ai from './imgProduct/ai.png'
import dn from './imgProduct/dn.png'
import xd from './imgProduct/xd.png'
import ae from './imgProduct/ae.png'



const ProductItems = ({title, descp,img}) => {
    return (
        <>
            <div className={`products__item col l-4`}>
                <img src={productitemactive2} alt="" className="products__item-img__active" />
                <img src={productitemactive1} alt="" className="products__item-img__active" />

                <div className="products__item-wrap">
                    <img src={img} alt="" className="products__item-img" />
                    <div className="products__item-inf">
                        <h1>{title}</h1>
                        <p>{descp}</p>
                        <div className="products__item-inf__joint ">
                            <img src={ai} alt="" className="products__item-inf__joint-img" />
                            <img src={dn} alt="" className="products__item-inf__joint-img" />
                            <img src={xd} alt="" className="products__item-inf__joint-img" />
                            <img src={ae} alt="" className="products__item-inf__joint-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItems
