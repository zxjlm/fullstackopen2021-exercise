import React, { useState } from "react";
import personService from "../service/persons";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    let tmp_person = persons.find((person) => person.name === newName);
    if (tmp_person) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        tmp_person.name = newName;
        tmp_person.number = newNumber;
        personService.updatePerson(tmp_person).then((response) => {
          setPersons(
            [...persons]
              .filter((elem) => elem.id !== tmp_person.id)
              .concat(tmp_person)
          );
        });
      }
    } else {
      personService
        .createPerson({ name: newName, number: newNumber })
        .then((response) => {
          setPersons(persons.concat(response.data));
        });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
