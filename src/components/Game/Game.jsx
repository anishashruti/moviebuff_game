import React from 'react'
import GameChallenge from '../GameChallenge/GameChallenge';
import TryAgain from '../TryAgain/TryAgain';
import "./Game.css"

const Game = ({
    page,
    timerStarted,
    timeRemaining,
    startAgain,
    imp_hero,
    imp_heroine,
    qn_hero,
    qn_heroine,
    points,
    result,
    getResult
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
                                imp_hero={imp_hero}
                                imp_heroine={ imp_heroine }
                                qn_hero={qn_hero}
                                qn_heroine={qn_heroine}
                                getResult={getResult}
                            />
                        </div>) :
                        (<div>
                            <TryAgain
                                startAgain={startAgain}
                                points={points}
                                result={result}
                            />
                        </div>)
            }
            </div>
        </div>
    )
}

export default Game;