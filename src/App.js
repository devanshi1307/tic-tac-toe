import { useState } from "react";

function Square({value,onSquareClick}){
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  ); 
}
export default function Board(){
  const[xIsNext, setXIsNext] = useState(true);
  const[squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: "+ winner;
  }else{
    status = "Next Player" + (xIsNext? "X":"O");
  }



  function handelClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i]="X";
    }else{
      nextSquares[i]="O";
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
  <>
  <div className="status">{status}</div>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={()=> handelClick(0)}/>
    <Square value={squares[1]} onSquareClick={()=> handelClick(1)}/>
    <Square value={squares[2]} onSquareClick={()=> handelClick(2)}/>
   </div>
  <div className="board-row">
    <Square value={squares[3]} onSquareClick={()=> handelClick(3)}/>
    <Square value={squares[4]} onSquareClick={()=> handelClick(4)}/>
    <Square value={squares[5]} onSquareClick={()=> handelClick(5)}/>
  </div>
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={()=> handelClick(6)}/>
    <Square value={squares[7]} onSquareClick={()=> handelClick(7)}/>
    <Square value={squares[8]} onSquareClick={()=> handelClick(8)}/>
  </div>

  </>
  );
}
function calculateWinner(squares){
  const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
