import React from "react";
import ItemProduct from "./ItemProduct";

import SpringOurcreativy from "./SpringOurcreativy.tsx";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
const OurCreativity = () => {
  const windownSize = useWindowSize();
  return (
    <div className="product__elu-full grid">
      <div className="product__elu-background">
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist.png"
          alt=""
          className="productlist-img productlist-img1"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist1.png"
          alt=""
          className="productlist-img productlist1"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist2.png"
          alt=""
          className="productlist-img productlist2"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist3.png"
          alt=""
          className="productlist-img productlist3"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist4.png"
          alt=""
          className="productlist-img productlist4"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist5.png"
          alt=""
          className="productlist-img productlist5"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist6.png"
          alt=""
          className="productlist-img productlist6"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productlist7.png"
          alt=""
          className="productlist-img productlist7"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/x.png"
          alt=""
          className="productlist-img productlistx"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/x.png"
          alt=""
          className="productlist-img productlistxleft"
        />
      </div>
      <div className="product__elu-content">
        <div className="productlist__title col c-12">
          <h1>Our Creativity</h1>
          {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p> */}
        </div>
        <div className="angry">
          <div className="row">
            <div className="angry__left col l-4 c-12">
              <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/newproductlist.png" alt="" className="angry__left-img1" />
              {/* <img src={productitem5} alt=""  className="productitem5"/> */}
            </div>
            <div className="angry__right col l-8 c-12">
              <div className="wrap__angry">
                {windownSize.height > windownSize.width ? (
                  <SpringOurcreativy></SpringOurcreativy>
                ) : (
                  <div className="wrap__angry-wrap-item row">
                    <ItemProduct
                      title={"Drop"}
                      img={"https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productitem1.png"}
                    ></ItemProduct>
                    <ItemProduct
                      title={"Nest"}
                      img={"https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productitem2.png"}
                    ></ItemProduct>
                    <ItemProduct
                      title={"Coming Soon"}
                      img={"https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productitem3.png"}
                    ></ItemProduct>
                    <ItemProduct
                      title={"Coming Soon"}
                      img={"https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productitem4.png"}
                    ></ItemProduct>
                  </div>
                )}
                <div className="wrap__angry-btn">
                  <a href="https://playelu.io/">
                    <img src={"https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/productitem5.png"} alt="" />
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
