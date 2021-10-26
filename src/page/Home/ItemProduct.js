import React from 'react'

const ItemProduct = ({title,img}) => {
    return (
        
        <div className=" item-product l-3 c-12">

            <img src={img} alt="" />
        </div>
    )
}

export default ItemProduct
