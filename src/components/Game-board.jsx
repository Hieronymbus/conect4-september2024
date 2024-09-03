import React,{useState,useEffect} from "react";
import Slot from "./Slot";
import winningCombinations from "../winningCombosArray";

function Gameboard ({player,setPlayer,playerColors,setPlayerColors,
    gameWon,setGameWon,blueCoinArr,setBlueCoinArr,redCoinArr,setRedCoinArr,setScore}) {

    const gridArr = Array(7 * 6).fill(null);
    const numberedGridArr = gridArr.map((_, index) => {
        return index 
    })
    
    useEffect(()=>{

       winningCombinations.forEach((combo,index)=> {
            if(
                redCoinArr.includes(combo[0])&&
                redCoinArr.includes(combo[1])&&
                redCoinArr.includes(combo[2])&&
                redCoinArr.includes(combo[3])
            ){
                setGameWon(true)
                setScore(prev => ({
                        ...prev,
                        playerOne: prev.playerOne + 1
                }))
            }
            if(
                blueCoinArr.includes(combo[0])&&
                blueCoinArr.includes(combo[1])&&
                blueCoinArr.includes(combo[2])&&
                blueCoinArr.includes(combo[3])
            ){
                
                setGameWon(true)
                setScore(prev => ({
                        ...prev,
                        playerTwo: prev.playerTwo + 1       
                }))
            }
            if(blueCoinArr.length + redCoinArr.length === 63){
                
            }
       })

    },[redCoinArr,blueCoinArr])



    return (
        <div className="game-board">
            {numberedGridArr.map((slot,index) => {
                const blueCoin = blueCoinArr.includes(slot) ? true : false;
                const redCoin = redCoinArr.includes(slot) ? true : false;

                return (
                    <Slot 
                        key={index}
                        id={slot}
                        columnIndex={index % 7}
                        rowIndex={Math.floor(index/7)}
                        blueCoin={blueCoin}
                        redCoin={redCoin}
                        playerColors={playerColors}
                        setPlayerColors={setPlayerColors}
                        player={player}
                        setPlayer={setPlayer}
                        redCoinArr={redCoinArr}
                        setRed={setRedCoinArr}
                        blueCoinArr={blueCoinArr}
                        setBlue={setBlueCoinArr}
                        gameWon={gameWon}
                    />
                )      
            })}
        </div>
    )
};

export default Gameboard