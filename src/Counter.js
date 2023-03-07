import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)
    function increaseCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increaseCount}>Increase</button>
            <p>I have {count} dogs!</p>
        </div>
    )
}