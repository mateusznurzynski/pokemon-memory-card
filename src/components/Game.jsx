import { useState, useEffect } from 'react'
import '../styles/Game.css'

function Game() {
  const [cards, setCards] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0'
      )
      const newCards = await response.json()
      setCards(newCards.results)
      setStatus('start')
    }

    fetchCards()
  }, [])
  console.log(cards)

  return <div className='game'></div>
}

export default Game
