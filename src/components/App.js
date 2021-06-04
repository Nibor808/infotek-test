import React from 'react';
import People from './People';
import Films from './Films';
import { useSelector } from 'react-redux';

function App() {
  const character = useSelector(state => state.films.character);

  return (
    <div className='container'>
      <header>
        <h1 data-testid='app-title'>Star Wars</h1>
      </header>

      <People />
      {Object.keys(character).length ? <Films character={character} /> : null}
    </div>
  );
}

export default App;
