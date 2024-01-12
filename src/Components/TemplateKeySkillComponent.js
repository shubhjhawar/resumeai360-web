import { Container } from "@mui/system";
import React from "react";
import "../Styles/TemplateKeySkillComponent.css";


const TemplateKeySkillComponent = (props) => {
  const renderSkill = props.skill ? <li className="skill">{props.skill}</li> : null;
  const renderLanguage = props.language ? (
    <li className="language">
      {props.language} - Proficiency: {props.proficiency}
    </li>
  ) : null;
  return (
    <Container>
        {renderSkill || renderLanguage}
    </Container>
  );
};

export default TemplateKeySkillComponent;
