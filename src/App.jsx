import './App.css';
import PageWrapper from './components/PageWrapper';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [gameStatus, setGameStatus] = useState('menu');
  return (
    <>
      <PageWrapper>
        {gameStatus === 'menu' ? <Menu onStatusChange={setGameStatus} /> : null}
      </PageWrapper>
    </>
  );
}

export default App;
