import React from 'react'
import "./Game.css"

const Game=()=> {
    return (
        <div className="game">
            <div>
                <p>Hero name</p>
                <input placeholder="Enter the hero name"></input>
            </div>
            <div>
                <p>Heroine name</p>      
                <input placeholder="Enter the heroine name"></input>
            </div>
            <div>
                <p>Movie name</p>
                <input placeholder="Enter the movie name"></input>
            </div>
            <div>
                <p>Song name </p>
                <input placeholder="Enter the song name"></input>
            </div>
        </div>
    )
}

export default Game;