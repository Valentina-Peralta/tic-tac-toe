import React from 'react'

function Square({ value, onClick }) {
    return (
        <button
            className='square'
            onClick={onClick}>

            {value === 'X' ? <svg className='x' width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89 38C88.4279 44.0067 84.3626 49.7552 81.5556 54.8889C73.1335 70.2914 64.5771 85.7182 55.5556 100.778C52.669 105.596 40.8502 132.49 41.2778 111.111C41.6199 94.0066 47.0648 76.5192 53.5556 60.8333C56.1467 54.5714 57.72 55.1013 62.7222 59.3889C73.417 68.5558 83.0486 79.0486 93 89" stroke="#c20404" stroke-width="8" stroke-linecap="round" />
            </svg> : value === 'O' ? <svg className='o' width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56 38C48.1992 50.699 41.6315 64.3315 37.4444 78.6667C35.9873 83.6556 34.4437 89.1894 35.2222 94.4444C37.1113 107.196 53.767 105.448 62.6111 100.333C74.8241 93.2704 83.185 79.4727 86.1667 66C87.6122 59.4682 89.6944 49.3262 87.8889 42.5556C85.9626 35.332 75.3699 42.6301 73 45" stroke="#0A0262" stroke-width="8" stroke-linecap="round" />
            </svg> : null
            }
        </button>
    )
}

export default Square