import React from "react";
import personnel from "./imgTeam/personel1.png";
import personnelbg from "./imgTeam/personelbg.png";

import connectIcon from "./imgTeam/connecticon.png";

import fb from "./imgTeam/fb.png";
import tw from "./imgTeam/tw.png";
import git from "./imgTeam/git.png";
import linkin from "./imgTeam/linkin.png";

const TeamItem = ({ 
    img,
    name,
    position,
    experience 
}) => {
  return (
    <>
      <div className="team__personel--item l-3">
        <div className="team__personel--item__inf">
          <img
            src={personnelbg}
            alt=""
            className="team__personel--item-img team__personel--item__bg"
          />
          <img
            src={img}
            alt=""
            className="team__personel--item-img team__personel--item-img-avt"
          />
          <h2>{name}</h2>
          <span>{position}</span>
          <div className="experience">
            <span>{experience}</span>
          </div>
        </div>
        <div className="team__personel--item__connect">
          <img src={fb} alt="" className="connect-icon" />
          <img src={tw} alt="" className="connect-icon" />
          <img src={git} alt="" className="connect-icon" />
          <img src={linkin} alt="" className="connect-icon" />
        </div>
      </div>
    </>
  );
};

export default TeamItem;
