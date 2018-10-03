import React, { Component } from 'react';
import { ZiggeoRecorder } from 'react-ziggeo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ZiggeoRecorder
          height={180}
          width={320}
        />
      </div>
    );
  }
}

export default App;
