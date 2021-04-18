import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./service/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personToShow, setPersonToShow] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setPersonToShow={setPersonToShow}></Filter>

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}></PersonForm>

      <h2>Numbers</h2>
      <ul>
        {persons
          .filter(
            (person) => person.name.toLowerCase().indexOf(personToShow) !== -1
          )
          .map((person) => (
            <Person
              key={person.name}
              person={person}
              setPersons={setPersons}
              persons={persons}
            ></Person>
          ))}
      </ul>
    </div>
  );
};

export default App;
