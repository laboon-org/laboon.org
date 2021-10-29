import React from "react";
import productv5 from "./imgProduct/productv5.png";
 
const ProductItems = ({
  title,
  mainTitle,
  descp,
  img,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) => {
  return (
    <>
      <div className={`products__item l-6`}>
        <div className="row">
          <div className="products__item-left l-6">
            <img src={productv5} alt="" className="backgrourd" />
            <img src={img} alt="" className="mainproductv-item-img"/>
          </div>
          <div className="products__item-right l-6">
            <span>{title}</span>
            <h5>{mainTitle}</h5>
            <p>{descp}</p>
            <div className="products__item-right-icon">
              <img
                src={icon1}
                alt=""
                className="products__item-inf__joint-img"
              />
              <img
                src={icon2}
                alt=""
                className="products__item-inf__joint-img"
              />
              <img
                src={icon3}
                alt=""
                className="products__item-inf__joint-img"
              />
              <img
                src={icon4}
                alt=""
                className="products__item-inf__joint-img"
              />
              <img
                src={icon5}
                alt=""
                className="products__item-inf__joint-img"
              />
            </div>
          </div>
        </div>

        {/* <img src={productitemactive2} alt="" className="products__item-img__active" />
                <img src={productitemactive1} alt="" className="products__item-img__active" />

                <div className="products__item-wrap">
                    <img src={img} alt="" className="products__item-img" />
                    <div className="products__item-inf">
                        <h1>{title}</h1>
                        <p>{descp}</p>
                        <div className="products__item-inf__joint ">
                            <img src={ai} alt="" className="products__item-inf__joint-img" />
                            <img src={dn} alt="" className="products__item-inf__joint-img" />
                            <img src={xd} alt="" className="products__item-inf__joint-img" />
                            <img src={ae} alt="" className="products__item-inf__joint-img" />
                        </div>
                    </div>
                </div> */}
      </div>
    </>
  );
};

export default ProductItems;
