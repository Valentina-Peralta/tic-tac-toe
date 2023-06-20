
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          pattern: winningPatterns[i]
        }
      }
    }
    return null
  }

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const newSquares = [...squares]
    newSquares[i] = isX ? 'X' : 'O'
    setSquares(newSquares)
    setIsX(!isX)
  }

  const winnerInfo = calculateWinner(squares)
  let status
  let winningPattern
  if (winnerInfo) {
    status = `Winner: ${winnerInfo.winner}`
    winningPattern = winnerInfo.pattern
    console.log(winningPattern)
  } else {
    status = `Next player: ${isX ? 'X' : 'O'}`
  }

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
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
        {JSON.stringify(winningPattern) === JSON.stringify([0, 4, 8]) ? (
          <svg className='diag-1' width="420" height="420" viewBox="0 0 600 528" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71 77C75.471 77 79.7261 80.5539 83.5556 82.5C91.7779 86.6786 99.5625 91.5734 107.889 95.5556C118.988 100.864 130.943 107.758 140.056 116.111C155.822 130.564 173.797 142.136 191.278 154.389C224.678 177.8 252.852 207.581 283.778 233.889C330.051 273.253 382.259 306.955 422.5 352.944C426.241 357.22 430.805 360.672 434.556 365C448.427 381.006 461.929 397.454 474.5 414.5C481.623 424.158 487.381 434.767 494.556 444.333C495.858 446.07 496 446.914 496 449" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
          </svg>
        ) : JSON.stringify(winningPattern) === JSON.stringify([2, 4, 6]) ? (
          <svg className='diag-2' width="420" height="420" viewBox="0 0 550 528" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M464 73C442.769 94.2313 421.36 115.234 403.222 139C373.203 178.336 344.79 218.91 315 258.444C302.773 274.67 289.886 290.456 276.667 305.889C255.117 331.048 232.062 353.697 207.778 376.222C176.416 405.311 143.168 438.827 103.222 456.222C96.3666 459.208 89.9446 461.826 83.3333 465.444C67.048 474.359 53.3523 486.765 38 497" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
          </svg>

        ) : JSON.stringify(winningPattern) === JSON.stringify([0, 3, 6]) ? (
          <svg className='vert-1' width="420" height="420" viewBox="0 0 550 528" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M106 60C106 99.0556 106 138.111 106 177.167C106 197.895 106.388 218.666 105.889 239.389C105.44 258.003 103.929 276.464 104 295.111C104.104 322.158 106.083 348.416 111.389 374.944C112.765 381.827 116 389.986 116 397C116 402.942 117.184 409.881 119 415.556C119.738 417.863 122 421.33 122 423.556C122 426.331 123.594 429.839 124.222 432.667C126.124 441.224 128.268 449.214 129 458" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
          </svg>

        )
          : JSON.stringify(winningPattern) === JSON.stringify([1, 4, 7]) ? (
            <svg className='vert-2' width="420" height="420" viewBox="0 0 550 528" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106 60C106 99.0556 106 138.111 106 177.167C106 197.895 106.388 218.666 105.889 239.389C105.44 258.003 103.929 276.464 104 295.111C104.104 322.158 106.083 348.416 111.389 374.944C112.765 381.827 116 389.986 116 397C116 402.942 117.184 409.881 119 415.556C119.738 417.863 122 421.33 122 423.556C122 426.331 123.594 429.839 124.222 432.667C126.124 441.224 128.268 449.214 129 458" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
            </svg>

          ) : JSON.stringify(winningPattern) === JSON.stringify([2, 5, 8]) ? (
            <svg className='vert-3' width="420" height="420" viewBox="0 0 550 528" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106 60C106 99.0556 106 138.111 106 177.167C106 197.895 106.388 218.666 105.889 239.389C105.44 258.003 103.929 276.464 104 295.111C104.104 322.158 106.083 348.416 111.389 374.944C112.765 381.827 116 389.986 116 397C116 402.942 117.184 409.881 119 415.556C119.738 417.863 122 421.33 122 423.556C122 426.331 123.594 429.839 124.222 432.667C126.124 441.224 128.268 449.214 129 458" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
            </svg>

          )
            : JSON.stringify(winningPattern) === JSON.stringify([0, 1, 2]) ? (
              <svg className='hor-1' width="420" height="420" viewBox="0 0 550 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68 103C100.116 103 131.783 104 163.889 101.222C180.328 99.8001 196.757 100.385 213.222 99.7778C232.294 99.0743 251.228 97.836 270.333 98.0556C298.616 98.3806 326.807 100 355.111 100C377.176 100 399.632 101.629 421.333 105.778C443.224 109.963 463.29 121 486 121" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
              </svg>)

              : JSON.stringify(winningPattern) === JSON.stringify([3, 4, 5]) ? (
                <svg className='hor-2' width="420" height="420" viewBox="0 0 550 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M68 103C100.116 103 131.783 104 163.889 101.222C180.328 99.8001 196.757 100.385 213.222 99.7778C232.294 99.0743 251.228 97.836 270.333 98.0556C298.616 98.3806 326.807 100 355.111 100C377.176 100 399.632 101.629 421.333 105.778C443.224 109.963 463.29 121 486 121" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
                </svg>)
                : JSON.stringify(winningPattern) === JSON.stringify([6, 7, 8]) ? (
                  <svg className='hor-3' width="420" height="420" viewBox="0 0 550 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68 103C100.116 103 131.783 104 163.889 101.222C180.328 99.8001 196.757 100.385 213.222 99.7778C232.294 99.0743 251.228 97.836 270.333 98.0556C298.616 98.3806 326.807 100 355.111 100C377.176 100 399.632 101.629 421.333 105.778C443.224 109.963 463.29 121 486 121" stroke={status.includes('X') ? '#c20404' : '#0A0262'} stroke-width="7" stroke-linecap="round" />
                  </svg>)
                  : null
        }



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
      <h2 className={status.includes('Winner') ? 'status alert' : 'status'} style={status.includes('X') ? { color: '#c20404' } : { color: '#0A0262' }}>{status}</h2>
      <svg className='restart' onClick={handleRestart} width="40" height="40" viewBox="0 0 149 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49 11C58.8868 10.4796 68.6041 7.03253 78.7222 6.5C87.5879 6.03338 99.204 4.05668 108 6.5C122.47 10.5193 128.844 27.885 131.556 41.0556C134.035 53.0979 133.155 65.9476 133 78.2222C132.787 95.081 124.463 109.318 112 120C98.634 131.457 84.6639 141 66.5556 141C60.6477 141 53.0844 140.315 47.5 138.333C42.2657 136.476 38.064 131.901 33.4444 128.944C14.2369 116.652 15 84.3387 15 64.3889C15 57.4817 15.0138 51.1894 16.5556 44.4444C17.1097 42.0201 16.6823 36.9605 19 35.2222C20.0848 34.4086 25 27.3344 25 26C25 25.7785 17.0093 29.6615 15.5 30.5C12.5803 32.1221 2.7711 34 6.11111 34C9.21959 34 14.733 33.0325 17.2222 31.2222C19.2169 29.7716 23.4991 27.8529 26 28C30.2317 28.2489 33 41.7331 33 45" stroke="#035a03" stroke-width="14" stroke-linecap="round" />
      </svg>

      <p>Coded by Valentina Peralta</p>
    </div>)
}

export default App
