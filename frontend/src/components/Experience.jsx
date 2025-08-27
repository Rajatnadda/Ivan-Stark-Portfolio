import React from "react";
import "../Styles/Experience.css";

function Experience() {
  return (
    <section className="experience-section">
      <h1 className="experience-title">EXPERIENCE</h1>

      <div className="experience-content">
        <div className="experience-list">
          <div className="experience-item">
            <div className="job-info">
              <p className="job-date">2023 - Present</p>
              <h2 className="job-title">ART DIRECTOR</h2>
            </div>
            <div className="company-info">
              <div className="company-logo">
              </div>
              <p className="company-name">Virejori</p>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="job-info">
              <p className="job-date">2023 - Present</p>
              <h2 className="job-title">UX/UI DESIGNER & DEVELOPER</h2>
            </div>
            <div className="company-info">
              <div className="company-logo"></div> 
              <p className="company-name">Acumen</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="job-info">
              <p className="job-date">2023 - Present</p>
              <h2 className="job-title">CREATIVE DEVELOPER</h2>
            </div>
            <div className="company-info">
              <div className="company-logo"></div> 
              <p className="company-name">Designify</p>
            </div>
          </div>
        </div>

        <div className="experience-text-block">
          <p className="experience-text">
            Business plan seed money value proposition startup client direct
            mailing bootstrapping MVP success hypotheses gen-z pivot
            iteration ecosystem. Hackathon burn rate influencer business-to-
            business series A financing metrics low hanging fruit advisor alpha
            iPhone disruptive seed round.
          </p>
          <a href="#" className="download-button">
            DOWLOAD RESUME <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;