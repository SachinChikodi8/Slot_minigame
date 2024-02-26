import React, { useState } from "react";
import "./App.css";
import SlotM from "./SlotM.jsx";
let curVal;
const items = ["😰", "😨", "🥶", "😷", "🤠"];

const randomizer = () => {
  let randomNumber = [];
  let i;
  for (i = 0; i < 9; i++) {
    randomNumber.push(Math.trunc(Math.random() * 3));
  }
  curVal = randomNumber;
  return curVal;
};

const App = () => {
  const [randomNumber, setRandomNumber] = useState(randomizer());
  return (
    <>
      <h1 className="heading head_design">
        🎰 Welcome To <span className="head_design">Slots Minigame</span> 🎰
      </h1>
      <div className="slots">
        <SlotM
          x={items[randomNumber[0]]}
          y={items[randomNumber[1]]}
          z={items[randomNumber[2]]}
        />
        <hr />
        <SlotM
          x={items[randomNumber[3]]}
          y={items[randomNumber[4]]}
          z={items[randomNumber[5]]}
        />
        <hr />
        <SlotM
          x={items[randomNumber[6]]}
          y={items[randomNumber[7]]}
          z={items[randomNumber[8]]}
        />
      </div>
      <button
        className="btn-class"
        onClick={() => setRandomNumber(randomizer())}
      >
        CLICK TO ROLL
      </button>
      <p className="foot">©2024 Sachin Chikodi All rights reserved</p>
    </>
  );
};

export default App;