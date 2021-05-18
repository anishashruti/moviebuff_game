import React, { Component } from 'react';
import Box from "../Box/Box.jsx"
import "./App.css"
class App extends Component {
  render() {
    return (
        <div className="App">         
            <h1 className="page-title">Movie-Buff</h1>
            <Box no= {'1'}/>
      </div>
    );
  }
}

export default App;