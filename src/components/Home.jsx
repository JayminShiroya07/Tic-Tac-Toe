import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Players";

export default function Home() {
  const [gameTurns, setGameTurns ] = useState([]);
  const [activePlayer, setActivePlayer] = useState("O");

  function handleSelectSquare(rowIndex, colIndex ) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      
      if(prevTurn.length > 0 && prevTurn[0] === 'X')
        currentPlayer = 'O';

      const updateTurns = [
        {square : {
          row : rowIndex,
          col : colIndex
          },
          player : currentPlayer,
          ...prevTurns
        }
      ];

      return updateTurns;
    })


  }

  return (
    <>
      <div className="w-screen h-screen bg-indigo-500 m-0 p-0">
        <div className="w-full h-1/19 bg-indigo-200 shadow-lg flex items-center justify-center">
          <h1 className="text-black text-center text-2xl md:text-3xl font-semibold">
            Tic Tac Toe
          </h1>
        </div>

        <div className="h-18/19 w-full p-4">
          <div className="w-full h-full bg-indigo-800 rounded-md flex justify-start items-center flex-col p-4">
            {/* player bar */}
            <div className="h-1/4 w-full p-4 md:w-1/2 bg-indigo-500 rounded-md shadow-xl flex flex-row">
              <Player
                Name="jaymeen"
                Symbole="X"
                button={"button"}
                num="1"
                isActive={activePlayer === "X"}
              />
              <div className="w-[3px] bg-amber-300"></div>
              <Player 
                Name="jaymeen" 
                Symbole="O" 
                button={"button"} 
                isActive={activePlayer === "O"}
                num="2" />
            </div>
            <div className="h-3/4 w-full md:w-1/2  mt-2 bg-indigo-500 flex flex-col gap-4 justify-center items-center rounded-md shadow-xl p-20">
              <GameBoard 
                onSelectSquare={handleSelectSquare} 
                turns={gameTurns} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
