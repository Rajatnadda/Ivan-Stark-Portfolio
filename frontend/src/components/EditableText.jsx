import React, { useState } from "react";
import "../Styles/EditableText.css";

const EditableText = ({ component, field, initialValue, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleSave = async () => {
    try {
      console.log("Attempting to save data...");
      const response = await fetch("http://localhost:5000/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ component, field, value }),
      });

      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);

      if (response.ok) {
        const data = await response.json();
        console.log("Successfully saved data. Backend response:", data);
        setIsEditing(false);
      } else {
        const errorText = await response.text();
        console.error("Failed to save data. Backend error:", errorText);
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
    }
  };

  return (
    <div className={`editable-text-wrapper ${className}`}>
      <div className="editable-text-content">
        {isEditing ? (
          <div className="modal-overlay">
            <div className="edit-popup">
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="popup-buttons">
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p>{value}</p>
            <div className="edit-buttons">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditableText;