import React from "react";

const TeamItem = ({ img, name, lastName, position, experience,refs }) => {
  return (
    <>
      <div className="team__personel--item l-3 m-6 c-6">
        <div className="team__personel--item-wrap">
          <div className="team__personel--item__inf">
            <img
              src={`${img}`}
              alt=""
              className="team__personel--item-img team__personel--item-img-avt"
            />
            <img
              src="https://media.graphassets.com/Eatb81McTdOIO6qnsTH8"
              alt=""
              className="team__personel--item-img team__personel--item__bg"
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
            { refs.map((ref, index) => (
              <a href={ref.link} key={index}>
                <img src={`${ref.icon.url}`}
                  alt=""
                  className="connect-icon" 
                  />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
