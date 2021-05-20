import React from 'react'
import Game from "../Game/Game.jsx"

import "./Box.css"
const Box = ({
    page,
    timerStarted,
    timeRemaining,
    clicked,
})=> {
    return (
        <div className="box-container">
            {
                    page === 'game'  ?
                        (<div>
                            <div className="game-container">
                                <Game timerStarted={timerStarted} timeRemaining={timeRemaining} />
                            </div>
                        </div>) :
                        (<div className="rules-container">
                            <p>Hello this is the rule section</p>
                            <button
                                className="startgame"
                                onClick={(e) => clicked(e.target.value)}> Start Game !
                            </button>
                        </div>)
            }

        </div>
    )
}

export default Box;