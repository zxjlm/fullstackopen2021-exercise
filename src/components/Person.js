import React from "react";
import personService from "../service/persons";

const Person = ({ person, setPersons, persons }) => {
  const clickDeleteHandler = (event) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(person.id).then((response) => {
        setPersons([...persons].filter((elem) => elem.id !== person.id));
      });
    }
  };

  return (
    <li>
      {person.name} {person.number}{" "}
      <button onClick={clickDeleteHandler}>delete</button>
    </li>
  );
};

export default Person;
