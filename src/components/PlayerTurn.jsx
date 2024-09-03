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
                    <button onClick={handleGameReset} style={{marginTop: "10vh"}}>RESET GAME </button>
                </div> 
            } 
        </div>
    )  
}

export default PlayerTurn