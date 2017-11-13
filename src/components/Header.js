import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Header = (props) => {
  const { title, subtitle } = props
  const { appBar, palette } = props.muiTheme;

  const headerStyle = {
    backgroundColor: appBar.color,
    height: '110px',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    borderBottom: 'solid 2px '+palette.accent1Color
  }

  return (
  <div style={headerStyle}>
    <h1 style={{color: appBar.textColor, paddingLeft: '20px', paddingTop: '30px', marginBottom: '5px'}}>
      {title}
    </h1>
    <h4 style={{color: appBar.textColor, paddingLeft: '20px', marginTop: '5px'}}>
      {subtitle}
    </h4>
  </div>
  )
}
export default muiThemeable()(Header);