import React from 'react'
import personnel from './imgTeam/personel1.png'
import personnelbg from './imgTeam/personelbg.png'

import connectIcon from './imgTeam/connecticon.png'

const TeamItem = ({img}) => {
    return (
        <>
            <div className="team__personel--item l-3">
                <div className="team__personel--item__inf">
                    <img src={personnelbg} alt="" className="team__personel--item-img team__personel--item__bg" />
                    <img src={img} alt="" className="team__personel--item-img team__personel--item-img-avt" />
                    <h2>John Brown</h2>
                    <span>C.E.O</span>
                </div>
                <div className="team__personel--item__connect">
                    <span>Connect</span>
                    <img src={connectIcon} alt="" className="" />
                </div>
            </div>
        </>
    )
}

export default TeamItem
