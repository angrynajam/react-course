import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello Najam</h1>
      <Person name="Najam" age="19">
        <h5>My Hobby is programming</h5>
      </Person>
    </div>
  );
}

export default App;
