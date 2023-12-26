import Logo from '../assets/logo.png'
import PropTypes from 'prop-types'

function MenuPage({ children }) {
  return (
    <div className='page-container'>
      <div className='logo-container'>
        <img src={Logo} alt='Pokemon' />
        <h1>Memory Card Game</h1>
      </div>
      {children}
    </div>
  )
}

MenuPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuPage
