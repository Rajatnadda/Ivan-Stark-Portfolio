import React, { useState } from "react";
import "../Styles/EditableText.css";

const EditableText = ({ component, field, initialValue, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ component, field, value }),
      });

      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error("Failed to save data.");
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
    }
  };

  return (
    <div className={`editable-text-wrapper ${className}`}>
      <div className="editable-text-content">
        {isEditing ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <p>{value}</p>
        )}

        <div className={`edit-buttons ${isEditing ? "editing" : ""}`}>
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditableText;
