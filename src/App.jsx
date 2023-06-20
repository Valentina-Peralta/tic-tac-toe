
import { useState } from 'react'
import './App.css'
import Square from './Components/Square'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)

  const calculateWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i]
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null

  }

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
    console.log(squares[i])
  }


  return (


    <div className="App">
      <h1>tic - tac - toe</h1>
      <div className="board-wrapper">
        <svg className='board' width="420" height="420" viewBox="0 0 555 552" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_2)">
            <path d="M166.002 21C166.002 37.0076 165.066 52.9922 165.002 69C164.94 84.3443 166.587 98.9153 168.057 114.111C171.609 150.812 170.505 188.091 168.446 224.889C167.284 245.664 168.002 266.688 168.002 287.5C168.002 313.199 172.495 339.132 175.002 364.667C177.031 385.343 176.845 405.165 170.446 424.944C169.154 428.939 168.002 430.896 168.002 435.056C168.002 440.69 168.895 446.323 169.002 452C169.365 471.254 170.002 490.634 170.002 510" stroke="black" stroke-width="5" stroke-linecap="round" />
            <path d="M363 25C362.38 31.8248 359.558 38.4844 358.556 45.3333C356.92 56.5126 356.273 67.6004 355.778 78.8889C354.956 97.5968 355.388 116.294 354.778 135C354.225 151.96 352.037 168.69 350.444 185.556C348.559 205.524 350.162 226.062 350 246.111C349.835 266.515 348.51 286.876 349.056 307.333C349.843 336.866 353.619 366.254 355.444 395.722C356.625 414.772 356 433.969 356 453.056C356 472.142 353 490.876 353 510" stroke="black" stroke-width="5" stroke-linecap="round" />
            <path d="M10 362.324C18.1695 361.916 26.1991 360.829 34.2326 359.902C59.2601 357.017 84.2675 355.032 109.623 353.508C146.372 351.298 183.086 348.944 220.015 348.106C241.046 347.629 261.871 348.913 282.875 348.913C305.564 348.913 328.221 349.435 350.913 349.472C394.038 349.543 437.343 348.843 479.739 353.88C491.614 355.291 502.862 357.542 514.431 359.623C519.343 360.507 527.949 361.256 531 364" stroke="black" stroke-width="5" stroke-linecap="round" />
            <path d="M0 178.559C36.2331 177.424 72.4751 176.676 108.767 176.128C145.516 175.574 181.742 176.902 218.323 178.449C281.869 181.135 345.682 180.616 409.284 182.647C443.696 183.746 477.736 186.042 511.971 188.006C518.299 188.368 524.641 189 531 189" stroke="black" stroke-width="5" stroke-linecap="round" />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="555" height="552" fill="white" />
            </clipPath>
          </defs>
        </svg>


        <div className="back-board">
          <div className="row">

            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row">

            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row">


            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
      <p>Coded by Valentina Peralta</p>
    </div>)
}

export default App
