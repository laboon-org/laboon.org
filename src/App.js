import './style.css';
import './grid.css';
import klipartz3 from './Components/img/klipartz3.png';
import klipartz2 from './Components/img/klipartz2.png';
import Aboutus from './Components/img/Aboutus.png';
import klipartz4 from './Components/img/klipartz4.png';
import logo22 from './Components/img/logo22.png';


import Rectangle55 from './Components/img/Rectangle55.png';
import Rectangle56 from './Components/img/Rectangle56.png';
import Ellipse2 from './Components/img/Ellipse2.png';
import Ellipse3 from './Components/img/Ellipse3.png';
import Rectangle57 from './Components/img/Rectangle57.png';
import Rectangle59 from './Components/img/Rectangle59.png';
import Rectangle62 from './Components/img/Rectangle62.png';
import Rectangle63 from './Components/img/Rectangle63.png';
import roadmap from './Components/img/roadmap.png';



// Token

import platform11 from './Components/img/platform11.png'
import Ellipse1 from './Components/img/Ellipse1.png'
import tokenomics from './Components/img/tokenomics.png'
import Vector from './Components/img/Vector.png'
import klipartz5 from './Components/img/klipartz5.png'
import XMLID162 from './Components/img/XMLID162.png'
import XMLID1191 from './Components/img/XMLID1191.png'
import XMLID1190 from './Components/img/XMLID1190.png'
import Vector2 from './Components/img/Vector2.png'
import Vector3 from './Components/img/Vector3.png'
import Vectora1 from './Components/img/Vectora1.png'
import Vectora2 from './Components/img/Vectora2.png'
import Vectora3 from './Components/img/Vectora3.png'
import Vectora4 from './Components/img/Vectora4.png'
import Vectora5 from './Components/img/Vectora5.png'
import Vectora6 from './Components/img/Vectora6.png'
// Token


// ourteam
import cripto from './Components/img/cripto-team1.png'
import Ellipse4 from './Components/img/Ellipse4.png'
import Ellipse6 from './Components/img/Ellipse6.png'
import Ellipseteam7 from './Components/img/Ellipseteam7.png'
import Ellipse8 from './Components/img/Ellipse8.png'
import Ellipse5 from './Components/img/Ellipse5.png'
import Ellipseteam9 from './Components/img/Ellipseteam9.png'
import Ellipseteam10 from './Components/img/Ellipseteam10.png'
import team from './Components/img/team.png'


//our project 
import s1 from './Components/img/s1.png'
import slide1 from './Components/img/slide1.png'
import s2 from './Components/img/s2.png'
import s3 from './Components/img/s3.png'
import s4 from './Components/img/s4.png'

