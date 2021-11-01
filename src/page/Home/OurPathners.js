import React from 'react'
const OurPathners = ({ourpartner}) => {
    return (
        <section className="ourpatners grid">
        <div className="ourpatners__content grid">
          <h1>Our Patners</h1>
          <div className=" ourpatners__items-wrap row">
              {
                ourpartner && ourpartner.map(ourp =>
                  <div className="ourpatner__item l-2 c-6">
                  <a href={!ourp.link ? "/": ourp.link}>
                     <img src={`https://directus.laboon.org/assets/${ourp.source.filename_disk}`} alt="" className=""
                     />
                  </a>
                  </div>
                )
              }
          </div>
        </div>
      </section>
    )
}

export default OurPathners
