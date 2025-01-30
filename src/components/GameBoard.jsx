import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard( { onSelectSquare } ) {
//   const [GameBoard,setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex){
//     setGameBoard((prevGameBoard) => {
//         const updatedBoard = [...prevGameBoard.map( innerArray => [...innerArray])];
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedBoard;
//     });

//     onSelectSquare();
//   }
  
    return (

    <ol className="flex flex-col h-full w-full gap-4">
      {GameBoard.map((row, rowIndex) => (
        <li key={rowIndex} className=" w-full h-1/3">
          <ol className="flex w-full h-full gap-4">
          {row.map((playerSymbol, colIndex) => (
            <li
              key={colIndex}
              className="w-1/3 bg-amber-200  flex items-center justify-center rounded-md"
                onClick={onSelectSquare}
            >
              <button 
              className="text-8xl font-bold ">{playerSymbol}</button>
            </li>
          ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
