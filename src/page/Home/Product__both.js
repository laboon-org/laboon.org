import React from 'react'
import '../../css/Homecss/Home.css'

import makeGroupf1 from '../../img/makeGroupf1.png'
import makeGroupf2 from '../../img/makeGroupf2.png'
import makeGroupf3 from '../../img/makeGroupf3.png'
import makeGroupf4 from '../../img/makeGroupf4.png'
import makeGroupf5 from '../../img/makeGroupf5.png'
import makeGroupf6 from '../../img/makeGroupf6.png'
import makeGroupf7 from '../../img/makeGroupf7.png'
import hypermon from "../../img/hypermon.png" 
import pepperAttack from '../../img/pepperAttack.png'

export default function Product__both() {
    return (
        <div className="product__both-full grid">
            <div className='product__both-background'>
              {/* <img src={makeg1} alt="" className="productlist-img makeg1" /> */}
              {/* <img src={makeg2} alt="" className="productlist-img makeg2" /> */}
              <img src={makeGroupf2} alt="" className="productlist-img makeg1 makeGroupf2" />
              <img src={makeGroupf1} alt="" className="productlist-img makeg2 makeGroupf1" />
              <img src={makeGroupf7} alt="" className="productlist-img makeg2 makeGroupf7" />
              <img src={makeGroupf3} alt="" className="productlist-img makeg2 makeGroupf3" />
              <img src={makeGroupf5} alt="" className="productlist-img makeg1 makeGroupf5" />
              <img src={makeGroupf6} alt="" className="productlist-img makeg1 makeGroupf6" />
              <img src={makeGroupf4} alt="" className="productlist-img makeg1 makeGroupf4" />
            </div>
            
            <div className='container'>
                  <div className='product__both row'>
                      <div className="l-5 product__hypermon-wrap">
                        <h2>Hypermon</h2>
                        <div className="product__hypermon-wrap__inf">
                        <img src={hypermon} alt="" />
                          <p>Plus having fun and making profits, this is an action-adventure game with combat elements. It’s more than simply a game; it's a land where gamers can meet and mingle with one another.</p>
                        </div>
                        <div className="product__both-btn hypermon">
                          <button>Join now</button>
                        </div>
                      </div>
                      <div className="l-5 product__pepeper-wrap">
                        <h2>Pepper Attack</h2>
                        <div className="product__pepeper-wrap__inf">
                          <img src={pepperAttack} alt="" />
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
