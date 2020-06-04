import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="card">
      <input type="text" value={props.name} onChange={props.changed} />
      <p>{props.name}</p>
    </div>
  );
};

export default Person;
