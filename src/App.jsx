import './App.css';
import PageWrapper from './components/PageWrapper';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [gameStatus, setGameStatus] = useState('menu');
  return (
    <>
      {gameStatus === 'menu' ? (
        <PageWrapper>
          <Menu onStatusChange={setGameStatus} />
        </PageWrapper>
      ) : null}
    </>
  );
}

export default App;
