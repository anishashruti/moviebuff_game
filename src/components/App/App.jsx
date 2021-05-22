import React, { Component } from 'react';
import Box from "../Box/Box.jsx"
import "./App.css"
import { QNS } from '../../data/questions'
const time = 60
const defaultState={
  page:" ",
  timerStarted: false,
  timeRemaining: time,
  qn_hero: ' ',
  qn_heroine: ' ',
  qn_song: ' ',
  qn_name:' ',
  result: " ",
  points:0,
};
class App extends Component {
  state = defaultState

  componentDidMount() {
    this.fetchNewQuestionFallback();
  }

  fetchNewQuestionFallback = () => {
    const n= Math.floor(Math.random() * 11); 
    this.setState({
      ...defaultState,
      qn_hero: QNS[n].hero,
      qn_heroine: QNS[n].heroine,
      qn_song: QNS[n].song,
      qn_name:QNS[n].name,
    });
  };
  
  startAgain = () => this.fetchNewQuestionFallback();

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

      if (this.state.timerStarted)
      {
        this.getResult();
      }
    }, 1000)

  };

  startGame = (clicked) => {
    if (!this.state.timerStarted)
    {
      this.startTimer();
      console.log(this.state.qn_hero)
      console.log(this.state.qn_heroine)
      console.log(this.state.qn_name)
      console.log(this.state.qn_song)
      this.setState({
        page:'game'
      });
    }
    }
  getHero = (imp_hero) => {
    const ip_h = imp_hero.toLowerCase();
    const crt = ip_h === this.state.qn_hero;
    if (crt) {
      this.setState({
        points:this.state.points+5
      });
    }
  }
  getHeroine = (imp_heroine) => {
    const ip_hr = imp_heroine.toLowerCase();
    const crt = ip_hr === this.state.qn_heroine;
    if (crt) {
      this.setState({
        points:this.state.points+5
      });
    }
  }
  getName = (imp_name) => {
    const imp_n = imp_name.toLowerCase();
    const crt = imp_n === this.state.qn_name;
    if (crt) {
      this.setState({
        points:this.state.points+5
      });
    }
  }
  getSong = (imp_song) => {
    const imp_s = imp_song.toLowerCase();
    const crt = imp_s === this.state.qn_song;
    if (crt) {
      this.setState({
        points:this.state.points+5
      });
    }
  }
  getResult = () => {
    if (this.state.points === 20)
    {
      this.setState({
        result: " Won "
      });
    }else {
      this.setState({
        result: " Lost "
      });
    }
  }
  render() {
    return (
      <div className="App">
      <h1 className="page-title">Movie-Buff</h1>
        <Box
          page={this.state.page}
          timerStarted={this.state.timerStarted}
          timeRemaining={this.state.timeRemaining}
          qn_hero={this.state.qn_hero}
          qn_heroine={this.state.qn_heroine}
          qn_song={this.state.qn_song}
          qn_name={this.state.qn_name}
          clicked={this.startGame}
          startAgain={this.startAgain}
          imp_hero={this.getHero}
          imp_heroine={this.getHeroine}
          imp_name={this.getName}
          imp_song={this.getSong}
          points={this.state.points}
          getResult={this.getResult}
          result={this.state.result}
        />
        
      </div>
    );
  }
}

export default App;