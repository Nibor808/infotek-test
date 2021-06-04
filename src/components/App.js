import React from 'react';
import People from './People';
import Films from './Films';

function App() {
  return (
    <div className='container'>
      <header>
        <h1 data-testid='app-title'>Star Wars</h1>
      </header>

      <People />
      <Films />
    </div>
  );
}

export default App;
