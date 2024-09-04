import React, {useState} from "react";

function Result ({gameWon, setGameWon, draw, setDraw, player, setRedCoinArr, setBlueCoinArr,playerColors,setPlayerColors}) {

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
        setDraw(false)
    }



   return (

        <div className= "result-container">
            {gameWon && <h1 style={{textAlign:"center"}}>{winningPlayer} has WON!!!!</h1>}
            {gameWon && <button onClick={handleRematch}>Rematch</button>}
            {draw && <h1 style={{textAlign:"center"}}>Game is a Draw, neither player gets a point</h1>}
            {draw && <button onClick={handleRematch} >Rematch</button>}
        </div>
   );
}

export default Result;