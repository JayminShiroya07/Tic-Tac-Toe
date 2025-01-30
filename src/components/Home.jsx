import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Players";
import Logs from "./Logs";

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;

}


export default function Home() {
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = derivedActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {

      const currentPlayer = derivedActivePlayer(prevTurns);

      const updateTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updateTurns;
    });
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
            <div className="h-fit w-full p-2 md:p-6 md:w-1/2 bg-indigo-500 rounded-md shadow-xl flex flex-row">
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
                num="2"
              />
            </div>
            
            <div className="h-4/5 w-full md:w-1/2  mt-2 bg-indigo-500 flex flex-col gap-4 
            justify-center items-center rounded-md shadow-xl p-10 md:p-0">
              <GameBoard
                onSelectSquare={handleSelectSquare}
                turns={gameTurns}
              />
            </div>
            <ol className="h-1/5 w-full md:flex justify-center items-center text-center md:w-2/3 mt-2 gap-4 sm:hidden">
              <Logs turns={gameTurns} />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}