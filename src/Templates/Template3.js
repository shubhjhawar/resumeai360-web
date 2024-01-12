import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template2.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

const Template3 = (props) => {
  
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;
  const languages = props.languages ? props.languages : data.languages;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "auto",
          sm: "auto",
          md: "auto",
          lg: "auto",
          xl: "auto",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#121110"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"#121110"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
                startYear={experience.startYear}
                endYear={experience.endYear}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"#121110"} title={"Education"} />
          <TemplateEducationComponent education={educationinfo} />
       

        <TemplateHeading color={"#121110"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
        <TemplateHeading color={"#121110"} title={"Languages"} />
        <ul style={{ marginBottom: 10 }}>
          {languages && languages.map((language, index) => (
            <TemplateKeySkillComponent
            key={index}
            language={language.name}  // Update to include language name
            proficiency={language.proficiency}  // Add proficiency if needed
          />
          ))}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template3;
