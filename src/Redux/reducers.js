import * as actionTypes from "./actionTypes";

const initialSelectedTemplateState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};

const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
    github: '',
    twitter: '',
    youtube: '',
    stackOverflow: '',
    quora: '',
    website: '',
  },
};

const initialWorkExperienceState = {
  experiences: [
    {
      id: 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
      jobDescription: "",
    },
  ],
};

const initialEducationState = {
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
    school:"",
    SchoolStartYear:"",
    SchoolendYear:"",
    diplomaYear:"",
    diplomaName:"",
    diplomaInstitute:"",
    diplomaSubject:"",
    UniStartYear:"",
    UniEndYear:"",
    certificateName:"",
    certificateOrg:"",
    certificateYear:"",
    certificateExpire:""
  },
};

const initialSkillsState = {
  skills: [""],
  languages: [{ name: "", proficiency: ""}],
};

export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    case actionTypes.SELECTRESUME:
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDPERSONALINFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    case actionTypes.ADDSOCIALPROFILES:
      return {
          ...state,
          personalInfo: { ...state.personalInfo, ...action.payload },
        };  
    default:
      return state;
  }
};

export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case actionTypes.ADDALLEXPERIENCE:
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};

export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    case actionTypes.EDITSKILL: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case actionTypes.DELETESKILL: {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    case actionTypes.ADDNEWLANGUAGE:
      return {
        ...state, languages: [...state.languages, {name: "", proficiency: ""}], };
    case actionTypes.EDITLANGUAGE:
      return {
        ...state,
        languages: action.payload,
      };

    case actionTypes.DELETELANGUAGE:
      const newLanguages = state.languages.filter(
        (language, id) => id !== action.payload
      );

      return { ...state, languages: newLanguages };
    default:
      return state;
  }
};

export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};
