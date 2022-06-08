import React from "react";


const BothProducts = () => {
  return (
    <div className="product__both">
      {/* <div className="product__both-background">
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-BothProducts/laboon_image-Home-BothProducts_makeGroupf1.webp"
          alt=""
          className="productlist-img makeg2 makeGroupf1"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-BothProducts/laboon_image-Home-BothProducts_makeGroupf3.webp"
          alt=""
          className="productlist-img makeg2 makeGroupf3"
        />
        <img
          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-BothProducts/laboon_image-Home-BothProducts_bothProductsimg.webp"
          alt=""
          className="productlist-img makeg2 makeGroupf2"
        />
        <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-BothProducts/laboon_image-Home-BothProducts_makeGroupf8.webp" alt="" className="makeg1 makeGroupf8" />
      </div>  */}
      <div className="grid wide row ">
        <div className="product__both-contents">
          <div className="product__both-ele col l-6 c-12">
            <div className="product__hypermon-wrap">
              <h2>Hypermon</h2>
              <img src="https://media.graphassets.com/NuTVDXeTXqVbAQTSbiSA" alt="" />
              <div className="product__hypermon-wrap__inf">
                <p>
                  Plus having fun and making profits, this is an
                  action-adventure game with combat elements. It’s more than
                  simply a game; it's a land where gamers can meet and mingle
                  with one another.
                </p>
              </div>
              <div className="product__both-btn hypermon">
              <a href="https://www.hypermon.games/">
              <button>Join now</button>
              </a>
              </div>
            </div>
          </div>
          <div className="product__both-ele col l-6 c-12">
            <div className="product__hypermon-wrap">
              <h2>Pepper Attack</h2>
              <img className="pepperAttack__img" src="https://media.graphassets.com/wFQTgKrQVSl9GRENqjK0" alt="" />
              <div className="product__hypermon-wrap__inf">
                <p>
                  Pepper Attack is a 10,000 NFT collection that comes with an
                  actual play-to-earn game. It is one of those rare
                  community-based projects where players and game developers
                  interact regularly to exchange ideas, give feedback and have
                  fun together.
                </p>
              </div>
              <div className="product__both-btn pepper">
              <a href="https://pepperattack.com/">
              <button>Join now</button> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BothProducts;
