import React from 'react'
import Game from "../Game/Game.jsx"

import "./Box.css"
const Box = ({
    page,
    timerStarted,
    timeRemaining,
    clicked,
    startAgain,
    qn_hero,
    qn_heroine,
    qn_song,
    qn_name,
    imp_hero,
    imp_heroine,
    imp_name,
    imp_song,
    points,
    result,
    getResult,
})=> {
    return (
        <div className="box-container">
            {
                    page === 'game'  ?
                        (<div>
                        <div className="game-container">
                            <Game timerStarted={timerStarted}
                                timeRemaining={timeRemaining}
                                startAgain={startAgain}
                                imp_hero={imp_hero}
                                imp_heroine={imp_heroine}
                                imp_name={imp_name}
                                imp_song={imp_song}
                                points={points}
                                qn_hero={qn_hero}
                                qn_heroine={qn_heroine}
                                qn_name={qn_name}
                                qn_song={qn_song}
                                getResult={getResult}
                                result={result}
                            />
                            </div>
                        </div>) :
                        (<div className="rules-container">
                        <h1>Rules of the game:</h1>
                        <ol>
                            <li>Enter the Hero,Heroine,Move,Song name based on the hint</li>
                            <li>You can view the clue but your score will be reduced by 3 points</li>
                            <li>Answering each correct section will give you 5 points</li>
                            <li>Spelling mistake will also be treated as wrong answer</li>
                        </ol>
                        <h4>That it!! <br></br> You can start the game now</h4>
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