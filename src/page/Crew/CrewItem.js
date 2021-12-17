import React from "react";
import personnelbg from "./imgCrew/personelbg.png";
const TeamItem = ({ img, name, lastName, position, experience }) => {
  return (
    <>
      <div className="team__personel--item l-3 m-6 c-6">
        <div className="team__personel--item-wrap">
          <div className="team__personel--item__inf">
            <img
              src={personnelbg}
              alt=""
              className="team__personel--item-img team__personel--item__bg"
            />
            <img
              src={`${img}`}
              alt=""
              className="team__personel--item-img team__personel--item-img-avt"
            />
            <h2>
              {name} {lastName}
            </h2>
            <span>{position}</span>
            <div className="experience">
              <span>{experience}</span>
            </div>
          </div>
          <div className="team__personel--item__connect">
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team-icon/fb.png" alt="" className="connect-icon" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team-icon/tw.png" alt="" className="connect-icon" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team-icon/git.png" alt="" className="connect-icon" />
            <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team-icon/in.png" alt="" className="connect-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
