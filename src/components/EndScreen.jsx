import '../styles/Game.css'
import PropTypes from 'prop-types'

function EndScreen({ score, highScore, isVictory, children }) {
  return (
    <div className='end-screen'>
      <h2>{isVictory ? 'You won!' : 'Game over!'}</h2>
      <p>Your score: {score}</p>
      <p>High score: {highScore}</p>
      <div className='end-screen-controls'>{children}</div>
    </div>
  )
}

EndScreen.propTypes = {
  children: PropTypes.node,
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
  isVictory: PropTypes.bool,
}

export default EndScreen
