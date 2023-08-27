import './App.css';
import PageWrapper from './components/PageWrapper';
import Menu from './components/Menu';
import Game from './components/Game';
import { useState } from 'react';

function App() {
  const [gameStatus, setGameStatus] = useState('menu');
  let currentContent = null;
  switch (gameStatus) {
    case 'menu':
      currentContent = <Menu onStatusChange={setGameStatus} />;
      break;
    case 'game':
      currentContent = <Game />;
      break;
    default:
      currentContent = null;
      break;
  }
  return (
    <>
      <PageWrapper>{currentContent}</PageWrapper>
    </>
  );
}

export default App;
