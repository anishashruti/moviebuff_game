import React from 'react'
import Game from "../Game/Game.jsx"
import TryAgain from "../TryAgain/TryAgain.jsx"
import "./Box.css"
const Box=({no})=> {
    return (
        <div className="box-container">
            <div className="timer-container">
            <p className="timer">5:00</p>
            </div>
            <br></br>
            <div className="game-container">
                {
                    no === '1' ?
                        (<div>
                            <Game />
                        </div>) :
                        (<div>
                            <TryAgain />
                        </div>)
                }
                
            </div>
        </div>
    )
}

export default Box;