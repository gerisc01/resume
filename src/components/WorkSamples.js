import React from 'react';

import WorkSample from './WorkSample.js'
import worksamples from '../worksamples.js'

const WorkSamples = (props) => (
  <div style={{maxWidth: '95%', paddingBottom: '25px', margin: '0 auto'}}>
    {worksamples.pageOrder.map(section => {
      return (
        <div style={{position: 'relative', overflow: 'auto', height: '100%'}}>
          <h2 style={{marginTop: '15px', marginLeft: '50px'}}>
            {worksamples[section].title}
          </h2>
          {worksamples[section].description.split("\n").map((desc,i) => {
            return (
              <h4 key={"desc"+i} style={{marginRight: '50px', marginLeft: '50px', fontWeight: 'normal'}}>
                {desc}
              </h4>
            )
          })}
          {worksamples[section].items.map(sample => {
              let sampleProps = {...sample, ...worksamples.languages[sample.language]}
              return <WorkSample key={sample.name} {...sampleProps} />
          })}
        </div>
      )
    })}
  </div>
)
export default WorkSamples;