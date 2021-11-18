import React from "react";
import Footer from "../../Components/Footer";
import Header from "./../../Components/Header";
import "../../grid.css";
import "./team.scss";
import HeaddingSubPage from "../../Components/HeaddingSubPage";
import TitleSubPage from "../../Components/TitleSubPage";
import logo21 from "../../img/logo21.png";
import TeamItem from "./TeamItem";
import { useState } from "react";
import axios from "axios";

const Team = ({ user }) => {
  const [currentProduct, setCurrentProduct] = useState(user);
  const [category, setCategory] = useState("All");

  const endpoint = "https://directus.laboon.org/graphql";
  React.useLayoutEffect(() => {
    const condition = `, filter: {
      position: {
        group_position: {
          position_group_name: {
            _eq: "${category}"
          }
        }
      }
    }`;
    const FILMS_QUERY = `
    {
      employ(limit: 24, offset: 0${category === "All" ? "" : condition}){
          last_name
          first_name
          short_desc
          position{ 
              position_name
              group_position{ 
                  position_group_name
              }
          }
          group_resource_id{ 
              sources{ 
                  directus_files_id{ 
                      filename_disk
                  }
              }
          }
      }
    }
  `;
    axios({
      url: endpoint,
      method: "POST",
      data: {
        query: FILMS_QUERY,
      },
    })
      .then((response) => {
        setCurrentProduct(
          response.data.data.employ ? response.data.data.employ : []
        );
      }) 
      .catch((err) => console.error(err));
  }, [category]);

  const clickAll = (type) => {
    setCurrentProduct(user);
    setCategory(type);
  }; 
  const fetchUser = (type) => {
    setCategory(type);
  };
  const listUser = () => {
    return currentProduct;
  };

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
                      <div className="team__wrapper-mid-2 mb l-6 c-12">
                        <img
                          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/campingmid.png"
                          alt=""
                          className="img-mid img-mt"
                        />
                      </div>
                      <div className="team__wrapper-mid-1 l-3 c-6">
                        <img
                          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping1.png"
                          alt=""
                          className="img-1 img-mt"
                        />
                        <img
                          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping2.png"
                          alt=""
                          className="img-1"
                        />
                      </div>
                      <div className="team__wrapper-mid-2 pc l-6">
                        <img
                          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/campingmid.png"
                          alt=""
                          className="img-mid img-mt"
                        />
                      </div>
                      <div className="team__wrapper-mid-3 l-3 c-6">
                        <img
                          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping3.png"
                          alt=""
                          className="img-2 img-mt"
                        />
                        <img
                          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping4.png"
                          alt=""
                          className="img-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team__personel">
                <h1>Meet the crew</h1>
                <div className="team__personel-link">
                  <div className="team__personel-link--wrap">
                    <div
                      className={`team__personel-link__item ${
                        category == "All" && "active"
                      } `}
                    >
                      <span
                        onClick={() => {
                          clickAll("All");
                        }}
                      >
                        All
                      </span>
                    </div>
                    <div
                      className={`team__personel-link__item ${
                        category == "Administrators" && "active"
                      } `}
                    >
                      <span
                        onClick={() => {
                          fetchUser("Administrators");
                        }}
                      >
                        Founders
                      </span>
                    </div>
                    <div
                      className={`team__personel-link__item ${
                        category == "Advisors" && "active"
                      } `}
                    >
                      <span
                        onClick={() => {
                          fetchUser("Advisors");
                        }}
                      >
                        Advisors
                      </span>
                    </div>
                    <div
                      className={`team__personel-link__item ${
                        category == "Crew" && "active"
                      } `}
                    >
                      <span
                        onClick={() => {
                          fetchUser("Crew");
                        }}
                      >
                        Crew
                      </span>
                    </div>
                  </div>
                </div>
                <div className="team__personel--list ">
                  <div className="row">
                    {listUser().map((u, index) => (
                      <TeamItem
                        key={index}
                        img={
                          !u.group_resource_id.sources[0].directus_files_id
                            ? "0a82aa93-4f88-4d5d-b56d-6296b249e8c3.png"
                            : u.group_resource_id.sources[0].directus_files_id
                                .filename_disk
                        }
                        name={u.first_name}
                        lastName={u.last_name}
                        position={u.position.position_name}
                        experience={u.short_desc}
                      ></TeamItem>
                    ))}
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
