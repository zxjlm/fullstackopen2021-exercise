import React, { useState } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [personToShow, setPersonToShow] = useState(persons);

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
