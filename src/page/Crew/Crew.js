import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Headerlaboon";
import "../../grid.css";
import "./Crew.scss";
import HeaddingSubPage from "../../Components/HeaddingSubPage";
import TitleSubPage from "../../Components/TitleSubPage";
import CrewItem from "./CrewItem";
import { useState } from "react";
import axios from "axios";
import constant from "../../constant";

const Team = ({ user }) => {
  const [currentProduct, setCurrentProduct] = useState(user);
  const [category, setCategory] = useState("All");

  const endpoint = constant.API.url;
    //"https://api-ap-northeast-1.graphcms.com/v2/ckx41ssik336s01w89hsk0rf5/master";

  React.useLayoutEffect(() => {
    const condition = `, where: {
      position: {
        group_position: ${category}
      }
    }`;

    const MyQuery = `
        {
          people(${category === "All" ? "" : condition}) {
            first_name
            last_name
            short_desc
            position {
              group_position
              position_name
              position_priority
            }
            socialLinks {
              social_name 
              link
              icon {
                url
              }
            }
            photo {
              url
            }
          }
        }
        `;
    axios({
      url: endpoint,
      method: "POST",
      data: {
        query: MyQuery,
      },
    })
      .then((response) => {
        setCurrentProduct(
          response.data.data.people ? response.data.data.people : []
        );
      })
      .catch((err) => console.error(err));
  }, [category, endpoint]);

  const clickAll = (type) => {
    setCurrentProduct(user);
    setCategory(type);
  };

  const fetchUser = (type) => {
    setCategory(type);
  };

  function comparePerson( a, b ) {
    const prioA = a.position.position_priority;
    const prioB = b.position.position_priority;
    if ( prioA < prioB ){
      return -1;
    }
    if ( prioA > prioB ){
      return 1;
    }
    return 0;
  }

  const listUser = () => {
    let sortList = [];
    if (currentProduct !== [] && category === "All") {
      sortList = [...currentProduct];
      sortList.sort(comparePerson);
      return sortList;
    }
    return currentProduct;

  };

  return (
    <>
      <Header active={"crew"}></Header>
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
              <h1>Wonderful Days</h1>
              <div className="team__wrapper">
                <div className="team__wrapper-mid">
                  <div className="team__wrapper-mid__content">
                    <div className="row">
                      <div className="crew_item item1">
                        <img src="https://media.graphassets.com/iFLLNLm1SFKa1dUhvB2I" className="img-left" alt="Laboon Crew"></img>
                      </div>
                      <div className="crew_item item2">
                        <img src="https://media.graphassets.com/uMV2RmZNTxOhaqijeHdz" className="img-midle" alt="Laboon Crew"></img>
                      </div>
                      <div className="crew_item item3">
                        <img src="https://media.graphassets.com/wFZrM4t2Q0Lrlosv1miQ" className="img-right" alt="Laboon Crew"></img>
                      </div>
                      <div className="team__wrapper-mid-2 mb l-6 c-12">
                        <img src="https://media.graphassets.com/uCb5bXzFR9qgyUgvzvpV" alt="Crew Background" className="img-mid img-mt" />
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
                        category === "All" && "active"
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
                        category === "Administrators" && "active"
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
                        category === "Advisers" && "active"
                      } `}
                    >
                      <span
                        onClick={() => {
                          fetchUser("Advisers");
                        }}
                      >
                        Advisors
                      </span>
                    </div>
                    <div
                      className={`team__personel-link__item ${
                        category === "Crew" && "active"
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
                      <CrewItem
                        key={index}
                        img={u.photo.url}
                        name={u.first_name}
                        lastName={u.last_name}
                        position={u.position.position_name}
                        experience={u.short_desc}
                        refs={u.socialLinks}
                      ></CrewItem>
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
