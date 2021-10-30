import React from 'react'

import hypermon from "../../img/hypermon.png" 
import pepper from "../../img/pepper.png" 
import makeGroupf1 from '../../img/makeGroupf1.png'
import makeGroupf3 from '../../img/makeGroupf3.png'
import makeGroupf8 from '../../img/makeGroupf8.png'
const BothProducts = () => {
    return (
        <div className="product__both">
          <div className='product__both-background'>
            <img src={makeGroupf1} alt="" className="productlist-img makeg2 makeGroupf1" />
            <img src={makeGroupf3} alt="" className="productlist-img makeg2 makeGroupf3" />
            <img src={makeGroupf8} alt="" className="productlist-img-one makeg1 makeGroupf8" />
          </div>
            <div className=" grid wide row ">
              <div className="product__hypermon col l-6 c-12">
                  <div className="product__hypermon-wrap">
                    <h2>Hypermon</h2>
                    <img src={hypermon} alt="" />
                    <div className="product__hypermon-wrap__inf">
                      <p>Plus having fun and making profits, this is an action-adventure game with combat elements. It’s more than simply a game; it's a land where gamers can meet and mingle with one another.</p>
                    </div>
                    <div className="product__both-btn hypermon">
                      <button>Join now</button>
                    </div>
                  </div>
              </div>
              <div className="product__pepeper col l-6 c-12">
                  <div className="product__hypermon-wrap">
                    <h2>Pepper Attack</h2>
                    <img src={pepper} alt="" />
                    <div className="product__hypermon-wrap__inf">
                      <p>Pepper Attack is a 10,000 NFT collection that comes with an actual play-to-earn game. It is one of those rare community-based projects where players and game developers interact regularly to exchange ideas, give feedback and have fun together.</p>
                    </div>
                    <div className="product__both-btn pepper">
                      <button>Join now</button>
                    </div>
                  </div>
              </div>
            </div>
            
            
          </div>
    )
}

export default BothProducts
