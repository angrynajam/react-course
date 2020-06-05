import React, { Component } from 'react';

import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
      { name: 'Najam', id: 1 },
      { name: 'Hizbi', id: 2 },
      { name: 'Ash', id: 3 },
    ],
  };

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.Persons];

    const index = persons.findIndex((p) => id === p.id);

    persons[index].name = event.target.value;

    this.setState({
      Persons: persons,
    });
  };

  render() {
    return (
      <div>
        {this.state.Persons.map((p) => {
          return (
            <Person
              name={p.name}
              key={p.id}
              changed={(event) => this.nameChangeHandler(event, p.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
