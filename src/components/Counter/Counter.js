import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)
    const [text, setText] = useState('Text')
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{text}</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Counter