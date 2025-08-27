import React from "react";
import "../Styles/Clients.css"
import clientImage from "../assets/image-7.jpg";

function Clients() {
  return (
    <section className="clients-section">
      <h1 className="clients-heading">MY CLIENTS</h1>
      <div className="clients-content">
        <img src={clientImage} alt="A client's profile" className="client-image-placeholder" />
        <div className="testimonial-block">
          <div className="testimonial-text">
            <p>
              long tail equity interaction design creative. Deployment paradigm
              shif rockstar sales supply chain twitter. Monetization succes
              customer iteration iPad early adopters. Research & development A/B
              testing gen-z stock ramen creative leverage early adopters
              branding innovator pivot.
            </p>
          </div>
          <div className="client-info">
            <p className="client-name">ROBY GALA</p>
            <p className="client-title">President of Sales</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;