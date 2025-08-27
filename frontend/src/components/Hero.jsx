import React, { useState } from "react";
import "../Styles/hero.css";
import heroImg from "../assets/demo-image.png"; 
import EditableText from "./EditableText";
import AddButton from "./AddButton";

function Hero() {
  const [buttons, setButtons] = useState([]);

  const handleAddButton = (newButton) => {
    setButtons([...buttons, newButton]);
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <img src={heroImg} alt="Ivan Stark" className="hero-image" />
      </div>

      <div className="hero-right">
        {/* Editable Hero Title */}
        <EditableText
          component="Hero"
          field="title"
          initialValue="I’M IVAN STARK"
          className="hero-title-text"
        />

      
        <div className="designer-box">
          <EditableText
            component="Hero"
            field="designer_title"
            initialValue="// A DIGITAL DESIGNER //"
            className="designer-title-text"
          />
        </div>

  
        <EditableText
          component="Hero"
          field="description"
          initialValue="My approach is to help my clients to visualize and communicate the best of themselves."
          className="hero-desc-text"
        />

      
        <div className="cta-container">
          <AddButton onAddButton={handleAddButton} />
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.url || "#"}
              className="cta-btn"
              style={{ backgroundColor: button.bgColor || "#ccff00" }}
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
