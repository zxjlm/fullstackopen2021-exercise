import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const vote_array = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(vote_array);

  const changeSeletedHandler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteHandler = () => {
    console.log(Math.max(...voted));
    let tmp = [...voted];
    tmp[selected] += 1;
    setVoted(tmp);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {voted[selected]} votes</div>
      <button onClick={changeSeletedHandler}>next anecdote</button>
      <button onClick={voteHandler}>vote</button>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[voted.findIndex((elem) => elem === Math.max(...voted))]}
      </div>
      <div>
        has {voted[voted.findIndex((elem) => elem === Math.max(...voted))]}{" "}
        votes
      </div>
    </div>
  );
};

export default App;
