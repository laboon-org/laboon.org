import React from 'react'
import ourpatner1 from '../../img/ourpatner1.png'
import ourpatner2 from '../../img/ourpatner2.png'
import ourpatner3 from '../../img/ourpatner3.png'
import ourpatner4 from '../../img/ourpatner4.png'
import ourpatner5 from '../../img/ourpatner5.png'
import ourpatner6 from '../../img/ourpatner6.png'
const OurPathners = () => {
    return (
        <section className="ourpatners grid">
        <div className="ourpatners__content grid">
          <h1>Our Patners</h1>
          <div className=" ourpatners__items-wrap row">
              <div className="ourpatner__item l-2 c-6">
                <img src={ourpatner1} alt="" className=" "/>
              </div>
              <div className="ourpatner__item l-2 c-6">
                <img src={ourpatner2} alt="" className=" "/>
              </div>
              <div className="ourpatner__item pt l-2 c-6">
                <img src={ourpatner3} alt="" className=" "/>
              </div>
              <div className="ourpatner__item l-2 c-6">
                <img src={ourpatner4} alt="" className=" "/>
              </div>
              <div className="ourpatner__item hypermon-ourpatner__item l-2 c-6">
                <img src={ourpatner5} alt="" className=" "/>
              </div>
              <div className="ourpatner__item l-2 c-6">
                <img src={ourpatner6} alt="" className=" "/>
              </div>
          </div>
        </div>
      </section>
    )
}

export default OurPathners
