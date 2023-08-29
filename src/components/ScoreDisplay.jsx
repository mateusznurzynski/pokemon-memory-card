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

export default ScoreDisplay
