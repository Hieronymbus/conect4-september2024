import React, {useState} from "react";

function Result ({gameWon, setGameWon, player, setRedCoinArr, setBlueCoinArr,playerColors,setPlayerColors}) {

    let winningPlayer = ""
    if (player === playerColors.playerOne){
        winningPlayer = playerColors.playerTwo
    } else {
        winningPlayer = playerColors.playerOne
    }

    const handleRematch = () => {
        setBlueCoinArr([])
        setRedCoinArr([])
        setGameWon(false)  
    }



   return (

        <div className= "result-container">
            {gameWon && <h1 style={{textAlign:"center"}}>{winningPlayer} has WON!!!!</h1>}
            {gameWon && <button onClick={handleRematch}>Rematch</button>}
        </div>
   );
}

export default Result;