import React from 'react'
import Group235 from '../img/Group235.png'
import arrow from '../img/arrow-left-s-line.png'
import '../grid.css';
import '../css/componentSubPage.scss'

const HeaddingSubPage = ({title}) => {
    return (
        <>
            <div className="grid wide">
                <div className="product__heading row">
                    <div className="product__heading-right col l-6">
                        <div className="product__heading-wrap">
                            <h1>{title}</h1>
                            <div className="product__heading-link">
                                <span>Home</span>
                                <div className="product__heading-Link-page">
                                    <img src={arrow} alt="" /> <span>{title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-6">
                        <img src={Group235} alt="" className="group235" />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HeaddingSubPage
