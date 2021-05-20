import React from 'react'
import GameChallenge from '../GameChallenge/GameChallenge';
import TryAgain from '../TryAgain/TryAgain';
import "./Game.css"

const Game = ({
    page,
    timerStarted,
    timeRemaining,
    clicked,
})=> {
    return (
        <div className="game">
            
            <div>
            {
                    timeRemaining > 1  ?
                        (<div>
                            <GameChallenge
                                timerStarted={timerStarted}
                                timeRemaining={timeRemaining}
                            />
                        </div>) :
                        (<div>
                            <TryAgain/>
                        </div>)
            }
            </div>
        </div>
    )
}

export default Game;