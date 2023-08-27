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
      setStatus('active')
    }

    fetchCards()
  }, [])
  console.log(cards)

  let gameContent = null
  switch (status) {
    case 'loading':
      gameContent = <div className='loading-screen'>Loading...</div>
      break
    case 'active':
      gameContent = (
        <div className='cards'>
          {cards.map((card) => {
            return (
              <div key={card.name} className='card'>
                {card.name}
              </div>
            )
          })}
        </div>
      )
      break
    default:
      gameContent = null
      break
  }

  return <div className='game'>{gameContent}</div>
}

export default Game
