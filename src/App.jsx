import './App.css'
import PageWrapper from './components/PageWrapper'
import Menu from './components/Menu'
import Game from './components/Game'
import { useState } from 'react'

function App() {
  const [gameStatus, setGameStatus] = useState('menu')
  const [highScore, setHighScore] = useState(0)
  let currentContent = null
  switch (gameStatus) {
    case 'menu':
      currentContent = (
        <Menu onStatusChange={setGameStatus} highScore={highScore} />
      )
      break
    case 'game':
      currentContent = (
        <Game
          setGameStatus={setGameStatus}
          highScore={highScore}
          setHighScore={setHighScore}
        />
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
