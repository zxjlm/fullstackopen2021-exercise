import React from "react";
import Content from "./Content";
import Header from "./Header";

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <Header text="Statistics"></Header>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <Header text="Statistics"></Header>
      <Content text="good" count={good}></Content>
      <Content text="neutral" count={neutral}></Content>
      <Content text="bad" count={bad}></Content>
      <Content text="all" count={good + bad + neutral}></Content>
      <Content text="average" count={(good + bad + neutral) / 3}></Content>
      <Content text="positive" count={good / (good + bad + neutral)}></Content>
    </div>
  );
};

export default Statistics;
