import React, {useState,useEffect} from "react";

function ScoreBoard({score, setScore, playerColors,setPlayerColors,setPlayer}) {
   
    const handleScoreReset = () => {
        setScore({  
            playerOne:0,
            playerTwo:0
        })   
    };
    const handleChangeColors = () => {
        setPlayerColors(prev => ({
            playerOne:"Red",
            playerTwo:"Blue",
            locked:false
        }))
        setPlayer("Red")
    }


    return (
        <div className="score-board">
            <h1 className="main-title" style={{textAlign:"center",margin:"1%"}}>
                Connect Four
            </h1>
            {playerColors.locked &&
                <div className="scoresButtons">
                    <div className="scores">
                        <h1 style={{textDecoration:"underline"}}>Scores</h1>
                        <h2 >
                            Player One ({playerColors.playerOne}) : {score.playerOne}
                        </h2>
                        <h2 >
                            Player Two ({playerColors.playerTwo}) : {score.playerTwo}
                        </h2>
                    </div>
                    <div className="buttons">
                        <button onClick={handleScoreReset}>Reset Scores</button>  
                        <button onClick={handleChangeColors}>Change Colors</button>
                    </div>
                    
                </div>    
            }  
        </div>
    )
}

export default ScoreBoard