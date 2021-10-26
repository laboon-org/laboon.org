import React from "react";
import Footer from "../../components/Footer";
import Header from "./../../components/Header";
import "../../grid.css";
import "./team.scss";
import HeaddingSubPage from "../../components/HeaddingSubPage";

import TitleSubPage from "../../components/TitleSubPage";

import camping1 from "./imgTeam/camping1.png";
import camping2 from "./imgTeam/camping2.png";

import camping3 from "./imgTeam/camping3.png";
import camping4 from "./imgTeam/camping4.png";
import campingmid from "./imgTeam/campingmid.png";

import personnel from "./imgTeam/personel1.png";
import personne2 from "./imgTeam/personel2.png";
import personne3 from "./imgTeam/personel3.png";
import personne4 from "./imgTeam/personel4.png";
import personne5 from "./imgTeam/personel5.png";
import personne6 from "./imgTeam/personel6.png";
import personne7 from "./imgTeam/personel7.png";
import personne8 from "./imgTeam/personel8.png";
import personne9 from "./imgTeam/personel9.png";
import personne10 from "./imgTeam/personel10.png";
import personnel1 from "./imgTeam/personel11.png";
import personnel2 from "./imgTeam/personel12.png";
import logo21 from "../../img/logo21.png";

import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <>
      <Header active={"team"} logo={logo21}></Header>
      <HeaddingSubPage
        title={"Crew"}
        desp={
          "We think that the really ideal teams are built out of a broad spectrum of spirits who are all striving towards a shared vision."
        }
      ></HeaddingSubPage>
      <div className="grid">
        <div className="team__container">
          <TitleSubPage
            title={"Laboon Team"}
            desp={
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
            }
          ></TitleSubPage>

          <div className="grid wide">
            <div className="team__content">
              <h1>Wonderfill day-by-day</h1>
              <div className="team__wrapper">
                <div className="team__wrapper-mid">
                  <div className="team__wrapper-mid__content">
                    <div className="row">
                       {/* anh cua cong ty */}
                      <div className="team__wrapper-mid-1 l-3">
                        {/* <img src={camping1} alt="" className="img-1 img-mt" />
                        <img src={camping2} alt="" className="img-1" />
                      </div>
                      <div className="team__wrapper-mid-2 l-6">
                        <img
                          src={campingmid}
                          alt=""
                          className="img-mid img-mt"
                        />
                      </div>
                      <div className="team__wrapper-mid-3 l-3">
                        <img src={camping3} alt="" className="img-2 img-mt" />
                        <img src={camping4} alt="" className="img-2" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team__personel">
                <h1>Meet the crew</h1>
                <div className="team__personel-link">
                  <div className="team__personel-link--wrap">
                    <div className="team__personel-link__item  ">
                      <span>All</span>
                    </div>
                    <div className="team__personel-link__item ">
                      <span>Founders</span>
                    </div>
                    <div className="team__personel-link__item ">
                      <span>Advisors</span>
                    </div>
                    <div className="team__personel-link__item active">
                      <span>Crews</span>
                    </div>
                  </div>
                </div>

                <div className="team__personel--list">
                  <div className="row">
                    <TeamItem
                      img={personnel}
                      name="Dat Bui"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne2}
                      name="Hieu Le"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne3}
                      name="Dung Bui"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne4}
                      name="Thanh Pham"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne5}
                      name="Sang Pham"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne6}
                      name="Tu Trinh"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne7}
                      name="Thao Tran"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne8}
                      name="Son Hong"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne9}
                      name="Nguyen Bui"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personne10}
                      name="Giang Tran"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personnel1}
                      name="Diu Hoang"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                    <TeamItem
                      img={personnel2}
                      name="Hung Tran"
                      position="position"
                      experience="experience"
                    ></TeamItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Team;
