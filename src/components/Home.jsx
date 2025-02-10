import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Players";
import Logs from "./Logs";
import { WINNING_COMBINATIONS as winComb } from './Winning_combination';
import GameOver from "./GameOver";

const PLAYER = {
  X: "player 1",
  O: "player 2"
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;

}

function deriveWinner(gameBoard,players){
  let winner;

  for(const combination of winComb){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for(const turn of gameTurns){

      const {square , player} = turn;
      const {row,col} = square;

      gameBoard[row][col] = player;

      console.log("win")
  }

  return gameBoard;
}

export default function Home() {

  const [players,setPlayers] = useState(PLAYER);
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard,players)
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleResetGame(){
    setGameTurns([]);
  }

  function handelPlayerNameChange(symbole,newName){
    setPlayers( prvPLayer => {
      return {
        ...prvPLayer,
        [symbole] : newName
      };
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
                Name={PLAYER.X}
                Symbole="X"
                button={"button"}
                isActive={activePlayer === "X"}
                num="1"
                onChangeName = {handelPlayerNameChange}
              />
              <div className="w-[3px] bg-amber-300"></div>
              <Player
                Name={PLAYER.O}
                Symbole="O"
                button={"button"}
                isActive={activePlayer === "O"}
                num="2"
                onChangeName = {handelPlayerNameChange}
              />
            </div>
            
            <div className="h-4/5 w-full md:w-1/2  mt-2 bg-indigo-500 flex flex-col gap-4 
            justify-center items-center rounded-md shadow-xl p-10 md:p-0">
              {(winner || hasDraw) && <GameOver winner={winner} onrestart={handleResetGame}/>}
              <GameBoard
                onSelectSquare={handleSelectSquare}
                board={gameBoard}
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