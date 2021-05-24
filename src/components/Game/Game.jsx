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
    imp_name,
    imp_song,
    qn_hero,
    qn_heroine,
    qn_song,
    qn_name,
    points,
    result,
    getResult,
    finished
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
                                imp_heroine={imp_heroine}
                                imp_name={imp_name}
                                imp_song={imp_song}
                                qn_hero={qn_hero}
                                qn_heroine={qn_heroine}
                                qn_name={qn_name}
                                qn_song={qn_song}
                                finished={finished}
                                getResult={getResult}
                            />
                        </div>) :
                        (<div>
                            <TryAgain
                                startAgain={startAgain}
                                points={points}
                                result={result}
                                getResult={getResult}
                            />
                        </div>)
            }
            </div>
        </div>
    )
}

export default Game;