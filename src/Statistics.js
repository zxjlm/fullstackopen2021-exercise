import React from "react";
import Header from "./Header";

const Statistic = ({ text, value }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

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
      <Statistic text="good" value={good}></Statistic>
      <Statistic text="neutral" value={neutral}></Statistic>
      <Statistic text="bad" value={bad}></Statistic>
      <Statistic text="all" value={good + bad + neutral}></Statistic>
      <Statistic text="average" value={(good + bad + neutral) / 3}></Statistic>
      <Statistic
        text="positive"
        value={(good / (good + bad + neutral)) * 100 + "%"}
      ></Statistic>
    </div>
  );
};

export default Statistics;
