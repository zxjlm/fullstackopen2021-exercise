import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
      ))}
    </ul>
  );
};

export default Content;
