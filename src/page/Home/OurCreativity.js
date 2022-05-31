import React from "react";
import ItemProduct from "./ItemProduct";
import SpringOurcreativy from "./SpringOurcreativy.tsx";
import backgrourdOurcryvity from "../../img/backgroudOurcryvity.png"

import IMG_ELU_LOGO from '../../img/creativity-elu-logo.png'
import IMG_ELU_1 from '../../img/creativity-elu-1.png'
import IMG_ELU_2 from '../../img/creativity-elu-2.png'
import IMG_ELU_3 from '../../img/creativity-elu-3.png'
import IMG_ELU_4 from '../../img/creativity-elu-4.png'
import IMG_ELU_BTN from '../../img/creativity-elu-btn.png'
function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
const OurCreativity = () => {
  const windownSize = useWindowSize();
  return (
    <div className="product__elu-full grid">
      {/* <div className="product__elu-background">
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist.webp"
          alt=""
          className="productlist-img productlist-img1"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist1.webp"
          alt=""
          className="productlist-img productlist1"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist2.webp"
          alt=""
          className="productlist-img productlist2"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist3.webp"
          alt=""
          className="productlist-img productlist3"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist4.webp"
          alt=""
          className="productlist-img productlist4"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist5.webp"
          alt=""
          className="productlist-img productlist5"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist6.webp"
          alt=""
          className="productlist-img productlist6"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productlist7.webp"
          alt=""
          className="productlist-img productlist7"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_x.webp"
          alt=""
          className="productlist-img productlistx"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_x.webp"
          alt=""
          className="productlist-img productlistxleft"
        />
      </div> */}
      <div className="product__elu-content">
        <div className="productlist__title col c-12">
          <h1>Our Creativity</h1>
        </div>
        <div className="angry">
          <div className="row">
            <div className="angry__left col l-4 c-12">
              <img
                src={IMG_ELU_LOGO}
                alt=""
                className="angry__left-img1"
              />
            </div>
            <div className="angry__right col l-8 c-12">
              <div className="wrap__angry">
              <img src={backgrourdOurcryvity} alt="" className="backgrourdOurcryvity"/>
                {
                  windownSize.height > windownSize.width ? (
                  <SpringOurcreativy></SpringOurcreativy>
                ) : (
                  <div className="wrap__angry-wrap-item row">
                    <ItemProduct
                      title={"Drop"}
                      img={IMG_ELU_1}
                    ></ItemProduct>
                    <ItemProduct
                      title={"Nest"}
                      img={IMG_ELU_2}
                    ></ItemProduct>
                    <ItemProduct
                      title={"Scout"}
                      img={IMG_ELU_3}
                    ></ItemProduct>
                    <ItemProduct
                      title="Metaverse"
                      img={IMG_ELU_4}
                    ></ItemProduct>
                  </div>
                )}
                <div className="wrap__angry-btn">
                  <a href="https://playelu.io/">
                    <img
                      src={IMG_ELU_BTN}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCreativity;
