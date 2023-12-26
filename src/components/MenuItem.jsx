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

export default MenuItem
