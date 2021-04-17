import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content part={part1}></Content>
      <Content part={part2}></Content>
      <Content part={part3}></Content>

      <Total total_exer={part1.exercises + part2.exercises + part3.exercises}>
        Number of exercises
      </Total>
    </div>
  );
};

export default App;
