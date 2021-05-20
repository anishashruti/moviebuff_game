import React, { Component } from 'react';
import Box from "../Box/Box.jsx"
import "./App.css"
const time = 5
const defaultState={
  page:" ",
  timerStarted: false,
  timeRemaining: time,
  result:" ",
};
class App extends Component {
  state = defaultState
  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      // console.log(this.state.timeRemaining);
      if (this.state.timeRemaining > 0) {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
        });
      } else {
        clearInterval(timer);
      }
    
    }, 1000)
  };

  startGame = (clicked) => {
    if (!this.state.timerStarted)
    {
      this.startTimer();
      console.log('game started')
      this.setState({
        page:'game'
      });
    }
      
    return;
    }

  render() {
    return (
      <div className="App">
      <h1 className="page-title">Movie-Buff</h1>
        <Box
          page={this.state.page}
          timerStarted={this.state.timerStarted}
          timeRemaining={this.state.timeRemaining}
          clicked={this.startGame}
        />
        
      </div>
    );
  }
}

export default App;