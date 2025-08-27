import React, { useState } from "react";
import "../Styles/AddButton.css";

const AddButton = ({ onAddButton }) => {
  const [showForm, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");
  const [buttonColor, setButtonColor] = useState("#ccff00");
  const [buttonType, setButtonType] = useState("button"); // New field

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buttonText) return;

    const newButton = { text: buttonText, url: buttonUrl, bgColor: buttonColor, type: buttonType };
    onAddButton(newButton);
    try {
      await fetch("http://localhost:5000/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          component: "Hero",
          field: "button",
          value: newButton,
        }),
      });
    } catch (err) {
      console.error("Error saving button to backend:", err);
    }

    setButtonText("");
    setButtonUrl("");
    setButtonColor("#ccff00");
    setButtonType("button");
    setShowForm(false);
  };

  return (
    <div className="add-button-container">
      {!showForm && (
        <button onClick={() => setShowForm(true)} className="add-btn">
          + Add Button
        </button>
      )}

      {showForm && (
        <form className="add-button-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Button Text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
          <input
            type="url"
            placeholder="Button URL"
            value={buttonUrl}
            onChange={(e) => setButtonUrl(e.target.value)}
          />
          <input
            type="color"
            value={buttonColor}
            onChange={(e) => setButtonColor(e.target.value)}
          />
          <select value={buttonType} onChange={(e) => setButtonType(e.target.value)}>
            <option value="button">Button</option>
            <option value="submit">Submit</option>
            <option value="reset">Reset</option>
          </select>
          <div className="button-actions">
            <button type="submit" className="create-btn">Create</button>
            <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddButton;
