import PropTypes from 'prop-types'

function ScoreDisplay({ score, highScore }) {
  return (
    <div className='score-display'>
      {typeof score === 'number' ? (
        <div className='score'>Score: {score}</div>
      ) : null}
      {typeof highScore === 'number' ? (
        <div className='high-score'>High score: {highScore}</div>
      ) : null}
    </div>
  )
}

ScoreDisplay.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number.isRequired,
}

export default ScoreDisplay
