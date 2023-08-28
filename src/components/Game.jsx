import { useState, useEffect, useRef } from 'react'
import '../styles/Game.css'
import getRandomInt from '../utilities/RandomInt'
import Card from './Card'

const NUMBER_OF_CARDS = 12

const getCardIds = (numberOfCards) => {
  const cardIds = []

  for (let i = 0; i < numberOfCards; i++) {
    let id = null

    while (!id) {
      const newId = getRandomInt(1000)
      if (!cardIds.includes(newId)) {
        id = newId
      }
    }

    cardIds.push(id)
  }
  return cardIds
}

function Game() {
  const cardIds = useRef(getCardIds(NUMBER_OF_CARDS))
  const [cards, setCards] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchCards = async () => {
      const newCards = cardIds.current.map(async (cardId) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${cardId}/`
        )
        const card = await response.json()
        const frontImage = await fetch(card.sprites.front_default)
        const parsedImage = await frontImage.blob()
        const imageUrl = URL.createObjectURL(parsedImage)

        return { ...card, imageSrc: imageUrl }
      })

      Promise.all([...newCards]).then((values) => {
        setCards(values)
        setStatus('active')
      })
    }

    fetchCards()
  }, [])

  let gameContent = null
  switch (status) {
    case 'loading':
      gameContent = <div className='loading-screen'>Loading...</div>
      break
    case 'active':
      gameContent = (
        <div className='cards'>
          {cards.map((card) => {
            return <Card key={card.name} cardData={card} />
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
