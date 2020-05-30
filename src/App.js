import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Najam', age: 19 },
      { name: 'Hizbi', age: 15 },
      { name: 'Ash', age: 18 },
    ],
  });

  const [otherState, setOtherState] = useState('some other state');

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'AngryNajam', age: 19 },
        { name: 'Hizbi', age: 15 },
        { name: 'Ash', age: 19 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello Najam</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
