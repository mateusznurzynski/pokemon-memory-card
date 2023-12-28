import PropTypes from 'prop-types'

function BackButton({ gameStatus, setGameStatus, buttonContent }) {
  return (
    <button
      className={gameStatus === 'game' ? 'back-button-fixed' : 'back-button'}
      onClick={() => {
        setGameStatus('menu')
      }}
    >
      {buttonContent}
    </button>
  )
}

BackButton.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  setGameStatus: PropTypes.func.isRequired,
  buttonContent: PropTypes.node.isRequired,
}

export default BackButton
