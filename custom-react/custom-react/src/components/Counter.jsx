import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [limit, setLimit] = useState('');
    function increaseCounter() {
        if (counter >= 10) {
            setLimit(`Maximum Limit Reached at : ${counter}`)
        } else {
            setCounter(counter + 1);
            setLimit('')
        }
    }
    function decreaseCounter() {
        if (counter <= 0) {
            setLimit(`Minimum Limit Reached at : ${counter}`)
        } else {
            setCounter(counter - 1);
            setLimit('')
        }
    }
    function refreshWindow() {
        // if counter is not 0 , it will not refresh
        if (counter !== 0) {
            window.location.reload();
        }
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Counter App</h1>
            <div className="main">
                <button onClick={decreaseCounter}>-</button>
                <h1 id='display'>{counter}</h1>
                <button onClick={increaseCounter}>+</button>
                <button id='refreshBtn' onClick={refreshWindow}>RESET</button>
            </div>
            <div className="limit">
                <h2 style={{ textAlign: 'center' }}>{limit}</h2>
            </div>

        </>
    )
}

export default Counter