import { useState, useEffect, useRef } from 'react'
import '../styles/Game.css'
import getRandomInt from '../utilities/RandomInt'
import shuffleArray from '../utilities/ArrayShuffle'
import Card from './Card'
import ScoreDisplay from './ScoreDisplay'

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

function Game({ setGameStatus, highScore, setHighScore }) {
  const cardIds = useRef(getCardIds(NUMBER_OF_CARDS))
  const [cards, setCards] = useState([])
  const [status, setStatus] = useState('loading')
  const [score, setScore] = useState(0)

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

  const shuffleCards = () => {
    const shuffledArray = shuffleArray(cards)
    setCards(shuffledArray)
  }

  const nextTurn = () => {
    setScore(score + 1)
    shuffleCards()
  }

  const stopGame = () => {
    if (score > highScore) {
      setHighScore(score)
    }
    setGameStatus('menu')
  }

  let gameContent = null
  switch (status) {
    case 'loading':
      gameContent = <div className='loading-screen'>Loading...</div>
      break
    case 'active':
      gameContent = (
        <div className='game-content'>
          <ScoreDisplay highScore={highScore} score={score} />
          <div className='cards'>
            {cards.map((card) => {
              return (
                <Card
                  key={card.name}
                  cardData={card}
                  nextTurn={nextTurn}
                  stopGame={stopGame}
                />
              )
            })}
          </div>
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
