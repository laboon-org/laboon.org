import React from "react";

import parse from "html-react-parser";

const ProductItems = ({ title, mainTitle, descp, img, refs }) => {
  return (
    <>
      <div className={`products__item l-6 c-12 m-12`}>
        <div className="products__item-wrap">
          <div className="row">
            <div className="products__item-left l-6 c-5">
              <img src="https://media.graphassets.com/hdueuD3oRISJvfHuI7P5" alt="" className="backgrourd" />
              <img src={`${img}`} alt="" className="mainproductv5" />
            </div>
            <div className="products__item-right l-6 c-7">
              <span>{title}</span>
              <h5>{mainTitle.toUpperCase()}</h5>
              {parse(descp)}
              <div className="products__item-right-icon">
                {refs.map((ref, index) => (
                  <a key={index} href={ref.link}>
                    <img
                      
                      src={`${ref.image.url}`}
                      alt=""
                      className="products__item-inf__joint-img"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
