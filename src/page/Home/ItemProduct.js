import React from 'react'
import backgrourdOurcryvity from '../../img/backgroudOurcryvity.png'
const ItemProduct = ({title,img}) => {
    return (
        <div className="item-product l-3 l0-6 c-6 m-3">
            <img className='item-product__img' src={img} alt="" />
        </div>
    )
}

export default ItemProduct
