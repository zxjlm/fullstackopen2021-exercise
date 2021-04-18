import React from "react";

const Filter = ({ setSearchText }) => {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="seatch-panel">find countries</label>
      <input onChange={handleSearchChange}></input>
    </div>
  );
};

export default Filter;
