import React from 'react'

import IMG_1 from '../../img/orientation-1.png'
import IMG_2 from '../../img/orientation-2.png'
import IMG_3 from '../../img/orientation-3.png'
import IMG_4 from '../../img/orientation-4.png'
 
const Ourorientation = () => {
    return (
        <div className="ahoutus__container grid">
          {/* <div className='aboutus-background'>
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_about1.webp" alt="" className="about-img about1" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_Vector2.webp" alt="" className="about-img about2" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_aboutline.webp" alt="" className="about-img aboutline" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_line2.webp" alt="" className="about-img line2" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_lineabout.webp" alt="" className="about-img lineabout" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_lineabout1.webp" alt="" className="lineabout1" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_lineabout2.webp" alt="" className=" lineabout3" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/Groupaboutus.webp" alt="" className="about-img Groupabout1" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_Groupdotabout.webp" alt="" className="about-img Groupaboutdot" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_dot2.webp" alt="" className=" lineabout2" />
          </div> */}
          
          <section className="aboutus grid wide">
            
            <div className="row">
              <div className="aboutus__left col l-3 l0-12 c-12">
                <div className="aboutus__left-wrapper">
                  <h1>Our Orientation</h1>
                  <p>Our desire is to build the</p>
                  <p>foundation of the future</p>
                  <p>where both the physical</p>
                  <p>and virtual worlds are one</p>
                </div>
              </div>
              <div className="aboutus__right l-9 l0-12">
                <div className="row no-gutters">
                  <div className="aboutus__right-1 col l-6 c-12 m-12 l0-6 ">
                    <div className="aboutus__card aboutus__card-mt col c-12">
                      <img src={IMG_1} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Liberty</span>
                        <p>The patrons will be in the custody of their own data stored in the cloud.</p>
                      </div>
                    </div>
                    <div className="aboutus__card col c-12 m-12">
                      <img src={IMG_2} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Community Driven</span>
                        <p>Our denizens have a genuine stake in the products they utilize. The cohesive psyche of the nest is now unshackled!</p>
                      </div>
                    </div>
                  </div>
                  <div className="aboutus__right-2 col l-6 c-12 m-12 l0-6">
                    <div className="aboutus__card aboutus__card-mt col c-12">
                      <img src={IMG_3} alt="" className="aboutus__card-img" />
                      <div className="aboutus__card-infor">
                        <span>Borderless</span>
                        <p>Lean on furthering our targets. Passion is meant for bravo.</p>
                      </div>
                    </div>
                    <div className="aboutus__card col c-12 m-12">
                      <img src={IMG_4} alt="" className="aboutus__card-img" />
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
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-Home-OurOrientation/laboon_image-Home-OurOrientation_Groupabout2.webp" alt="" className="Groupabout2" />
        </div>
    )
}

export default Ourorientation
