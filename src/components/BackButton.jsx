function BackButton({ setGameStatus }) {
  return (
    <button
      className='back-button'
      onClick={() => {
        setGameStatus('menu')
      }}
    >
      Back
    </button>
  )
}

export default BackButton
