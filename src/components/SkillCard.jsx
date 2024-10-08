import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div
      className="skill-card"
      style={{
        backgroundColor: skill.color,
        width: "250px", // Fixed width
        height: "250px", // Fixed height
      }}
    >
      <h2>{skill.name}</h2>
    </div>
  );
};

export default SkillCard;
