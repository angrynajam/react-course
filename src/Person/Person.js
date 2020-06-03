import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="card" onClick={props.clicked}>
      <input type="text" value={props.name}></input>
      <p>{props.name}</p>
    </div>
  );
};

export default Person;
