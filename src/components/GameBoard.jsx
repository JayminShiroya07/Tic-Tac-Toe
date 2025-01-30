export default function GameBoard({ onSelectSquare, board }) {

  return (
    <ol className="flex flex-col h-full w-full gap-4 p-0 md:px-25 md:py-8">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="w-full h-1/3">
          <ol className="flex w-full h-full gap-4">
            {row.map((playerSymbol, colIndex) => (
              <li
                key={colIndex}
                className="w-1/3 bg-amber-200  flex items-center justify-center rounded-md"
                onClick={() => {
                  playerSymbol === null
                    ? onSelectSquare(rowIndex, colIndex)
                    : "";
                }}
              >
                <button className="text-2xl md:text-7xl font-bold ">
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
