import React from 'react';

import Styles from './Person.module.css';
//import './Person.css';

const person = (props) => {
  return (
    <div className={Styles.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
