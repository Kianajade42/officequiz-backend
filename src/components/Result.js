import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">You answered {score} / 5 correct </div>
        <div className="tryagain">“Fool me once, strike one. Fool me twice, strike three.” -Michael Scott</div>
        <button className="playBtn"
         onClick={playAgain}>
             Play again?
        </button>
    </div>
    
)

export default Result;