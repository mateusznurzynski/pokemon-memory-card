import { useState } from 'react'
import PropTypes from 'prop-types'

function Card({ cardData, nextTurn }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (!clicked) {
      setClicked(true)
      nextTurn()
    } else {
      nextTurn(true)
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

Card.propTypes = {
  nextTurn: PropTypes.func.isRequired,
  cardData: PropTypes.object.isRequired,
}

export default Card
