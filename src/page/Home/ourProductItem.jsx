import React from 'react'
import backgroundElipItem from "../../img/backgroundElipitem.png"

const OurProductItem = (props) => {
    const { item, handleActiveProduct } = props;
    return (
        <div className="ourproducts__bottom-line__item" onClick={() => handleActiveProduct(item)}>
            <div className="ourproducts__bottom-line__item-wrap">
                <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/mallhover.png" alt="" className ="backgroundElipItem mallhover mallhover1"/>
                <img src={backgroundElipItem} alt="" className ="backgroundElipItem backgroundElipItem-wrap" />
                <img src={item.img} alt="" className ="mallIMain ourproduct__img-item" />
            </div>
            <h1>{item.title}</h1>
        </div>
    )
}

export default OurProductItem