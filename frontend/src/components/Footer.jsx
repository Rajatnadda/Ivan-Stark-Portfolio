import React from "react";
import "../Styles/Footer.css";
import EditableText from "./EditableText";

function Footer() {
  return (
    <footer className="footer-section">
      <h1 className="footer-heading">
        <EditableText
          component="Footer"
          field="footer_heading"
          initialValue="HOW TO REACH ME"
        />
      </h1>

      <div className="footer-content">
        <div className="footer-text">
          <EditableText
            component="Footer"
            field="footer_paragraph"
            initialValue={`Advisor leverage infographic
influencer. Equity business
plan virality monetization lean
startup validation conversion
seed round hackathon
crowdsource entrepreneur low
hanging fruit ecosystem buzz.`}
          />
        </div>

        <div className="contact-info">
          <div className="address">
            <h4>
              <EditableText
                component="Footer"
                field="address_heading"
                initialValue="Address"
              />
            </h4>
            <EditableText
              component="Footer"
              field="address_text"
              initialValue={`VIA FRANCESCO
DEL GIUDICE 86
ROME, ITALY`}
            />
          </div>
          <div className="call">
            <h4>
              <EditableText
                component="Footer"
                field="call_heading"
                initialValue="Call"
              />
            </h4>
            <EditableText
              component="Footer"
              field="call_text"
              initialValue="(862) 258-1210"
            />
          </div>
        </div>

        <div className="social-links">
          <h4>
            <EditableText
              component="Footer"
              field="social_heading"
              initialValue="Follow Me"
            />
          </h4>
          <ul>
            <li>
              <EditableText
                component="Footer"
                field="social_behance"
                initialValue="BEHANCE"
              />
            </li>
            <li>
              <EditableText
                component="Footer"
                field="social_dribbble"
                initialValue="DRIBBBLE"
              />
            </li>
            <li>
              <EditableText
                component="Footer"
                field="social_linkedin"
                initialValue="LINKEDIN"
              />
            </li>
            <li>
              <EditableText
                component="Footer"
                field="social_instagram"
                initialValue="INSTAGRAM"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <EditableText
            component="Footer"
            field="copyright_text"
            initialValue="© Ivan Stark. All rights reserved"
          />
        </p>
        <p className="privacy-policy">
          <EditableText
            component="Footer"
            field="privacy_policy"
            initialValue="Privacy Policy"
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
