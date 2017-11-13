import React from 'react';

const Education = ({education}) => (
  <div>
    <strong>Education:</strong><br/>
    {education["School"]} -- {education["Location"]} -- Bachelor of Arts Degree ({education["Graduation"]}) -- {education["Majors"]}
  </div>
)

export default Education