import React from "react";

const Filter = ({ persons, setPersonToShow }) => {
  // const [searchContent, setSearchContent] = useState("");

  const handleSearcherChane = (event) => {
    // let result = [];
    // persons.forEach((person) => {
    //   if (person.name.toLowerCase().indexOf(enevt.target.value) !== -1) {
    //     result.push(person);
    //   }
    // });
    // setPersonToShow(result);
    setPersonToShow(event.target.value);
  };

  return (
    <div>
      <label htmlFor="phonebook-searcher">filter shown with </label>
      <input id="phonebook-searcher" onChange={handleSearcherChane}></input>
    </div>
  );
};

export default Filter;
