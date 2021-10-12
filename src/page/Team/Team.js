import React from 'react'
import Footer from '../../components/Footer';
import Header from './../../components/Header';
import '../../grid.css';
import './team.scss';
import HeaddingSubPage from '../../components/HeaddingSubPage';

import TitleSubPage from '../../components/TitleSubPage';

import camping1 from './imgTeam/camping1.png'
import camping2 from './imgTeam/camping2.png'
import camping3 from './imgTeam/camping3.png'
import camping4 from './imgTeam/camping4.png'
import campingmid from './imgTeam/campingmid.png'

import personnel from './imgTeam/personel1.png'
import personne2 from './imgTeam/personel2.png'
import personne3 from './imgTeam/personel3.png'
import personne4 from './imgTeam/personel4.png'
import personne5 from './imgTeam/personel5.png'
import personne6 from './imgTeam/personel6.png'
import personne7 from './imgTeam/personel7.png'
import personne8 from './imgTeam/personel8.png'
import personne9 from './imgTeam/personel9.png'
import personne10 from './imgTeam/personel10.png'
import personnel1 from './imgTeam/personel11.png'
import personnel2 from './imgTeam/personel12.png'
import logo21 from '../../img/W1.png'



import TeamItem from './TeamItem';


const Team = () => {
    return (
        <>
            <Header active={"team"} logo={logo21}></Header>
            <HeaddingSubPage title ={"Team"}></HeaddingSubPage>
            <div className="grid">
                <div className="team__container">
                    <TitleSubPage title={"Laboon Team"} desp = {"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"}></TitleSubPage>

                    <div className="grid wide">
                        <div className="team__content">
                            <h1>Wonderfill day-by-day</h1>
                            <div className="team__wrapper">
                                <div className="row">
                                    <div className="team__wrapper-left col l-3">
                                        <div className="team__thumb">
                                            <img src={camping1} alt="" className="team__thumb-img" />
                                            <div className="team__thumb-inf">
                                                <h2>Camping</h2>
                                                <span>20 March 2021</span>
                                            </div>
                                        </div>
                                        <div className="team__thumb">
                                            <img src={camping2} alt="" className="team__thumb-img" />
                                            <div className="team__thumb-inf">
                                                <h2>Camping</h2>
                                                <span>20 March 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__wrapper-mid col l-6">
                                        <div className="team__wrapper-mid__content">

                                            <img src={campingmid} alt="" className="team__wrapper-mid-img" />
                                            <div className="team__wrapper-mid-inf">
                                                <h2>Camping</h2>
                                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                                                <span>20 March 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__wrapper-right col l-3">
                                        <div className="team__thumb">
                                            <img src={camping3} alt="" className="team__thumb-img" />
                                            <div className="team__thumb-inf">
                                                <h2>Camping</h2>
                                                <span>20 March 2021</span>
                                            </div>
                                        </div>
                                        <div className="team__thumb">
                                            <img src={camping4} alt="" className="team__thumb-img" />
                                            <div className="team__thumb-inf">
                                                <h2>Camping</h2>
                                                <span>20 March 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="team__personel">
                                <h1>Meet the crew</h1>
                                <div className="team__personel-link">
                                    <div className="team__personel-link--wrap">
                                        <div className="team__personel-link__item active ">
                                            <span>All</span>    
                                        </div>
                                        <div className="team__personel-link__item ">
                                            <span>Administrators</span> 
                                        </div>
                                        <div className="team__personel-link__item ">
                                            <span>Advisers</span> 
                                        </div>
                                        <div className="team__personel-link__item ">
                                            <span>Crew</span> 
                                        </div>
                                    </div>
                                </div>

                                <div className="team__personel--list">
                                    <div className="row">
                                        <TeamItem img={personnel}></TeamItem>
                                        <TeamItem img={personne2}></TeamItem>
                                        <TeamItem img={personne3}></TeamItem>
                                        <TeamItem img={personne4}></TeamItem>
                                        <TeamItem img={personne5}></TeamItem>
                                        <TeamItem img={personne6}></TeamItem>
                                        <TeamItem img={personne7}></TeamItem>
                                        <TeamItem img={personne8}></TeamItem>
                                        <TeamItem img={personne9}></TeamItem>
                                        <TeamItem img={personne10}></TeamItem>
                                        <TeamItem img={personnel1}></TeamItem>
                                        <TeamItem img={personnel2}></TeamItem>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
            
        </>
    )
}

export default Team
