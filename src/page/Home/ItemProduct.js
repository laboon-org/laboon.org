import React from 'react'

const ItemProduct = ({title,img}) => {
    return (
        <div className="item-product l-3 l0-6 c-6 m-12">
            <img className='item-product__img' src={img} alt="" />
        </div>
    )
}

export default ItemProduct