import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container grid">
        <div className="grid wide">
          <div className="banner ">
              <div className="banner__left">
                  <span>Blockchain solutions</span>
                  <h1>Cryptocurrency investments</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit volup tat em acc us antium doloremque laudantium, totam rem aperiam</p>
                  <div className="banner__viewmore">
                      <button>View More</button>
                  </div>
              </div>
              <div className="banner__right">
                  <img className="banner__img-klipartz3" src={klipartz3} alt="Earth"></img>
                  <img className="banner__img-klipartz2" src={klipartz2} alt="bitcoin"></img>
              </div>
          </div>
        </div>

        {/* aboutus */}
        <div className="aboutus">
          <div className="aboutus__left">
            <img className = "aboutus__img-aboutus" src={Aboutus} alt=""></img>
            <img className = "aboutus__img-klipartz4" src={klipartz4} alt=""></img>
          </div>
          <div className="aboutus__right">
            <span>About Us</span>
            <div>
              <img src={logo22} alt="Logo"></img>
            </div>
            <div className="aboutus__inf">
              <div className="aboutus__inf-top">
                <p>Tellus vulputate habitasse ut diam. Auctor sit elementum. Lorem ipsum dolor</p>
                <p>sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis</p>
                <p>viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam</p>
                <p>pulvinar elementum.</p>
              </div>
              <ul>
                  <li>Consectetur adipiscing elit, Non, lobortis in in tortor lectus iaculis viverra.</li>
                  <li>Fringilla euismod odio vitae nam pulvinar is this Elementum lorem ipsum dolor sit amet.</li>
                  <li>Fringilla euismod odio vitae nam pulvinar is this Elementum lorem ipsum dolor sit amet.</li>
                  <li>Consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra</li>
              </ul> 
            </div>
          </div>
        </div>
        {/* aboutus */}

        {/* Road Map */}
        <div className="roadmap grid wide">
            <div className="roadmap__title">
                <h1>Road map</h1>
                <span>See our Journey</span>
            </div>
                <img src={Rectangle55} alt="" className="roadmap__vertical"></img>
            <div className="roadmap__content row">
                <div className="roadmap__content-left col l-6">
                    <div className="roadmap__inf">
                        <div className="roadmap__inf-top">
                            <div className="roadmap__inf-top-left">
                                <span>Jan 2017 - March 2018</span>
                                <h1>Start-Up</h1>
                            </div>
                            <div className="roadmap__inf-top-right left">
                                <h1>01</h1>
                            </div>
                        </div>
                        <div className="roadmap__inf-bottom roadmap__inf-bottom-left">
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                        <div className="roadmap__horizontal">
                            <img src={Rectangle56} alt="" className="roadmap__horizontal roadmap__Rectangle56"></img>
                            <img src={Ellipse2} alt="" className="roadmap__horizontal roadmap__Ellipse2"></img>
                            <img src={Ellipse3} alt="" className="roadmap__horizontal roadmap__Ellipse3"></img>
                        </div>
                    </div>
                </div>
                <div className=" roadmap__content-right col l-6">
                    <img src={Rectangle57} alt=""></img>
                </div>
            </div>
            <div className="roadmap__content row">
                <div className="roadmap__content-right right col l-6">
                    <img src={Rectangle59} alt=""></img>
                </div>
                <div className="roadmap__content-left col l-6">
                    <div className="roadmap__inf right">
                        <div className="roadmap__inf-top">
                            <div className="roadmap__inf-top-right right">
                                <h1>02</h1>
                            </div>
                            <div className="roadmap__inf-top-left">
                                <span>Jan 2017 - March 2018</span>
                                <h1>Start-Up</h1>
                            </div>
                        </div>
                        <div className="roadmap__inf-bottom roadmap__inf-bottom-right">
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                    </div>
                    <div className="roadmap__horizontal right">
                        <img src={Rectangle56} alt="" className="roadmap__horizontal roadmap__Rectangle56-2"></img>
                        <img src={Ellipse2} alt="" className="roadmap__horizontal roadmap__Ellipse2-2"></img>
                        <img src={Ellipse3} alt="" className="roadmap__horizontal roadmap__Ellipse3-2"></img>
                    </div>
                </div>
            </div>
            <div className="roadmap__content row">
                <div className="roadmap__content-left col l-6">
                    <div className="roadmap__inf">
                        <div className="roadmap__inf-top">
                            <div className="roadmap__inf-top-left">
                                <span>Jan 2017 - March 2018</span>
                                <h1>Start-Up</h1>
                            </div>
                            <div className="roadmap__inf-top-right left">
                                <h1>03</h1>
                            </div>
                        </div>
                        <div className="roadmap__inf-bottom roadmap__inf-bottom-left">
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap__content-right col l-6">
                    <img src={Rectangle62} alt=""></img>
                </div>
                <div className="roadmap__horizontal">
                    <img src={Rectangle56} alt="" className="roadmap__horizontal roadmap__Rectangle56-3"></img>
                    <img src={Ellipse2} alt="" className="roadmap__horizontal roadmap__Ellipse2-3"></img>
                    <img src={Ellipse3} alt="" className="roadmap__horizontal roadmap__Ellipse3-3"></img>
                </div>
            </div>
            <div className="roadmap__content row">
                <div className=" roadmap__content-right right col l-6">
                    <img src={Rectangle63} alt=""></img>
                </div>
                <div className="roadmap__content-left col l-6">
                    <div className="roadmap__inf right">
                        <div className="roadmap__inf-top">
                            <div className="roadmap__inf-top-right right">
                                <h1>04</h1>
                            </div>
                            <div className="roadmap__inf-top-left">
                                <span>Jan 2017 - March 2018</span>
                                <h1>Start-Up</h1>
                            </div>
                        </div>
                        <div className="roadmap__inf-bottom roadmap__inf-bottom-right">
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        </div>
                    </div>
                    <div className="roadmap__horizontal right">
                        <img src={Rectangle56}alt="" className="roadmap__horizontal roadmap__Rectangle56-4"></img>
                        <img src={Ellipse2} alt="" className="roadmap__horizontal roadmap__Ellipse2-4"></img>
                        <img src={Ellipse3} alt="" className="roadmap__horizontal roadmap__Ellipse3-4"></img>
                    </div>
                </div>
            </div>
            <div className="roadmap__img-left"> 
                <img src={roadmap} alt=""></img>
            </div>
        </div>
        {/* Road Map */}
        

        {/* TOken */}
        <div className="wrap__token">
            <div className="tockenomics">
                <img src={tokenomics} alt="" className="tocken__img"></img>
                <img src={platform11} alt="" className="platform11__img"></img>
                <div className="tockenomics_vector">
                    <img src={Ellipse1} alt="" className="tockenomics_elip1"></img>
                    <img src={Vector} alt="" className="tockenomics_vector1"></img>
                </div>
                
                <div className="tockenomics__content grid wide">
                    <div className="row">
                        <div className="col l-8">
                            <h1>Tokenomics - Access analytical market & price data</h1>
                            <p>Tellus vulputate habitasse ut diam. Auctor sit elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla</p>
                        </div>
                    </div>
                </div>
                <div className="token__bottom">
                    <img src={klipartz5} alt="" className="token__bottom-img"></img>
                    <div className="token__bottom-inf">
                        <div className="token__bottom-inf-wrap">
                            <div className="token__inf-top">
                                <div className="token__icon">
                                    <img src={XMLID162} alt="" className="token__icon1-1"></img>
                                    <img src={XMLID1191} alt="" className="token__icon1-2"></img>
                                    <img src={XMLID1190} alt="" className="token__icon1-3"></img>
                                </div>
                                <div className="token__number">
                                    <span>10+</span>
                                </div>
                            </div>
                            <div className="token__inf-bottom">
                                <span>Year Of Experience</span>
                            </div>
                        </div>
                        <div className="token__bottom-inf-wrap">
                            <div className="token__inf-top">
                                <div className="token__icon">
                                    <img src={Vector2} alt="" className="token__icon1-1"></img>
                                </div>
                                <div className="token__number">
                                    <span>130</span>
                                </div>
                            </div>
                            <div className="token__inf-bottom">
                                <span>Experienced Experts</span>
                            </div>
                        </div>
                        <div className="token__bottom-inf-wrap">
                            <div className="token__inf-top">
                                <div className="token__icon">
                                    <img src={Vector3} alt="" className="token__icon1-1"></img>
                                </div>
                                <div className="token__number">
                                    <span>220</span>
                                </div>
                            </div>
                            <div className="token__inf-bottom">
                                <span>Nationwide Partners</span>
                            </div>
                        </div>
                        <div className="token__bottom-inf-wrap">
                            <div className="token__inf-top">
                                <div className="token__icon">
                                    <img src={Vectora1} alt="" className="token__icon1-1"></img>
                                    <img src={Vectora2} alt="" className="token__icon1-2"></img>
                                    <img src={Vectora3} alt="" className="token__icon1a-3"></img>
                                    <img src={Vectora4} alt="" className="token__icon1a-4"></img>
                                    <img src={Vectora5} alt="" className="token__icon1a-5"></img>
                                    <img src={Vectora6} alt="" className="token__icon1a-6"></img>
                                </div>
                                <div className="token__number">
                                    <span>60+</span>
                                </div>
                            </div>
                            <div className="token__inf-bottom">
                                <span>Successful Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* TOken */}

        {/* Our Team */}
        <div className="ourteam">
            <img src={cripto} alt="" className="ourteam__left-img"></img>
            <div className="grid wide">
                <div className="ourteam__top">
                    <h1>Our Team</h1>
                    <span>See our Best Team</span>
                </div>
                <div className="ourteam__bottom">
                    <div className="ourteam__bottom-top">
                        <img src={Ellipse4} alt="" className="ourteam__bottom-top--item"></img>
                        <img src={Ellipse6} alt="" className="ourteam__bottom-top--item"></img>
                        <img src={Ellipseteam7} alt="" className="ourteam__bottom-top--item"></img>
                        <img src={Ellipse8} alt="" className="ourteam__bottom-top--item"></img>
                    </div>
                    <div className="ourteam__bottom-top">
                        <img src={Ellipse5} alt="" className="ourteam__bottom-top--item"></img>
                        <img src={Ellipseteam9} alt="" className="ourteam__bottom-top--item"></img>
                        <img src={Ellipseteam10} alt="" className="ourteam__bottom-top--item"></img>
                    </div>
                </div>
            </div>
            <img src={team} alt="" className="ourteam__right-img"></img>
        </div>
        {/* Our Team */}
        
      </div>

      {/* Our project */}
      <div className="ourproject">
        <div className="grid wide">
            <div className="ourproject__title">
                <h1>Our Project</h1>
                <span>See our Best Team</span>
            </div>
        </div>
        <div className="grid">
            <div className="slides ">
                <div className="slides__item slides__item-hidden-left slides__item-hidden ">
                    <img src={s1} alt="" className="slides__img"></img>
                    <span>At vero eos et accus am us et iusto odio dig nissimos ducimus qui blanditiis pra es entium voluptatum dele</span>
                    <p>Usant ium doloremque lauda nt ium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                </div>
                <div className=" grid wide">
                    <div className="sildes__mid">
                        <div className="slides__item ">
                            <img src={slide1} alt="" className="slides__img"></img>
                            <span>At vero eos et accus am us et iusto odio dig nissimos ducimus qui blanditiis pra es entium voluptatum dele</span>
                            <p>Usant ium doloremque lauda nt ium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                        </div>
                        <div className="slides__item">
                            <img src={s2} alt="" className="slides__img"></img>
                            <span>At vero eos et accus am us et iusto odio dig nissimos ducimus qui blanditiis pra es entium voluptatum dele</span>
                            <p>Usant ium doloremque lauda nt ium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                        </div>
                        <div className="slides__item">
                            <img src={s3} alt="" className="slides__img"></img>
                            <span>At vero eos et accus am us et iusto odio dig nissimos ducimus qui blanditiis pra es entium voluptatum dele</span>
                            <p>Usant ium doloremque lauda nt ium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                        </div>
                    </div>
                </div>
                
                <div className="slides__item slides__item-hidden-right slides__item-hidden">
                    <img src={s4} alt="" className="slides__img"></img>
                    <span>At vero eos et accus am us et iusto odio dig nissimos ducimus qui blanditiis pra es entium voluptatum dele</span>
                    <p>Usant ium doloremque lauda nt ium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                </div>
                    
            </div>
        </div>
      </div>
      {/* our project */}

      {/* community */}
      
      {/* community */}
      
      <Footer> </Footer>

    </div>
  );
}

export default App;
