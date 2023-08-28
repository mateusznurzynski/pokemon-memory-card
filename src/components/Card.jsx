function Card({ cardData }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={cardData.imageSrc} alt='' />
      </div>
      <div className='card-name'>{cardData.name}</div>
    </div>
  )
}

export default Card
