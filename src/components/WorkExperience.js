import React from 'react';

const WorkExperience = ({experience}) => (
  <div>
    <strong>Work Experience:</strong><br/><br/>
    {
      experience.map((job,i) => {
        return (
          <div key={"job"+i}>
            <strong>{job["name"]}{job["title"] && job["title"] !== "" ? " ("+job["title"]+")" : ""}</strong> 
            <em>{job["dates"] !== "" ? " -- " + job["dates"] : ""}</em>
            <ul>
              {
                job["accomplishments"].map((bullet,j) => {
                  return <li key={j}>{bullet}</li>
                })
              }
            </ul>
          </div>
        )
      })
    }
  </div>
)
export default WorkExperience;