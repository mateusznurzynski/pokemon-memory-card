import Logo from '../assets/logo.png';

function MenuPage({ children }) {
  return (
    <div className='page-container'>
      <div className='logo-container'>
        <img src={Logo} alt='Pokemon' />
        <h1>Memory Card Game</h1>
      </div>
      {children}
    </div>
  );
}

export default MenuPage;
