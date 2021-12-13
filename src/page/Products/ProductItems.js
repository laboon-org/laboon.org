import React from 'react'

import productv5 from './imgProduct/productv5.png';
import parse from 'html-react-parser';

const ProductItems = ({title, 
                        mainTitle, 
                        descp, 
                        img,
                        refs
                        }) => {
    return (
        <>
            <div className={`products__item l-6 c-12 m-12`}>
                <div className="products__item-wrap">
                    <div className="row">
                        <div className="products__item-left l-6 c-5">
                            <img src={productv5} alt="" className="backgrourd" />
                            <img src={`${img}`} alt="" className="mainproductv5" />
                        </div>
                        <div className="products__item-right l-6 c-7">
                            <span>{title}</span>
                            <h5>{mainTitle}</h5>
                            {parse(descp)}
                            <div className="products__item-right-icon">
                            {
                                refs.map(ref=> 
                                <a href={ref.link}>
                                <img src={`${ref.image.url}`} alt="" className="products__item-inf__joint-img" />
                                </a>
                                 )  
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItems
