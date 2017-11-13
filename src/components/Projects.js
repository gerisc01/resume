import React from 'react'

const Projects = ({ projects }) => (
  <div>
    <strong>Other Projects:</strong><br/>
    {projects.map(project => {
      return (<div style={{marginBottom: '5px'}}><em>{project.name}:</em> {project.description}</div>)
    })}
  </div>
)
export default Projects