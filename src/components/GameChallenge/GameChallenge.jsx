import React from 'react'
import "./GameChallenge.css"

const GameChallenge = (
    {
        page,
        timerStarted,
        timeRemaining,
        qn_hero,
        qn_heroine,
        imp_hero,
        imp_heroine,
        getResult,
    })=> {
    return (
        <div className="container">
                <div className="timer-container">
                    <p className="timer">00:{timeRemaining > 11 ? timeRemaining : `0${timeRemaining}` }</p>
                </div>
            <br></br>
        <div className="game">
            <div className="gamecards">
                    <p>Hero name has {qn_hero.length} letters,
                    starts with {qn_hero[0]} letter </p>
                <input
                    onChange={(e) => imp_hero(e.target.value)}    
                        placeholder=" Type hero name here..."></input>
            </div>
                <div className="gamecards">
                <p>Heroine name has {qn_heroine.length} letters,
                    starts with {qn_heroine[0]} letter </p>   
                    <input
                        onChange={(e) => imp_heroine(e.target.value)} 
                        placeholder="Enter the heroine name"></input>
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
            <div className="finished"  >
                   <button onClick={() => getResult()} className="finish-btn">Finished!!</button>
            </div>
            </div>
    )
}

export default GameChallenge;