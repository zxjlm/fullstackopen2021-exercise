import React, { useState } from "react";
import Header from "./Header";
import Feedback from "./Feedback";
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
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
