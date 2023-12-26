import '../styles/Instructions.css'
import PropTypes from 'prop-types'

function Instructions({ children }) {
  return (
    <div className='instructions'>
      <h2>How to play:</h2>
      <ul>
        <li>Click every pokemon exactly once.</li>
        <li>
          Every time you click, you get a point, and the board is shuffled.
        </li>
        <li>If you click a pokemon for the second time, you lose.</li>
      </ul>
      <div className='instructions-controls'>{children}</div>
    </div>
  )
}

Instructions.propTypes = {
  children: PropTypes.node,
}

export default Instructions
