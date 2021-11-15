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

const Team = ({ user }) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 22,
  });

  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(user.slice(count.prev, count.next));

  const getMoreData = () => {
    if (current.length === user.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setCurrent(current.concat(user.slice(count.prev + 22, count.next + 22)));
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 22,
      next: prevState.next + 22,
    }));
  };
  console.log(user);

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
                        <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping1.png" alt="" className="img-1 img-mt" />
                        <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping2.png" alt="" className="img-1" />
                      </div>
                      <div className="team__wrapper-mid-2 pc l-6">
                        <img
                          src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/campingmid.png"
                          alt=""
                          className="img-mid img-mt"
                        />
                      </div>
                      <div className="team__wrapper-mid-3 l-3 c-6">
                        <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping3.png" alt="" className="img-2 img-mt" />
                        <img src="https://storage.googleapis.com/laboon-img-storage/laboon/image-team/camping4.png" alt="" className="img-2" />
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
                      <span>Founders</span>
                    </div>
                    <div className="team__personel-link__item ">
                      <span>Advisors</span>
                    </div>
                    <div className="team__personel-link__item ">
                      <span>Crews</span>
                    </div>
                  </div>
                </div>

                <div className="team__personel--list ">
                  {/* <InfiniteScroll
                                        dataLength={current.length}
                                        next={getMoreData}
                                        hasMore={current.length == user.length ? false : hasMore} 
                                        loader={<h4>Loading...</h4>}
                                        > */}
                  <div className="row">
                    {current.map((u, index) => (
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
                  {/* </InfiniteScroll> */}
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
