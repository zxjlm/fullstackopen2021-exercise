import React from "react";

const Multi = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <li>{country.name}</li>
      ))}
    </div>
  );
};

export default Multi;
