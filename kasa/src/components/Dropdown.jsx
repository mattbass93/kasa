import React, { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ title, content, isList }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={require("../assets/icons/vector.png")}
          alt={`Afficher ou masquer ${title}`}
          className={`vector-icon ${isOpen ? "rotate" : ""}`}
        />
      </button>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {isList ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
