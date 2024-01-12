import { Container, Paper, Typography} from "@mui/material";
import React from "react";
import "../Styles/Template4.css";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import { data } from "../Data/data";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";


const Template4 = (props) => {
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills 
    ? props.skills 
    : data.key_skills;
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
      elevation={3}
    >
      <Container>
    }
        {/* Render first name and last name directly */}
        <Typography variant="h5" color="#242624" gutterBottom sx={{ textAlign: 'center' }}>
          {personalinfo.firstName} {personalinfo.lastName}
        </Typography>

        {/* Render email and summary from TemplateHeader */}
        <Typography variant="body1" color="textSecondary" gutterBottom sx={{ textAlign: 'center' }}>
          {personalinfo.email} {personalinfo.mobile} {personalinfo.address} 
        </Typography>
        <Typography variant="body2" paragraph color="textSecondary" sx={{ textAlign: 'center' }}>
          {personalinfo.objective}
        </Typography>
        <Typography variant="body2" paragraph color="textSecondary" sx={{ textAlign: 'center' }}>
          {personalinfo.twitter && `Twitter: ${personalinfo.twitter} `} {personalinfo.github && `GitHub: ${personalinfo.github} `}
          {personalinfo.youtube && `YouTube: ${personalinfo.youtube} `}
          {personalinfo.stackOverflow && `Stack Overflow: ${personalinfo.stackOverflow} `}
          {personalinfo.quora && `Quora: ${personalinfo.quora} `}
          {personalinfo.website && `Website: ${personalinfo.website}`}
        </Typography>
          
        <TemplateHeading color={"#242624"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => (
            <TemplateOneExperienceComponent
              key={index}
              experience={experience}
              startYear={experience.startYear}
              endYear={experience.endYear}
            />
          ))}
        </ul>
        <TemplateHeading color={"#242624"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"#242624"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => (
            <TemplateKeySkillComponent key={index} skill={skill} />
          ))}
        </ul>
        <TemplateHeading color={"#242624"} title={"Languages"} />
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

export default Template4;
