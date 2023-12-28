import './App.css'
import PageWrapper from './components/PageWrapper'
import Menu from './components/Menu'
import Game from './components/Game'
import BackButton from './components/BackButton'
import { useState } from 'react'
import Instructions from './components/Instructions'
import EndScreen from './components/EndScreen'

function App() {
  const [gameStatus, setGameStatus] = useState('menu')
  const [highScore, setHighScore] = useState(0)
  const [endScreenData, setEndScreenData] = useState({
    score: 0,
    isVictory: false,
  })
  let currentContent = null

  const endGame = (score, isVictory = false) => {
    setEndScreenData({
      score,
      isVictory,
    })
    setGameStatus('endscreen')
  }

  switch (gameStatus) {
    case 'menu':
      currentContent = (
        <Menu onStatusChange={setGameStatus} highScore={highScore} />
      )
      break
    case 'game':
      currentContent = (
        <>
          <Game
            setGameStatus={setGameStatus}
            highScore={highScore}
            setHighScore={setHighScore}
            endGame={endGame}
          />
          <BackButton
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            buttonContent='Back'
          />
        </>
      )
      break
    case 'instructions':
      currentContent = (
        <>
          <Instructions>
            <BackButton
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              buttonContent='Back'
            />
          </Instructions>
        </>
      )
      break
    case 'endscreen':
      currentContent = (
        <>
          <EndScreen
            score={endScreenData.score}
            isVictory={endScreenData.isVictory}
            highScore={highScore}
          >
            <BackButton
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              buttonContent='Back to menu'
            />
          </EndScreen>
        </>
      )
      break
    default:
      currentContent = null
      break
  }
  return (
    <>
      <PageWrapper>{currentContent}</PageWrapper>
    </>
  )
}

export default App
