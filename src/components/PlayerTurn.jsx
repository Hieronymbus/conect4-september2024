import React, {useState} from "react";

function PlayerTurn ({player,locked,gameWon, draw,setRedCoinArr,setBlueCoinArr}) {
    
    const handleGameReset = () => {
        setBlueCoinArr([])
        setRedCoinArr([])
    }

    return (

        <div className="player-turn">
            {locked && !gameWon && !draw &&
                <div style={{textAlign:"center"}}>
                    <h1>{player} players turn</h1>
                    <p><i>(stack from the bottom)</i></p>
                    <button onClick={handleGameReset} style={{marginTop: "10vh"}}>Reset Current Game </button>
                </div> 
            } 
        </div>
    )  
}

export default PlayerTurn