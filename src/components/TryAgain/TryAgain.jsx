import React from 'react'
import "./TryAgain.css"

const TryAgain = () => {
    const url = "https://github.com/anishashruti";
    return (
        <div className="tryagain">
            <div className="resultbox">
                    <h1>
                        You have won the game
                    </h1>
                    <p>Points: </p>
            </div>
            <div>
                <button className="end-buttons start-again-btn">
                    Re-Try
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=" +
                                url,
                            "facebook-share-dialog",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons share-btn"
                >
                    Share
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                                url,
                            "Twitter",
                            "width=800,height=600"
                        )
                    }
                    className="end-buttons tweet-btn"
                >
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TryAgain;