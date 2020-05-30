import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Najam', age: 19 },
      { name: 'Hizbi', age: 15 },
      { name: 'Ash', age: 18 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'AngryNajam', age: 19 },
        { name: 'Hizbi', age: 15 },
        { name: 'Ash', age: 19 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Najam</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
