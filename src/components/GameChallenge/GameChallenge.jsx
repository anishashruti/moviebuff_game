import React from 'react'
import "./GameChallenge.css"

const GameChallenge = (
    {
        page,
        timerStarted,
        timeRemaining,
        clicked,
    })=> {
    return (
        <div className="container">
                <div className="timer-container">
                    <p className="timer">00:{timeRemaining > 10 ? timeRemaining : `0${timeRemaining}` }</p>
                </div>
            <br></br>
        <div className="game">
            <div className="gamecards">
                <p>Hero name</p>
                <input placeholder="Enter the hero name"></input>
            </div>
            <div className="gamecards">
                <p>Heroine name</p>      
                <input placeholder="Enter the heroine name"></input>
                </div>
            <div className="gamecards">
                <p>Movie name</p>
                <input placeholder="Enter the movie name"></input>
            </div>
            <div className="gamecards">
                <p>Song name </p>
                    <input placeholder="Enter the song name"></input>
                
            </div>
            </div>
            <div className="finished" >
                   <button className="finish-btn">Finished!!</button>
            </div>
            </div>
    )
}

export default GameChallenge;