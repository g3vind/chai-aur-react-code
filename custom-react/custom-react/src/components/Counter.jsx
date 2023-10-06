import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    function increaseCounter() {
        setCounter(counter + 1)
    }
    function decreaseCounter() {
        setCounter(counter - 1)
    }
    function refreshWindow() {
        window.location.reload();
    }
    return (
        <>
            <div className="main">
                <h1 id='display'>{counter}</h1>
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
                <button id='refreshBtn' onClick={refreshWindow}>RESET</button>
            </div>

        </>
    )
}

export default Counter