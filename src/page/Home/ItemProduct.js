import React from 'react'

const ItemProduct = ({title,img}) => {
    return (
        <div className=" l-3 c-12 m-6">
            <div className="wrap__angry-item">
                <div className="angry-item__wrap">
                    <img src={img} alt="" />
                    <h4>{title}</h4>
                   
                </div>
            </div>

        </div>
    )
}

export default ItemProduct
