import React from 'react'
import Group235 from '../img/Group235.png'
import arrow from '../img/arrow-left-s-line.png'
import '../grid.css';
import '../css/componentSubPage.scss';
import '../css/responsive/responsiveprocrew.css';

const HeaddingSubPage = ({title,desp}) => {
    return (
        <>
            <div className="grid wide">
                <div className="product__heading row">
                    <div className="product__heading-right col l-6 c-12 m-12">
                        <div className="product__heading-wrap">
                            <h1>{title}</h1>
                            <div className="product__heading-link">
                                <p>{desp}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-6 c-12 m-12">
                        <img src={Group235} alt="" className="group235" />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HeaddingSubPage
