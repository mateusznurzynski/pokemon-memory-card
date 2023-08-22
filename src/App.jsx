import './App.css';
import MenuPage from './components/MenuPage';
import { useState } from 'react';

function App() {
  const [gameStatus, setGameStatus] = useState('menu');
  return (
    <>
      {gameStatus === 'menu' ? (
        <MenuPage onStatusChange={setGameStatus} />
      ) : null}
    </>
  );
}

export default App;
