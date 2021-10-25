import React from 'react'
import '../grid.css';
import '../css/componentSubPage.scss'

import group1 from '../img/Group1.png'
import group2 from '../img/Group2.png'
import group3 from '../img/Group3.png'
import group4 from '../img/Group4.png'
import group5 from '../img/Group5.png'
import group6 from '../img/Group6.png'
import group7 from '../img/Group7.png'
import group8 from '../img/Group8.png'
import group9 from '../img/Group9.png'
import group10 from '../img/Group10.png'
import group11 from '../img/Group11.png'
import group12 from '../img/Group12.png'
import group13 from '../img/Group13.png'
import group14 from '../img/Group14.png'
import group15 from '../img/Group15.png'
import group16 from '../img/Group16.png'
import group17 from '../img/Group17.png'

const TitleSubPage = ({title, desp}) => {
    return (
        <>
            <div className="grid wide title__heading-container">
                <img src={group17} alt="" className="title__heading-img title__heading-group17" />
                    <img src={group6} alt="" className="title__heading-img title__heading-group6" />
                    <img src={group7} alt="" className="title__heading-img title__heading-group7" />
                    <img src={group16} alt="" className="title__heading-img title__heading-group16" />
                    <img src={group1} alt="" className="title__heading-img title__heading-group1" />
                    <img src={group3} alt="" className="title__heading-img title__heading-group3" />
                    <img src={group2} alt="" className="title__heading-img title__heading-group2" />
                    <img src={group4} alt="" className="title__heading-img title__heading-group4" />
                    <img src={group5} alt="" className="title__heading-img title__heading-group5" />
                    <img src={group9} alt="" className="title__heading-img title__heading-group9" />
                    <img src={group8} alt="" className="title__heading-img title__heading-group8" />
                    <img src={group10} alt="" className="title__heading-img title__heading-group10" />
                    <img src={group11} alt="" className="title__heading-img title__heading-group11" />
                    <img src={group12} alt="" className="title__heading-img title__heading-group12" />
                    <img src={group13} alt="" className="title__heading-img title__heading-group13" />
                    <img src={group14} alt="" className="title__heading-img title__heading-group14" />
                    <img src={group15} alt="" className="title__heading-img title__heading-group15" />
{/* 
                    <div className="title__heading-subpage">
                        <h1>{title}</h1>

                        <p>{desp}</p>
                    </div> */}
            </div>
        </>
    )
}

export default TitleSubPage
