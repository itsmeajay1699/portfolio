import React from "react";

const SkillCard = ({ skill }) => {
  console.log(skill);
  return (
    <div className="card">
      <div className="card3">
        <div className="carda">
          <div className="card__border" />
          <div className="card_title__container">
            <p className="card_paragraph">{skill.additionalInfo.description}</p>
          </div>
          <hr className="line" />
          <ul className="card__list">
            {skill.additionalInfo.keysToSuccess.map((str) => {
              return (
                <li key={str} className="card__list_item">
                  <span className="check">
                    <svg
                      className="check_svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="list_text">{str}</span>
                </li>
              );
            })}
          </ul>
          <button className="button">
            <a href={skill.url}>{skill.buttonText}</a>
          </button>
        </div>
      </div>
      <div className="card2">
        <div className="content-body p-6 text-center space-y-2">
          <div className="content-img rounded-[18px]">
            <img className="w-full rounded-[12px]" src={skill.img} alt="" />
          </div>
          <h2 className="text-lg font-semibold">{skill.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
