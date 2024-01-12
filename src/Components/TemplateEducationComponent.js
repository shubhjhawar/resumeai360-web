import React from "react";
import "../Styles/TemplateEducationComponent.css";

const TemplateEducationComponent = (props) => {
  const education = props.education;

  return (
    <div className="template-education-details">
      {education.school && (
        <div>
          <h3 className="education-heading">{education.school}</h3>
          {education.SchoolStartYear && education.SchoolendYear && (
            <p className="education-details">
              <span className="education-start-end">
                ({education.SchoolStartYear} - {education.SchoolendYear})
              </span>
            </p>
          )}
          {education.diplomaName && education.diplomaSubject && (
            <p className="education-degree">
              {education.diplomaName} ({education.diplomaSubject})
            </p>
          )}
          {education.diplomaInstitute && education.diplomaYear && (
            <p className="education-details">
              {education.diplomaInstitute}
              <span className="education-start-end">
                ({education.diplomaYear})
              </span>
            </p>
          )}
        </div>
      )}

      {education.university && (
        <div>
          <h3 className="education-heading">{education.university}</h3>
          {education.degree && education.domain && (
            <p className="education-degree">
              {education.degree} in {education.domain}
            </p>
          )}
          {education.UniStartYear && education.UniEndYear && (
            <p className="education-details">
              <span className="education-start-end">
                ({education.UniStartYear} - {education.UniEndYear})
              </span>
            </p>
          )}
        </div>
      )}

      {education.certificateName && (
        <div>
          <h3 className="education-heading">{education.certificateName}</h3>
          {education.certificateOrg && education.certificateYear && (
            <p className="education-details">
              {education.certificateOrg}
              <span className="education-start-end">
                ({education.certificateYear} -{" "}
                {education.certificateExpire !== "never expire"
                  ? education.certificateExpire
                  : "never expire"})
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateEducationComponent;
