import '../styles/MenuPage.css';
import Logo from '../assets/logo.png';
import Menu from './Menu';

function MenuPage({ onStatusChange }) {
  return (
    <div className='menu-container'>
      <div className='logo-container'>
        <img src={Logo} alt='Pokemon' />
        <h1>Memory Card Game</h1>
      </div>
      <Menu onStatusChange={onStatusChange} />
    </div>
  );
}

export default MenuPage;
