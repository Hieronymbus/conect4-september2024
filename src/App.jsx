import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gameboard from './components/Game-board'
import ScoreBoard from './components/Score-board'
import PlayerTurn from './components/PlayerTurn'
import Result from './components/Result'
import ColorChooser from './components/ColorChooser'

function App() {
  
  const [gameWon, setGameWon] = useState(false);
  const [draw, setDraw] = useState(false)
  const [score, setScore] = useState({
    playerOne: 0,
    playerTwo: 0
  });
  const [playerColors, setPlayerColors] = useState({
    playerOne:"Red",
    playerTwo:"Blue",
    locked:false
  })
  const [player,setPlayer] = useState(playerColors.playerOne);
  const [redCoinArr, setRedCoinArr ] = useState([]);
  const [blueCoinArr, setBlueCoinArr] = useState([]);


  return (
    <div className='main-container'>
      <PlayerTurn 
        player={player}
        locked={playerColors.locked}
        gameWon={gameWon}
        draw={draw}
        redCoinArr={redCoinArr}
        setRedCoinArr={setRedCoinArr}
        blueCoinArr={blueCoinArr}
        setBlueCoinArr={setBlueCoinArr}
      />
      <div>
        <ScoreBoard
          score={score}
          setScore={setScore}
          setPlayer={setPlayer}
          playerColors={playerColors}
          setPlayerColors={setPlayerColors}
        />
        {!playerColors.locked && 
          <ColorChooser 
            playerColors={playerColors}
            setPlayerColors={setPlayerColors}
            player={player}
            setPlayer={setPlayer}
          /> 
        }
        
        {playerColors.locked &&
          <Gameboard
            gameWon={gameWon}
            setGameWon={setGameWon}
            draw={draw}
            setDraw={setDraw}
            score={score}
            setScore={setScore}
            player={player}
            setPlayer={setPlayer}
            playerColors={playerColors}
            setPlayerColors={setPlayerColors}
            redCoinArr={redCoinArr}
            setRedCoinArr={setRedCoinArr}
            blueCoinArr={blueCoinArr}
            setBlueCoinArr={setBlueCoinArr}
          />
        }
        
      </div>
      <Result
        gameWon={gameWon}
        setGameWon={setGameWon}
        draw={draw}
        setDraw={setDraw}
        player={player}
        setPlayer={setPlayer}
        setRedCoinArr={setRedCoinArr}
        setBlueCoinArr={setBlueCoinArr}
        playerColors={playerColors}
        setPlayerColors={setPlayerColors}
      />
    </div>
  )
}

export default App
