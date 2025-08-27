import React from "react";
import "../Styles/CreativeJourney.css";
import journeyImg from "../assets/journey.jpg"; 

function CreativeJourney() {
  return (
    <section className="creative-journey">
      <div className="journey-top">
        <div className="journey-left">
          <div className="journey-image-container">
            <h1 className="journey-title">
              MY <br /> <span>CREATIVE</span> <br /> JOURNEY
            </h1>
            <img src={journeyImg} alt="Creative Journey" className="journey-img" />
          </div>
        </div>

        <div className="journey-right">
          <div className="stats">
            <div className="stat">
              <h2>8</h2>
              <p>
                Years <br /> Experience
              </p>
            </div>
            <div className="stat">
              <h2>14</h2>
              <p>
                Clients <br /> Worldwide
              </p>
            </div>
          </div>
          <p className="journey-text">
            MY <br />
            CREATIVE JOURNEY <br />
            STARTED IN ROME
            <br /> WHERE I STUDIED FOR THE <br />
            PAST YEARS.
          </p>
        </div>
      </div>
      <div className="journey-desc">
        <div className="desc-left">
          <p>
            I’ve been lucky to work with talented people and <br /> unique
            brands. Growth hacking sales learning curve <br /> stealth A/B
            testing ownership scrum project. Equity
            <br /> paradigm shift channels monetization startup
            <br /> buyer vesting period.
          </p>
        </div>
        <div className="desc-right">
          <p>
            My approach is to help my clients to visualize and <br /> communicate
            the best of themselves. Conversion
            <br /> prototype crowdfunding influencer early adopters <br /> launch
            party innovator creative niche market low
            <br /> hanging fruit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CreativeJourney;