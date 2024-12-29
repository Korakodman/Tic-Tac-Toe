import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function Squere({ value, onSquareClick }) {
  return (
    <button
      className={`w-[75px] h-[75px] rounded-sm ${
        value === "X" ? "text-red-500" : value === "O" ? "text-blue-500" : ""
      }`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function App() {
  const [xIsNext, SetxIsnext] = useState(true);
  const [squere, SetSquere] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squere[i] || caculateWinner(squere)) {
      return;
    }

    const nextSquere = squere.slice();
    if (xIsNext) {
      nextSquere[i] = "X";
    } else {
      nextSquere[i] = "O";
    }
    SetSquere(nextSquere);
    SetxIsnext(!xIsNext);
  }

  const winner = caculateWinner(squere);
  const reset = () => {
    SetSquere(Array(9).fill(null));
  };

  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else if (!winner && !squere.some((s) => s === null)) {
    status = "No one Win";
  } else {
    status = "Next Player is  : " + (xIsNext ? "X" : "O");
  }

  function caculateWinner(squere) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squere[a] && squere[a] === squere[b] && squere[a] === squere[c]) {
        return squere[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="grid justify-center mt-48">
        <h1 className=" text-2xl">{status}</h1>
        <br></br>

        <div className=" grid grid-cols-3 ">
          <Squere value={squere[0]} onSquareClick={() => handleClick(0)} />
          <Squere value={squere[1]} onSquareClick={() => handleClick(1)} />
          <Squere value={squere[2]} onSquareClick={() => handleClick(2)} />
          <Squere value={squere[3]} onSquareClick={() => handleClick(3)} />
          <Squere value={squere[4]} onSquareClick={() => handleClick(4)} />
          <Squere value={squere[5]} onSquareClick={() => handleClick(5)} />
          <Squere value={squere[6]} onSquareClick={() => handleClick(6)} />
          <Squere value={squere[7]} onSquareClick={() => handleClick(7)} />
          <Squere value={squere[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <br></br>
      <button
        className=" text-xl hover:bg-blue-500 bg-blue-200 shadow-md rounded-md p-2 m-2"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className=" text-xl hover:bg-orange-500 bg-orange-200 shadow-md rounded-md p-2 m-2"
        onClick={() => SetxIsnext(true)}
      >
        Player X
      </button>
      <button
        className=" text-xl hover:bg-red-500 bg-red-200 shadow-md rounded-md p-2 m-2"
        onClick={() => SetxIsnext(false)}
      >
        Player O
      </button>
    </>
  );
}

export default App;
