import React, { useEffect, useState } from "react";

import OurProductItem from "./ourProductItem";

import IMG_DAPPS from '../../img/products-dapps.png'
import IMG_GAMES from '../../img/products-games.png'
import IMG_PLAZA from '../../img/products-plaza.png'
import IMG_WALLET from '../../img/products-wallet.png'
import IMG_SOON from '../../img/products-soon.png'

const products = [
  {
    title: "dApps",
    slogan:
      "Our best interest is to provide the users with useful tools that allow them to remove any digital hindrances.",
    img: IMG_DAPPS,
  },
  {
    title: "Games",
    slogan:
      "Virtual realms for players to conquer and build their own empires.",
    img: IMG_GAMES,
  },
  {
    title: "PLAZA",
    slogan:
      "The chamber of commerce allows players to exchange game items and characters with great qualities.",
    img: IMG_PLAZA,
  },
  {
    title: "Wallet",
    slogan: "A reliable haven for your digital purchases and currencies.",
    img: IMG_WALLET,
  },
  {
    title: "Coming soon",
    slogan:
      "Our best interest is to provide the users with useful tools that allow them to remove any digital hindrances.",
    img: IMG_SOON,
  },
];

const OurProducts = () => {
  const [proActive, setProActive] = useState({});
  const handleActiveProduct = (pro) => {
    if (pro) {
      setProActive(pro);
    }
  };
  useEffect(() => {
    setProActive(products[0]);
  }, []);
  return (
    <div className="ourproducts__container grid">
      <section className="ourproducts">
        <div className="ourproducts__title">
          <h1>Our Products</h1>
        </div>
        <div className="ourproducts__bottom">
          <div className="row">
            <div className="ourproducts__bottom-img col l-5 l0-12 c-12">
              <div className="ourproducts__main-wrap">
                <img
                  src={proActive.img}
                  alt=""         
                  className="ourproducts__img-main"
                />
              </div>
            </div>
            <div className="ourproducts__bottom-inf col l-7 l0-12 c-12">
              <div className="ourproducts__bottom-inf-wrap">
                <h2>{proActive.title}</h2>
                <div className="ourproducts__bottom-inf-p">
                  <p>{proActive.slogan}</p>
                </div>
              </div>
              <div className="ourproducts__bottom-line">
                <div className="ourproducts__bottom-line__list">
                  {products &&
                    products.map((item, i) => (
                      <OurProductItem
                        key={i}
                        item={item}
                        handleActiveProduct={handleActiveProduct}
                      />
                    ))}
                  {/* <div className="ourproducts__bottom-line__mid-item">
                    <img
                      src={"https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurProducts/itemourproduct6.webp"}
                      alt=""
                    /> 
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
