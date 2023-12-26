import PropTypes from 'prop-types'

function MenuItem({ text, onClick, iconElement }) {
  return (
    <div onClick={onClick} className='menu-item'>
      <div className='menu-item-wrapper'>
        {iconElement || null}
        <div className='menu-item-text'>{text}</div>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconElement: PropTypes.node,
}

export default MenuItem
