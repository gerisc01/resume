import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Card, { CardTitle, CardText, CardActions } from 'material-ui/Card';

const WorkSample = (props) => {
  const { name, language, color, icon, text, link } = props;

  return (
  <Card style={{position: 'relative', float: 'left', width: '275px', height: '275px', marginLeft: '50px', marginBottom: '15px'}}>
    <CardTitle style={{backgroundColor: color}}>
      <strong>{name}</strong>
      <div style={{display: 'flex', alignItems: 'center'}}>
        {language} <img src={"images/"+icon} alt="" style={{height: '40px', width: '40px'}}/>
      </div>
    </CardTitle>
    <CardText>{text}</CardText>
    <CardActions style={{position: 'absolute', bottom: '0', backgroundColor: 'rgba(192,192,192,.1)', width: '100%'}}>
      <FlatButton label="Project Link" href={link} />
    </CardActions>
  </Card>
  )
}
export default WorkSample;