import React,{useState} from "react";

function ColorChooser ({playerColors, setPlayerColors,setPlayer}) {
    
    const colorOptionsOne = [
        "Red" ,
        "Orange" ,
        "Green",
        "Yellow",
        "Purple" 
    ];
    const colorOptionsTwo = [
        "Blue",
        "Teal",
        "Pink",
        "Brown",
        "Olive"
    ];

    const handleColorChangeOne = (e) => {
        setPlayerColors(prev => ({
            ...prev,
            playerOne: e.target.value
        }));
        setPlayer(e.target.value)
    };
    const handleColorChangeTwo = (e) => {
        setPlayerColors(prev => ({
            ...prev,
            playerTwo: e.target.value
        }));
        setPlayer(e.target.value)
    };
    const handleLockIn = () => {
        setPlayerColors(prev => ({
            ...prev,
            locked:true
        }))
    };

    return (
        <div className="color-chooser">
            <h2>PlayerOne:</h2>
            <select onChange={handleColorChangeOne}>
                {colorOptionsOne.map((color,index)=>{
                    return (
                        <option value={color} key={index}>{color}</option>
                    )
                })}
            </select>
            <div>
            </div>

            <h2>Player Two</h2>
            <select onChange={handleColorChangeTwo}>
            {colorOptionsTwo.map((color,index)=>{
                    return (
                        <option value={color} key={index}>{color}</option>
                    )
                })}
            </select>
            <div>

            </div>
            <button onClick={handleLockIn}>Lock in Colors</button>
        </div>
            
            
    )
};

export default ColorChooser