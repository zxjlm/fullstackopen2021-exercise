import React from "react";

const Feedback = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

export default Feedback;
