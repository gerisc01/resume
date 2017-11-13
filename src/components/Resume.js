import React from 'react';
import Paper from 'material-ui/Paper';
import SingleLineSection from './SingleLineSection';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Education from './Education';
import resume from '../resume.js'

const Resume = () => (
  <div>
    <div className="spacerDiv" style={{height: '25px'}} />
    <Paper style={{minHeight: '775px', minWidth: window.innerWidth < 600 ? '95%' : '600px', maxWidth: '70%', margin: '0 auto'}}>
      <div className="text" style={{padding: '40px'}}>
        <div style={{textAlign: 'center'}}>
          <strong>Roseville, MN -- (952) 465-8953 -- scott.gerike@gmail.com -- gerisc01.github.io</strong>
        </div>
        <hr/>
        <SingleLineSection name="Objective" text={resume["Objective"]}/>
        <br/><hr/>
        <SingleLineSection name="Software Skills" text={resume["Skills"]} />
        <br/><hr/>
        <WorkExperience experience={resume["Work Experience"]} />
        <hr/>
        <Projects projects={resume["Projects"]} />
        <hr/>
        <Education education={resume["Education"]} />
        <br/><br/>
        <strong>References available upon request</strong>
      </div>
    </Paper>
    <div className="spacerDiv" style={{height: '25px'}} />
  </div>
)
export default Resume;