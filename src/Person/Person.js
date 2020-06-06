import React from 'react';

import Radium, { StyleRoot } from 'radium';

import './Person.css';

const person = (props) => {
  const style = {
    '@media only screen and (min-width: 600px)': {
      width: '30%',
    },
  };

  return (
    <StyleRoot>
      <div style={style} className="Person">
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </StyleRoot>
  );
};

export default person;
