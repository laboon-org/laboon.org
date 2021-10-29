import React from "react";

const BlockChainify = ({ img1, img2 }) => {
  return (
    <div className="container__grid grid">
      <div className="container grid">
        <section className="blockchainify">
          <div className="blockchainify__top">
            <h1>Blockchainify</h1>
            <p>
            Metaverse - Where games become the places that players can create and own their gamified economies
            </p>
          </div>
          <div className="blockchainify__bottom">
            <div className='blockchainify__bottom-img'>
              <img
                src={img1}
                alt=""
                className="blockchainify--img1"
              />
              <img
                src={img2}
                alt=""
                className="blockchainify--img2"
              />
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlockChainify;
