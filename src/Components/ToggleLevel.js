// ToggleLevel.js

import React from "react";

const ToggleLevel = ({ level, onChange }) => {
  const proficiencyLevels = [
    "Elementary",
    "Limited",
    "Professional",
    "Full professional",
    "Native or bilingual",
  ];

  return (
    <div>
      <label>Proficiency Level:</label>
      <div>
        {proficiencyLevels.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`level-${index}`}
              name="proficiencyLevel"
              value={option}
              checked={level === option}
              onChange={() => onChange(option)}
            />
            <label htmlFor={`level-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleLevel;
