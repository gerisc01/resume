import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tab, Tabs } from 'material-ui/Tabs';
import Header from './components/Header';
import Resume from './components/Resume';
import WorkSamples from './components/WorkSamples';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'resume' }
  }

  onTabChange = (value) => {
    this.setState({
      activeTab: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div style={{marginTop: '-25px'}}>
          <Header title="Scott Gerike" subtitle="Software Developer at Kinetic Data" />
          <Tabs value={this.state.activeTab} onChange={this.onTabChange} >
            <Tab label="Resume" value="resume" />
            <Tab label="Work Samples" value="samples" />
          </Tabs>
          <div style={{background: '#E0E0E0', width: '100%', minHeight: 'calc(100vh - 110px'}}>
            {this.state.activeTab === "resume"
                ? <Resume />
                : <WorkSamples />}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
