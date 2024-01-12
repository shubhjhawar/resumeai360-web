import { Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import "../Styles/EducationComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import { connect } from "react-redux";
import { addEducation } from "../Redux/actions";
import { useForm, Controller } from "react-hook-form";

const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onAddEducation: (details) => dispatch(addEducation(details)),
});

const years = [
  "Present",
  "2030",
  "2029",
  "2028",
  "2027",
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009"

];
const expire = [ 
  "never expire",
  "2030",
  "2029",
  "2028",
  "2027",
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009"]; 

const EducationComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = (data) => {
    // console.log(data);
    setLoading(true);
    props.onAddEducation(data);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // console.log(props.educationInfo, errors);

  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />
      <form onSubmit={handleSubmit(handleNext)}>


<h3 className="education-heading">School</h3>
  <div className="education-form-cont">

    <InputComponent
      title={"school"}
      type={"text"}
      name={"school"}
      register={register}
      multiline={false}
      value={props.educationInfo.school}
      setValue={(value) =>
        props.onAddEducation({
          ...props.educationInfo,
          school: value,
        })
      }
      error={errors.school ? true : false}
      errorMessage={errors.school ? errors.school.message : null}
    />
    
    <SelectComponent
      title={"Start Year"}
      errorMessage={errors.startYear ? errors.startYear.message : null}
      error={errors.startYear ? true : false}>
      <Controller
        render={(props) => {
          // console.log(props);
          return (
            <Select
              value={props.field.value}
              onChange={props.field.onChange}
              error={errors.startYear ? true : false}>
              {years.map((year, index) => {
                return (
                  <MenuItem key={index} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          );
        }}
        name={"SchoolStartYear"}
        control={control}
        //rules={{ required: "*Please select start year" }}
        defaultValue={props.educationInfo.SchoolStartYear}
      />
    </SelectComponent>
    <SelectComponent
      title={"End Year"}
      errorMessage={errors.endYear ? errors.endYear.message : null}
      error={errors.endYear ? true : false}>
      <Controller
        render={(props) => (
          <Select
            value={props.field.value}
            onChange={props.field.onChange}
            error={errors.endYear ? true : false}>
            {years.map((year, index) => {
              return (
                <MenuItem key={index} value={year}>
                  {year}
                </MenuItem>
              );
            })}
          </Select>
        )}
        name={"SchoolendYear"}
        control={control}
       // rules={{ required: "*Please select end year" }}
        defaultValue={props.educationInfo.SchoolendYear}
      />
    </SelectComponent>

  </div>

  <h3 className="education-heading">University</h3>
  <div className="education-form-cont">
    <InputComponent
      title={"Domain"}
      type={"text"}
      name={"domain"}
      register={register}
      multiline={false}
      value={props.educationInfo.domain}
      setValue={(value) =>
        props.onAddEducation({ ...props.educationInfo, domain: value })
      }
      error={errors.domain ? true : false}
      errorMessage={errors.domain ? errors.domain.message : null}
    />
    
    <InputComponent
      title={"University"}
      type={"text"}
      name={"university"}
      register={register}
      multiline={false}
      value={props.educationInfo.university}
      setValue={(value) =>
        props.onAddEducation({
          ...props.educationInfo,
          university: value,
        })
      }
      error={errors.university ? true : false}
      errorMessage={errors.university ? errors.university.message : null}
    />
    <InputComponent
      title={"Degree"}
      type={"text"}
      name={"degree"}
      register={register}
      multiline={false}
      value={props.educationInfo.degree}
      setValue={(value) =>
        props.onAddEducation({ ...props.educationInfo, degree: value })
      }
      error={errors.degree ? true : false}
      errorMessage={errors.degree ? errors.degree.message : null}
    />
    <SelectComponent
      title={"Start Year"}
      errorMessage={errors.startYear ? errors.startYear.message : null}
      error={errors.startYear ? true : false}>
      <Controller
        render={(props) => {
          // console.log(props);
          return (
            <Select
              value={props.field.value}
              onChange={props.field.onChange}
              error={errors.startYear ? true : false}>
              {years.map((year, index) => {
                return (
                  <MenuItem key={index} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          );
        }}
        name={"UniStartYear"}
        control={control}
       // rules={{ required: "*Please select start year" }}
        defaultValue={props.educationInfo.UniStartYear}
      />
    </SelectComponent>
    <SelectComponent
      title={"End Year"}
      errorMessage={errors.endYear ? errors.endYear.message : null}
      error={errors.endYear ? true : false}>
      <Controller
        render={(props) => (
          <Select
            value={props.field.value}
            onChange={props.field.onChange}
            error={errors.endYear ? true : false}>
            {years.map((year, index) => {
              return (
                <MenuItem key={index} value={year}>
                  {year}
                </MenuItem>
              );
            })}
          </Select>
        )}
        name={"UniEndYear"}
        control={control}
       // rules={{ required: "*Please select end year" }}
        defaultValue={props.educationInfo.UniEndYear}
      />
    </SelectComponent>
  </div>


  <h3 className="education-heading">Diploma</h3>
  <div className="education-form-cont">
    <InputComponent
      title={"Diploma Name"}
      type={"text"}
      name={"diplomaName"}
      register={register}
      multiline={false}
      value={props.educationInfo.diplomaName}
      setValue={(value) =>
        props.onAddEducation({ ...props.educationInfo, diplomaName: value })
      }
      error={errors.diplomaName ? true : false}
      errorMessage={errors.diplomaName ? errors.diplomaName.message : null}
    />
    <div></div>

    <InputComponent
      title={"Institute"}
      type={"text"}
      name={"diplomaInstitute"}
      register={register}
      multiline={false}
      value={props.educationInfo.diplomaInstitute}
      setValue={(value) =>
        props.onAddEducation({ ...props.educationInfo, diplomaInstitute: value })
      }
      error={errors.diplomaInstitute ? true : false}
      errorMessage={errors.diplomaInstitute ? errors.diplomaInstitute.message : null}
    />
    <InputComponent
      title={"Subject"}
      type={"text"}
      name={"diplomaSubject"}
      register={register}
      multiline={false}
      value={props.educationInfo.diplomaSubject}
      setValue={(value) =>
        props.onAddEducation({ ...props.educationInfo, diplomaSubject: value })
      }
      error={errors.diplomaSubject ? true : false}
      errorMessage={errors.diplomaSubject ? errors.diplomaSubject.message : null}
    />

    <SelectComponent
      title={"Year"}
      errorMessage={errors.diplomaYear ? errors.diplomaYear.message : null}
      error={errors.diplomaYear ? true : false}>
      <Controller
        render={(props) => {
          // console.log(props);
          return (
            <Select
              value={props.field.value}
              onChange={props.field.onChange}
              error={errors.diplomaYear ? true : false}>
              {years.map((year, index) => {
                return (
                  <MenuItem key={index} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          );
        }}
        name={"diplomaYear"}
        control={control}
       // rules={{ required: "*Please select  year" }}
        defaultValue={props.educationInfo.diplomaYear}
      />
    </SelectComponent>

  </div>

  <h3 className="education-heading">Certificate</h3>
  <div className="education-form-cont">
    <InputComponent
      title={"certificate Name"}
      type={"text"}
      name={"certificateName"}
      register={register}
      multiline={false}
      value={props.educationInfo.certificateName}
      setValue={(value) =>
        props.onAddEducation({ ...props.educationInfo, certificateName: value })
      }
      error={errors.certificateName ? true : false}
      errorMessage={errors.certificateName ? errors.certificateName.message : null}
    />
    <div></div>
    <InputComponent
      title={"Organization"}
      type={"text"}
      name={"certificateOrg"}
      register={register}
      multiline={false}
      value={props.educationInfo.certificateOrg}
      setValue={(value) =>
        props.onAddEducation({
          ...props.educationInfo,
          certificateOrg: value,
        })
      }
      error={errors.certificateOrg ? true : false}
      errorMessage={errors.certificateOrg ? errors.certificateOrg.message : null}
    />

    <SelectComponent
      title={"Year"}
      errorMessage={errors.certificateYear ? errors.certificateYear.message : null}
      error={errors.certificateYear ? true : false}>
      <Controller
        render={(props) => {
          // console.log(props);
          return (
            <Select
              value={props.field.value}
              onChange={props.field.onChange}
              error={errors.certificateYear ? true : false}>
              {years.map((year, index) => {
                return (
                  <MenuItem key={index} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          );
        }}
        name={"certificateYear"}
        control={control}
       // rules={{ required: "*Please select year" }}
        defaultValue={props.educationInfo.certificateYear}
      />
    </SelectComponent>
    <SelectComponent
      title={"Expire"}
      errorMessage={errors.certificateExpire ? errors.certificateExpire.message : null}
      error={errors.certificateExpire ? true : false}>
      <Controller
        render={(props) => {
          // console.log(props);
          return (
            <Select
              value={props.field.value}
              onChange={props.field.onChange}
              error={errors.certificateExpire ? true : false}>
              {expire.map((year, index) => {
                return (
                  <MenuItem key={index} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          );
        }}
        name={"certificateExpire"}
        control={control}
       // rules={{ required: "*Please select year" }}
        defaultValue={props.educationInfo.certificateExpire}
      />
    </SelectComponent>
  </div>


  <Divider sx={{ margin: "10px 0px" }} />
  <BackNextBtnComponent
    onNext={handleNext}
    onBack={handleBack}
    loading={loading}
    tab={props.tab}
    nextTitle={"Next"}
    backTitle={"Back"}
  />
</form>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
