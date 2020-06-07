import React from 'react';
import Styles from './Cockpit.module.css';

const cockpit = (props) => {
  const classes = [];
  let btnClasses = Styles.button;

  if (props.showPersons) {
    btnClasses = btnClasses + ' ' + Styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(Styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(Styles.bold);
  }
  return (
    <div className={Styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
