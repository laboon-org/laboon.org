import React from 'react'

const ItemProduct = ({title,img}) => {
    return (
        
        <div className=" l-3 ">
            <div className="wrap__angry-item">
                    <img src={img} alt="" /> 
                
            </div>
            {/* <div className="wrap__angry-item">
                <div className="angry-item__wrap">
                    <img src={img} alt="" />
                    <h4>{title}</h4>
                   
                </div>
            </div> */}

        </div>
    )
}

export default ItemProduct
