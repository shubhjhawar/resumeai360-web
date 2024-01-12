import { Paper, Divider, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useState, useEffect, useRef, useCallback } from "react";
import InputComponent from "./InputComponent";
import "../Styles/KeySkillsComponent.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BackNextBtnComponent from "./BackNextBtnComponent";
import { connect } from "react-redux";
import { addNewSkills, deleteSkill, editSkill, addNewLanguage,editLanguage,deleteLanguage,} from "../Redux/actions";
import { useForm } from "react-hook-form";




const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
  languages: state.keySkillsReducer.languages,
});

const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
  onAddNewLanguage: () => dispatch(addNewLanguage()),
  onEditLanguage: (languages) => dispatch(editLanguage(languages)),
  onDeleteLanguage: (index) => dispatch(deleteLanguage(index)),

});

const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

function KeySkillsComponent(props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePreview = (data) => {
     console.log("data",data);
    setLoading(true);
    // props.onEditSkill(Object.values(data));

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);

  };

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const onEditLanguage = (value, id) => {
    const newLanguages = props.languages.map((language, index) => {
      if (index === id) {
        return value;
      } else return language;
    });

    props.onEditLanguage(newLanguages);
  };

  const onDeleteLanguage = (index) => {
    props.onDeleteLanguage(index);
  };

  const onEditSkill = (value, id) => {
    const newSkills = props.skills.map((skill, index) => {
      if (index === id) {
        return value;
      } else return skill;
    });

    props.onEditSkill(newSkills);
  };

  // console.log(props.skills, errors);

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.skills.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                <InputComponent
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditSkill(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {props.skills.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {props.skills.length >= 6 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}>
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
        {/* Languages section */}
        <h2 className="key-skills-heading">Languages</h2>
        <Divider />
        <div className="key-skills-form-fields">
          {props.languages.map((language, index) => {
            return (
            <div key={index} className="key-input-with-delete">
              {/* InputComponent for language */}
              <InputComponent
                type="text"
                name={`language${index + 1}`}
                placeholder="Language"
                register={register}
                multiline={false}
                value={language.name}
                setValue={(value) => onEditLanguage({ ...language, name: value }, index)}
                error={errors[`language${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`language${index + 1}`]
                      ? errors[`language${index + 1}`].message
                      : null
                  }
              />
              {/* Select proficiency level */}
              <FormControl fullWidth>
                  <InputLabel>Proficiency</InputLabel>
                  <Select
                    value={language.proficiency}
                    onChange={(e) => onEditLanguage({ ...language, proficiency: e.target.value }, index)}
                  >
                    {proficiencyLevels.map((level, levelIndex) => (
                      <MenuItem key={levelIndex} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              {props.languages.length === 1 ? null : (
              <DeleteOutlineOutlinedIcon
                sx={{ marginLeft: "10px" }}
                onClick={() => props.onDeleteLanguage(index)}
              />
              )}
            </div>
          );
          })}
        </div>
         {/* Add new language button */}
         {props.languages.length < 6 && (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewLanguage}
          >
            Add new language
          </Button>
        )}

        {/* Divider */}
        <Divider className="key-skills-divider" />
        
        <BackNextBtnComponent
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
        
      </form>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeySkillsComponent);
