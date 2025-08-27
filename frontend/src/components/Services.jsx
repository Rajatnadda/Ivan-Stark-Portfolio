import React from "react";
import "../Styles/Services.css";
import graphicDesignImg from "../assets/demo-image.png"; 
import EditableText from "./EditableText";

function Services() {
  return (
    <section className="services-section">
      <div className="services-content">
        <div className="service-list-container">
          <ul className="service-list">
            <li className="service-item active">
              <span className="service-number">
                <EditableText
                  component="Services"
                  field="service_number_1"
                  initialValue="01"
                />
              </span>
              <h2 className="service-title">
                <EditableText
                  component="Services"
                  field="service_title_1"
                  initialValue="GRAPHIC DESIGN"
                />
              </h2>
              <div className="service-line"></div>
            </li>

            <li className="service-item">
              <span className="service-number">
                <EditableText
                  component="Services"
                  field="service_number_2"
                  initialValue="02"
                />
              </span>
              <h2 className="service-title">
                <EditableText
                  component="Services"
                  field="service_title_2"
                  initialValue="ART DIRECTION"
                />
              </h2>
              <div className="service-line"></div>
            </li>

            <li className="service-item">
              <span className="service-number">
                <EditableText
                  component="Services"
                  field="service_number_3"
                  initialValue="03"
                />
              </span>
              <h2 className="service-title">
                <EditableText
                  component="Services"
                  field="service_title_3"
                  initialValue="BRAND STRATEGY"
                />
              </h2>
              <div className="service-line"></div>
            </li>

            <li className="service-item">
              <span className="service-number">
                <EditableText
                  component="Services"
                  field="service_number_4"
                  initialValue="04"
                />
              </span>
              <h2 className="service-title">
                <EditableText
                  component="Services"
                  field="service_title_4"
                  initialValue="MOTION"
                />
              </h2>
              <div className="service-line"></div>
            </li>
          </ul>
        </div>

        <div className="service-image-wrapper"> 
          <img
            src={graphicDesignImg}
            alt="Graphic Design"
            className="service-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
