import React from "react";
import Content from "./Content";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <Content text="all" count={good + bad + neutral}></Content>
      <Content text="average" count={(good + bad + neutral) / 3}></Content>
      <Content text="positive" count={good / (good + bad + neutral)}></Content>
    </div>
  );
};

export default Statistics;
