import React from 'react'
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
                    <div className="col l-6 c-12 m-12 product__heading-img">
                        <img src="https://media.graphassets.com/rPFdBHPARyxaMvV5mnSI" alt="Laboon Pig" className="group235" />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HeaddingSubPage;
