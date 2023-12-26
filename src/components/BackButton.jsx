import PropTypes from 'prop-types'

function BackButton({ gameStatus, setGameStatus }) {
  return (
    <button
      className={gameStatus === 'game' ? 'back-button-fixed' : 'back-button'}
      onClick={() => {
        setGameStatus('menu')
      }}
    >
      Back
    </button>
  )
}

BackButton.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  setGameStatus: PropTypes.func.isRequired,
}

export default BackButton
