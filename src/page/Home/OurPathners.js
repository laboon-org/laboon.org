import React from "react";

const OurPathners = ({ ourpartner }) => {
  console.log(ourpartner);
  ourpartner.sort((num1, num2) => num1.position - num2.position);
  return (
    <section className="ourpatners grid ">
      <div className="ourpatners__content grid">
        <h1>Our Patners</h1>
        <div className=" ourpatners__items-wrap row">
          {ourpartner &&  
            ourpartner.map((ourp) => (
              <div className="ourpatner__item l-2 c-6">
                <a href={!ourp.link ? "/" : ourp.link}>
                  <img
                    src={`${ourp.image.url}`}
                    alt=""
                    className=""
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurPathners;
