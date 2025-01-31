export default function Logs({ turns }) {
const isMobileOrTablet = window.innerWidth <= 768;
const lastThreeTurns = isMobileOrTablet ? turns.slice(0, 2) : turns.slice(0, 4);


return (
    <>
        {lastThreeTurns.map((turn) => (
            <li
                key={`${turn.square.row}${turn.square.col}`}
                className="bg-indigo-400 log-item mt-2" 
            >
                {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
        ))}
    </>
);
}
