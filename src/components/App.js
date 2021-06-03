import React from 'react';
import People from './People';

function App() {
  return (
    <div className='container'>
      <h1 data-testid='app-title'>Star Wars</h1>
      <People />
    </div>
  );
}

export default App;
