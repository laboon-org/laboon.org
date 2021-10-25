import React from 'react'
import '../../css/Homecss/Home.css'
// import '../../css/responsive/responsiveHome.css'

import backgroundBlockchinHome from '../../img/backgroundBlockchain.png'
import sung from "../../img/sung.png"


export default function Blockchainify() {
    return (
        <div className='blockchainify'>
            <section className="container-xxl">
                <div className="blockchainify__top">
                  <h1>Blockchainify</h1>
                  <h3 className='blockchain-subheading'>Metaverse - Where games become the places that players can create and own their gamified economies.</h3> 
                </div>
                <div className="blockchainify__bottom">
                  <img src={backgroundBlockchinHome} alt="" className="blockchainify__bottom-img blockchainify--img1" />
                  <img src={sung} alt="" className="blockchainify__bottom-img blockchainify--img2" />
                </div>
              </section>
        </div>
    )
}
