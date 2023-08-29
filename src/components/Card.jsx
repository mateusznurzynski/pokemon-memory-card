import { useState } from 'react'

function Card({ cardData, nextTurn, stopGame }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
    if (!clicked) {
      setClicked(true)
      nextTurn()
    } else {
      stopGame()
    }
  }

  return (
    <div className='card' onClick={handleClick}>
      <div className='card-image'>
        <img src={cardData.imageSrc} alt='' />
      </div>
      <div className='card-name'>{cardData.name}</div>
    </div>
  )
}

export default Card
