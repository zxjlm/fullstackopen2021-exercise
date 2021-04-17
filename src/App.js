import React, { useState } from "react";
import Header from "./Header";
import Feedback from "./Feedback";
import Content from "./Content";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedbackClick = () => {
    setGood(good + 1);
  };

  const neutralFeedbackClick = () => {
    setNeutral(neutral + 1);
  };

  const badFeedbackClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header text={"give feedback"}></Header>
      <Feedback clickHandler={goodFeedbackClick} text={"good"}></Feedback>
      <Feedback clickHandler={neutralFeedbackClick} text={"neutral"}></Feedback>
      <Feedback clickHandler={badFeedbackClick} text={"bad"}></Feedback>
      <Header text="Statistics"></Header>
      <Content text="good" count={good}></Content>
      <Content text="neutral" count={neutral}></Content>
      <Content text="bad" count={bad}></Content>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
