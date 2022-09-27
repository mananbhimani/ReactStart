import React from 'react'
import { useState, useEffect } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count == 1)
        {
            document.write('5');
        }
        // document.write('hhhhhhhh');
},[count]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
