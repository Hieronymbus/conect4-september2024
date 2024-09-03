import React,{useState,useEffect} from "react";
import Coin from "./Coin";

function Slot ({id, blueCoin, redCoin , blueCoinArr, setBlue , redCoinArr, setRed , 
    playerColors, setPlayerColors, player , setPlayer , gameWon, columnIndex,rowIndex}) {

    const findLowestAvailableSlot = (columnIndex) => {
        for (let row = 5; row >= 0; row--) {  
            const slotId = row * 7 + columnIndex; 
            if (!redCoinArr.includes(slotId) && !blueCoinArr.includes(slotId)) {
                console.log(row)
                return row;
            };
        };
        return -1; 
    };
    const handleSlotClick = (columnIndex) => {
        if(gameWon) return
        
        const availableRow = findLowestAvailableSlot(columnIndex);
        
        if(rowIndex === availableRow){
            if(player === playerColors.playerOne && !blueCoinArr.includes(id)) {
                setRed(prev => [...prev, id]);
                setPlayer(playerColors.playerTwo);
                
            } else if(player === playerColors.playerTwo && !redCoinArr.includes(id)) {
                setBlue(prev => [...prev, id]);
                setPlayer(playerColors.playerOne);           
            }   
        };
         
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