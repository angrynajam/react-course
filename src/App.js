import React, { Component } from 'react';

import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
      { name: 'Najam', id: 1 },
      { name: 'Hizbi', id: 2 },
      { name: 'Ash', id: 3 },
    ],
    showPersons: true,
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show,
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.Persons];
    persons.splice(index, 1);
    this.setState({
      Persons: persons,
    });
  };

  render() {
    let Persons = [];
    if (this.state.showPersons) {
      {
        Persons = this.state.Persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              key={person.id}
              clicked={() => this.deletePersonHandler(index)}
            />
          );
        });
      }
    }

    return (
      <div>
        <button onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? 'Hide Persons' : 'Show Persons'}
        </button>
        <div>{Persons}</div>
      </div>
    );
  }
}

export default App;
