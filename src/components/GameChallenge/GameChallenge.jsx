import React from 'react'
import "./GameChallenge.css"

const GameChallenge = (
    {
        timeRemaining,
        qn_hero,
        qn_heroine,
        imp_hero,
        imp_name,
        imp_song,
        qn_song,
        finished,
        qn_name,
        imp_heroine,
    }) => {
    return (
        <div className="container">
                <div className="timer-container">
                    <p className="timer">00:{timeRemaining > 11 ? timeRemaining : `0${timeRemaining}` }</p>
                </div>
            <br></br>
        <div className="game">
            <div className="gamecards">
                    <p>Hero name starts with {qn_hero[0].toUpperCase} letter </p>
                    <p className="hint-p">Hero name has {qn_hero.length} letters</p>
                <input
                    onChange={(e) => imp_hero(e.target.value)}    
                        placeholder=" Type hero name here..."></input>
            </div>
                <div className="gamecards">
                <p>Heroine name starts with {qn_heroine[0].toUpperCase} letter </p>
                <p className="hint-p">Heroine name has {qn_heroine.length} letters</p>
                    <input
                        onChange={(e) => imp_heroine(e.target.value)} 
                        placeholder="Enter the heroine name"></input>
                </div>
            <div className="gamecards">
                <p>Movie name starts with {qn_name[0].toUpperCase} letter</p>
                <p className="hint-p">Movie name has {qn_name.length} letters</p>
                    <input
                        onChange={(e) => imp_name(e.target.value)} 
                        placeholder="Enter the movie name"></input>
            </div>
            <div className="gamecards">
                <p>Song name starts with {qn_song[0].toUpperCase} letter</p>
                <p className="hint-p">Song name has {qn_song.length} letters</p>
                    <input
                        onChange={(e) => imp_song(e.target.value)} 
                        placeholder="Enter the song name"></input>
            </div>
            </div>
            <div className="finished"  >
                   <button onClick={() => finished()} className="finish-btn">Finished!!</button>
            </div>
            </div>
    )
}

export default GameChallenge;