import React from 'react'
import Groudabout2 from '../../img/Groupabout2.png'

import Groudaboutus from '../../img/GroupAboutus.png'
import dotabout from '../../img/dot2.png'
import lineabout from '../../img/lineabout.png'
import lineabout1 from '../../img/lineabout1.png'
import lineabout3 from '../../img/lineabout2.png'
import GroudaboutusDot from '../../img/Groupdotabout.png'
import card1 from '../../img/card1.png'
import card2 from '../../img/card2.png'
import card3 from '../../img/card3.png'

import card4 from '../../img/card4.png'

import about1 from '../../img/about1.png'
import vector2 from '../../img/Vector2.png'
import aboutline from '../../img/aboutline.png'
import line2 from '../../img/line2.png'
const Ourorientation = () => {
    return (
        <div className="ahoutus__container grid">
          <img src={about1} alt="" className="about-img about1" />
          <img src={vector2} alt="" className="about-img about2" />
          <img src={aboutline} alt="" className="about-img aboutline" />
          <img src={line2} alt="" className="about-img line2" />
          {/* <img src={aboutbot1} alt="" className="about-img aboutbot1" /> */}
          <img src={lineabout} alt="" className="about-img lineabout" />
          <img src={lineabout1} alt="" className=" lineabout1" />
          <img src={lineabout3} alt="" className=" lineabout3" />
          <img src={Groudaboutus} alt="" className="about-img Groupabout1" />
          <section className="aboutus grid wide">
            <img src={GroudaboutusDot} alt="" className="about-img Groupaboutdot" />
            <img src={dotabout} alt="" className=" lineabout2" />
            <div className="row">
              <div className="aboutus__left col l-3 c-12">
                <div className="aboutus__left-wrapper">
                  <h1>Our Orientation</h1>
                  <p>Our desire is to build the</p>
                  <p>foundation of the future</p>
                  <p>where both the physical</p>
                  <p>and virtual worlds are one</p>
                </div>
              </div>
              <div className="aboutus__right l-9">
                <div className="row no-gutters">
                  <div className="aboutus__right-1 col l-6 c-12 m-12 ">
                    <div className="aboutus__card aboutus__card-mt col c-12">
                      <img src={card1} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Liberty</span>
                        <p>The patrons will be in the custody of their own data stored in the cloud.</p>
                      </div>
                    </div>
                    <div className="aboutus__card col c-12 m-12">
                      <img src={card2} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Community Driven</span>
                        <p>Our denizens have a genuine stake in the products they utilize. The cohesive psyche of the nest is now unshackled!</p>
                      </div>
                    </div>
                  </div>
                  <div className="aboutus__right-2 col l-6 c-12 m-12">
                    <div className="aboutus__card aboutus__card-mt col c-12">
                      <img src={card3} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Borderless</span>
                        <p>Lean on furthering our targets. Passion is meant for bravo.</p>
                      </div>
                    </div>
                    <div className="aboutus__card col c-12 m-12">
                     
                      <img src={card4} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Synthe</span>
                        <p>Insights on the cutting edge fit great when blended in unusual ways.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
            <img src={Groudabout2} alt="" className="Groupabout2" />
        </div>
    )
}

export default Ourorientation
