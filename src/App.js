import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personToShow, setPersonToShow] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setPersonToShow(response.data);
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
        {personToShow.map((person) => (
          <Person
            key={person.name}
            name={person.name}
            number={person.number}
          ></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
