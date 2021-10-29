import React from "react";

const BlockChainify = ({ img1, img2 }) => {
  return (
    <div className="container__grid grid">
      <div className="container grid wide">
        <section className="blockchainify ">
          <div className="blockchainify__top">
            <h1>Blockchainify</h1>
            <p>
              Digiverse - Where games become the places that players can create
              and own their gamified economies.
            </p>
          </div>
          <div className="blockchainify__bottom">
            <img
              src={img1}
              alt=""
              className="blockchainify__bottom-img blockchainify--img1"
            />
            <img
              src={img2}
              alt=""
              className="blockchainify__bottom-img blockchainify--img2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlockChainify;
