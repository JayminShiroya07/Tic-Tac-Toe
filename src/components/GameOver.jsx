export default function GameOver({winner , onrestart}){
    return (
        <div id="game-over" className="h-full w-full absolute top-0 left-0 z-1 flex flex-col justify-center items-center">
            <h2>
                Game Over!
            </h2>
            {winner && <p className="mb-10">{winner} Won!</p>}
            {!winner && <p className="mb-10">It's a  draw!</p>}
            <p>
                <button 
                    onClick={onrestart}
                    className="mt-6 animate-bounce">
                    Rematch!
                </button>
            </p>
        </div>
    )
}