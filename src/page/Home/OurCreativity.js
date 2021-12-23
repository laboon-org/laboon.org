import React from "react";
import ItemProduct from "./ItemProduct";
import SpringOurcreativy from "./SpringOurcreativy.tsx";

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
      <div className="product__elu-background">
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
      </div>
      <div className="product__elu-content">
        <div className="productlist__title col c-12">
          <h1>Our Creativity</h1>
        </div>
        <div className="angry">
          <div className="row">
            <div className="angry__left col l-4 c-12">
              <img
                src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/Group%20273.webp"
                alt=""
                className="angry__left-img1"
              />
            </div>
            <div className="angry__right col l-8 c-12">
              <div className="wrap__angry">
                {windownSize.height > windownSize.width ? (
                  <SpringOurcreativy></SpringOurcreativy>
                ) : (
                  <div className="wrap__angry-wrap-item row">
                    <ItemProduct
                      title={"Drop"}
                      img={
                        "https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/Eluverse0.webp"
                      }
                    ></ItemProduct>
                    <ItemProduct
                      title={"Nest"}
                      img={
                        "https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/Eluverse2.webp"
                      }
                    ></ItemProduct>
                    <ItemProduct
                      title={"Scout"}
                      img={
                        "https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/Eluverse1.webp"
                      }
                    ></ItemProduct>
                    <ItemProduct
                      title="Metaverse"
                      img={
                        "https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/metaverse%20%201.webp"
                      }
                    ></ItemProduct>
                  </div>
                )}
                <div className="wrap__angry-btn">
                  <a href="https://playelu.io/">
                    <img
                      src={
                        "https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurCreativity/laboon_image-Home-OurCreativity_productitem5.webp"
                      }
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
