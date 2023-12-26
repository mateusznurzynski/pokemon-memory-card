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

export default BackButton
