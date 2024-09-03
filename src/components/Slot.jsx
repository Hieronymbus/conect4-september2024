import React,{useState,useEffect} from "react";
import Coin from "./Coin";

function Slot ({id, blueCoin, redCoin , blueCoinArr, setBlue , redCoinArr, setRed , 
    playerColors, setPlayerColors, player , setPlayer , gameWon, grid, setGrid,columnIndex}) {


    const handleSlotClick = (columnIndex) => {
            if(gameWon) return
            

            if(player === playerColors.playerOne && !blueCoinArr.includes(id)) {
                setRed(prev => [...prev, id]);
                setPlayer(playerColors.playerTwo);
                
            } else if(player === playerColors.playerTwo && !redCoinArr.includes(id)) {
                setBlue(prev => [...prev, id]);
                setPlayer(playerColors.playerOne);           
            }   
            console.log(columnIndex)              
    };

    return (
        <div className="slot-square" onClick={()=>handleSlotClick(columnIndex)}>
            <div className="slot-circle">
                {redCoin  && <Coin color={playerColors.playerOne.charAt(0).toLowerCase() + playerColors.playerOne.slice(1)} />  }
                {blueCoin && <Coin color={playerColors.playerTwo.charAt(0).toLowerCase() + playerColors.playerTwo.slice(1)} /> }
            </div>
        </div>
    );
};

export default Slot;